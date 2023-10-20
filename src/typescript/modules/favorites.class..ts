import { ApiData, CharacterAPI } from "./api";

export default class Favorites {
  public items: ApiData;

  constructor() {
     this.items = [];
  }

  addToFavorites(item: CharacterAPI) : boolean  {
      if(!this.items.includes(item) ){
         this.items.push(item);
         return true
      }
      return false
  }

  removeFromFavorites(item: CharacterAPI) : boolean {
      if(this.items.includes(item)) {
         const filteredArray = this.items.filter((it) => it !== item);
         this.items = filteredArray;
         return true
      }
      return false
  }
}