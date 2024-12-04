import { createBrowserRouter } from "react-router-dom";

export const app = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./landing/page"),
  },
]);
