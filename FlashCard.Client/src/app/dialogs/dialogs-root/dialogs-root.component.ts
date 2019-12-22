import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
    selector: 'dialogs-root',
    templateUrl: 'dialogs-root.component.html'
})

export class DialogsRootComponent implements OnInit {
    private _currentModalName: string;
    private _message: string;
    constructor(private _dialogsService: DialogsService) { }

    public get currentModalName(): string {
        return this._currentModalName;
    }

    public get message(): string {
        return this._message;
    }

    ngOnInit() {
        this._dialogsService.init(this);
    }

    open(modalName: string, options: any) {
        this._currentModalName = modalName;
        this._message = options.message ? options.message : "Generic Message";
        //@ts-ignore
        $('#modal-root').modal({});
    }

    close(response) {

    }

}