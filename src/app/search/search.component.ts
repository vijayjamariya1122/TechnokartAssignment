import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() SearchText = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  ChangeInput(e) {
    this.SearchText.emit(e.target.value);
  }
}
