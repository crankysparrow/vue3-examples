<script>
import ToggleSwitch from '~/components/props-refs/ToggleSwitch.vue'

export default {
	components: {
		ToggleSwitch,
	},
	data() {
		return {
			sides: 6,
			options: ['points', 'sides'],
			current: 'points',
		}
	},
	computed: {
		points() {
			let pts = ''
			let currentAngle = Math.floor(Math.random() * 180)
			let toCount =
				this.current === 'points' ? this.sides * 2 : this.sides
			let angleStep = (Math.PI * 2) / toCount

			for (let i = 0; i < toCount; i++) {
				let multiplier =
					this.current === 'points' && i % 2 === 0 ? 30 : 150

				let ptx = 150 + Math.cos(currentAngle) * multiplier
				ptx = Math.round(ptx * 100) / 100

				let pty = 150 + Math.sin(currentAngle) * multiplier
				pty = Math.round(pty * 100) / 100

				pts = pts.concat(`${ptx} ${pty}`)
				if (i < toCount - 1) pts = pts.concat(', ')
				currentAngle += angleStep
			}
			// return '0 300, 300 0, -300 0'
			return pts
		},
	},

	methods: {},
}
</script>

<template>
	<div>
		<!-- <h1>{{ current }}: {{ sides }}</h1> -->
		<div class="options-choices">
			<div class="buttons-wrap">
				<div class="label-title">count</div>
				<div class="count-note">{{ sides }}</div>
				<button @click="() => sides++"><span>+</span></button>
				<button @click="() => sides--"><span>-</span></button>
			</div>
			<ToggleSwitch :options="options" v-model="current">
				<template #label-title>
					<div class="label-title">mode</div>
				</template>
			</ToggleSwitch>
		</div>
		<svg viewBox="0 0 300 300">
			<polygon :points="points" />
		</svg>
	</div>
</template>

<style scoped>
svg {
	max-width: 500px;
	max-height: 500px;
	margin: 0 auto;
	display: block;
}
svg polygon {
	fill: var(--color-raspberry-3);
}

h1 {
	margin-top: 0;
}

.options-choices {
	display: grid;
	justify-content: center;
	position: relative;
	grid-template-columns: auto auto;
	column-gap: 3rem;
	margin-bottom: 50px;
}

.buttons-wrap {
	display: grid;
	justify-content: space-between;
	grid-template-columns: 48% 48%;
}
.buttons-wrap .label-title {
	grid-column: 1 / 3;
	grid-row: 1;
}
.buttons-wrap .count-note {
	grid-column: 1 / 3;
	grid-row: 2;
	text-align: center;
	font-size: 5rem;
	font-weight: 700;
	line-height: 1;
	margin-bottom: 0.5rem;
	color: var(--color-indigo-4);
}

.label-title {
	color: var(--color-violet-4);
	font-size: 2.5rem;
	font-weight: 500;
	display: block;
	text-align: center;
	line-height: 1.1;
	margin-bottom: 1rem;
}

button {
	width: 3rem;
	height: 3rem;
	padding: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin: 0 1.5rem;
}

button span {
	font-size: 4rem;
	font-weight: 500;
	line-height: 3rem;
	padding-bottom: 0.6rem;
}
</style>
