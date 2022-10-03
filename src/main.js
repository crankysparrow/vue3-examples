import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue/dist/vue.esm-bundler'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'prismjs'
import '~/styles/prism-base2tone-evening-light.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

import DynamicRoutes from './contents/DynamicRoutes.vue'
import People from './contents/dynamic-routes/People.vue'
import Home from './contents/Home.vue'
import Resources from './contents/Resources.vue'
import PersonNoProps from './contents/dynamic-routes/people/Person-noprops.vue'
import PersonProps from './contents/dynamic-routes/people/Person-props.vue'
import Person from './contents/dynamic-routes/people/Person.vue'
import PersonIndex from './contents/dynamic-routes/people/PersonIndex.vue'

import DataRefs from './contents/DataRefs.vue'
import ManipulateShape from '~/contents/data-refs/ManipulateShape.vue'
import ManipulateShapeOptions from '~/contents/data-refs/manipulate-shape/ManipulateShapeOptions.vue'
import ManipulateShapeReactive from '~/contents/data-refs/manipulate-shape/ManipulateShapeReactive.vue'
import ManipulateShapeRef from '~/contents/data-refs/manipulate-shape/ManipulateShapeRef.vue'

import Stores from '~/contents/Stores.vue'

import './style.css'

const PersonObject = {
  props: ['id'],
  template: '<div class="page">PersonObject component with ID: {{ id }}</div>',
}

const app = createApp(App)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/resources', component: Resources, name: 'resources' },
  {
    path: '/dynamic-routes',
    component: DynamicRoutes,
    name: 'dynamic-routes',
  },
  {
    path: '/people',
    component: People,
    children: [
      {
        name: 'people',
        path: '',
        component: PersonIndex,
      },
      {
        path: '/people/:id',
        component: Person,
        props: true,
        name: 'person',
      },
    ],
  },

  // unnamed route without props
  { path: '/unnamedroute-noprops/:id', component: PersonNoProps },

  // unnamed route with props
  { path: '/unnamedroute-withprops/:id', component: PersonProps, props: true },
  // named route without props
  {
    path: '/namedroute-noprops/:id',
    component: PersonNoProps,
    name: 'namedroute-noprops',
  },
  // named route with props
  {
    path: '/namedrouteprops/:id',
    component: PersonProps,
    name: 'namedroute-props',
    props: true,
  },
  // route with component from js object above
  { path: '/person-object/:id', component: PersonObject, props: true },

  {
    path: '/data-refs',
    component: DataRefs,
    name: 'data-refs',
  },

  {
    path: '/shape',
    component: ManipulateShape,
    name: 'shape',
    children: [
      {
        name: 'options',
        component: ManipulateShapeOptions,
        name: 'shape-options',
        path: 'shape-options',
      },
      {
        name: 'reactive',
        component: ManipulateShapeReactive,
        name: 'shape-reactive',
        path: 'shape-reactive',
      },
      {
        name: 'ref',
        component: ManipulateShapeRef,
        name: 'shape-ref',
        path: 'shape-ref',
      },
    ],
  },

  {
    path: '/store',
    component: Stores,
    name: 'stores',
  },

  // {
  //   path: '/manipulate-shape-options',
  //   name: 'shape-options',
  //   component: ManipulateShapeOptions,
  // },
  // {
  //   path: '/manipulate-shape-composition',
  //   name: 'shape-composition',
  //   component: ManipulateShape,
  // },
  // {
  //   path: '/manipulate-shape-reactive',
  //   name: 'shape-composition-reactive',
  //   component: ManipulateShapeReactive,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(createPinia())
app.mount('#app')
