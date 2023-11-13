import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  // {
  //   path: "/client",
  //   component: () => import("../layout/wrapper/client/index.vue"),
  //   children: [

  //   ],
  // },
  {
    path: "/sign-in",
    name: "sign-in",
    meta: { layout: "account" },
    component: () => import("../components/client/account/signIn/index.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    meta: { layout: "account" },
    component: () => import("../components/client/account/signUp/index.vue"),
  },
  {
    path: "/",
    name: "homepage",
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
    path: "/friends",
    name: "friends",
    meta: { layout: "main" },
    components: {
      default: () => import("../components/client/friend/list.vue"),
      content: () => import("../components/client/friend/content.vue"),
    },
  },
  {
    path: "/story/test",
    name: "a",
    meta: { layout: "story" },
    component: () => import("../components/client/story/test2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // Kiểm tra quyền truy cập ở đây, ví dụ kiểm tra xem người dùng đã đăng nhập chưa
  const isLoggedIn = ""; // Kiểm tra xem người dùng đã đăng nhập chưa (có thể sử dụng localStorage, Vuex state, hoặc API request)

  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/"); // Chuyển hướng đến trang đăng nhập
  } else {
    next();
  }
});

export default router;
