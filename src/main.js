import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
// window.Kakao.init("b4cfc2aa8fb07bdcb3a05c8491e3ff80");
window.Kakao.init("3c8af3ee55a78ae55a14b178e6765b57");
