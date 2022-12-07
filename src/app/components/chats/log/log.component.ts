import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor() { }

  userSearch_placeholder : string = "Search";
  userIcon : string = '../../../../assets/main/user_input.svg';

  chat_history : any[] = [
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    },
    {
      name : 'John Doe',
      log : 'Vestibulum rutrum dolor eget felis dignissim efficitur crass',
      timeDuration : '50m'
    }    
  ]


  ngOnInit(): void {
  }

}
