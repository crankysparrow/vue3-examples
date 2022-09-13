let named = `// main.js
const routes = [
  { path: '/person/:id', name: 'person', component: Person, props: true },
]
    
// people.vue
<router-link :to="{ name: 'person', params: { id: person.id } }">
      
// Person component: script setup
const props = defineProps(['id'])
const props = defineProps({ id: String }) // or this
// Person component: template
<div>ID: {{ id }}</div>  
`

let unnamedProps = `const routes = [
  { path: '/person-without-name/:id', component: Person, props: true },
]

// people.vue 
<router-link :to="\`/person-without-name/\${person.id}\`">`

let unnamedNoProps = `const routes = [
  { path: '/person-noprops/:id', component: PersonNoProps },
]

// people.vue
<router-link :to="\`/person-noprops/\${person.id}\`">

// Person component:
<div>ID: {{ $route.params.id }}</div>`

let namedNoProps = `const routes = [
{ path: '/person-named-noprops/:id', component: PersonNoProps, name: 'personNameNoProps' } ]

//people.vue 
<router-link :to="name: 'personNameNoProps', params: { id: person.id }">
// Person component:
<div>ID: {{ $route.params.id }}</div>`

let unnamedLinkWithPath = `<router-link:to="{ path: '/person-without-name/', params: { id: person.id } }">`

let unnamedLinkPathNoParams = `<router-link :to="{ path: \`person-without-name/\${person.id}\` }">`

let componentObject = `//main.js 
const PersonObject = {
	props: ['id'],
	template: '<div>Person: {{ id }}</div>',
}
const routes = [
  { path: '/person-object/:id', component: PersonObject, props: true }
]
`

let routerPush = `//either one works
router.push(\`person/\${charId.value}\`)
router.push({ name: 'person', params: { id: charId.value } })`

export default {
	named,
	unnamedProps,
	unnamedNoProps,
	namedNoProps,
	unnamedLinkWithPath,
	unnamedLinkPathNoParams,
	componentObject,
	routerPush,
}
