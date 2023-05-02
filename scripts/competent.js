const cardContainer = document.querySelector('.competent__content');
const popupCardsElement = document.querySelector('#cards-popup');
const loadButton = document.querySelector('.competent__load-button');
const popupNumber = popupCardsElement.querySelector('.popup__number');
const popupTitle = popupCardsElement.querySelector('.popup__title');
const popupText = popupCardsElement.querySelector('.popup__text');
const popupCloseButton = popupCardsElement.querySelector('.popup__button');


const openPopup = element => {
    element.classList.add('popup_opened');
};

const closePopup = element => {
    element.classList.remove('popup_opened');
};

const handlePopupElement = (title, text, index) => {
    popupTitle.textContent = title;
    popupText.textContent = text;
    popupNumber.textContent = index;
    openPopup(popupCardsElement);
};

const createCard = (title, text, index) => {
    const cardTemplate = document.querySelector('#competent-card').content;
    const cardElement = cardTemplate.querySelector('.competent__card').cloneNode(true);
    const cardNumber = cardElement.querySelector('.competent__number');

    cardNumber.textContent = index > 9 ? index : '0' + index;
    cardElement.querySelector('.competent__card-title').textContent = title;

    cardElement.addEventListener('click', () => {
        handlePopupElement(title, text, index);
    });

    return cardElement;
};

initialCards.forEach((item, index, array) => {
    index++;
    const newCard = createCard(item.title, item.text, index);
    if (array.length > 6 && index > 6) {
        newCard.classList.add('competent__card_hidden');
    };

    cardContainer.append(newCard);
});

if (cardContainer.children.length >6) {
    loadButton.classList.add('competent__load-button_visible');
};

popupCloseButton.addEventListener('click', () => {
    closePopup(popupCardsElement);
});

loadButton.addEventListener('click', () => {
    const cardList = Array.from(cardContainer.children);
    cardList.forEach(item => {
        item.classList.remove('competent__card_hidden');
    })
    loadButton.classList.remove('competent__load-button_visible');
});