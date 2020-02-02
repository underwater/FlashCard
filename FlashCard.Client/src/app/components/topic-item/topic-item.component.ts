import { Component, OnInit, Input, Output, EventEmitter, Injector } from '@angular/core';
import { Topic } from '../../models/topic.model';
import { DialogsService } from '../../services/dialogs.service';
import { DialogsRootComponent } from '../../dialogs/dialogs-root/dialogs-root.component';


@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.css']
})
export class TopicItemComponent implements OnInit {

  @Input() public topic: Topic;
  @Output() public deleteTopic: EventEmitter<any> = new EventEmitter();

  constructor(private _dialogsService: DialogsService) { }

  ngOnInit() {
  }

  OnDeleteTopic(topic: Topic) {
    /**
     * this._dialogsService.open<DeletePromptComponent>(config).then(res => {...});
     */
    this._dialogsService.open("delete-prompt", {
      message: "Are you sure you want to delete this topic?"
    }).then(res => {
      if (res) {
        //yes
      }
      else {
        //no
      }
    });
    // this.deleteTopic.emit(topic);
  }

}
