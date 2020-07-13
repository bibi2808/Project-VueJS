import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

import store from "./store/";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs
  },
  {
    path: "/blog-detail/:title.:id",
    name: "blog-detail",
    component: BlogDetail,
    beforeEnter: (to, from, next) => {
      if (store.isLogin) {
        next();
      }
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "*",
    name: "not-found-page",
    component: NotFoundPage
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
