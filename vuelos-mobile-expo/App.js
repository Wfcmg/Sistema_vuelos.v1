import React, { useMemo, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FLIGHTS = [
  {
    id: "AV100-1",
    from: "UIO",
    to: "SCL",
    cityFrom: "Quito",
    cityTo: "Santiago",
    date: "Hoy",
    time: "19:30",
    duration: "5h 20m",
    airline: "AeroVuelos",
    aircraft: "Airbus A320",
    price: 280,
    occupied: ["1A", "1B", "2C", "4D", "8A", "10F", "15A", "20C"],
  },
  {
    id: "AV220-2",
    from: "UIO",
    to: "GYE",
    cityFrom: "Quito",
    cityTo: "Guayaquil",
    date: "Mañana",
    time: "08:15",
    duration: "55m",
    airline: "AeroVuelos",
    aircraft: "Boeing 737",
    price: 95,
    occupied: ["1A", "3B", "5C", "9D"],
  },
  {
    id: "AV330-3",
    from: "UIO",
    to: "BOG",
    cityFrom: "Quito",
    cityTo: "Bogotá",
    date: "Viernes",
    time: "13:45",
    duration: "1h 40m",
    airline: "AeroVuelos",
    aircraft: "Airbus A319",
    price: 180,
    occupied: ["2A", "2B", "6C", "7D", "11A"],
  },
];

const BAGGAGE = {
  personal: { label: "Solo mochila", price: 0 },
  cabina: { label: "Equipaje de cabina", price: 25 },
  bodega: { label: "Maleta en bodega", price: 60 },
};

const SEAT_ROWS = Array.from({ length: 20 }, (_, i) => i + 1);
const SEAT_LETTERS = ["A", "B", "C", "D", "E", "F"];

function money(value) {
  return "$" + Number(value || 0).toFixed(2);
}

function code() {
  return "RV-" + Date.now().toString().slice(-6);
}

export default function App() {
  const [screen, setScreen] = useState("auth");
  const [authMode, setAuthMode] = useState("login");
  const [auth, setAuth] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([
    {
      name: "William Demo",
      email: "demo@vuelos.com",
      password: "123456",
    },
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [passenger, setPassenger] = useState({
    name: "",
    document: "",
    phone: "",
    email: "",
  });
  const [selectedSeat, setSelectedSeat] = useState("");
  const [baggage, setBaggage] = useState("personal");
  const [payment, setPayment] = useState("Tarjeta");
  const [reservations, setReservations] = useState([]);

  const [occupiedByFlight, setOccupiedByFlight] = useState(() => {
    const base = {};
    FLIGHTS.forEach((f) => {
      base[f.id] = [...f.occupied];
    });
    return base;
  });

  const billing = useMemo(() => {
    const ticket = selectedFlight?.price || 0;
    const bag = BAGGAGE[baggage].price;
    const subtotal = ticket + bag;
    const tax = subtotal * 0.12;
    const total = subtotal + tax;
    return { ticket, bag, subtotal, tax, total };
  }, [selectedFlight, baggage]);

  function resetFlow() {
    setSelectedFlight(null);
    setPassenger({ name: "", document: "", phone: "", email: "" });
    setSelectedSeat("");
    setBaggage("personal");
    setPayment("Tarjeta");
  }

  function doRegister() {
    const name = auth.name.trim();
    const email = auth.email.trim().toLowerCase();
    const password = auth.password.trim();

    if (!name || !email || !password) {
      Alert.alert("Faltan datos", "Completa nombre, correo y contraseña.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Correo inválido", "Ingresa un correo válido.");
      return;
    }

    if (password.length < 4) {
      Alert.alert("Contraseña corta", "Usa mínimo 4 caracteres.");
      return;
    }

    const exists = users.some((u) => u.email === email);
    if (exists) {
      Alert.alert("Usuario existente", "Ese correo ya está registrado.");
      return;
    }

    const newUser = { name, email, password };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    setAuth({ name: "", email: "", password: "" });
    setScreen("home");
  }

  function doLogin() {
    const email = auth.email.trim().toLowerCase();
    const password = auth.password.trim();

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      Alert.alert(
        "No se pudo iniciar sesión",
        "Usa demo@vuelos.com / 123456 o regístrate."
      );
      return;
    }

    setCurrentUser(found);
    setAuth({ name: "", email: "", password: "" });
    setScreen("home");
  }

  function startReservation(flight) {
    resetFlow();
    setSelectedFlight(flight);
    setPassenger((prev) => ({
      ...prev,
      email: currentUser?.email || "",
    }));
    setScreen("detail");
  }

  function validatePassenger() {
    const name = passenger.name.trim();
    const document = passenger.document.trim();
    const phone = passenger.phone.trim();

    if (!name || !document || !phone) {
      Alert.alert("Faltan datos", "Completa nombre, documento y teléfono.");
      return;
    }

    if (/\d/.test(name)) {
      Alert.alert("Nombre inválido", "El nombre no debe contener números.");
      return;
    }

    if (document.length < 6) {
      Alert.alert("Documento inválido", "El documento debe tener mínimo 6 caracteres.");
      return;
    }

    if (phone.length < 7) {
      Alert.alert("Teléfono inválido", "Ingresa un teléfono válido.");
      return;
    }

    setScreen("seats");
  }

  function confirmReservation() {
    if (!selectedFlight || !selectedSeat) {
      Alert.alert("Falta asiento", "Selecciona un asiento.");
      return;
    }

    const newReservation = {
      id: code(),
      createdAt: new Date().toLocaleString(),
      userEmail: currentUser.email,
      flight: selectedFlight,
      passenger: { ...passenger },
      seat: selectedSeat,
      baggage,
      payment,
      billing,
      status: "CONFIRMADA",
    };

    setReservations((prev) => [newReservation, ...prev]);
    setOccupiedByFlight((prev) => ({
      ...prev,
      [selectedFlight.id]: [...(prev[selectedFlight.id] || []), selectedSeat],
    }));

    setScreen("success");
  }

  function cancelReservation(id) {
    const item = reservations.find((r) => r.id === id);
    if (!item) return;

    setReservations((prev) => prev.filter((r) => r.id !== id));
    setOccupiedByFlight((prev) => ({
      ...prev,
      [item.flight.id]: (prev[item.flight.id] || []).filter(
        (s) => s !== item.seat
      ),
    }));
  }

  function logout() {
    resetFlow();
    setCurrentUser(null);
    setScreen("auth");
  }

  function Header({ title, backTo, right }) {
    return (
      <View style={styles.header}>
        <View>
          {backTo ? (
            <TouchableOpacity onPress={() => setScreen(backTo)}>
              <Text style={styles.back}>← Volver</Text>
            </TouchableOpacity>
          ) : null}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        {right}
      </View>
    );
  }

  function Button({ title, onPress, secondary, danger, disabled }) {
    return (
      <TouchableOpacity
        onPress={disabled ? undefined : onPress}
        style={[
          styles.button,
          secondary && styles.buttonSecondary,
          danger && styles.buttonDanger,
          disabled && styles.buttonDisabled,
        ]}
      >
        <Text style={[styles.buttonText, secondary && styles.buttonTextSecondary]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }

  function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
  }

  function Chip({ text, active, onPress }) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.chip, active && styles.chipActive]}
      >
        <Text style={[styles.chipText, active && styles.chipTextActive]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  function Input({ label, value, onChangeText, placeholder, secure, keyboardType }) {
    return (
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777"
          secureTextEntry={secure}
          keyboardType={keyboardType || "default"}
          style={styles.input}
        />
      </View>
    );
  }

  function AuthScreen() {
    const isLogin = authMode === "login";

    return (
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>AeroVuelos</Text>
        <Text style={styles.bigTitle}>
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </Text>
        <Text style={styles.subtitle}>
          Reserva vuelos, selecciona asientos, factura y revisa tus reservas.
        </Text>

        <Card>
          {!isLogin ? (
            <Input
              label="Nombre completo"
              value={auth.name}
              onChangeText={(v) => setAuth({ ...auth, name: v })}
              placeholder="Ej. Juan Pérez"
            />
          ) : null}

          <Input
            label="Correo"
            value={auth.email}
            onChangeText={(v) => setAuth({ ...auth, email: v })}
            placeholder="demo@vuelos.com"
            keyboardType="email-address"
          />

          <Input
            label="Contraseña"
            value={auth.password}
            onChangeText={(v) => setAuth({ ...auth, password: v })}
            placeholder="123456"
            secure
          />

          <Button
            title={isLogin ? "Entrar" : "Registrarme"}
            onPress={isLogin ? doLogin : doRegister}
          />

          <Button
            secondary
            title={isLogin ? "Crear una cuenta nueva" : "Ya tengo cuenta"}
            onPress={() => setAuthMode(isLogin ? "register" : "login")}
          />

          <Text style={styles.hint}>Demo rápido: demo@vuelos.com / 123456</Text>
        </Card>
      </ScrollView>
    );
  }

  function HomeScreen() {
    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Header
          title="Vuelos disponibles"
          right={
            <TouchableOpacity onPress={logout}>
              <Text style={styles.smallLink}>Salir</Text>
            </TouchableOpacity>
          }
        />

        <Text style={styles.subtitle}>Hola, {currentUser?.name}</Text>

        <View style={styles.row}>
          <Chip text="Buscar vuelos" active />
          <Chip text="Mis reservas" onPress={() => setScreen("reservations")} />
        </View>

        {FLIGHTS.map((flight) => {
          const occupied = occupiedByFlight[flight.id] || [];
          const free = 120 - occupied.length;

          return (
            <Card key={flight.id}>
              <View style={styles.flightTop}>
                <View>
                  <Text style={styles.route}>{flight.from} → {flight.to}</Text>
                  <Text style={styles.muted}>{flight.cityFrom} a {flight.cityTo}</Text>
                </View>
                <Text style={styles.price}>{money(flight.price)}</Text>
              </View>

              <View style={styles.infoGrid}>
                <Text style={styles.info}>Vuelo: {flight.id}</Text>
                <Text style={styles.info}>Hora: {flight.time}</Text>
                <Text style={styles.info}>Duración: {flight.duration}</Text>
                <Text style={styles.info}>Libres: {free}</Text>
              </View>

              <Button title="Ver detalle" onPress={() => startReservation(flight)} />
            </Card>
          );
        })}
      </ScrollView>
    );
  }

  function DetailScreen() {
    if (!selectedFlight) return null;

    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Header title="Detalle del vuelo" backTo="home" />

        <Card>
          <Text style={styles.section}>Ruta</Text>
          <Text style={styles.route}>{selectedFlight.from} → {selectedFlight.to}</Text>
          <Text style={styles.muted}>{selectedFlight.cityFrom} a {selectedFlight.cityTo}</Text>

          <View style={styles.infoGrid}>
            <Text style={styles.info}>Vuelo: {selectedFlight.id}</Text>
            <Text style={styles.info}>Fecha: {selectedFlight.date}</Text>
            <Text style={styles.info}>Hora: {selectedFlight.time}</Text>
            <Text style={styles.info}>Avión: {selectedFlight.aircraft}</Text>
            <Text style={styles.info}>Aerolínea: {selectedFlight.airline}</Text>
            <Text style={styles.info}>Precio: {money(selectedFlight.price)}</Text>
          </View>

          <Button title="Continuar a pasajeros" onPress={() => setScreen("passenger")} />
        </Card>
      </ScrollView>
    );
  }

  function PassengerScreen() {
    if (!selectedFlight) return null;

    return (
      <ScrollView contentContainerStyle={styles.page} keyboardShouldPersistTaps="handled">
        <Header title="Pasajeros" backTo="detail" />

        <Text style={styles.sectionRed}>DATOS DEL PASAJERO</Text>
        <Text style={styles.bigTitle}>¿Quién viaja?</Text>

        <Card>
          <Text style={styles.route}>{selectedFlight.from} → {selectedFlight.to}</Text>
          <Text style={styles.muted}>{selectedFlight.id}</Text>

          <Input
            label="Nombre"
            value={passenger.name}
            onChangeText={(v) => setPassenger({ ...passenger, name: v })}
            placeholder="Nombre completo"
          />

          <Input
            label="Documento"
            value={passenger.document}
            onChangeText={(v) => setPassenger({ ...passenger, document: v })}
            placeholder="Cédula / Pasaporte"
            keyboardType="number-pad"
          />

          <Input
            label="Teléfono"
            value={passenger.phone}
            onChangeText={(v) => setPassenger({ ...passenger, phone: v })}
            placeholder="0999999999"
            keyboardType="phone-pad"
          />

          <Input
            label="Correo para factura"
            value={passenger.email}
            onChangeText={(v) => setPassenger({ ...passenger, email: v })}
            placeholder="correo@dominio.com"
            keyboardType="email-address"
          />

          <Button title="Continuar a asientos" onPress={validatePassenger} />
        </Card>
      </ScrollView>
    );
  }

  function SeatsScreen() {
    if (!selectedFlight) return null;

    const occupied = occupiedByFlight[selectedFlight.id] || [];

    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Header title="Seleccionar asiento" backTo="passenger" />

        <Card>
          <Text style={styles.route}>{selectedFlight.from} → {selectedFlight.to}</Text>
          <Text style={styles.muted}>Elige un asiento disponible.</Text>

          <View style={styles.legend}>
            <Text style={styles.legendText}>Libre</Text>
            <Text style={styles.legendText}>Seleccionado</Text>
            <Text style={styles.legendText}>Ocupado</Text>
          </View>

          <View style={styles.plane}>
            {SEAT_ROWS.map((row) => (
              <View key={row} style={styles.seatRow}>
                <Text style={styles.rowNumber}>{row}</Text>
                {SEAT_LETTERS.map((letter, index) => {
                  const seat = `${row}${letter}`;
                  const isOccupied = occupied.includes(seat);
                  const isSelected = selectedSeat === seat;
                  const aisle = index === 3;

                  return (
                    <TouchableOpacity
                      key={seat}
                      onPress={() => {
                        if (!isOccupied) setSelectedSeat(seat);
                      }}
                      style={[
                        styles.seat,
                        aisle && styles.aisle,
                        isOccupied && styles.seatOccupied,
                        isSelected && styles.seatSelected,
                      ]}
                    >
                      <Text style={styles.seatText}>{seat}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>

          <Text style={styles.selectedText}>
            Asiento seleccionado: {selectedSeat || "Ninguno"}
          </Text>

          <Button
            title="Continuar a facturación"
            disabled={!selectedSeat}
            onPress={() => setScreen("billing")}
          />
        </Card>
      </ScrollView>
    );
  }

  function BillingScreen() {
    if (!selectedFlight) return null;

    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Header title="Facturación" backTo="seats" />

        <Card>
          <Text style={styles.section}>Resumen</Text>
          <Text style={styles.route}>{selectedFlight.from} → {selectedFlight.to}</Text>
          <Text style={styles.info}>Pasajero: {passenger.name}</Text>
          <Text style={styles.info}>Documento: {passenger.document}</Text>
          <Text style={styles.info}>Asiento: {selectedSeat}</Text>

          <Text style={styles.section}>Equipaje</Text>
          <View style={styles.rowWrap}>
            {Object.keys(BAGGAGE).map((key) => (
              <Chip
                key={key}
                text={`${BAGGAGE[key].label} ${money(BAGGAGE[key].price)}`}
                active={baggage === key}
                onPress={() => setBaggage(key)}
              />
            ))}
          </View>

          <Text style={styles.section}>Pago</Text>
          <View style={styles.rowWrap}>
            {["Tarjeta", "Transferencia", "Efectivo"].map((item) => (
              <Chip
                key={item}
                text={item}
                active={payment === item}
                onPress={() => setPayment(item)}
              />
            ))}
          </View>

          <View style={styles.billBox}>
            <Text style={styles.billLine}>Boleto: {money(billing.ticket)}</Text>
            <Text style={styles.billLine}>Equipaje: {money(billing.bag)}</Text>
            <Text style={styles.billLine}>Subtotal: {money(billing.subtotal)}</Text>
            <Text style={styles.billLine}>IVA 12%: {money(billing.tax)}</Text>
            <Text style={styles.total}>Total: {money(billing.total)}</Text>
          </View>

          <Button title="Confirmar reserva" onPress={confirmReservation} />
        </Card>
      </ScrollView>
    );
  }

  function SuccessScreen() {
    const last = reservations[0];

    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Text style={styles.successIcon}>✓</Text>
        <Text style={styles.bigTitle}>Reserva confirmada</Text>
        <Text style={styles.subtitle}>Tu asiento fue reservado correctamente.</Text>

        {last ? (
          <Card>
            <Text style={styles.section}>Código de reserva</Text>
            <Text style={styles.route}>{last.id}</Text>
            <Text style={styles.info}>Ruta: {last.flight.from} → {last.flight.to}</Text>
            <Text style={styles.info}>Pasajero: {last.passenger.name}</Text>
            <Text style={styles.info}>Asiento: {last.seat}</Text>
            <Text style={styles.info}>Total: {money(last.billing.total)}</Text>
          </Card>
        ) : null}

        <Button title="Ver mis reservas" onPress={() => setScreen("reservations")} />
        <Button secondary title="Reservar otro vuelo" onPress={() => setScreen("home")} />
      </ScrollView>
    );
  }

  function ReservationsScreen() {
    const mine = reservations.filter((r) => r.userEmail === currentUser?.email);

    return (
      <ScrollView contentContainerStyle={styles.page}>
        <Header title="Mis reservas" backTo="home" />

        {mine.length === 0 ? (
          <Card>
            <Text style={styles.bigTitle}>Sin reservas</Text>
            <Text style={styles.subtitle}>Aún no tienes vuelos reservados.</Text>
            <Button title="Buscar vuelos" onPress={() => setScreen("home")} />
          </Card>
        ) : null}

        {mine.map((r) => (
          <Card key={r.id}>
            <View style={styles.flightTop}>
              <View>
                <Text style={styles.route}>{r.flight.from} → {r.flight.to}</Text>
                <Text style={styles.muted}>{r.id} · {r.status}</Text>
              </View>
              <Text style={styles.price}>{money(r.billing.total)}</Text>
            </View>

            <View style={styles.infoGrid}>
              <Text style={styles.info}>Pasajero: {r.passenger.name}</Text>
              <Text style={styles.info}>Asiento: {r.seat}</Text>
              <Text style={styles.info}>Vuelo: {r.flight.id}</Text>
              <Text style={styles.info}>Pago: {r.payment}</Text>
              <Text style={styles.info}>Equipaje: {BAGGAGE[r.baggage].label}</Text>
              <Text style={styles.info}>Fecha reserva: {r.createdAt}</Text>
            </View>

            <Text style={styles.section}>Factura</Text>
            <Text style={styles.info}>Subtotal: {money(r.billing.subtotal)}</Text>
            <Text style={styles.info}>IVA: {money(r.billing.tax)}</Text>
            <Text style={styles.total}>Total: {money(r.billing.total)}</Text>

            <Button
              danger
              title="Cancelar reserva"
              onPress={() =>
                Alert.alert("Cancelar reserva", "¿Seguro que deseas cancelar esta reserva?", [
                  { text: "No" },
                  { text: "Sí, cancelar", onPress: () => cancelReservation(r.id) },
                ])
              }
            />
          </Card>
        ))}
      </ScrollView>
    );
  }

  function CurrentScreen() {
    if (screen === "auth") return <AuthScreen />;
    if (screen === "home") return <HomeScreen />;
    if (screen === "detail") return <DetailScreen />;
    if (screen === "passenger") return <PassengerScreen />;
    if (screen === "seats") return <SeatsScreen />;
    if (screen === "billing") return <BillingScreen />;
    if (screen === "success") return <SuccessScreen />;
    if (screen === "reservations") return <ReservationsScreen />;
    return <HomeScreen />;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <CurrentScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#050505",
  },
  page: {
    padding: 20,
    paddingBottom: 50,
  },
  logo: {
    color: "#b60d18",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 28,
    marginTop: 15,
  },
  header: {
    marginTop: 8,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "900",
  },
  back: {
    color: "#aaa",
    fontSize: 15,
    marginBottom: 8,
  },
  smallLink: {
    color: "#fff",
    fontWeight: "800",
  },
  bigTitle: {
    color: "#fff",
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "900",
    marginBottom: 10,
  },
  subtitle: {
    color: "#9c9c9c",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#242424",
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 14,
  },
  label: {
    color: "#aaa",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 7,
  },
  input: {
    backgroundColor: "#070b13",
    borderColor: "#182033",
    borderWidth: 1,
    color: "#fff",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#8f0d14",
    paddingVertical: 15,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondary: {
    backgroundColor: "#1a1a1a",
    borderWidth: 1,
    borderColor: "#333",
  },
  buttonDanger: {
    backgroundColor: "#4f070b",
  },
  buttonDisabled: {
    backgroundColor: "#333",
    opacity: 0.6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  buttonTextSecondary: {
    color: "#ddd",
  },
  hint: {
    color: "#777",
    marginTop: 15,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 13,
    backgroundColor: "#111",
  },
  chipActive: {
    backgroundColor: "#8f0d14",
    borderColor: "#b60d18",
  },
  chipText: {
    color: "#aaa",
    fontWeight: "800",
  },
  chipTextActive: {
    color: "#fff",
  },
  flightTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
  },
  route: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 5,
  },
  muted: {
    color: "#888",
    fontSize: 15,
    marginBottom: 12,
  },
  price: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },
  infoGrid: {
    marginTop: 10,
    marginBottom: 10,
    gap: 6,
  },
  info: {
    color: "#cfcfcf",
    fontSize: 15,
  },
  section: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "900",
    marginTop: 8,
    marginBottom: 8,
  },
  sectionRed: {
    color: "#b60d18",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 5,
    marginBottom: 12,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  legendText: {
    color: "#aaa",
    fontSize: 12,
    fontWeight: "800",
  },
  plane: {
    backgroundColor: "#080808",
    borderRadius: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "#202020",
  },
  seatRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rowNumber: {
    color: "#777",
    width: 24,
    fontWeight: "900",
  },
  seat: {
    width: 43,
    height: 38,
    backgroundColor: "#182033",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
    borderWidth: 1,
    borderColor: "#293653",
  },
  aisle: {
    marginLeft: 16,
  },
  seatSelected: {
    backgroundColor: "#8f0d14",
    borderColor: "#ff4c55",
  },
  seatOccupied: {
    backgroundColor: "#2e2e2e",
    borderColor: "#444",
    opacity: 0.45,
  },
  seatText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 12,
  },
  selectedText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 15,
  },
  billBox: {
    backgroundColor: "#070b13",
    borderRadius: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: "#182033",
    marginTop: 8,
  },
  billLine: {
    color: "#ccc",
    fontSize: 15,
    marginBottom: 6,
  },
  total: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
    marginTop: 8,
  },
  successIcon: {
    color: "#36d66b",
    fontSize: 70,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 60,
  },
});
