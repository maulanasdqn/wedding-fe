export const invitationRouter = [
  {
    path: "/invitation",
    lazy: () => import("./page"),
  },
  {
    path: "/detail",
    lazy: () => import("./detail/page"),
  },
];
