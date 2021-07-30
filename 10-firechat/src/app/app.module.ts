import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from'@angular/fire';
import { AngularFirestoreModule } from'@angular/fire/firestore';
import { AngularFireAuthModule } from'@angular/fire/auth';

import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';

// services
import { ChatService } from './providers/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
