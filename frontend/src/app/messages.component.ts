import { Component } from '@angular/core';
import { WebService } from "./web.service";

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html'
})
export class MessagesComponent {
    constructor(private webService: WebService) {}

    async ngOnInit() {
        let response = await this.webService.getMessages();
        this.messages = response.json();
    }

    messages = [];
}