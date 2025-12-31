import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Casino from "../views/Casino.vue"

const routes = [
    { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/casino", component: Casino }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
