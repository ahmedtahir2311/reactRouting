import { lazy } from "react";

const routes = [
  {
    path: "home",
    component: lazy(() => import("../Components/Routing")),
    exact: true,
  },
  {
    path: "users",
    component: lazy(() => import("../Components/users")),
    exact: true,
  },
];

export default routes;
