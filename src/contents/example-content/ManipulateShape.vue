<script>
import ToggleSwitch from '~/components/ToggleSwitch.vue'

export default {
	components: {
		ToggleSwitch,
	},
	data() {
		return {
			count: 6,
			options: ['points', 'count'],
			current: 'points',
		}
	},
	computed: {
		points() {
			let pts = ''
			let currentAngle = Math.floor(Math.random() * 180)
			let toCount =
				this.current === 'points' ? this.count * 2 : this.count
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
		<div class="options-choices">
			<div class="buttons-wrap">
				<div class="label-title">count</div>
				<div class="count-note">{{ count }}</div>
				<button @click="() => count++"><span>+</span></button>
				<button @click="() => count--"><span>-</span></button>
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
</style>
