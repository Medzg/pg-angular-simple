import { Ibook } from './../shared/interface/book';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-gest-book',
  templateUrl: './gest-book.component.html',
  styleUrls: ['./gest-book.component.scss']
})
export class GestBookComponent implements OnInit {
  books;
  constructor(private _bookService:ApiService) { }

  ngOnInit() {
   this.getData();
  }
  getData():any{

    this._bookService.getBooks().subscribe(
      data => { return this.books = data},
      err => console.error(err),
      () => console.log('done loading books')
    );

  }

}
