import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Project />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
