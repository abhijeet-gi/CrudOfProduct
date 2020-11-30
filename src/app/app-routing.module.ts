import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { plistcomponent } from './product/plist.component';
import { ptabcomponent } from './product/ptab.component';

const routes: Routes = [{path:"ptab",component:ptabcomponent},
                        {path:"plist",component:plistcomponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
