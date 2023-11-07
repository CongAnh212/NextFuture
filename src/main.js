import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Default from "./Layout/Wrapper/client/master_page/index.vue";
import Story from "./Layout/Wrapper/client/story/index.vue";
import Account from "./Layout/Wrapper/client/account/index.vue";
const app = createApp(App);

app.use(router);
app.component("account-layout", Account);
app.component("default-layout", Default);
app.component("story-layout", Story);

app.mount("#app");
