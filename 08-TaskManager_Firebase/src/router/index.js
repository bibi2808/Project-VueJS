import Vue from "vue";
import VueRouter from "vue-router";

import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import KanBanBoard from "../pages/KanBanBoard";
import ListTasks from "../pages/ListTasks";
import Login from "../pages/Login";
import Register from "../pages/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: KanBanBoard,
    children: [
      {
        path: "",
        name: "home-page",
        component: ListTasks
      },
      {
        path: "create",
        name: "create-task-page",
        component: CreateTask
      },
      {
        path: "edit/:id",
        name: "edit-task-page",
        component: EditTask
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
