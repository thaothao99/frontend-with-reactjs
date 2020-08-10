export const routes = {
  auth: [
    {
      path: "/",
      exact: true,
      component: "home",
    },
  ],
  notAuth: [
    {
      path: "/login",
      exact: true,
      component: "login",
    },
  ],
};
