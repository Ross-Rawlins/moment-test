import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'discover',
    loadChildren: () => import('./features/nfts/screens/discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: '',
    redirectTo: 'discover',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
