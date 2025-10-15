import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import TestModern from '../components/TestModern.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Test',
    component: TestModern
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
