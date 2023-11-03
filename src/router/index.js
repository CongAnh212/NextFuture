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
    component: () => import("../components/client/home/index.vue"),
  },
  {
    path: "/profile-client",
    name: "profile-client",
    component: () => import("../components/client/profile/index.vue"),
  },
  {
    path: "/story",
    name : 'story',
    meta: { layout : 'story' },
    component: () => import("../components/client/create-story/index.vue"),
  },
  {
    path: "/story/test",
    name : 'a',
    meta: { layout : 'story' },
    component: () => import("../components/client/create-story/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
