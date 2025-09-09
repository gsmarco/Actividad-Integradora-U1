// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Crud from '../views/Crud.vue'
import Acerca from '../views/Acerca.vue'

const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/crud', name: 'CRUD', component: Crud },
  { path: '/acerca', name: 'Acerca', component: Acerca }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
