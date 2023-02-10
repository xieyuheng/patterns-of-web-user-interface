import { RouteRecordRaw } from "vue-router"
import Menu from "./Menu.vue"
import PageNotFound from "./errors/PageNotFound.vue"
import Home from "./Home.vue"
import Dialog from "./Dialog.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/Menu", component: Menu },
  { path: "/dialog", component: Dialog },
  { path: "/:pathMatch(.*)", component: PageNotFound },
]
