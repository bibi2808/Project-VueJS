import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from "./pages/HomePage";
import ChangePassWord from "./pages/ChangePassWord";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import PostUpload from "./pages/PostUpload";
import Register from "./pages/Register";
import Search from "./pages/Register";
import UserPage from "./pages/UserPage";
import UserProfile from "./pages/UserProfile";

import { ifNotAuthenticated, ifAuthenticated } from "./plugins/authenticate";
const routes = [
  {
    path: "/",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: "/post-detail/:id",
    name: "post-detail",
    component: PostDetail
  },
  {
    path: "/post-upload",
    name: "post-upload",
    component: PostUpload
  },
  {
    path: "/user/:id",
    name: "user-page",
    component: UserPage
  },
  {
    path: "/user/:id/profile",
    name: "user-profile",
    component: UserProfile
  },
  {
    path: "/user/:id/changepassword",
    name: "change-password",
    component: ChangePassWord
  },
  {
    path: "/search",
    name: "search",
    component: Search
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
