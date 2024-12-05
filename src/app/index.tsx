import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./landing/layout";
import { landingRouter } from "./landing/router";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: landingRouter,
  },
]);
