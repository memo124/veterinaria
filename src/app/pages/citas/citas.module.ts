import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [CitasComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MatCardModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class CitasModule { }
