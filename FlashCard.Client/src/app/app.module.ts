import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardListComponent } from './card-list/card-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './services/topic.service';

import { HttpClientModule } from '@angular/common/http';
import { CardItemComponent } from './card-item/card-item.component';
import { TopicItemComponent } from './topic-item/topic-item.component';
import { TopicItemAddComponent } from './topic-item-add/topic-item-add.component';
import { CardItemEditComponent } from './card-item-edit/card-item-edit.component';
import { CardItemEditReactiveComponent } from './card-item-edit-reactive/card-item-edit-reactive.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DialogsService } from './services/dialogs.service';
import { DeletePromptComponent } from './dialogs/delete-prompt/delete-prompt.component';
import { DialogsRootComponent } from './dialogs/dialogs-root/dialogs-root.component';


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
    DialogsRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TopicService, DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
