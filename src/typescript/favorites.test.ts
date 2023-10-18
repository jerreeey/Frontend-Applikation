import { expect, describe, test, beforeEach } from 'vitest';
import Favorites from './favorites';
import { CharacterAPI } from './api';

describe('My Favorites tests', () => {
   let favorites: Favorites;
   let character : CharacterAPI;

   beforeEach(() => {
      favorites = new Favorites();
      character = {
         id: 0,
         firstName: "Daenerys",
         lastName: "Targaryen",
         fullName: "Daenerys Targaryen",
         title: "Mother of Dragons",
         family: "House Targaryen", 
         image: "daenerys.jpg",
         imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg" 
      }
   });


   test('The addToFavorites function can add an item to the favorites if it is not already on the list', () => {
      expect(favorites.addToFavorites(character)).toBe(true);
   });

   test('The addToFavorites function cannot add an item to the favorites if it is already on the list', () => {
      favorites.addToFavorites(character);
      expect(favorites.addToFavorites(character)).toBe(false);
   });

   test('The removeFromFavorites function can remove an item from the favorites if it on the list ', () => {
      favorites.addToFavorites(character);
      expect(favorites.removeFromFavorites(character)).toBe(true);
   });

   test('The removeFromFavorites function cannot remove an item from the favorites if it is not on the list', () => {
      expect(favorites.removeFromFavorites(character)).toBe(false);
   });
});