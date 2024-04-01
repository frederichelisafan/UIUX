import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialUser = {
  uid: "",
  email: "",
  username: "",
};

const authentication = (set) => ({
  user: { ...initialUser },
  setUser: ({ uid, email, username }) =>
    set(() => ({
      user: {
        uid,
        email,
        username,
      },
    })),
  removeUser: () => set({ user: initialUser }),
});

const useAuth = create(persist(authentication, { name: "auth" }));

export default useAuth;
