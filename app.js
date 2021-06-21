const Hello = {
	data() {
		return {
			visible: true,
			message: "hello world",
			hint: "This page is loaded @ "+(new Date().toLocaleString()),
			todos: [
				{text: 'Learn JS'},
				{text: 'Learn Vue'},
				{text: '...'}
			]
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

const Todo = {
	data() {
		return {
			todos: [
				{text: 'Learn JS'},
				{text: 'Learn Vue'},
				{text: '...'}
			]
		}
	}
}

const TodoApp = Vue.createApp(Todo)
TodoApp.component('todo-comp', {
	props: [
		'data'
	],
	template: `<li>{{data.text}}</li>`
})
TodoApp.mount('#todo')