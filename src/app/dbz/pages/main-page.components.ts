import { Component,  } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
    selector: 'app-main-dbz',
    templateUrl: './main-page.components.html'
})

export class MainPageComponent{

constructor(private dbzService:DbzService){}

get character(): Character[]{
    return [...this.dbzService.character]
}
onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id)
}
onNewCharacter(character: Character): void{
    this.dbzService.addCharacter(character)
}
}