import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CardItemEditComponent } from './components/card-item-edit/card-item-edit.component';
import { CardItemEditReactiveComponent } from './components/card-item-edit-reactive/card-item-edit-reactive.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninGuard } from './guards/signin.guard';


const routes: Routes = [
  { path: 'Cards', component: CardListComponent, canActivate: [AuthGuard] },
  { path: 'Topics', component: TopicListComponent, canActivate: [AuthGuard] },
  { path: 'card/editreactive/:id', component: CardItemEditReactiveComponent, canActivate: [AuthGuard] },
  { path: 'card/edit/:id', component: CardItemEditComponent, canActivate: [AuthGuard] },
  { path: 'ErrorHandling', component: ErrorHandlingComponent },
  { path: 'signin', component: SignInComponent, canActivate: [SigninGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
