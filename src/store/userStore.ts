import { create } from "zustand";

interface UserState {
  name?: string;
  setUserName: (name: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  name: "",
  setUserName: (userName: string) => set(() => ({ name: userName })),
}));

export default useUserStore;
