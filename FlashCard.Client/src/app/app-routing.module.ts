import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { CardItemEditComponent } from './card-item-edit/card-item-edit.component';


const routes: Routes = [
  { path: 'Cards', component: CardListComponent },
  { path: 'Topics', component: TopicListComponent },
  { path: 'card/edit/:id', component: CardItemEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
