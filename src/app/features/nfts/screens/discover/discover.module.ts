import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import {DiscoverComponentsModule} from "./components/discover-components.module";
import {DiscoverDirectivesModule} from "./directives/discover-directives.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverComponentsModule,
    DiscoverPageRoutingModule,
    DiscoverDirectivesModule
  ],
  declarations: [DiscoverPage],
})
export class DiscoverPageModule {}
