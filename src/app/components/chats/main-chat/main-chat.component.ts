import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.scss']
})
export class MainChatComponent implements OnInit {

  constructor() { }

  searchIcon : string = '../../../../assets/main/chat_search.svg';
  user_icon : string = '../../../../assets/header/user.png';
  camera_icon : string = '../../../../assets/main/camera.svg';
  more_icon : string = '../../../../assets/main/more.svg';
  attachIcon : string = '../../../../assets/main/chat_attach.svg';
  sendIcon : string = '../../../../assets/main/chat_send.svg';
  user_name : string = 'John Doe';


  ngOnInit(): void {
  }

}
