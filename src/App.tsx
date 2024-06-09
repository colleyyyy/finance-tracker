import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Dashboard, Landing, Login, Register } from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/Dashboard";
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
  return <RouterProvider router={router} />;
}

export default App;
