import { fetchAPI, ApiData } from './api'
import Favorites from './favorites.class.'
import { renderAllCharacters, renderFavorites } from './renderHTML'

export default async function () {
    const favorites:Favorites = new Favorites()
    const data:ApiData = await fetchAPI("https://thronesapi.com/api/v2/Characters")
    renderAllCharacters(data)
    addAddEventListener()


    function addAddEventListener() {
        const cardElements : NodeListOf<HTMLElement> = document.querySelectorAll('[data-id]')
        cardElements.forEach(element => {
            const addToFavoritesBtn = element.querySelector('button')
            if (addToFavoritesBtn) {
                addToFavoritesBtn.addEventListener('click', () => {
                    const id = element.getAttribute('data-id')
                    if(id) {
                        const wasAdded : boolean = favorites.addToFavorites(data[+id])
                        if (wasAdded) {
                            renderFavorites(favorites)
                            addRemoveEventListener()
                        }
                    }
                })
            }
        });
    }
    
    function addRemoveEventListener() {
        const cardElements : HTMLElement | null = document.querySelector('[data-favorites]')
        if (cardElements) {
            const favoriteElements = cardElements.querySelectorAll('[data-id]')
            favoriteElements.forEach(element => {
                const removeFromFavoritesButton = element.querySelector('button')
                if (removeFromFavoritesButton) {
                    removeFromFavoritesButton.addEventListener('click', () => {
                        const id = element.getAttribute('data-id')
                        if(id) {
                            const wasRemoved : boolean = favorites.removeFromFavorites(data[+id])
                            if (wasRemoved) {
                                renderFavorites(favorites)
                                addRemoveEventListener()
                            }
                        }
                    })
                }
            })
        }
    }
    
}
