// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Templates
import { TemplateZeroComponent } from './template-zero/template-zero.component';

// Modules
import { SharedLoggedOutModule } from '../../shared/shared-logged-out/shared-logged-out.module';
import { SharedCommonModule } from 'src/app/shared/shared-common/shared-common.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedLoggedOutModule
  ],
  declarations: [
    TemplateZeroComponent
  ],
  exports: [
    TemplateZeroComponent
  ]
})
export class TemplateDeslogadoModule { }
