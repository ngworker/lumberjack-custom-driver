import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LumberjackLogLevel, LumberjackModule } from '@ngworker/lumberjack';
import { <name-capitalize-united>Module } from '@<organization-hyphen>/<name-hyphen>';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LumberjackModule.forRoot(), <name-capitalize-united>Module.forRoot({levels: [LumberjackLogLevel.Verbose], someNeededOption: 'option-value'})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
