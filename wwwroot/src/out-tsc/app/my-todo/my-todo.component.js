import { __decorate } from "tslib";
import { Component } from "@angular/core";
let MyTodoComponent = class MyTodoComponent {
    constructor() {
        this.myTodos = [];
    }
    ngOnInit() {
        this.myTodos = ["Pay Bills", "Clean Car", "Pay Taxes"];
    }
    addMyTodo() {
        this.myTodos.push(this.newTodo);
        this.newTodo = "";
    }
};
MyTodoComponent = __decorate([
    Component({
        selector: "app-my-todo",
        templateUrl: "./my-todo.component.html",
        styleUrls: ["./my-todo.component.css"]
    })
], MyTodoComponent);
export { MyTodoComponent };
//# sourceMappingURL=my-todo.component.js.map