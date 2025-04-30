import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";

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
          path: "contact",
          element: <Contact />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/:projectSlug",
          element: <Project />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
