import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../body/Index-home.vue';
import InventarioView from '../components/InventarioMain.vue';
import SignUp from '../components/sign-up.vue';



const routes = [
  {
    path: '/body/Index-home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/components/InventarioView',
    name: 'Inventario',
    component: InventarioView,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../body/Footer-Bar.vue')
  },
  {
    path: '/components/sign-up',
    name: 'Registro',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
