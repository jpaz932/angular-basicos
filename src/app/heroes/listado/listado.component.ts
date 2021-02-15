import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
})

export class ListadoComponent 
{
    heroes: string[] = ['Spiderman', 'Ironman', 'Thor'];
    heroeBorrado: string = '';

    borrarHeroe():void
    {
        // this.heroes.splice(this.heroes.length-1, 1);
        this.heroeBorrado = this.heroes.shift() || '';

    }
}
