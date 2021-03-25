import { Injectable } from '@angular/core';
import { House } from '../_models/House';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HouseResponse } from '../_models/house-response';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HouseService {
  constructor(private httpClient: HttpClient) { }

  getHouse(): Observable<House> {
    return this.httpClient.get<HouseResponse>('https://www.anapioficeandfire.com/api/houses')
      .pipe(map(convertHouseResponseToHouse));
  }

}

function convertHouseResponseToHouse(response: HouseResponse): House {
  return {
    text: response.name
  };
}