// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateZeroComponent } from './templates/deslogado/template-zero/template-zero.component';

// Templates
import { TemplateOneComponent } from './templates/logado/template-one/template-one.component';
import { TemplateThreeComponent } from './templates/logado/template-three/template-three.component';
import { TemplateTwoComponent } from './templates/logado/template-two/template-two.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateZeroComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/module-zero/module-zero.module').then(m => m.ModuleZeroModule)
      },
    ],
  },
  {
    path: 'module-one',
    component: TemplateOneComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/module-one/module-one.module').then(m => m.ModuleOneModule)
      },
    ],
  },
  {
    path: 'module-two',
    component: TemplateTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/module-two/module-two.module').then(m => m.ModuleTwoModule)
      },
    ],
  },
  {
    path: 'module-three',
    component: TemplateThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/module-three/module-three.module').then(m => m.ModuleThreeModule)
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
