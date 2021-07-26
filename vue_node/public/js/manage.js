;
(function (window) {
	// 'use strict';
    const usersarray = [{
        name: 'lily1',
        account: '1',
        deparment: 'dev',
        gender:'female'
    },
    {
        name: 'lily',
        account: '2',
        deparment: 'dev',
        gender:'female'
    },
    {
        name: 'lily',
        account: '3',
        deparment: 'dev',
        gender:'female'
    },
    {
        name: 'lily',
        account: '4',
        deparment: 'dev',
        gender:'female'
    }]
    
	Vue.directive('focus', {
		inserted: function (el) {
			el.focus()
		}
	})
	Vue.directive('todo-focus', {
		update(el,binding) {
			console.log(binding.value)
			// if(binding.value){
			// 	el.focus()
			// }
			el.focus()
		}
	})

	// Your starting point. Enjoy the ride!
	const app = new Vue({
		data: {
			title: 'todo list',
            test:'123',
			// todos,
			todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
			taskname: '',
			currentediting: null,
			filt: 'all',
            users:usersarray,

		},
		computed: {

			//就是一个方法
			remainingCount() {
				return this.todos.filter(t => !t.completed).length
			},
			toggleall: {
				get() {
					return this.todos.every(t => t.completed)
				},
				set() {
					const checked = !this.toggleall //调用自己get方法
					this.todos.forEach(element => {
						element.completed = checked
					});
				}
			},
			filtertodos() {
				switch (this.filt) {

					case 'completed':
						return this.todos.filter(t => t.completed)
					case 'active':
						return this.todos.filter(t => !t.completed)
					default:
						return this.todos

				}
			}
		},
		watch: {
			todos: {
				handler() {
					// console.log('todos');
					window.localStorage.setItem('todos', JSON.stringify(this.todos))
				},
				deep: true //深度监视
			}
		},
		methods: {
			addlist(e) {
				// console.log('add');
				const value = e.target.value.trim()
				if (!value.length) return
				const todos = this.todos
				todos.push({
					id: this.todos.length + 1,
					task: this.taskname,
					completed: false,
				})
				// window.localStorage.setItem('todos',JSON.stringify(todos))
				this.taskname = ''
			},
			togglechange(e) {
				const checked = e.target.checked
				console.log(checked);
				this.todos.forEach(element => {
					element.completed = checked
				});
			},
			destory(index, e) {
				// console.log(index)
				// console.log(e)
				this.todos.splice(index, 1)
			},
			edittask(todo) {
				this.currentediting = todo
			},
			saving(todo, e) {
				const target = e.target
				const value = target.value.trim()


				if (!value.length) {
					this.todos.splice(todo, 1)
				} else {
					todo.task = value
					this.currentediting = null
				}
			},
			cancel() {
				this.currentediting = null
			},
			clear() {
				// this.todos.forEach((item,index) => {
				// 	if (item.completed){
				// 		this.todos.splice(index,1)
				// 	}
				// });
				// for (let i = 0; i < this.todos.length; i++) {
				// 	if (this.todos[i].completed){
				// 				this.todos.splice(i,1)
				// 				i-- //纠正索引便利
				// 			}
				// }
				this.todos = this.todos.filter(t => !t.completed)

			},
			getremainingCount() {
				return this.todos.filter(t => !t.completed).length
			}
		}
	}).$mount('#app')


	//页面不预加载
	window.onhashchange = function () {
		app.filt = window.location.hash.substr(2)
	}



})(window);
