import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor() { }
    public character: Character[] = [{
        id: uuidv(),
        name: 'Krillin',
        power: 1000
    }, {
        id: uuidv(),
        name: "Goku",
        power: 9500
    },
    {
        id: uuidv(),
        name: "Vegeta",
        power: 8000
    }];

    addCharacter(character: Character): void {

        const newCharacter: Character = {
            id: uuidv(),
            ...character
        }
        console.log(newCharacter);
        this.character.push(newCharacter)

    }


    deleteCharacterById(id: string){
        this.character= this.character.filter(character=>character.id!==id)
    }

}