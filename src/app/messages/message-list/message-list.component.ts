import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'message1', 'This is the first message', 'Daniel'),
    new Message('2', 'message2', 'This is the second message', 'Johnny'),
    new Message('3', 'message3', 'This is the third message', 'Carlos'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddMessage(message: Message){
    this.messages.push(message);
  }
}
