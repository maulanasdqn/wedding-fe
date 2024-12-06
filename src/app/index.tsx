import { createBrowserRouter } from "react-router-dom";
import { invitationRouter } from "./invitation/router";
import { WelcomeLayout } from "./welcome/layout";
import { welcomeRouter } from "./welcome/router";

export const app = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeLayout />,
    children: [...welcomeRouter, ...invitationRouter],
  },
]);
