import { ApiData } from "./api";
import Favorites from "./favorites";

export function renderAllCharacters(data:ApiData):void {
    const list : HTMLElement | null | undefined = <HTMLElement>document.querySelector('[data-all]')
    renderHTML(data, list)
}

export function renderFavorites(favorites: Favorites) : void {
    const favoritesList : HTMLElement | null | undefined = <HTMLElement>document.querySelector('[data-favorites]')
    if(favoritesList) {
        favoritesList.innerHTML = ""
    }
    renderHTML(favorites.items, favoritesList)
}

function renderHTML (items : ApiData, list : HTMLElement) : void {
    const cardElementTemplate : HTMLElement | null  = <HTMLElement>document.querySelectorAll('[data-card]')[0]
    const errorMessage : HTMLParagraphElement = document.createElement('p')
    errorMessage.textContent = "API Daten können im Moment nicht angezeigt werden"
    items.forEach(element => {
        const cardElement : HTMLElement  = <HTMLElement>cardElementTemplate?.cloneNode(true)
        const cardName  = cardElement.querySelector('[data-name]')
        const cardTitle  = cardElement.querySelector('[data-title]')
        const cardHouse  = cardElement.querySelector('[data-house]')
        const cardImg = cardElement.querySelector('[data-img]')
        const cardButton = cardElement.querySelector('button')
        if (cardName && cardTitle && cardHouse && cardImg && cardButton && cardElement) {
            cardTitle.textContent += element.title
            cardHouse.textContent += element.family
            cardName.textContent = element.fullName
            cardImg.setAttribute('src', element.imageUrl)
            cardImg.setAttribute('alt', element.fullName)
            cardElement.setAttribute('data-id', element.id.toString())
            cardElement.style.display ='initial'
            if (list.dataset.favorites === ""){
                cardButton.textContent = "Remove"
            }
            list?.appendChild(cardElement)
        } else {
            list?.appendChild(errorMessage)
        }
    })
}