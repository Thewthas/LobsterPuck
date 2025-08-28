import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/index.tsx"),
  route("/menu", "./pages/MenuFull.tsx"),
  route("/home", "./pages/Index.tsx"),
  route("/order", "./pages/Order.tsx"),
  route("/hp", "./pages/Homepage.tsx"),
  route("/abt", "./pages/AboutusFull.tsx"),
  route("/con", "./pages/ContactFull.tsx"),
] satisfies RouteConfig;