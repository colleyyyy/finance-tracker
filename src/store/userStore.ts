import { create } from "zustand";
import { devtools } from "zustand/middleware";

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

const useUserStore = create<UserState>()(
  devtools((set) => ({
    user: {}, // Initial user state is an empty object

    // Function to set the user's name
    setUserName: (name: string) =>
      set((state) => ({ user: { ...state.user, name } })),

    // Function to set the user profile
    setUserProfile: (obj: User) =>
      set((state) => ({ user: { ...state.user, ...obj } })),
  }))
);

export default useUserStore;
