import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appCombobox]'
})
export class ComboBoxDirective{

    @HostBinding('class.open') estaAbierto: boolean = false;

    constructor(){}
    
    @HostListener('click') abrir(){
        console.log('click');
        this.estaAbierto = !this.estaAbierto;
    }

}