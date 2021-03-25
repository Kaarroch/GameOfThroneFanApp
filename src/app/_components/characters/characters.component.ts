import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  personnage:any = []
  constructor(private http: HttpClient) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/characters'
    this.http.get(url).subscribe((res)=>{
      this.personnage = res
      console.log(this.personnage)
    })
  }

  ngOnInit() {
    this.getData()
  }
}
