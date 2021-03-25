import { Injectable } from '@angular/core';
import { Character } from '../_models/Character';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterResponse } from '../_models/character-response';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private httpClient: HttpClient) { }

  getCharacter(): Observable<Character> {
    return this.httpClient.get<CharacterResponse>('https://www.anapioficeandfire.com/api/characters')
      .pipe(map(convertCharacterResponseToCharacter));
  }

  filterCharacters(filter): Observable<Character[]>{
    return this.httpClient.get<Character[]>(`https://www.anapioficeandfire.com/api/books?sort=${filter}`);
  }
}

function convertCharacterResponseToCharacter(response: CharacterResponse): Character {
  return {
    text: response.name
  };
}