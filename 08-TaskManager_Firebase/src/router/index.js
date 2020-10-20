import Vue from "vue";
import VueRouter from "vue-router";

import KanBanBoard from "../pages/KanBanBoard";
import ListVideo from "../pages/ListVideo";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserListVideo from "../pages/UserListVideo";
import DetailVideo from "../pages/DetailVideo";

import { auth } from "../config/firebase";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: KanBanBoard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "home-page",
        component: ListVideo
      },
      {
        path: "/list-video/:uid",
        name: "list-video",
        component: UserListVideo
      },
      {
        path: "/detail-video/:id",
        name: "detail-video",
        component: DetailVideo
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { requiresAuth: false }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("/login");
  } else if (!requiresAuth && currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
