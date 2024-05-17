import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  {
    path: "/error/404",
    name: "error404",
    meta: { layout: "empty", requiresAuth: true },
    components: {
      default: () => import("../components/error/404.vue"),
    },
  },
  {
    path: "/admin-provip-so1-vutru",
    name: "admin-login",
    meta: { layout: "account" },
    component: () => import("../components/admin/signIn/signInAmin.vue"),
  },
  {
    path: "/admin/manage",
    name: "admin",
    meta: { layout: "admin", requiresAuth: true },
    components: {
      content: () => import("../components/admin/index.vue"),
    },
  },
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
  //******************************************************/ FULL PROFILE NẰM Ở ĐÂY NGHE MÀY / ******************************************************//
  {
    path: "/:username",
    name: "detailProfile",
    meta: { requiresAuth: true },
    props: true,
    component: () => import("../components/client/profile/index.vue"),
    children: [
      {
        path: "",
        name: "post_in_profile",
        components: {
          post: () => import("../components/client/profile/post/post.vue"),
        },
      },
      {
        path: "photos",
        name: "photo_in_profile",
        components: {
          photo: () => import("../components/client/profile/photo/photo.vue"),
        },
      },
      {
        path: "about-me",
        name: "aboutme_in_profile",
        components: {
          about_me: () =>
            import("../components/client/profile/about_me/about_me.vue"),
        },
      },
    ],
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
  //***********************************************/ ALL FRIEND  / ***********************************************//
  {
    path: "/:username",
    name: "detailProfile.all_friends",
    components: {
      default: () => import("../components/client/all_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    children: [
      {
        path: "",
        name: "post_in_profile.all_friends",
        components: {
          default: () => import("../components/client/all_friend/list.vue"),
          post: () => import("../components/client/profile/post/post.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "photos",
        name: "photo_in_profile.all_friends",
        components: {
          default: () => import("../components/client/all_friend/list.vue"),

          photo: () => import("../components/client/profile/photo/photo.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "about-me",
        name: "aboutme_in_profile.all_friends",
        components: {
          default: () => import("../components/client/all_friend/list.vue"),

          about_me: () =>
            import("../components/client/profile/about_me/about_me.vue"),
        },
        meta: { layout: "main" },
      },
    ],
    meta: { layout: "main", requiresAuth: true },
  },
  //***********************************************/ SUGGESTION  / ***********************************************//
  {
    path: "/:username",
    name: "detailProfile.suggestion",
    components: {
      default: () => import("../components/client/suggestion/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    children: [
      {
        path: "",
        name: "post_in_profile.suggestion",
        components: {
          default: () => import("../components/client/suggestion/list.vue"),
          post: () => import("../components/client/profile/post/post.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "photos",
        name: "photo_in_profile.suggestion",
        components: {
          default: () => import("../components/client/suggestion/list.vue"),

          photo: () => import("../components/client/profile/photo/photo.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "about-me",
        name: "aboutme_in_profile.suggestion",
        components: {
          default: () => import("../components/client/suggestion/list.vue"),

          about_me: () =>
            import("../components/client/profile/about_me/about_me.vue"),
        },
        meta: { layout: "main" },
      },
    ],
    meta: { layout: "main", requiresAuth: true },
  },
  //***********************************************/ REQUEST FRIEND  / ***********************************************//
  {
    path: "/:username",
    name: "detailProfile.request_friend",
    components: {
      default: () => import("../components/client/request_friend/list.vue"),
      content: () => import("../components/client/profile/index.vue"),
    },
    children: [
      {
        path: "",
        name: "post_in_profile.request_friend",
        components: {
          default: () => import("../components/client/request_friend/list.vue"),
          post: () => import("../components/client/profile/post/post.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "photos",
        name: "photo_in_profile.request_friend",
        components: {
          default: () => import("../components/client/request_friend/list.vue"),
          photo: () => import("../components/client/profile/photo/photo.vue"),
        },
        meta: { layout: "main" },
      },
      {
        path: "about-me",
        name: "aboutme_in_profile.request_friend",
        components: {
          default: () => import("../components/client/request_friend/list.vue"),
          about_me: () =>
            import("../components/client/profile/about_me/about_me.vue"),
        },
        meta: { layout: "main" },
      },
    ],
    meta: { layout: "main", requiresAuth: true },
  },
  //************************************************/ CREATE STORY / ************************************************//
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
  //***********************************************/ GROUP  / ***********************************************//
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
    path: "/group/:id_group/overview",
    name: "overview",
    meta: { layout: "main", requiresAuth: true },
    props: true,
    components: {
      default: () => import("../components/client/group/home/list.vue"),
      content: () => import("../components/client/group/overview/overview.vue"),
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
    path: "/group/:id_group/browse-posts",
    name: "browse-posts",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/group/home/list.vue"),
      content: () =>
        import("../components/client/group/browse-posts/browse-posts.vue"),
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
  //***********************************************/ Search  / ***********************************************//
  {
    path: "/search",
    name: "search",
    meta: { layout: "main", requiresAuth: true },
    components: {
      default: () => import("../components/client/search/list.vue"),
      content: () => import("../components/client/search/searchComponent.vue"),
    },
  },
  //***********************************************/ SUGGESTION  / ***********************************************//
  {
    path: "/posts/:id_post",
    name: "detailPost",
    meta: { requiresAuth: true },
    component: () => import("../components/client/post/postComponent.vue"),
  },
  //***********************************************/ Chat  / ***********************************************//
  {
    path: "/message",
    name: "message",
    meta: { layout: "empty", requiresAuth: true },
    components: {
      default: () => import("../components/client/chat/main_component.vue"),
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
