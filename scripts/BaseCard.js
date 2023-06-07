export class BaseCard {
    constructor(cardObj) {
        this._tag = cardObj.tag;
        this._title = cardObj.title;
        this._text = cardObj.text;
        this._date = cardObj.date;
    }

    _getTemplate() {
        return document.querySelector('#base-card').content.cloneNode(true);
    }

    _SetEventListeners() {
    }

    createCard() {
        this._cardElement = this._getTemplate();
        this._cardElement.querySelector('.base__card-tag').textContent = this._tag;
        this._cardElement.querySelector('.base__card-title').textContent = this._title;
        this._cardElement.querySelector('.base__card-date').textContent = 'От ' + this._date;
        return this._cardElement;
    }
}