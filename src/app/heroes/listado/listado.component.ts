import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

heroes:string[]=['Spiderman', 'Thor', 'Ironman', 'Capitan America'];
borrado:string =''

borrarHeroe(){
  console.log('Borrando...');
  // this.heroes.pop()
  this.borrado  =this.heroes.shift()||''
// console.log(borrHer);

}
}
