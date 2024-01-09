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
    meta: { layout: "main", requiresAuth: true },
    props: true,
    components: {
      default: () => import("../components/client/home/list.vue"),
      content: () => import("../components/client/home/homepage.vue"),
    },
    children: [
      // tạo thêm 1 class để xử lý ảnh cho dễ
      {
        path: "",
        props: true,
        components: {
          post: () => import("../components/client/home/list_post.vue"),
        },
      },
    ],
  },

  {
    path: "/friends",
    name: "friends",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/friend/list.vue"),
      content: () => import("../components/client/friend/content.vue"),
    },
  },
  {
    path: "/friends/suggestions",
    name: "suggestions",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/suggestion/list.vue"),
      content: () => import("../components/client/friend/cover.vue"),
    },
  },
  {
    path: "/friends/requests",
    name: "requests",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/request_friend/list.vue"),
      content: () => import("../components/client/friend/cover.vue"),
    },
  },
  {
    path: "/friends/list",
    name: "list",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/all_friend/list.vue"),
      content: () => import("../components/client/friend/cover.vue"),
    },
  },

  {
    path: "/:username",
    name: "detailProfile",
    component: () => import("../components/client/profile/index.vue"),
  },
  {
    path: "/accounts/edit",
    name: "editProfile",
    component: () =>
      import("../components/client/profile/edit_profile/editProfile.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile-client",
    name: "profile-client",
    component: () => import("../components/client/profile/index.vue"),
  },
  {
    path: "/:username",
    name: "detailProfile.all_friends",
    components: {
      default: () => import("../components/client/all_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main", requiresAuth: true },
  },
  {
    path: "/:username",
    name: "detailProfile.suggestion",
    components: {
      default: () => import("../components/client/suggestion/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main", requiresAuth: true },
  },
  {
    path: "/:username",
    name: "detailProfile.request_friend",
    components: {
      default: () => import("../components/client/request_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    meta: { layout: "main", requiresAuth: true },
  },

  {
    path: "/create-story",
    name: "story",
    meta: { layout: "story", requiresAuth: true },
    component: () => import("../components/client/create-story/index.vue"),
  },
  {
    path: "/stories",
    name: "view-story",
    meta: { layout: "share", requiresAuth: true },
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
    path: "/group/discover",
    name: "group",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/group/list.vue"),
      content: () => import("../components/client/group/discover/content.vue"),
    },
  },
  {
    path: "/group/your-group",
    name: "your_group",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/group/list.vue"),
      content: () =>
        import("../components/client/group/your-group/content.vue"),
    },
  },
  {
    path: "/group-create",
    name: "create-group",
    meta: { layout: "empty" },
    components: {
      default: () => import("../components/client/group/create/index.vue"),
    },
  },
  {
    path: "/group/:id_group",
    name: "home-group",
    meta: { layout: "main", requiresAuth: true },
    props: true,
    components: {
      default: () => import("../components/client/group/home/list.vue"),
      content: () => import("../components/client/group/home/content.vue"),
    },
    children: [
      {
        path: "",
        name: "discuss",
        components: {
          discuss: () =>
            import("../components/client/group/discuss/discuss.vue"),
        },
      },
      {
        path: "member",
        name: "member",
        components: {
          member: () => import("../components/client/group/member/member.vue"),
        },
      },
      {
        path: "introduce",
        name: "introduce",
        components: {
          introduce: () =>
            import("../components/client/group/introduce/introduce.vue"),
        },
      },
    ],
  },
  {
    path: "/group/:id_group/setting",
    name: "setting",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/group/home/list.vue"),
      content: () => import("../components/client/group/settingg/setting.vue"),
    },
  },
  {
    path: "/group/:id_group/member-requests",
    name: "request_group",

    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/group/home/list.vue"),
      content: () =>
        import("../components/client/group/request_group/request_group.vue"),
    },
  },
  {
    path: "/test",
    name: "test",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/test/list.vue"),
      content: () => import("../components/test/content.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
