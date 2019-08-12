import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'Fabiano';
    texto: string = 'fabs';
    numero: number = 20;
    verdadeirofalso: boolean = true;
    lista = [5, 6, 7, 8, 9];
    //lista1: Array<number>;
    qualquercoisa: any;

    variavel = `Varaivel numero com valor ${this.numero}`;
}

