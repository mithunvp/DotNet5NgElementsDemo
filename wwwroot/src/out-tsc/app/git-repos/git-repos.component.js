import { __decorate } from "tslib";
import { Component } from "@angular/core";
import { map } from "rxjs/operators";
let GitReposComponent = class GitReposComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() { }
    searchUserRepos() {
        this.http.get(`https://api.github.com/users/${this.userName}/repos`).
            pipe(map((item) => item.map(p => ({
            name: p.name,
            starsCount: p.stargazers_count
        }))))
            .subscribe((data) => {
            this.gitRepos = data;
        });
    }
};
GitReposComponent = __decorate([
    Component({
        selector: "app-git-repos",
        templateUrl: "./git-repos.component.html",
        styleUrls: ["./git-repos.component.css"]
    })
], GitReposComponent);
export { GitReposComponent };
//# sourceMappingURL=git-repos.component.js.map