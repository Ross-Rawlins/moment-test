import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {NFTsService} from "../../../../services/nfts/nfts.service";
import {Observable} from "rxjs";
import {CategoryModel} from "../../../../models/category.model";

@Component({
  selector: 'app-nfts-filter',
  templateUrl: './nfts-filter.component.html',
  styleUrls: ['./nfts-filter.component.scss'],
})
export class NftsFilterComponent implements OnInit {
  public categories$:Observable<Array<CategoryModel>>;
  public selectedCategories: Array<string> = []
  constructor(private modalController:ModalController, private nftsService: NFTsService) { }

  ngOnInit() {
    this.nftsService.getCategories()
    this.categories$ = this.nftsService.getCategoriesData();
  }

  public cancel()
  {
    this.modalController.dismiss()
  }

  public toggleTag(tagId: string) {
    if(this.selectedCategories.includes(tagId))
    {
      const index = this.selectedCategories.indexOf(tagId)
      this.selectedCategories.splice(index,1)

    }
    else {
      this.selectedCategories.push(tagId)
    }
  }

  public clearSelectedCategories()
  {
    this.selectedCategories = [];
  }

  applyFilters() {
    this.modalController.dismiss({
      categories:this.selectedCategories
    })
  }
}
