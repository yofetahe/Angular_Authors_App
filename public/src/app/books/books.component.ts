import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  author: any;
  book: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAuthorById();
    this.book = {title: '', genre: '', publication_year: '', summery: '', cover: ''}
  }

  getAuthorById(){
    this._route.params.subscribe((params: Params)=> {      
      this._httpService.getAuthorById(params['id']).subscribe(data => {
        this.author = data;
      })
    })    
  }

  addBookInfo(id: string){
    this._httpService.updateAuthorBooks(id, this.book)
      .subscribe(data => {
        this.book = {title: '', genre: '', publication_year: '', summery: '', cover: ''}
        this.getAuthorById();
      })
  }

}
