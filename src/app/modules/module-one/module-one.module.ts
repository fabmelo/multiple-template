// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ModuleOnePageComponent } from './containers/module-one-page.component';

// Routing
import { ModuleOneRoutingModule } from './module-one-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ],
  declarations: [ModuleOnePageComponent]
})
export class ModuleOneModule { }
