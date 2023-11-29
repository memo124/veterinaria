import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    InicioRoutingModule,
    ReactiveFormsModule 
  ]
})
export class InicioModule { }
