import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginRequest, registerRequest } from '../api/authApi';
import type { RegisterPayload } from '../api/authApi';
import { getMyReservations } from '../api/bookingApi';
import type { StoredReservation, UserSession } from '../types/booking';

const STORAGE_KEY = 'aerowilly.mobile.reservations.v2';

type AppContextValue = {
  user: UserSession | null;
  reservations: StoredReservation[];
  loadingReservations: boolean;
  login: (email: string, password: string) => Promise<UserSession>;
  register: (payload: RegisterPayload) => Promise<UserSession>;
  logout: () => void;
  refreshReservations: (session?: UserSession | null) => Promise<StoredReservation[]>;
  addReservation: (reservation: StoredReservation) => void;
  markReservationCancelled: (reservationId: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);
  const [reservations, setReservations] = useState<StoredReservation[]>([]);
  const [loadingReservations, setLoadingReservations] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function loadCachedReservations() {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            setReservations(parsed);
          }
        }
      } catch {
        setReservations([]);
      } finally {
        setReady(true);
      }
    }

    loadCachedReservations();
  }, []);

  useEffect(() => {
    if (!ready) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(reservations)).catch(() => {});
  }, [ready, reservations]);

  const refreshReservations = useCallback(
    async (session?: UserSession | null) => {
      const currentUser = session ?? user;

      if (!currentUser?.id) {
        setReservations([]);
        return [];
      }

      try {
        setLoadingReservations(true);

        const backendReservations = await getMyReservations({
          userId: currentUser.id,
          token: currentUser.token,
        });

        setReservations(backendReservations);
        return backendReservations;
      } finally {
        setLoadingReservations(false);
      }
    },
    [user]
  );

  const value = useMemo<AppContextValue>(
    () => ({
      user,
      reservations,
      loadingReservations,

      login: async (email: string, password: string) => {
        const nextUser = await loginRequest(email, password);
        setUser(nextUser);
        await refreshReservations(nextUser);
        return nextUser;
      },

      register: async (payload: RegisterPayload) => {
        const nextUser = await registerRequest(payload);
        setUser(nextUser);
        await refreshReservations(nextUser);
        return nextUser;
      },

      logout: () => {
        setUser(null);
        setReservations([]);
      },

      refreshReservations,

      addReservation: (reservation: StoredReservation) => {
        setReservations((prev) => {
          const exists = prev.some((item) => item.id === reservation.id);
          if (exists) {
            return prev.map((item) => (item.id === reservation.id ? reservation : item));
          }
          return [reservation, ...prev];
        });
      },

      markReservationCancelled: (reservationId: string) => {
        setReservations((prev) =>
          prev.map((item) =>
            item.id === reservationId
              ? {
                  ...item,
                  status: 'CANCELLED',
                }
              : item
          )
        );
      },
    }),
    [user, reservations, loadingReservations, refreshReservations]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error('useApp debe usarse dentro de AppProvider');
  }

  return ctx;
}
