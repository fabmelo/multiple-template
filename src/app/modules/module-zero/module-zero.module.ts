// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ModuleZeroPageComponent } from './containers/module-zero-page.component';

// Routing
import { ModuleZeroRoutingModule } from './module-zero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleZeroRoutingModule
  ],
  declarations: [ModuleZeroPageComponent]
})
export class ModuleZeroModule { }
