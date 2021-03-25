import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

import { Book } from '../_models/book';
import { BookService } from '../_services/book.service';

import { Character } from '../_models/character';
import { CharacterService } from '../_services/character.service';

import { House } from '../_models/House';
import { HouseService } from '../_services/House.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;

    book: Book;
    character: Character;
    house: House;

    books: Book[];
    characters: Character[];
    houses: House[];

    constructor(private accountService: AccountService, private bookService: BookService, private characterService: CharacterService, private houseService: HouseService ) {
        this.user = this.accountService.userValue;
        
    }
}