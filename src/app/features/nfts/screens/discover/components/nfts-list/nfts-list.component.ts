import { Component, OnInit } from '@angular/core';
import {NFTsService} from "../../../../services/nfts/nfts.service";
import {BehaviorSubject, Observable} from "rxjs";
import {NftModel} from "../../../../models/nft.model";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-nfts-list',
  templateUrl: './nfts-list.component.html',
  styleUrls: ['./nfts-list.component.scss'],
})
export class NftsListComponent implements OnInit {
  public data$:Observable<Array<NftModel>>;
  private limit: 18;
  private listTotal:number;
  private page$: BehaviorSubject<number> = new BehaviorSubject<number>(0)


  constructor(private nftsService: NFTsService) { }

  ngOnInit() {
    this.getData(1)
  }

  private getData( page:number,tagFilters?:Array<string>)
  {
    this.data$ = this.nftsService.getNFTs(18, page,tagFilters).pipe(map((res)=>
    {
      this.listTotal = res.DATA.totalItems
      return res.DATA.data
    }))
  }

 public getNextPage(currentPage:number)
 {
   this.page$.next(currentPage + 1)
 }

}
