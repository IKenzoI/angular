import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({

    selector: 'app-segundo',
    templateUrl: './segundo.component.html'
})

export class SegundoComponent {
    @Input() variavelRecebida;

    @Input() naturalRecebida;
    natural = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    @Output() display = new EventEmitter();
}
