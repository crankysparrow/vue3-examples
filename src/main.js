import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

import 'prismjs'
import '~/styles/prism-base2tone-evening-light.css'

import DynamicRoutes from './contents/DynamicRoutes.vue'
import People from './contents/example-content/People.vue'
import Home from './contents/Home.vue'
import DataRefs from './contents/DataRefs.vue'
import Resources from './contents/Resources.vue'
import PersonNoProps from './contents/route-example-person-noprops/id.vue'
import Person from './contents/route-examples-person/id.vue'
import PersonDefault from './contents/route-examples-person/PersonDefault.vue'

import './style.css'

const PersonObject = {
  props: ['id'],
  template: '<div class="page">Person: {{ id }}</div>',
}

const app = createApp(App)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/resources', component: Resources, name: 'resources' },
  {
    path: '/people',
    component: People,
    children: [
      {
        name: 'people',
        path: '',
        component: PersonDefault,
      },
      {
        path: '/people/:id',
        component: Person,
        props: true,
        name: 'person',
      },
    ],
  },
  {
    path: '/dynamic-routes',
    component: DynamicRoutes,
    name: 'dynamic-routes',
  },
  { path: '/person-without-name/:id', component: Person, props: true },
  { path: '/person-noprops/:id', component: PersonNoProps },
  {
    path: '/person-named-noprops/:id',
    component: PersonNoProps,
    name: 'personNameNoProps',
  },
  { path: '/person-object/:id', component: PersonObject, props: true },

  {
    path: '/data-refs',
    component: DataRefs,
    name: 'data-refs',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
