import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AdditemComponent } from './additem/additem.component';
import { SelectitemComponent } from './selectitem/selectitem.component';
import { AppRoutingModule } from './app-routing.module';
import { DeleteltemComponent } from './deleteltem/deleteltem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AdditemComponent,
    SelectitemComponent,
    DeleteltemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
