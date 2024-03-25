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

const app = createApp(App);
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = await checkIsLogin();
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    console.log("no login");
    next("/sign-in");
  } else if (isLoggedIn) {
    switch (to.name) {
      case "sign-in" || "sign-up":
        next({ path: "/" });
        break;
      case "homepage":
        next({ path: "/" });
        break;
      default:
        next();
        break;
    }
  } else next();
});

app.use(router);
app.use(PrimeVue);
app.component("account-layout", Account);
app.component("default-layout", Default);
app.component("main-layout", Main);
app.component("story-layout", Story);
app.component("share-layout", share);
app.component("empty-layout", empty);
app.component("admin-layout", AdminNav);

app.mount("#app");
