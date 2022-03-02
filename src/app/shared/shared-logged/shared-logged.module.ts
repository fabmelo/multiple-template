// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],
  exports: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent
  ]
})
export class SharedLoggedModule { }
