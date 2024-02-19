import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { PlayerComponent } from './pages/player/player.component';

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
