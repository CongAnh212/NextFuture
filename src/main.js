import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./Layout/Wrapper/client/master_page/index.vue";
import Main from "./Layout/Wrapper/client/main_master_page/index.vue";
import Story from "./Layout/Wrapper/client/story/index.vue";
import Account from "./Layout/Wrapper/client/account/index.vue";
import share from "./layout/wrapper/client/share_master/index.vue";
const app = createApp(App);

app.use(router);
app.component("account-layout", Account);
app.component("default-layout", Default);
app.component("main-layout", Main);
app.component("story-layout", Story);
app.component("share-layout", share);

app.mount("#app");
