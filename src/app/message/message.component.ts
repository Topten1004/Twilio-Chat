import { Component, Input, OnInit } from '@angular/core';
import { Message } from '@twilio/conversations';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  mediaUrl = '';
  mediaFileName = '';
  type = 'text';

  constructor() { }

  ngOnInit(): void {
    this.type = this.message.type;
    if (this.type === 'media') {
      if (!this.message.attachedMedia) {
        return;
      }
      // for (const m of this.message.attachedMedia) {
      //   m.getContentTemporaryUrl().then((url) => {
      //     this.mediaUrl = url;
      //     this.mediaFileName = m.filename;
      //   })
      // }
    }
  }

}
