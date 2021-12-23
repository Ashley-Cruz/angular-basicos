import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Aquí pongo las cosas que quieron que sean visibles fuera de este módulo
        ListadoComponent //Esta componente se está utilizando en app.component.html, por eso lo estoy exportando
    ],
    imports: [ //Aquí van los módulos
        CommonModule
    ]
})

export class HeroeModule {

}