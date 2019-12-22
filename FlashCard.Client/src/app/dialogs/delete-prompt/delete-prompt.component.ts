import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'delete-prompt',
    templateUrl: 'delete-prompt.component.html'
})
export class DeletePromptComponent implements OnInit {
    
    @Input()
    message: string;
    
    constructor() { }

    ngOnInit() { }

    yes() {

    }

    no() {
        
    }
}