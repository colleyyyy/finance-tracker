import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ThemeState {
  theme: string;
  setTheme: () => void;
  initTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  devtools((set) => ({
    theme: "light",
    setTheme: () =>
      set((state) => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        const newTheme = state.theme === "dark" ? "light" : "dark";
        root.classList.add(newTheme);

        localStorage.setItem("theme", newTheme); // Save the new theme in localStorage

        return { theme: newTheme };
      }),
    initTheme: () =>
      set(() => {
        const root = window.document.documentElement;
        const savedTheme = localStorage.getItem("theme") || "dark";
        root.classList.remove("light", "dark");
        root.classList.add(savedTheme);

        return { theme: savedTheme };
      }),
  }))
);

export default useThemeStore;
