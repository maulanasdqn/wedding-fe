import { InvitationLayout } from "./layout";

export const invitationRouter = [
  {
    path: "/invitation",
    element: <InvitationLayout />,
    children: [
      {
        path: "home",
        lazy: () => import("./page"),
      },

      {
        path: "detail",
        lazy: () => import("./detail/page"),
      },

      {
        path: "gift",
        lazy: () => import("./gift/page"),
      },
    ],
  },
  {
    path: "/invitation/form",
    lazy: () => import("./form/page"),
  },
];
