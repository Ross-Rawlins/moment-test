import {Component, Input, OnInit} from '@angular/core';
import {NftModel} from "../../../../models/nft.model";

@Component({
  selector: 'app-nfts-item',
  templateUrl: './nfts-item.component.html',
  styleUrls: ['./nfts-item.component.scss'],
})
export class NftsItemComponent implements OnInit {
  @Input() nft:NftModel;
  constructor() { }

  ngOnInit() {

  }

}
