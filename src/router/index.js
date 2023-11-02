import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  {
    path: "/",
    component: () => import("../components/client/home/index.vue"),
  },
  {
    path: "/profile-client",
    name: "profile-client",
    component: () => import("../components/client/profile/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
