import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Project } from "./pages/Project";
import { Contact } from "./pages/Contact";

import { ReactLenis } from "lenis/react";
import { useIsMobile } from "./utils/device";

function App() {
  const isMobile = useIsMobile();
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

  // If on mobile, don't use Lenis smooth scrolling (causing issues)
  if (isMobile) {
    return <RouterProvider router={router} />;
  }

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
