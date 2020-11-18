import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {DashboardViewComponent} from './dashboard-view/dashboard-view.component';
import {MaterialModule} from './material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook,
  LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder} from '@angular/flex-layout';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DialogsComponent} from './dialogs/dialogs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardViewComponent,
    DialogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  entryComponents: [DialogsComponent],
  providers: [StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia,
    BreakPointRegistry, PrintHook, LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
