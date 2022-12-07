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
  union_icon : string = '../../../../assets/main/union.svg';
  user_name : string = 'John Doe';

  present_chat : any[] = [
    {
      id : 'jefferson williams',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'john doe',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'jefferson williams',
      content : 'Fusce vestibulum orci eget ligula'
    },
    {
      id : 'jefferson williams',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'john doe',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'jefferson williams',
      content : 'Fusce vestibulum orci eget ligula'
    },
    {
      id : 'jefferson williams',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'john doe',
      content : 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla lacus nisl. Curabitur tincidunt volutpat augue, aliquet scelerisque nibh feugiat a. Aliquam bibendum nibh sit amet lacus dapibus, bibendum rutrum leo volutpat. Vestibulum augue massa, lobortis nec dignissim vitae, consectetur quis massa.'
    },
    {
      id : 'jefferson williams',
      content : 'Fusce vestibulum orci eget ligula'
    }
  ]

  ngOnInit(): void {
  }

}
