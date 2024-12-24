import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/components/SignIn.vue";

const routes = [
  {
    path: "/sign-in",
    component: SignIn,
  },
  //   {
  //     path: "/sign-up",
  //     component: () => import("@/components/SignUp.vue"),
  //   },
  //   {
  //     path: "/reset-password",
  //     component: () => import("@/components/ResetPassword.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
