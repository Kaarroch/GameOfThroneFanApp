import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  livre:any = []
  constructor(private http: HttpClient) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/books'
    this.http.get(url).subscribe((res)=>{
      this.livre = res
      console.log(this.livre)
    })
  }

  ngOnInit() {
    this.getData()
  }
}
