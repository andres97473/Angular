import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'games/add', component: GameFormComponent },
  { path: 'games/edit/:id', component: GameFormComponent },
  { path: '**',redirectTo: '/games', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
