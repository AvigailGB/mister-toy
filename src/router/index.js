import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import toyApp from '../views/toy-app.vue'
import toyEdit from '../views/toy-edit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/toy',
      name: 'toyApp',
      component: toyApp
    },
    {
      path: '/edit',
      name: 'toyEdit',
      component: toyEdit
    },
  ]
})

export default router
