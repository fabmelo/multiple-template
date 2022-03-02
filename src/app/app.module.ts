// Angular
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Rota
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Modules
import { TemplateDeslogadoModule } from './templates/deslogado/deslogado.module';
import { TemplateLogadoModule } from './templates/logado/logado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TemplateLogadoModule,
    TemplateDeslogadoModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
