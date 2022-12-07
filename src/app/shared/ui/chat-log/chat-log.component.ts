import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-log',
  templateUrl: './chat-log.component.html',
  styleUrls: ['./chat-log.component.scss']
})
export class ChatLogComponent implements OnInit {

  constructor() { }

  @Input() content : any = {};

  ngOnInit(): void {
  }

}
