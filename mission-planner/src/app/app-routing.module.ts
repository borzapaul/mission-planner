import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlannerComponent } from './planner/planner.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'planner', component: PlannerComponent },
  { path: 'player', component: PlayerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
