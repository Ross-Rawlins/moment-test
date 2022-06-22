import {Component, OnInit} from '@angular/core';
import {NFTsService} from "../../../../services/nfts/nfts.service";
import {Observable, of} from "rxjs";
import {NftModel} from "../../../../models/nft.model";

@Component({
  selector: 'app-nfts-list',
  templateUrl: './nfts-list.component.html',
  styleUrls: ['./nfts-list.component.scss'],
})
export class NftsListComponent implements OnInit {
  public data$:Observable<Array<NftModel>>;
  public disableInfinite:boolean;
  public maxLength:number
  constructor(private nftsService: NFTsService) { }

  ngOnInit() {
      this.nftsService.updateParameters(1);
      this.data$ = this.nftsService.getNftsData();
      this.maxLength = this.nftsService.getListTotal();
  }

 public getNextPage(event)
 {
     setTimeout(() => {
         console.log('Done');
         event.target.complete();
     }, 500);
     const currentPage = this.nftsService.getCurrentPage();
     const currentSelectedCategories = this.nftsService.getCategoriesFilters();
     this.nftsService.updateParameters(currentPage + 1, currentSelectedCategories )
 }



}
