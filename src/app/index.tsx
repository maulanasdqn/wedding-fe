import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./landing/layout";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);
