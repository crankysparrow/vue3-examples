let unnamedWithoutProps = `const routes = [
  { path: '/unnamedroute-noprops/:id', component: PersonNoProps },
]

// link
<router-link :to="\`/unnamedroute-noprops/\${person.id}\`">

// Person component:
<div>ID: {{ $route.params.id }}</div>`

let named = `// main.js
const routes = [
  { path: '/namedrouteprops/:id', name: 'namedroute-props', component: PersonProps, props: true },
]

// links
<router-link :to="{ name: 'namedroute-props', params: { id: person.id } }">

// person component script setup
const props = defineProps(['id'])
const props = defineProps({ id: String }) // or this
// person component: template
<div>ID: {{ id }}</div>
`

let unnamedProps = `const routes = [
  { path: '/unnamedroute-withprops/:id', component: PersonProps, props: true },
]

// links
<router-link :to="\`/unnamedroute-withprops/\${person.id}\`">

// this doesn't work - the param doesn't get passed
<router-link:to="{ path: '/unnamedroute-withprops/', params: { id: person.id } }">

// this is okay
<router-link :to="{ path: \`/unnamedroute-withprops/\${person.id}\` }">
`

let unnamedDoesntWork = `
<router-link:to="{ path: '/unnamedroute-withprops/', params: { id: person.id } }">`

let unnamedOkay = `<router-link :to="{ path: \`person-example2/\${person.id}\` }">`

let namedWithoutProps = `const routes = [
{ path: '/person-named-noprops/:id', component: PersonNoProps, name: 'personNameNoProps' } ]

// link
<router-link :to="{name: 'personNameNoProps', params: { id: person.id }}">
// component
<div>ID: {{ $route.params.id }}</div>`

let componentObject = `//main.js
const PersonObject = {
	props: ['id'],
	template: '<div>PersonObject component with id: {{ id }}</div>',
}
const routes = [
  { path: '/person-object/:id', component: PersonObject, props: true }
]
`

let routerPush = `router.push(\`person/\${charId.value}\`)
router.push({ name: 'person', params: { id: charId.value } })`

export default {
  named,
  unnamedProps,
  unnamedWithoutProps,
  namedWithoutProps,
  unnamedDoesntWork,
  unnamedOkay,
  componentObject,
  routerPush,
}
