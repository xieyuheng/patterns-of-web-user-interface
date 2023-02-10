import { RouteRecordRaw } from "vue-router"
import PageNotFound from "./errors/PageNotFound.vue"
import Home from "./Home.vue"
import Dropdown from "./Dropdown.vue"
import Modal from "./Modal.vue"
import Modal2 from "./Modal2.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/dropdown", component: Dropdown },
  { path: "/modal", component: Modal },
  { path: "/modal2", component: Modal2 },
  { path: "/:pathMatch(.*)", component: PageNotFound },
]
