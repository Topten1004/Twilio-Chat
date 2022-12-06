import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  locationImg : string = '../../../../assets/header/location.svg';
  menu_chat : string = '../../../../assets/header/chat.svg';
  menu_msg : string = '../../../../assets/header/message.svg';
  menu_news : string = '../../../../assets/header/news.svg';
  menu_user : string = '../../../../assets/header/user.svg';
  user_icon : string = '../../../../assets/header/user.png';
  user_feed : string = '../../../../assets/header/feed.svg';

  user_name : string = 'Lorem Ipsum';


  constructor() { }

  ngOnInit(): void {
  }

}
