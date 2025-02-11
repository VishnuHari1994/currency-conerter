import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    redirectTo: '',
},
{
  path: '',
  loadChildren: () => import('../app/feature/feature.module').then((m) => m.FeatureModule)
},
];


