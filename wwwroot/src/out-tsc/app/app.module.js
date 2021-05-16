import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from "@angular/elements";
import { AppComponent } from './app.component';
import { MyTodoComponent } from './my-todo/my-todo.component';
import { GitReposComponent } from './git-repos/git-repos.component';
let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap() {
        const myTodoElment = createCustomElement(MyTodoComponent, {
            injector: this.injector
        });
        customElements.define("mytodo-element", myTodoElment);
        const githubStars = createCustomElement(GitReposComponent, {
            injector: this.injector
        });
        customElements.define("github-stars", githubStars);
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            MyTodoComponent,
            GitReposComponent
        ],
        imports: [
            BrowserModule,
            FormsModule
        ],
        providers: [],
        entryComponents: [MyTodoComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map