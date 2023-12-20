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

const app = createApp(App);
router.beforeEach(async (to, from, next) => {
    const isLoggedIn = await checkIsLogin();
    console.log("🚀 ~ file: main.js:15 ~ router.beforeEach ~ isLoggedIn:", isLoggedIn)
    if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
        console.log('no login')
        next('/sign-in');
    } else if (isLoggedIn) {
        switch (to.name) {
            case 'sign-in' || 'sign-up':
                next({ path: '/' });
                break;
            case 'homepage':
                next({ path: '/' });
                break;
            default:
                next();
                break;
        }
    } else next();
    // if (!isLoggedIn) {
    //   console.log('not login');
    //   next({ name: 'sign-in' });
    // } else {
    //   console.log('is login');
    //   next();
    // }
});
app.use(router);
app.component("account-layout", Account);
app.component("default-layout", Default);
app.component("main-layout", Main);
app.component("story-layout", Story);
app.component("share-layout", share);
app.component("empty-layout", empty);

app.mount("#app");
