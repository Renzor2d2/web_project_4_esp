const initialCards = [
	{
		name: "Valle de Yosemite",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
	},
	{
		name: "Lago Louise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
	},
	{
		name: "Montañas Calvas",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
	},
	{
		name: "Latemar",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
	},
	{
		name: "Parque Nacional de la Vanoise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
	},
	{
		name: "Lago di Braies",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
	},
];
const emergentCard = document.querySelector(".addEmergent");
const emergeImage = emergentCard.querySelector(".addEmergent__image");
console.log(emergeImage);
const emergeClose = emergentCard.querySelector(".addEmergent__close-icon");
const trashButton = document.querySelector(".element-card__trash");

class Card {
	constructor(title, image, cardSelector) {
		this._title = title;
		this._image = image;
		this._cardSelector = cardSelector;
	}
	_getTemplate() {
		const cardElement = document
			.querySelector(this._cardSelector)
			.cloneNode(true)
			.content.querySelector(".element-card");

		return cardElement;
	}
	_generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		this._element.querySelector(".element-card__image").src = this._image;
		this._element.querySelector(".element-card__title").textContent =
			this._title;
		this._deleteCard();
		return this._element;
	}
	_setEventListeners() {
		this._element.addEventListener("click", () => {
			this._handleOpenPopup();
		});
		emergeClose.addEventListener("click", () => {
			this._handleClosePopup();
		});
	}
	_handleOpenPopup() {
		emergeImage.src = this._image;
		emergentCard.classList.remove("addEmergent_oppened");
	}
	_handleClosePopup() {
		emergeImage.src = "";
		emergentCard.classList.add("addEmergent_oppened");
	}
	_deleteCard() {
		trashButton.addEventListener("click", () => {
			this._element.remove();
		});
	}
}

const element = document.querySelector(".element");
initialCards.forEach((item) => {
	const initialCard = new Card(item.name, item.link, "#template-cards");
	const cardElement = initialCard._generateCard();
	element.append(cardElement);
});
////////////////

// imageCard.addEventListener("click", () => {
// 	const emergeImage = emergentCard.querySelector(".addEmergent__image");
// 	emergeImage.src = image;
// 	emergeImage.alt = title;
// 	const emergeTitle = emergentCard.querySelector(".addEmergent__title");
// 	emergeTitle.textContent = title;
// 	openEmergent();
// });

// const emergeClose = emergentCard.querySelector(".addEmergent__close-icon");
// emergeClose.addEventListener("click", () => {
// 	closeEmergent();
// });

// //// poppo

// function openEmergent() {
// 	const emergentCard = document.querySelector(".addEmergent");
// 	page.classList.add("page_opacity");
// 	const addEventEmergent = document.addEventListener("keydown", Events);
// }
// function closeEmergent() {
// 	const emergentCard = document.querySelector(".addEmergent");
// 	emergentCard.classList.add("addEmergent_oppened");
// 	page.classList.remove("page_opacity");
// 	const removeEventEmergent = document.removeEventListener("keydown", Events);
// }
// page.addEventListener("mousedown", closeEmergent);
