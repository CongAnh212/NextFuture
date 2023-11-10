import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
  {
    path: "/sign-in",
    name: 'sign-in',
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
    path: "/create-story",
    name: "story",
    meta: { layout: "story" },
    component: () => import("../components/client/create-story/index.vue"),
  },
  {
    path: "/stories",
    name: "view-story",
    meta: { layout: "share" },
    components: {
      default: () => import('../components/client/story/list_user.vue'),
      content: () => import('../components/client/story/content.vue'),
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  // Kiểm tra quyền truy cập ở đây, ví dụ kiểm tra xem người dùng đã đăng nhập chưa
  const isLoggedIn = "";// Kiểm tra xem người dùng đã đăng nhập chưa (có thể sử dụng localStorage, Vuex state, hoặc API request)

  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/"); // Chuyển hướng đến trang đăng nhập
  } else {
    next();
  }
});

export default router;
