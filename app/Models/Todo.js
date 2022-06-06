

export class Todo {
    constructor(todoData) {
        this.id = todoData.id
        this.description = todoData.description
        this.completed = todoData.completed || false
    }

    get Template() {
        return `
        <li class="text-light"> <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.todoController.completeTodo('${this.id}')"> 
        ${this.description} 
        <input type="button" value="Delete" onclick="app.todoController.deleteTodo('${this.id}');"></li>
        `
    }

}