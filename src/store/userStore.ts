import { create } from "zustand";

interface User {
  name?: string;
  id?: string;
  role?: string;
}
interface UserState {
  user?: User;
  setUserName: (name: string) => void;
  setUserProfile: (user: User) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {},
  setUserName: (name: string) =>
    set((state) => ({ user: { ...state.user, name } })),

  setUserProfile: (obj: User) =>
    set((state) => ({ user: { ...state.user, ...obj } })),
}));

export default useUserStore;
