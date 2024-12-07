import { InvitationLayout } from "./layout";

export const invitationRouter = [
  {
    path: "/invitation",
    element: <InvitationLayout />,
    children: [
      {
        path: "",
        lazy: () => import("./page"),
      },

      {
        path: "detail",
        lazy: () => import("./detail/page"),
      },
    ],
  },
  {
    path: "/invitation/form",
    lazy: () => import("./form/page"),
  },
];
