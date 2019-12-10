import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardListComponent,
    TopicListComponent,
    CardItemComponent,
    TopicItemComponent,
    TopicItemAddComponent,
    CardItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
