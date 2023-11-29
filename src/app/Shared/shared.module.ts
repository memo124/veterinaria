import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavComponent,
    SidebarComponent,
    NgbModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule
  ],
  declarations:[
    FooterComponent,
    NavComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
