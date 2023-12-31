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
submitButtonForm.addEventListener("click", closeAddForm);

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
		trash: "images/Trash.png",
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
const main = document.querySelector(".main");
const element = document.querySelector(".element");
const elementCard = document.querySelector(".element-card");

initialCards.forEach((item) => {
	const initialCard = addCard(item.name, item.link);
	element.append(initialCard);
});

function addCard(title, image) {
	const newCard = document
		.querySelector("#template-cards")
		.cloneNode(true)
		.content.querySelector(".element-card");

	const titleCard = newCard.querySelector(".element-card__title");
	titleCard.textContent = title;
	const imageCard = newCard.querySelector(".element-card__image");
	imageCard.src = image;

	const trashButton = newCard.querySelector(".element-card__trash");
	trashButton.addEventListener("click", () => {
		newCard.remove();
	});
	const likeButton = newCard.querySelector(".element-card__heart");
	likeButton.addEventListener("click", () => {
		likeButton.classList.toggle("element-card__heart_active");
	});

	const emergentCard = document.querySelector(".addEmergent");

	imageCard.addEventListener("click", () => {
		const emergeImage = emergentCard.querySelector(".addEmergent__image");
		emergeImage.src = image;
		const emergeTitle = emergentCard.querySelector(".addEmergent__title");
		emergeTitle.textContent = title;
		emergentCard.classList.remove("addEmergent_oppened");
		page.classList.add("page_opacity");
	});
	const emergeClose = emergentCard.querySelector(".addEmergent__close-icon");
	emergeClose.addEventListener("click", () => {
		emergentCard.classList.add("addEmergent_oppened");
		page.classList.remove("page_opacity");
	});
	return newCard;
}

const titleInput = document.querySelector(".input__title");
const imageInput = document.querySelector(".input__image");
addPopup.addEventListener("submit", function (evt) {
	evt.preventDefault();
	const cardCreated = addCard(titleInput.value, imageInput.value);
	element.prepend(cardCreated);
	titleInput.value = "";
	imageInput.value = "";
});
