import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { House } from '../../_models/house';
import { HouseService } from '../../_services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  maison:any = [];
  isShow:boolean = false;
  constructor(private http: HttpClient, private houseService: HouseService) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/houses'
    this.http.get(url).subscribe((res)=>{
      this.maison = res
      console.log(this.maison)
    })
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.getData()
  }

  filter(data){
    this.houseService.filterHouses(data.detail.value).subscribe(response =>{
      this.maison = response;
    })
  }
}
