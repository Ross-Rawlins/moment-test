import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenFilterDirective} from "./open-filter/open-filter.directive";



@NgModule({
  declarations: [OpenFilterDirective],
  exports:[OpenFilterDirective],
  imports: [
    CommonModule
  ]
})
export class DiscoverDirectivesModule { }
