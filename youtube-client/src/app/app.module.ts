import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';
import { StoreModule } from '@ngrx/store';
import { UserModule } from './user/user.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchModule,
    StoreModule.forRoot({}, {}),
    UserModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
