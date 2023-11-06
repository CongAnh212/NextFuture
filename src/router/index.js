import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  // {
  //   path: "/client",
  //   component: () => import("../layout/wrapper/client/index.vue"),
  //   children: [

  //   ],
  // },
  {
    path: "/",
    meta: { layout: "account" },
    component: () => import("../components/client/account/signIn/index.vue"),
  },
  {
    path: "/sign-up",
    meta: { layout: "account" },
    component: () => import("../components/client/account/signUp/index.vue"),
  },
  {
    path: "/newfeeds",
    component: () => import("../components/client/home/index.vue"),
  },
  {
    path: "/profile-client",
    name: "profile-client",
    component: () => import("../components/client/profile/index.vue"),
  },
  {
    path: "/story",
    name: "story",
    meta: { layout: "story" },
    component: () => import("../components/client/story/index.vue"),
  },
  {
    path: "/story/test",
    name: "a",
    meta: { layout: "story" },
    component: () => import("../components/client/story/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
