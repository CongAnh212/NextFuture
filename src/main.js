import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./Layout/Wrapper/client/master_page/index.vue";
import Main from "./Layout/Wrapper/client/main_master_page/index.vue";
import Story from "./Layout/Wrapper/client/story/index.vue";
import Account from "./Layout/Wrapper/client/account/index.vue";
import share from "./layout/wrapper/client/share_master/index.vue";
import empty from "./layout/wrapper/client/empty/index.vue";
import checkIsLogin from "../src/core/modules.js";
import AdminNav from "./Layout/Wrapper/admin/AdminNav.vue";
import PrimeVue from "primevue/config";
import mitt from 'mitt'


const app = createApp(App);
const emitter = mitt()
app.config.globalProperties.emitter = emitter;

router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await checkIsLogin();
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    next("/sign-in");
  } else if (isLoggedIn) {
    if (isLoggedIn == "client") {
      switch (to.name) {
        case "sign-in":
        case "sign-up":
          next({ path: "/" });
          break;
        case "homepage":
          next({ path: "/" });
          break;
        default:
          console.log("default client");
          next();
          break;
      }
    } else {
      switch (to.name) {
        case "admin-login":
          next({ path: "/admin/manage" });
          break;
        case "admin":
          next();
          break;
        case "error404":
          next();
          break;
        default:
          next({ name: "error404" });
          break;
      }
    }
  } else {
    next();
  }
});

import store from "./store";

app.use(router);
app.use(PrimeVue);
app.use(store);

app.component("account-layout", Account);
app.component("default-layout", Default);
app.component("main-layout", Main);
app.component("story-layout", Story);
app.component("share-layout", share);
app.component("empty-layout", empty);
app.component("admin-layout", AdminNav);

app.mount("#app");
