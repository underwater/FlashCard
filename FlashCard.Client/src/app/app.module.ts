import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardListComponent } from './card-list/card-list.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicService } from './services/topic.service';

import { HttpClientModule } from '@angular/common/http';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardListComponent,
    TopicListComponent,
    CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TopicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
