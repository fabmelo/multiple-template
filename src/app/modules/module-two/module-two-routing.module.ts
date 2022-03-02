
// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ModuleTwoPageComponent } from './containers/module-two-page.component';

const routes: Routes = [
  { path: '', component: ModuleTwoPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleTwoRoutingModule { }
