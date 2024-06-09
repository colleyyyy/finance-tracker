import { create } from "zustand";

interface ThemeState {
  theme: string;
  setTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: () =>
    set((state) => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");

      const newTheme = state.theme === "dark" ? "light" : "dark";
      root.classList.add(newTheme);

      return { theme: newTheme };
    }),
}));

export default useThemeStore;
