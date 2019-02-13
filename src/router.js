import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
// TODO: Import the Survey component
import Survey from '@/views/Survey'
// TODO: Import the Secret component
import Secret from '@/views/Secret'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/survey',
      name: 'survey',
      component: Survey
    },
    {
      path: '/secret',
      name: 'secret',
      component: Secret
    }

    // Add the Survey route definition
    // Add the Secret route definition
  ]
})
