import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgIconsModule } from '@ng-icons/core';
import { tablerGlass, tablerGlassOff, tablerCircleArrowLeftFilled, tablerSearch, tablerHeartFilled, tablerHeartBroken } from '@ng-icons/tabler-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ tablerGlass, tablerGlassOff, tablerCircleArrowLeftFilled, tablerSearch, tablerHeartFilled, tablerHeartBroken })
  ],
  exports: [CommonModule, FormsModule, NgIconsModule]
})
export class SharedModule { }