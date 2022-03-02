// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Templates
import { TemplateOneComponent } from './template-one/template-one.component';
import { TemplateTwoComponent } from './template-two/template-two.component';
import { TemplateThreeComponent } from './template-three/template-three.component';

// Modules
import { SharedLoggedModule } from 'src/app/shared/shared-logged/shared-logged.module';
import { SharedCommonModule } from 'src/app/shared/shared-common/shared-common.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedLoggedModule
  ],
  declarations: [
    TemplateOneComponent,
    TemplateTwoComponent,
    TemplateThreeComponent
  ],
  exports: [
    TemplateOneComponent,
    TemplateTwoComponent,
    TemplateThreeComponent
  ]
})
export class TemplateLogadoModule { }
