import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  author = {
    name: '',
    image: ''
  }

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  cancelAuthorAdding(){
    this._router.navigate(['/list']);
  }

  addAuthorInfo(){
    this._httpService.addAuthor(this.author).subscribe(data => {
      this.author = { name: '', image: '' }
      this._router.navigate(['/list']);
    });
  }

}
