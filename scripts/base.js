import { initialBaseCards } from "./initialBaseCards.js";
import { BaseCard } from "./BaseCard.js";

const baseCardContainer = document.querySelector('.base__card-container');

initialBaseCards.forEach(item => {
    const cardElement = new BaseCard(item);
    baseCardContainer.append(cardElement.createCard());
})