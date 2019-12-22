import { Component, OnInit, Input } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
    selector: 'delete-prompt',
    templateUrl: 'delete-prompt.component.html'
})
export class DeletePromptComponent implements OnInit {
    
    @Input()
    message: string;
    
    constructor(private _dialogsService: DialogsService) { }

    ngOnInit() { }

    yes() {
        this._dialogsService.close(true);
    }

    no() {
        this._dialogsService.close(false);
    }
}