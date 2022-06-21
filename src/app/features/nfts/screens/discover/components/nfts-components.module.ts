import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NftsListComponent} from "./nfts-list/nfts-list.component";
import {NftsItemComponent} from "./nfts-item/nfts-item.component";
import {NftsFilterComponent} from "./nfts-filter/nfts-filter.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [NftsListComponent,NftsItemComponent,NftsFilterComponent],
  exports:[NftsListComponent,NftsItemComponent,NftsFilterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class NftsComponentsModule { }
