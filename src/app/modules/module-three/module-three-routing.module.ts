// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { ModuleThreePageComponent } from './containers/module-three-page.component';

const routes: Routes = [
  { path: '', component: ModuleThreePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleThreeRoutingModule { }
