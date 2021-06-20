const Hello = {
	data() {
		return {
			message: "hello world",
			hint: "This page is loaded @ "+(new Date().toLocaleString())
		}
	},
	methods: {
		reverseMessage() {
			this.message = this.message.split('').reverse().join('')
		}
	}
}

Vue.createApp(Hello).mount('#hello')

const Counter = {
	data() {
		return {
			counter: 0
		}
	},
	mounted() {
		setInterval(() => {
			this.counter++
		}, 1000)
	}
}

Vue.createApp(Counter).mount('#counter')