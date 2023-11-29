import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilModule } from './editar-perfil.module';
import { EditarPerfilComponent } from './editar-perfil.component';

const routes: Routes = [
  {path: '', component:EditarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarPerfilRoutingModule { }
