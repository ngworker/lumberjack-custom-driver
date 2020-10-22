import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LumberjackModule } from '@ngworker/lumberjack';
import { <name-capitalize-united>Module } from '@ngworker/<name-hyphen>';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LumberjackModule.forRoot(), <name-capitalize-united>Module.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
