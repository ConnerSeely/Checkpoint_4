import { ProxyState } from '../AppState.js';
import { Todo } from '../Models/Todo.js';


let todoItemsApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/conner/todos',
    timeout: 12000
})

class TodoService {
    async getTodos() {
        const res = await todoItemsApi.get('')
        console.log('getTodo', res.data);
        ProxyState.todoItems = res.data.map(t => new Todo(t))
        console.log(ProxyState.todoItems);
    }
    async createTodo(todoData) {
        const res = await todoItemsApi.post('', todoData)
        console.log('createTodo', res.data);
        ProxyState.todoItems = [...ProxyState.todoItems, new Todo(res.data)]
    }

    async deleteTodo(id) {
        const res = await todoItemsApi.delete(id)
        console.log('deleteTodo', res.data);
        ProxyState.todoItems = ProxyState.todoItems.filter(t => t.id != id)
    }

    async completeTodo(id) {
        let todo = ProxyState.todoItems.find(t => t.id == id)
        console.log(todo);
        todo.completed = !todo.completed
        const res = await todoItemsApi.put(todo.id, todo)
        console.log('completeTodo', res.data);
        ProxyState.todoItems = ProxyState.todoItems
    }
}

export const todoService = new TodoService()