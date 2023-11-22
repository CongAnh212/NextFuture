import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
const routes = [
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
    children: [ // tạo thêm 1 class để xử lý ảnh cho dễ
      {
        path: '',
        component: () => import('../components/client/home/viewImage.vue')
      }
    ]
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
    path: "/friends/suggestions",
    name: "suggestions",
    meta: { layout: "main" },
    components: {
      default: () => import("../components/client/suggestion/list.vue"),
    },
  },
  {
    path: "/friends/requests",
    name: "requests",
    meta: { layout: "main" },
    components: {
      default: () => import("../components/client/request_friend/list.vue"),
    },
  },
  {
    path: "/friends/list",
    name: "list",
    meta: { layout: "main" },
    components: {
      default: () => import("../components/client/all_friend/list.vue"),
    },
  },
  {
    path: "/profile-client",
    name: "profile-client",
    component: () => import("../components/client/profile/index.vue"),
  },

  {
    path: "/:username",
    name: "detailProfile",
    component: () => import("../components/client/profile/index.vue"),
  },
  {
    path: "/:username",
    name: "detailProfile.all_friends",
    components: {
      default: () => import("../components/client/all_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main" },
  },
  {
    path: "/:username",
    name: "detailProfile.suggestion",
    components: {
      default: () => import("../components/client/suggestion/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main" },
  },
  {
    path: "/:username",
    name: "detailProfile.request_friend",
    components: {
      default: () => import("../components/client/request_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main" },
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
      default: () => import("../components/client/story/list_user.vue"),
      content: () => import("../components/client/story/content.vue"),
    },
    props: {
      default: true,
      content: true,
    },
    children: [
      {
        path: ":idStory",
        name: "detailStory",
        props: true,
        components: {
          default: () => import("../components/client/story/list_user.vue"),
          content: () => import("../components/client/story/content.vue"),
        },
        props: {
          default: true,
          content: true,
        },
      },
    ],
  },
  {
    path: "/test",
    meta: { layout: "story" },
    components: {
      default: () => import("../components/client/create-story/test.vue"),
    },
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
