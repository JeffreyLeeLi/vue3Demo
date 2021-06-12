const Hello = {
	data() {
		return {
			message: "hello world"
		}
	}
}

Vue.createApp(Hello).mount('#hello')