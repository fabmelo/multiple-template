// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ModuleZeroPageComponent } from './containers/module-zero-page.component';

const routes: Routes = [
  { path: '', component: ModuleZeroPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleZeroRoutingModule { }
