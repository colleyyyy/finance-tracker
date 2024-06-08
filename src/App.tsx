import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Login, Register } from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
