import { Component } from '@angular/core';

@Component({
    selector: 'messages',
    template: 'This is a message <p *ngFor="let message of messages">{{message.text}} by: {{message.owner}}</p>'
})
export class MessagesComponent {
    messages = [{text:'some text', owner:'Tia'}, {text:'other message', owner:'Jane'}];
}