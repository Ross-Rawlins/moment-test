import { Component, OnInit } from '@angular/core';
import {NftsFilterComponent} from "./components/nfts-filter/nfts-filter.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  public openFilter()
  {
    this.modalCtrl.create({component:NftsFilterComponent})
  }

}
