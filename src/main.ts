import { createApp } from "vue"
import App from "./App.vue"
import "./assets/fonts/index.css"
import "./assets/styles/index.css"
import router from "./router"

const root = createApp(App)

root.use(router)

root.mount("#app")
