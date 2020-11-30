import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ptabcomponent } from './product/ptab.component';
import { pformcomponent } from './product/pform.component';
import { FormsModule } from '@angular/forms';
import { plistcomponent } from './product/plist.component';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,ptabcomponent,pformcomponent,plistcomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
