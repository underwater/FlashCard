import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { TopicService } from './services/topic.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardItemComponent } from './components/card-item/card-item.component';
import { TopicItemComponent } from './components/topic-item/topic-item.component';
import { TopicItemAddComponent } from './components/topic-item-add/topic-item-add.component';
import { CardItemEditComponent } from './components/card-item-edit/card-item-edit.component';
import { CardItemEditReactiveComponent } from './components/card-item-edit-reactive/card-item-edit-reactive.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsService } from './services/dialogs.service';
import { DeletePromptComponent } from './dialogs/delete-prompt/delete-prompt.component';
import { DialogsRootComponent } from './dialogs/dialogs-root/dialogs-root.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { SERVER_ROOT } from './SERVER_ROOT';
import { AuthGuard } from './guards/auth.guard';
import { SigninGuard } from './guards/signin.guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardListComponent,
    TopicListComponent,
    CardItemComponent,
    TopicItemComponent,
    TopicItemAddComponent,
    CardItemEditComponent,
    CardItemEditReactiveComponent,
    ConfirmDialogComponent,
    DeletePromptComponent,
    DialogsRootComponent,
    ErrorHandlingComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    TopicService,
    DialogsService,
    AuthService,
    AuthGuard,
    SigninGuard,
    {
      provide: SERVER_ROOT,
      useValue: "https://localhost:5001"
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
