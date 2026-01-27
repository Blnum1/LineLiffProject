import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Graph01 } from './Dashboard/graph01/graph01';
import { Graph02 } from './Dashboard/graph02/graph02';
import { Navfooter } from './Navbar/navfooter/navfooter';
import { ButtonModule } from 'primeng/button';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
// import { IconModule } from 'primeng/icons';


@NgModule({
  declarations: [
    App,
    Graph01,
    Graph02,
    Navfooter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PowerBIEmbedModule
    // IconModule
  
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
