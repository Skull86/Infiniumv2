import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/dev',
    name: 'Development',
    component: () => import('../views/DevelopmentPage.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/TodoPage.vue')
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import('../views/SurveyPage.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '/survey-results',
    name: 'SurveyResults',
    component: () => import('../views/SurveyResultsPage.vue')
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
