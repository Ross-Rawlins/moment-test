import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {NftModel} from "../../models/nft.model";
import {map} from "rxjs/operators";
import {CategoryModel} from "../../models/category.model";

@Injectable({providedIn:'root'})
export class NFTsService {

  private data$:BehaviorSubject<Array<NftModel>> = new BehaviorSubject([])
  private categories$:BehaviorSubject<Array<CategoryModel>> = new BehaviorSubject([])
  private currentData:Array<NftModel> = []
  private listTotal:number;
  private page = 1
  private categoriesFilters: Array<string>;
  public readonly limit = 10;

  constructor(private http: HttpClient) { }

  private getNFTs(limit:number, page:number,tagFilters?:Array<string>)
  {
   this.http.post<{DATA: {
        data:Array<NftModel>
        totalItems: number
      },
      MESSAGE: string
      STATUS: string}>('https://momint-api-dev.azurewebsites.net/api/nft/discover/popular',{
      limit,page,tagFilters
    }).pipe(map((res)=>
    {
      if(this.currentData.length >= 1) {
        this.currentData = this.currentData.concat(res.DATA.data)
      }
      else
      {
        this.currentData = res.DATA.data
      }
     this.listTotal = res.DATA.totalItems

      return this.currentData
    })).subscribe((data)=>
   {
     this.data$.next(data)
   })
  }

  public getCategories()
  {
    this.http.get<{DATA:Array<CategoryModel>
      MESSAGE: string
      STATUS: string}>('https://momint-api-dev.azurewebsites.net/api/nft/categories').pipe(map((res)=>
    {

      return res.DATA
    })).subscribe((data)=>
    {
      this.categories$.next(data)
    })
  }

  public updateParameters(page:number,tagFilters?:Array<string>)
  {
    this.page = page;
    this.categoriesFilters = tagFilters;
    this.getNFTs(this.limit, this.page, this.categoriesFilters)
  }

  public clearCurrentData()
  {
    this.currentData = []
  }

  public getCurrentPage()
  {
    return this.page
  }

  public getCategoriesData()
  {
    return this.categories$
  }

  public getNftsData()
  {
    return this.data$
  }

  public getCategoriesFilters()
  {
    return this.categoriesFilters
  }

  public getListTotal()
  {
    return this.listTotal
  }


}
