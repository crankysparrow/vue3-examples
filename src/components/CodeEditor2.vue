<script>
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import prism from 'prismjs'
// import 'prismjs/themes/prism-solarizedlight.css'
// import '../styles/prism-laserwave.css'

import { defineComponent, ref } from 'vue'

export default defineComponent({
	props: ['content'],
	components: {
		PrismEditor,
	},
	setup(props) {
		const editorCode = ref(props.content)
		const highlighter = (code) => {
			return prism.highlight(code, prism.languages.js)
		}
		return { editorCode, highlighter }
	},
})
</script>

<template>
	<div>
		<prism-editor
			class="editor"
			v-model="editorCode"
			:highlight="highlighter"
			readonly
			line-numbers>
		</prism-editor>
	</div>
</template>

<style scoped>
.editor {
	background: #f9fbfb;
	color: #7289fd;

	font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
	font-size: 0.9rem;
	line-height: 1.4;
	padding: 5px;
}
</style>
