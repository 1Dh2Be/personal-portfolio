import { createBrowserRouter, RouterProvider } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";

import { ReactLenis } from "lenis/react";

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

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        smoothWheel: true,
        wheelMultiplier: 1.3,
        touchMultiplier: 1.5,
        syncTouch: true,
        syncTouchLerp: 0.04,
      }}
    >
      <RouterProvider router={router} />
    </ReactLenis>
  );
}

export default App;
