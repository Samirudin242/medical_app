import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Payment from "../views/Payment.vue";
import Profile from "../views/Profile.vue";
import Schedule from "../views/Schedule.vue";
import DoctorPage from "../views/DoctorPage.vue";
import ListDoctorPage from "../views/ListDoctorPage.vue";
import DocterPageDetail from "../views/DoctorDetailPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: Schedule,
  },
  {
    path: "/doctor",
    name: "Doctors",
    component: DoctorPage,
  },
  {
    path: "/doctor/:field",
    name: "DoctorList",
    component: ListDoctorPage,
  },
  {
    path: "/doctor/detail/:id",
    name: "DoctorDetail",
    component: DocterPageDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
