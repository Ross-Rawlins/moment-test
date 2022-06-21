import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import {HttpClientModule} from "@angular/common/http";
import {NftsComponentsModule} from "./components/nfts-components.module";
import {NFTsService} from "../../services/nfts/nfts.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NftsComponentsModule,
    DiscoverPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DiscoverPage],
  providers:[NFTsService]
})
export class DiscoverPageModule {}
