import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
    selector: 'dialogs-root',
    templateUrl: 'dialogs-root.component.html'
})

export class DialogsRootComponent implements OnInit {
    private _currentModalName: string;
    constructor(private _dialogsService: DialogsService) { }

    public get currentModalName(): string {
        return this._currentModalName;
    }

    ngOnInit() {
        this._dialogsService.init(this);
    }

    open(modalName: string) {
        this._currentModalName = modalName;
        //@ts-ignore
        $('#modal-root').modal({});
    }

}