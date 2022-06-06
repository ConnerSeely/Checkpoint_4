import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";

function _draw() {
    let todos = ProxyState.todoItems
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('todo-list').innerHTML = template
}

export class TodoController {
    constructor() {
        console.log('loaded Todos');
        ProxyState.on('todoItems', _draw)
        this.getTodos()
    }


    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            console.log('creating todo');
            let form = window.event.target
            let todoData = {
                task: form.task.value
            }
            await todoService.createTodo(todoData)
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }

}