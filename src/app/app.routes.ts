import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Demo } from './demo/demo';

export const routes: Routes = [
  { path: 'layout', component: Layout },
  { path: 'demo', component: Demo },
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
];
