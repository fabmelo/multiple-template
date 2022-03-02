// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pages
import { ModuleThreePageComponent } from './containers/module-three-page.component';

// Routing
import { ModuleThreeRoutingModule } from './module-three-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleThreeRoutingModule
  ],
  declarations: [ModuleThreePageComponent]
})
export class ModuleThreeModule { }
