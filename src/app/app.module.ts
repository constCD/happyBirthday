import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './module/start/start.component';
import { AvatarComponent } from './module/avatar/avatar.component';
import { HomeComponent } from './module/home/home.component';
import { HappyWordingsComponent } from './module/happy-wordings/happy-wordings.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    AvatarComponent,
    HomeComponent,
    HappyWordingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
