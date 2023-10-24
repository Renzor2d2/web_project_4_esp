let profileButton = document.querySelector(".profile-info__button");
let popup = document.querySelector(".popup");
let popupOpen = popup.querySelector(".popup_oppened");
let popupContainer = popup.querySelector(".popup-container");
let submitButton = popupContainer.querySelector(".input__submit");
let closeIcon = popup.querySelector(".popup__close-icon");
let page = document.querySelector(".page");
let addPopup = document.querySelector(".addpopup");
let addButton = document.querySelector(".profile__button-add");
let closeIconAdd = addPopup.querySelector(".addpopup__close-icon");
let addOpen = addPopup.querySelector(".addpopup_oppened");
let submitButtonForm = addPopup.querySelector(".input__submit-form");

function openEditProfile() {
	popup.classList.remove("popup_oppened");

	page.classList.add("page_opacity");
}

profileButton.addEventListener("click", openEditProfile);

function closeEditProfile() {
	popup.classList.add("popup_oppened");

	page.classList.remove("page_opacity");
}

closeIcon.addEventListener("click", closeEditProfile);

function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	profileTitle = document.querySelector(".profile-info__title");
	profileSubtitle = document.querySelector(".profile-info__subtitle");

	let nameInput = popupContainer.querySelector(".input__name");
	let jobInput = popupContainer.querySelector(".input__job");

	profileTitle.textContent = nameInput.value;
	profileSubtitle.textContent = jobInput.value;
}
popup.addEventListener("submit", handleProfileFormSubmit);
submitButton.addEventListener("click", closeEditProfile);

function openAddform() {
	addPopup.classList.remove("addpopup_oppened");

	page.classList.add("page_opacity");
}

addButton.addEventListener("click", openAddform);

function closeAddForm() {
	addPopup.classList.add("addpopup_oppened");

	page.classList.remove("page_opacity");
}

closeIconAdd.addEventListener("click", closeAddForm);

const initialCards = [
	{
		name: "Valle de Yosemite",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
		id: "cardTrash",
		idCard: "remove-card",
	},
	{
		name: "Lago Louise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
		id: "cardTrash",
		idCard: "remove-card",
	},
	{
		name: "Montañas Calvas",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
		trash: "images/Trash.png",
		id: "cardTrash",
		idCard: "remove-card",
	},
	{
		name: "Latemar",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
		id: "cardTrash",
		idCard: "remove-card",
	},
	{
		name: "Parque Nacional de la Vanoise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
		id: "cardTrash",
		idCard: "remove-card",
	},
	{
		name: "Lago di Braies",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
		id: "cardTrash",
		idCard: "remove-card",
	},
];

const element = document.querySelector(".element");
const cardTitle = document.querySelector(".element-card__title");
const cardImage = document.querySelector(".element-card__image");
const elementCard = document.querySelector(".element-card");
// const template = document.getElementById("template-cards").content;
// const fragment = document.createDocumentFragment();

// agregando las cards
initialCards.forEach(function (item) {
	// template.querySelector(".element-card");
	// template.querySelector(".element-card__title").textContent = item.name;
	// template.querySelector(".element-card__image").setAttribute("src", item.link);
	// template.querySelector(".element-card__trash").setAttribute("id", item.id);
	// template.querySelector(".element-card").setAttribute("id", item.idCard);
	// let clone = document.importNode(template, true);
	// fragment.appendChild(clone);
	const initialCard = addCard(item.name, item.link);
	element.append(initialCard);
});
// element.appendChild(fragment);

// agregando la carta personalizada
function addCard(title, image) {
	const newCard = document
		.querySelector("#template-cards")
		.cloneNode(true)
		.content.querySelector(".element-card");
	console.log(newCard);
	const titleCard = newCard.querySelector(".element-card__title");
	titleCard.textContent = title;
	const imageCard = newCard.querySelector(".element-card__image");
	imageCard.src = image;
	const trashButton = newCard.querySelector(".element-card__trash");
	trashButton.addEventListener("click", function () {
		newCard.remove();
	});
	const likeButton = newCard.querySelector(".element-card__heart");
	likeButton.addEventListener("click", function () {
		likeButton.classList.toggle();
	});
	// const addFragment = document.createDocumentFragment();
	// let addClone = document.importNode(template, true);
	// addFragment.appendChild(addClone);

	// const titleInput = document.querySelector(".input__title");
	// const imageInput = document.querySelector(".input__image");
	// const addCardTitle = document.getElementById("addCardTitle");
	// const addCardImage = document.getElementById("addCardImage");
	// addCardTitle.textContent = titleInput.value;
	// addCardImage.src = imageInput.value;
	return newCard;
}

const titleInput = document.querySelector(".input__title");
const imageInput = document.querySelector(".input__image");
addPopup.addEventListener("submit", function (evt) {
	evt.preventDefault();
	const cardCreated = addCard(titleInput.value, imageInput.value);
	element.prepend(cardCreated);
});
submitButtonForm.addEventListener("click", closeAddForm);

//BOORANDO LA CARD
//funcion para borrarlo

// const removeCard = document.getElementById("remove-card");
// function deleteCard() {
// 	removeCard.remove();
// }

// const cardTrash = document
// 	.getElementById("cardTrash")
// 	.addEventListener("click", deleteCard);
