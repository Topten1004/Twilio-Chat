import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationsAppComponent } from './conversations-app/conversations-app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LogComponent } from './components/chats/log/log.component';
import { MainChatComponent } from './components/chats/main-chat/main-chat.component';
import { SwitchComponent } from './shared/ui/switch/switch.component';
import { InputFieldComponent } from './shared/ui/input-field/input-field.component';
import { ButtonComponent } from './shared/ui/button/button.component';
import { ChatLogComponent } from './shared/ui/chat-log/chat-log.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SendInputComponent } from './shared/ui/send-input/send-input.component';
import { ShowChatComponent } from './components/chats/show-chat/show-chat.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ConversationsAppComponent,
    ChatComponent,
    MessageComponent,
    ChatsComponent,
    HeaderComponent,
    FooterComponent,
    LogComponent,
    MainChatComponent,
    SwitchComponent,
    InputFieldComponent,
    ButtonComponent,
    ChatLogComponent,
    SendInputComponent,
    ShowChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzInputModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
