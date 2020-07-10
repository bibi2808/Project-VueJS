import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ListUsers from "./pages/ListUsers";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter);

let isLogin = true;
const routes = [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "",
        component: Home
      },
      {
        path: "about-us",
        component: AboutUs
      }
    ]
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/user/:id?",
    component: ListUsers,
    beforeEnter: (to, from, next) => {
      if (isLogin) next();
      else {
        next({ path: "/login", query: { redirect: to.fullPath } });
      }
    }
  },
  {
    path: "*",
    component: NotFound
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
