import Vue from "vue";
import VueRouter from "vue-router";

import Subject from "../components/Subject";
import Date from "../components/Date";
import Information from "../components/Information";
import Confirm from "../components/Confirm";
import ThankYou from "../components/ThankYou";

Vue.use(VueRouter);

const routes = [
  {
    path: "/subject",
    name: "subject",
    component: Subject
  },
  {
    path: "/date",
    name: "date",
    component: Date
  },
  {
    path: "/information",
    name: "information",
    component: Information
  },
  {
    path: "/confirm",
    name: "confirm",
    component: Confirm
  },
  {
    path: "/thank-you",
    name: "thank-you",
    component: ThankYou
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
