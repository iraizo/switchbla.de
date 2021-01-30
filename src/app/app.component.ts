import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


class Repo {
  constructor (
    public name: string,
    public description: string,
    public url: string,
    public stargazers_count: number
  ) {

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  repos : Repo[] = [];



  constructor(private http: HttpClient) {}

  async ngOnInit() {
    await this.http.get("https://api.github.com/users/iraizo/repos").toPromise().then(data => {
      for(const d of (data as any)) {
        this.repos.push({
          name: d.name,
          description: d.description,
          url: d.html_url,
          stargazers_count: d.stargazers_count
        });
      }
    });
    this.repos.sort(function(a,b) {
        return a.stargazers_count - b.stargazers_count;
    });


    this.repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

    this.repos.length = 5;
  }



  title = 'raizo-dev';


}
