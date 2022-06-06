import { ProxyState } from '../AppState.js';
import { Todo } from '../Models/Todo.js';


let todoItemsApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/conner/',
    timeout: 12000
})

class TodoService {
    async getTodos() {
        const res = await todoItemsApi.get('todos')
        console.log('getTodo', res.data);
        ProxyState.todoItems = res.data.map(t => new Todo(t))
        console.log(ProxyState.todoItems, res.data);
    }
    async createTodo(todoData) {
        const res = await todoItemsApi.post('todos', todoData)
        console.log('createTodo', res.data);
        ProxyState.todoItems = [...ProxyState.todoItems, new Todo(res.data)]
    }

}

export const todoService = new TodoService()