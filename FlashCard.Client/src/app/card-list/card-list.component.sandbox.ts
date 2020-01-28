import { sandboxOf } from 'angular-playground';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardsService } from '../services/cards.service';
import { TopicService } from '../services/topic.service';
import { CardListComponent } from './card-list.component';
import { Router, RouterModule } from '@angular/router';
import { CardItemComponent } from '../card-item/card-item.component';

const sandboxConfig = {
  imports: [FormsModule, HttpClientModule],
  providers: [TopicService, CardsService, { provide: Router, useClass: RouterModule }]

};

export default sandboxOf(CardListComponent, sandboxConfig)
  .add('load the card with id =1', {
    template: `<app-card-list></app-card-list>`,

  });
