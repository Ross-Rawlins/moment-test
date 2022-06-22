import {Directive, HostListener} from '@angular/core';
import {NftsFilterComponent} from "../../components/nfts-filter/nfts-filter.component";
import {ModalController} from "@ionic/angular";
import {NFTsService} from "../../../../services/nfts/nfts.service";

@Directive({
  selector: '[appOpenFilter]'
})
export class OpenFilterDirective {

  constructor(private modalController: ModalController, private nftsService: NFTsService) { }


  @HostListener('click', ['$event.target'])
  onClick(btn) {
   this.openFilter()
  }

  public async openFilter() {
    const modal = await this.modalController.create({
      component: NftsFilterComponent,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        if(dataReturned.data !== undefined) {
          this.nftsService.clearCurrentData()
          this.nftsService.updateParameters(1, dataReturned.data.categories)
        }
      }
    });
    return await modal.present();
  }

}
