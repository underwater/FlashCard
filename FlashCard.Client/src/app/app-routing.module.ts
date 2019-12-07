import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';


const routes: Routes = [
  { path: 'Cards', component: CardListComponent },
  { path: 'Topics', component: TopicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
