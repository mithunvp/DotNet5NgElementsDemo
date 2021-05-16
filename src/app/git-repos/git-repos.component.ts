import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { IGitHubRepoStars } from "./IGitHubRepoStars";
import { Observable } from "rxjs";

@Component({
    selector: "app-git-repos",
    templateUrl: "./git-repos.component.html",
    styleUrls: ["./git-repos.component.css"]   
})
export class GitReposComponent implements OnInit {
    userName: string;
    gitRepos: Observable<IGitHubRepoStars>;
    constructor(private http: HttpClient) { }

    ngOnInit() { }

    searchUserRepos() {
        this.http.get(`https://api.github.com/users/${this.userName}/repos`).
            pipe(
                map((item: any) => item.map(p => <IGitHubRepoStars>
                    {
                        name: p.name,
                        starsCount: p.stargazers_count

                    })))
            .subscribe((data) => {
                this.gitRepos = data;
            });
    }
}