import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { Client as ConversationsClient, Conversation, Message } from '@twilio/conversations';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  conversationsClient: ConversationsClient | undefined;
  newMessage = '';
  token = '';
  statusString = '';
  status = '';
  conversationsReady = false;
  loadingState = 'initializing';
  conversations: Conversation[] = [];
  selectedConvo: Conversation | undefined;
  messages: Message[] = [];

  constructor(private localStorage: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.localStorage.getItem(this.localStorage.LS_TOKEN_KEY)) {
      this.router.navigateByUrl('/');
      return
    }

    this.token = this.localStorage.getItem(this.localStorage.LS_TOKEN_KEY) || ''

    this.initConversations();
  }

  async initConversations() {
    this.conversationsClient = new ConversationsClient(this.token)
    this.statusString = 'Connecting to Twilio...';

    this.conversationsClient.on('connectionStateChanged', (state) => {
      if (state === 'connecting') {
        this.statusString = 'Connecting to Twilio…';
        this.status = 'default';
      }
      if (state === 'connected') {
        this.statusString = 'You are connected.';
        this.status = 'success';
      }
      if (state === 'disconnecting') {
        this.statusString = 'Disconnecting from Twilio…';
        this.conversationsReady = false;
        this.status = 'default';
      }
      if (state === 'disconnected') {
        this.statusString = 'Disconnected.';
        this.conversationsReady = false;
        this.status = 'warning';
      }
      if (state === 'denied') {
        console.log(state);
        this.statusString = 'Failed to connect.';
        this.conversationsReady = false;
        this.status = 'error';
      }
    });

    this.conversationsClient.on('conversationJoined', (conversation) => {
      this.conversations = [...this.conversations, conversation]
      console.log(this.conversations);
    });

    this.conversationsClient.on('conversationLeft', (thisConversation) => {
      this.conversations = [...this.conversations.filter((it) => it !== thisConversation)]
    });
  }

  conversationSelectHandler(event: any) {
    this.selectedConvo = this.conversations.find(c => c.sid === event.target.value);
    if (!this.selectedConvo) {
      return;
    }
    this.loadMessagesFor(this.selectedConvo);
  }

  async loadMessagesFor(convo: Conversation) {
    if (!convo) {
      return
    }

    const messagePaginator = await convo.getMessages();
    this.messages = messagePaginator.items;
    this.loadingState = 'ready';

    console.log('Messages', this.messages);

    convo.on('messageAdded', m => this.messageAdded(m, this.selectedConvo as Conversation));
  };

  messageAdded(message: Message, targetConversation: Conversation) {
    if (targetConversation === this.selectedConvo) {
      this.messages = [...this.messages, message]
    }
  };

  sendMessage() {
    if (!this.selectedConvo) {
      return
    }
    const message = this.newMessage;
    this.newMessage = '';
    this.selectedConvo.sendMessage(message);

    console.log('Sent')
  };

  sendFile(acceptedFiles: any) {
    if (!this.selectedConvo) {
      return
    }
    this.selectedConvo.sendMessage({ contentType: acceptedFiles[0].type, media: acceptedFiles[0], filename: acceptedFiles[0].name });
  };

  fileChangeHandler(event: any) {
    let files = event.target.files;

    this.sendFile(files);
  }

  logout() {
    this.localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
