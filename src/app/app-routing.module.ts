import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FernkampfComponent } from './fernkampf/fernkampf/fernkampf.component';

const routes: Routes = [
  { path: 'fernkampf', component: FernkampfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
