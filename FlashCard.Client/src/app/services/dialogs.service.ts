import { Injectable } from '@angular/core';
import { DialogsRootComponent } from '../dialogs/dialogs-root/dialogs-root.component';

@Injectable()
export class DialogsService {
    protected _component: DialogsRootComponent;
    protected _supportedModalNames = [
        "delete-prompt"
    ];
    private _resolver;

    private checkSupportedModalName(modalName) {
        if(!this._supportedModalNames.includes(modalName)) {
            throw new Error("Attempted to spawn an invalid modal");
        }
    }

    constructor() { }

    init(component: DialogsRootComponent) {
        this._component = component;
    }
    
    open(modalName: string, options): Promise<any> {
        var promise = new Promise((resolve, reject) => {
            this._resolver = resolve;
            this.checkSupportedModalName(modalName);
            this._component.open(modalName, options);
        });
        return promise;
    }

    close<T>(response: T) {
        this._resolver(response);
    }
}