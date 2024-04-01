import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialUser = {
  uid: "",
  email: "",
  username: "",
  level: "",
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
  setUser: ({ uid, email, username }) =>
    set((user) => ({
      user: {
        ...user,
        uid,
        email,
        username,
      },
    })),
  removeUser: () => set({ user: initialUser }),
  setLevel: () =>
    set((user) => ({
      user: {
        ...user,
        level: "",
      },
    })),
  setPoints: (keyPoint, point) =>
    set((user) => ({
      ...user,
      points: {
        ...user.points,
        [keyPoint]: point,
      },
    })),
});

const useAuth = create(persist(authentication, { name: "auth" }));

export default useAuth;
