import { create } from "zustand";

export interface UserInterface {
  uid: string;
  email: string;
}

export interface UserStoreInterface {
  user: UserInterface | null;
  hasLoaded: boolean;
  setUser: (user: UserInterface) => void;
  setHasLoaded: (hasLoaded: boolean) => void;
}

const userStore = create<UserStoreInterface>(set => ({
  user: null,
  hasLoaded: true,
  setUser: (user: UserInterface) => set({ user }),
  setHasLoaded: (hasLoaded: boolean) => set({ hasLoaded })
}));

export default userStore;
