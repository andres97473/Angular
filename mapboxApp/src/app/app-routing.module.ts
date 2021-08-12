import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaHeatComponent } from './components/mapa-heat/mapa-heat.component';
import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';

const routes: Routes = [
  { path: 'mapa-home', component: MapaHomeComponent },
  { path: 'mapa-heat', component: MapaHeatComponent },
  { path:'**', redirectTo: '/mapa-home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
