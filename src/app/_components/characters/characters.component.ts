import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from '../../_models/character';
import { CharacterService } from '../../_services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  personnage:any = []
  isShow:boolean = false;
  constructor(private http: HttpClient, private characterService: CharacterService) { }

  getData(){
    const url ='https://www.anapioficeandfire.com/api/characters'
    this.http.get(url).subscribe((res)=>{
      this.personnage = res
      console.log(this.personnage)
    })
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit() {
    this.getData()
  }

  filter(data){
    this.characterService.filterCharacters(data.detail.value).subscribe(response =>{
      this.personnage = response;
    })
  }
}
