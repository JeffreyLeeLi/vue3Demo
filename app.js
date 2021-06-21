const HelloOpt = {
	data() {
		return {
			visible: true,
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

Vue.createApp(HelloOpt).mount('#hello')

const CounterOpt = {
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

Vue.createApp(CounterOpt).mount('#counter')

const TodoOpt = {
	data() {
		return {
			todos: [
				{id: 0, text: 'Learn JS'},
				{id: 1, text: 'Learn Vue'},
				{id: 2, text: '...'}
			]
		}
	}
}

const TodoApp = Vue.createApp(TodoOpt)

TodoApp.component('todo-comp', {
	props: [
		'data'
	],
	template: `<li>{{data.text}}</li>`
})

const TodoVM = TodoApp.mount('#todo')

console.log(TodoVM.$data)