export interface NftModel {
    thumbnailURI:string
    remaining:number
    editionsDataLength:number
    maxPrice:number
    minPrice:number
    creator:{verified:boolean},

    unlockableContent:boolean
}
