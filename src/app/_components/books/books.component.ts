import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from '../../_models/book';
import { BookService } from '../../_services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  livre:any = []
  isShow:boolean = false;
  constructor(private http: HttpClient, private bookService: BookService) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/books'
    this.http.get(url).subscribe((res)=>{
      this.livre = res
      console.log(this.livre)
    })
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  filter(data){
    this.bookService.filterBooks(data.detail.value).subscribe(response =>{
      this.livre = response;
    })
  }

  ngOnInit() {
    this.getData()
  }
}
