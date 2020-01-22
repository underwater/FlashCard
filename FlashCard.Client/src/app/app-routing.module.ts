import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { CardItemEditComponent } from './card-item-edit/card-item-edit.component';
import { CardItemEditReactiveComponent } from './card-item-edit-reactive/card-item-edit-reactive.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';


const routes: Routes = [
  { path: 'Cards', component: CardListComponent },
  { path: 'Topics', component: TopicListComponent },
  { path: 'card/editreactive/:id', component: CardItemEditReactiveComponent },
  { path: 'card/edit/:id', component: CardItemEditComponent },
  { path: 'ErrorHandling', component: ErrorHandlingComponent },
  // { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
