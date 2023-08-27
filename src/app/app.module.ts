import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './home/home.page';
import { Child1Component } from './child1/child1.component';
import { DataCommunicationService } from './data-communication.service';
import { SenderCompComponent } from './sender-comp/sender-comp.component';
import { ReceiverCompComponent } from './receiver-comp/receiver-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    Child1Component,
    SenderCompComponent,
    ReceiverCompComponent,
  ],
  exports: [AppComponent, HomePage, Child1Component],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataCommunicationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
