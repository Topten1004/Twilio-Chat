import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwilioService } from '../twilio.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'conversations-app',
  templateUrl: './conversations-app.component.html',
  styleUrls: ['./conversations-app.component.css']
})
export class ConversationsAppComponent implements OnInit {

  identity = 'Default Name'

  constructor(private twilioService: TwilioService,
    private localStorage: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.localStorage.getItem(this.localStorage.LS_TOKEN_KEY)) {
      this.router.navigateByUrl('/chat');
    }
  }

  getToken() {
    this.twilioService
      .generateToken(this.identity)
      .subscribe((tokenResponse) => {
        this.localStorage.setItem(this.localStorage.LS_TOKEN_KEY, tokenResponse.token);
        this.router.navigateByUrl('/chat');
      })
  }

}
