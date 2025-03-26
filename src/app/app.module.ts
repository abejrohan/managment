import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component'; // Import your standalone component

@NgModule({
  declarations: [
    AppComponent, // Only declare non-standalone components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductComponent,
    CommonModule, // Import standalone component here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
