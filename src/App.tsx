import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Dashboard, Landing, Login, Register } from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/Dashboard";
import useThemeStore from "./store/themeStore";
import { useEffect } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "register",
    element: <Register />,
    action: registerAction,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
  },
]);
function App() {
  const initTheme = useThemeStore((state) => state.initTheme);
  useEffect(() => {
    initTheme();
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
