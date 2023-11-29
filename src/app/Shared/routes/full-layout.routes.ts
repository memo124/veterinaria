import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'inicio',
        loadChildren: () => import('../../pages/inicio/inicio.module').then(m => m.InicioModule)
    },
    {
        path: 'historial',
        loadChildren: () => import('../../pages/historial/historial.module').then(m => m.HistorialModule)
    },
    {
        path: 'citas',
        loadChildren: () => import('../../pages/citas/citas.module').then(m => m.CitasModule)
    },
    {
      path: 'editarPerfil',
      loadChildren: () => import('../../pages/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilModule)
  },

];
