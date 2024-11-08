import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import APIDetails from "./pages/APIDetails";
import HomePage from "./pages/HomePage";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/details/:provider",
          element: <APIDetails />,
        },
      ],
      errorElement: <Error />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App: React.FC = () => {
  return (
    <RouterProvider
      router={appRouter}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
