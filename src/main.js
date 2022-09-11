import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import './style.css'

import 'highlight.js/styles/lioshi.css'
// import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import DynamicRoutes from './contents/DynamicRoutes.vue'
import Home from './contents/Home.vue'
import People from './contents/People.vue'
import Resources from './contents/Resources.vue'
import PersonNoProps from './contents/route-example-person-noprops/id.vue'
import Person from './contents/route-examples-person/id.vue'
import PersonDefault from './contents/route-examples-person/PersonDefault.vue'

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
	// { path: '/person/:id', name: 'person', component: Person, props: true },
	{ path: '/person-without-name/:id', component: Person, props: true },
	{ path: '/person-noprops/:id', component: PersonNoProps },
	{
		path: '/person-named-noprops/:id',
		component: PersonNoProps,
		name: 'personNameNoProps',
	},
	{ path: '/person-object/:id', component: PersonObject, props: true },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

app.use(router)

hljs.registerLanguage('javascript', javascript)
app.use(hljsVuePlugin)
app.mount('#app')

// install vue router:
// https://router.vuejs.org/guide/#javascript
