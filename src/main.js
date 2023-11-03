import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/client/index.vue'
import Story from './Layout/Wrapper/client-story/index.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("story-layout", Story);

app.mount("#app")