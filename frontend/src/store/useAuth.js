import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const initialUser = {
  uid: "",
  email: "",
  username: "",
  level: 0,
  points: {
    ui: 0,
    ux: 0,
    simplicity: 0,
    clarity: 0,
    clearFeedback: 0,
    flexibility: 0,
    aesthetic: 0,
    clearFunctionality: 0,
    consistency: 0,
  },
};

const authentication = (set) => ({
  user: { ...initialUser },
  setUser: (userData) =>
    set(() => ({
      user: { ...userData },
    })),
  removeUser: () => set({ user: { ...initialUser } }),
  setLevel: (level) =>
    set(({ user }) => ({
      ...user,
      level,
    })),
  setPoints: (keyPoint, point) =>
    set(({ user }) => ({
      ...user,
      points: {
        ...user.points,
        [keyPoint]: point,
      },
    })),
});

const useAuth = create(
  persist(authentication, {
    name: "auth",
    storage: createJSONStorage(() => sessionStorage),
  })
);

export default useAuth;
