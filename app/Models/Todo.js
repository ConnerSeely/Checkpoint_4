export class Todo {
    constructor(todoData) {
        this.id = todoData.id
        this.task = todoData.task
        this.checked = todoData.checked || false
    }

    get Template() {
        return `
        <input id="${this.id}" type="checkbox"/>
        <span>${this.task}</span>
        <button class="delete-todo" onsubmit="app.todoController.deleteTodo()">
        </button>
        `
    }

}