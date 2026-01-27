import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Graph01 } from './Dashboard/graph01/graph01';
import { Graph02 } from './Dashboard/graph02/graph02';

const routes: Routes = [
  { path: '', component: Graph01 },
  { path: 'score-graph', component: Graph02 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

