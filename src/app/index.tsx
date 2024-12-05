import { createBrowserRouter } from "react-router-dom";
import { LandingLayout } from "./landing/layout";
import { landingRouter } from "./landing/router";
import { invitationRouter } from "./invitation/router";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [...landingRouter, ...invitationRouter],
  },
]);
