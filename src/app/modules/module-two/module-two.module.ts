// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ModuleTwoPageComponent } from './containers/module-two-page.component';

// Routing
import { ModuleTwoRoutingModule } from './module-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ],
  declarations: [ModuleTwoPageComponent]
})
export class ModuleTwoModule { }
