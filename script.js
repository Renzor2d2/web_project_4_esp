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
	},
	{
		name: "Lago Louise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
		id: "cardTrash",
	},
	{
		name: "Montañas Calvas",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
		trash: "images/Trash.png",
		id: "cardTrash",
	},
	{
		name: "Latemar",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",

		id: "cardTrash",
	},
	{
		name: "Parque Nacional de la Vanoise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
		id: "cardTrash",
	},
	{
		name: "Lago di Braies",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
		id: "cardTrash",
	},
];

const element = document.querySelector(".element");
const cardTitle = document.querySelector(".element-card__title");
const cardImage = document.querySelector(".element-card__image");
const elementCard = document.querySelector(".element-card");
const template = document.getElementById("template-cards").content;
const fragment = document.createDocumentFragment();

// agregando las cards
initialCards.forEach(function (item) {
	template.querySelector(".element-card");
	template.querySelector(".element-card__title").textContent = item.name;
	template.querySelector(".element-card__image").setAttribute("src", item.link);
	template.querySelector(".element-card__trash").setAttribute("id", item.id);
	let clone = document.importNode(template, true);
	fragment.appendChild(clone);
});
element.appendChild(fragment);

// agregando la carta personalizada
function addCard(evt) {
	evt.preventDefault();
	const addFragment = document.createDocumentFragment();
	let addClone = document.importNode(template, true);
	addFragment.appendChild(addClone);
	element.prepend(addFragment);
	const titleInput = document.querySelector(".input__title");
	const imageInput = document.querySelector(".input__image");
	const addCardTitle = document.getElementById("addCardTitle");
	const addCardImage = document.getElementById("addCardImage");
	addCardTitle.textContent = titleInput.value;
	addCardImage.src = imageInput.value;
}
addPopup.addEventListener("submit", addCard);
submitButtonForm.addEventListener("click", closeAddForm);

//BOORANDO LA CARD
//funcion para borrarlo
const removeCard = document.getElementById("remove-card");
function deleteCard() {
	removeCard.remove();
}

const cardTrash = document
	.getElementById("cardTrash")
	.addEventListener("click", deleteCard);
