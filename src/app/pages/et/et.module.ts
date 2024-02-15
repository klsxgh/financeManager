import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ETPageRoutingModule } from './et-routing.module';

import { ETPage } from './et.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ETPageRoutingModule
  ],
  declarations: [ETPage]
})
export class ETPageModule {}
