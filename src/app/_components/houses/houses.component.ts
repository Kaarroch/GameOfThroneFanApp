import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  maison:any = []
  constructor(private http: HttpClient) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/houses'
    this.http.get(url).subscribe((res)=>{
      this.maison = res
      console.log(this.maison)
    })
  }

  ngOnInit() {
    this.getData()
  }
}
