import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

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
    component: BlogDetail
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
