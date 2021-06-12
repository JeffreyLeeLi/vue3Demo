const Hello = {
	data() {
		return {
			message: "hello world"
		}
	}
}

Vue.createApp(Hello).mount('#hello')

const Counter = {
	data() {
		return {
			counter: 0
		}
	}
}

Vue.createApp(Counter).mount('#counter')