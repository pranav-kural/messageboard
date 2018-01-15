import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent {
    messages = [{text:'some text', owner:'Tia'}, {text:'other message', owner:'Jane'}];
}