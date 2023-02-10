import { RouteRecordRaw } from "vue-router"
import Dropdown from "./Dropdown.vue"
import PageNotFound from "./errors/PageNotFound.vue"
import Home from "./Home.vue"
import Modal from "./Modal.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/dropdown", component: Dropdown },
  { path: "/modal", component: Modal },
  { path: "/:pathMatch(.*)", component: PageNotFound },
]
