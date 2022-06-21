import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NftModel} from "../../models/nft.model";

@Injectable()
export class NFTsService {

  constructor(private http: HttpClient) { }

  public getNFTs(limit:number, page:number,tagFilters?:Array<string>)
  {
    return this.http.post<{DATA: {
        data:Array<NftModel>
        totalItems: number
      },
      MESSAGE: string
      STATUS: string}>('https://momint-api-dev.azurewebsites.net/api/nft/discover/popular',{
      limit,page,tagFilters
    });
  }
}
