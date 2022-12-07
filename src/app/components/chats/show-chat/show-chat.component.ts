import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-chat',
  templateUrl: './show-chat.component.html',
  styleUrls: ['./show-chat.component.scss']
})
export class ShowChatComponent implements OnInit {

  constructor() { }

  @Input() content : any = {};
  current_user : string = 'john doe';

  ngOnInit(): void {
  }

}
