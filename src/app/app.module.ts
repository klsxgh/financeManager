import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestMaterialComponent } from './test-material/test-material.component';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    TestMaterialComponent
  ],
  imports: [
    MatSlideToggle,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
