export const API_GATEWAY_BASE_URL = 'https://vuelos-api-gateway-wc.onrender.com';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  token?: string;
};

export type City = {
  id: string;
  name: string;
  countryId?: string;
  iataCode?: string | null;
  country?: {
    id?: string;
    name?: string;
    isoCode?: string;
    phoneCode?: string;
    currencyCode?: string;
  };
};

export type RegisterPayload = {
  firstName: string;
  secondName?: string;
  firstLastName: string;
  secondLastName?: string;
  email: string;
  mainAddress: string;
  phone?: string;
  cityId: string;
  password: string;
};

function unwrapArray<T>(json: any): T[] {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.items)) return json.items;
  if (Array.isArray(json?.result)) return json.result;
  return [];
}

function pickToken(json: any): string | undefined {
  return (
    json?.token ??
    json?.accessToken ??
    json?.access_token ??
    json?.data?.token ??
    json?.data?.accessToken ??
    json?.data?.access_token ??
    json?.data?.session?.accessToken ??
    json?.data?.session?.access_token ??
    json?.user?.token
  );
}

function cleanOptional(value?: string) {
  const text = String(value ?? '').trim();
  return text.length ? text : undefined;
}

function pickUser(json: any, fallbackEmail: string): AuthUser {
  const data = json?.data ?? json;
  const user = data?.user ?? data?.profile ?? data;

  const id =
    user?.id ??
    user?.userId ??
    user?.user_id ??
    user?.sub ??
    data?.userId ??
    data?.user_id ??
    data?.id ??
    '';

  const email = String(user?.email ?? data?.email ?? fallbackEmail).toLowerCase();

  const firstName =
    user?.firstName ??
    user?.first_name ??
    data?.firstName ??
    data?.first_name ??
    '';

  const firstLastName =
    user?.firstLastName ??
    user?.first_last_name ??
    user?.lastName ??
    user?.last_name ??
    data?.firstLastName ??
    data?.first_last_name ??
    data?.lastName ??
    data?.last_name ??
    '';

  const fullName =
    user?.name ??
    user?.fullName ??
    user?.full_name ??
    data?.name ??
    data?.fullName ??
    data?.full_name ??
    `${firstName} ${firstLastName}`.trim() ??
    '';

  return {
    id: String(id ?? ''),
    name: String(fullName || email || fallbackEmail),
    email,
    token: pickToken(json),
  };
}

async function requestJson(url: string, init?: RequestInit) {
  const res = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const text = await res.text();
  let json: any = null;

  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text };
  }

  if (!res.ok) {
    const msg =
      json?.message ??
      json?.error?.message ??
      json?.error ??
      text ??
      `HTTP ${res.status}`;
    throw new Error(String(msg));
  }

  return json;
}

async function tryPostJson(url: string, body: unknown) {
  return requestJson(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function getCities(): Promise<City[]> {
  const urls = [
    `${API_GATEWAY_BASE_URL}/api/v1/cities`,
    `https://vuelos-catalog-service-wc.onrender.com/api/v1/cities`,
  ];

  const errors: string[] = [];

  for (const url of urls) {
    try {
      const json = await requestJson(url);
      const cities = unwrapArray<City>(json)
        .filter((city) => Boolean(city?.id && city?.name))
        .sort((a, b) => String(a.name).localeCompare(String(b.name), 'es'));

      if (cities.length > 0) {
        return cities;
      }
    } catch (err) {
      errors.push(`${url}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  throw new Error(`No se pudieron cargar ciudades reales. ${errors[0] ?? ''}`);
}

export async function loginRequest(email: string, password: string): Promise<AuthUser> {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPassword = password.trim();

  if (!cleanEmail || !cleanPassword) {
    throw new Error('Ingresa correo y contraseña.');
  }

  const bodies = [
    { email: cleanEmail, password: cleanPassword },
    { username: cleanEmail, password: cleanPassword },
  ];

  const urls = [
    `${API_GATEWAY_BASE_URL}/api/v1/auth/login`,
    `${API_GATEWAY_BASE_URL}/auth/login`,
    `${API_GATEWAY_BASE_URL}/api/auth/login`,
    `${API_GATEWAY_BASE_URL}/api/v1/william-carrion-booking/auth/login`,
  ];

  const errors: string[] = [];

  for (const url of urls) {
    for (const body of bodies) {
      try {
        const json = await tryPostJson(url, body);
        const user = pickUser(json, cleanEmail);

        if (!user.id) {
          throw new Error('Respuesta de login sin userId real.');
        }

        return {
          ...user,
          email: user.email || cleanEmail,
        };
      } catch (err) {
        errors.push(`${url}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  throw new Error(
    'Login no autorizado o endpoint no disponible. No se permite entrar con datos inventados.'
  );
}

export async function registerRequest(payload: RegisterPayload): Promise<AuthUser> {
  const cleanEmail = payload.email.trim().toLowerCase();
  const cleanPassword = payload.password.trim();

  const bodyCamel = {
    firstName: payload.firstName.trim(),
    secondName: cleanOptional(payload.secondName),
    firstLastName: payload.firstLastName.trim(),
    secondLastName: cleanOptional(payload.secondLastName),
    email: cleanEmail,
    mainAddress: payload.mainAddress.trim(),
    phone: cleanOptional(payload.phone),
    cityId: payload.cityId.trim(),
    password: cleanPassword,
  };

  const bodySnake = {
    first_name: payload.firstName.trim(),
    second_name: cleanOptional(payload.secondName),
    first_last_name: payload.firstLastName.trim(),
    second_last_name: cleanOptional(payload.secondLastName),
    email: cleanEmail,
    main_address: payload.mainAddress.trim(),
    phone: cleanOptional(payload.phone),
    city_id: payload.cityId.trim(),
    password: cleanPassword,
  };

  if (
    !bodyCamel.firstName ||
    !bodyCamel.firstLastName ||
    !bodyCamel.email ||
    !bodyCamel.mainAddress ||
    !bodyCamel.cityId ||
    !cleanPassword
  ) {
    throw new Error('Completa nombres, apellido, correo, dirección, ciudad y contraseña.');
  }

  const urls = [
    `${API_GATEWAY_BASE_URL}/api/v1/auth/register`,
    `${API_GATEWAY_BASE_URL}/auth/register`,
    `${API_GATEWAY_BASE_URL}/api/auth/register`,
    `${API_GATEWAY_BASE_URL}/api/v1/william-carrion-booking/auth/register`,
  ];

  const bodies = [bodyCamel, bodySnake];
  const errors: string[] = [];

  for (const url of urls) {
    for (const body of bodies) {
      try {
        const json = await tryPostJson(url, body);
        const registeredUser = pickUser(json, cleanEmail);

        try {
          const loggedUser = await loginRequest(cleanEmail, cleanPassword);
          return {
            ...loggedUser,
            name: loggedUser.name || registeredUser.name,
          };
        } catch {
          if (registeredUser.id) {
            return registeredUser;
          }

          throw new Error('Usuario creado, pero no se pudo iniciar sesión automáticamente.');
        }
      } catch (err) {
        errors.push(`${url}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
  }

  throw new Error(`No se pudo registrar en el backend real. ${errors[0] ?? ''}`);
}
