import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    numero: number = 1;
    texto: string = 'abhj';
    booleano: boolean = true;
    variavel = `Dados ${this.texto}`;
    alerta() {
        window.alert('ALERTA DO COMPONENTE DO PAI');
    }
}

