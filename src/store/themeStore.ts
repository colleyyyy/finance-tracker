import { create } from "zustand";

interface ThemeState {
  theme: string;
  setTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "dark",
  setTheme: () =>
    set((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    })),
}));

export default useThemeStore;
