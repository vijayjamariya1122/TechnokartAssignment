import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Movie';
  data: any = [];

  constructor(private service: ApiServiceService) {}

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.service
      .get('/movie/popular?api_key=0cec6876b4a300454c1e2e025270e2a8')
      .subscribe((data) => {
        this.data = data['results'];
      });
  }

  Search(e) {
    if (e.length > 0) {
      this.service
        .get(
          `/search/movie?api_key=0cec6876b4a300454c1e2e025270e2a8&query=${e}`
        )
        .subscribe((data) => {
          this.data = data['results'];
        });
    } else {
      this.getAllMovies();
    }
  }
}
