import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackCustomDriverModule } from '@ngworker/lumberjack-custom-driver';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LumberjackModule.forRoot(), LumberjackCustomDriverModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
