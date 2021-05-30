import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import Profile from "../views/Profile.vue";
import Schedule from "../views/Schedule.vue";
import DoctorPage from "../views/DoctorPage.vue";
import Booking from "../views/Booking.vue";
import Hospital from "../views/Hospital.vue";
import ListDoctorPage from "../views/ListDoctorPage.vue";
import DocterPageDetail from "../views/DoctorDetailPage.vue";
import Register from "../views/Register.vue";
import ProfileUser from "../components/ProfileView";
import editUser from "../views/EditProfile.vue";
import Appoitment from "../views/Appoitment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/payment",
    name: "Article",
    component: Articles,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/profile/user",
    name: "User",
    component: ProfileUser,
  },
  {
    path: "/profile/edit/:id",
    name: "editUser",
    component: editUser,
  },
  {
    path: "/profile/register",
    name: "Register",
    component: Register,
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
    path: "/booking",
    name: "Booking",
    component: Booking
  },
  {
    path: "/hospital",
    name: "Hospital",
    component: Hospital,
  },
  {
    path: "/doctor/:field",
    name: "DoctorList",
    component: ListDoctorPage,
  },
  {
    path: "/doctor/detail/",
    name: "DoctorDetail",
    component: DocterPageDetail,
  },
  {
    path: "/doctor/detail/appoitment",
    name: "Appoitment",
    component: Appoitment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
