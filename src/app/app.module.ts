import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { IonicNativePlugin } from '@ionic-native/core';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
@NgModule({
  declarations: [AppComponent, PdfViewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [PDFGenerator, IonicNativePlugin, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
