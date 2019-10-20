import {observable, action} from 'mobx'


export class Todo {
    constructor(value){
        this.value=value
    }
    id = new Date()
    @observable value = ""
    @observable done = false

    @action mark (value) {
        this.done = value
    }
}

export class TodoList {
    @observable list = []

    @action addTodo(value){
        this.list.push(new Todo(value))
    }
}

