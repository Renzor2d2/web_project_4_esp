let profileButton = document.querySelector(".profile-info__button");
const popup = document.querySelector(".popup");
const popupOpen = popup.querySelector(".popup_oppened");
popupContainer = document.getElementById("popup-container");

const closeIcon = popup.querySelector(".popup__close-icon");
const page = document.querySelector(".page");
let addPopup = document.querySelector(".addpopup");
let addButton = document.querySelector(".profile__button-add");
let closeIconAdd = addPopup.querySelector(".addpopup__close-icon");
let addOpen = addPopup.querySelector(".addpopup_oppened");
let submitButtonForm = document.getElementById("newButton");

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
	const cardCreated = newCard.querySelector(".element-card__container-one");

	cardCreated.classList.add("element-card__container-one_created");

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
const newPlace = document.forms.newPlace;

const inputTitle = document.getElementById("input-title");
const inputImage = document.getElementById("input-image");

const addForm = document.getElementById("addpopup-container");
addForm.addEventListener("submit", function (evt) {
	evt.preventDefault();
	const cardCreated = addCard(inputTitle.value, inputImage.value);
	element.prepend(cardCreated);
	newPlace.reset();
	enableValidation();
});

// ////ENVIO DEL FORMULARIO
const formElement = document.querySelector(".form");
const inputElement = formElement.querySelector(".input__element");
const inputName = document.getElementById("input-name");
const inputJob = document.getElementById("input-job");
const editProfile = document.forms.firstForm;
const editButton = document.getElementById("button");
const adButton = document.getElementById("addButton");

function handleProfileFormSubmit(evt) {
	evt.preventDefault();
	const profileTitle = document.querySelector(".profile-info__title");
	const profileSubtitle = document.querySelector(".profile-info__subtitle");
	profileTitle.textContent = inputName.value;
	profileSubtitle.textContent = inputJob.value;
	formElement.reset();
	enableValidation();
}
formElement.addEventListener("submit", handleProfileFormSubmit);
editButton.addEventListener("click", closeEditProfile);

console.log(inputElement);
const showInputError = (formElement, inputElement, errorMessage) => {
	console.log(errorMessage);
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.add("input-error_active");
	errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.remove("input-error_active");
	errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
		hideInputError(formElement, inputElement);
	}
};
const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	});
};

const toggleButtonState = (inputList, submitButton) => {
	if (hasInvalidInput(inputList)) {
		submitButton.classList.add("input__submit_disabled");
		submitButton.setAttribute("disabled", true);
	} else {
		submitButton.classList.remove("input__submit_disabled");

		submitButton.removeAttribute("disabled", true);
	}
};

const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll(".input__element"));
	const submitButton = formElement.querySelector(".input__submit");
	console.log(inputList);
	toggleButtonState(inputList, submitButton);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener("input", function () {
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, submitButton);
		});
	});
};

const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll(".form"));
	console.log(formList);
	formList.forEach((formElement) => {
		formElement.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});

		setEventListeners(formElement);
	});
};

const settings = {
	formSelector: ".form",
	inputSelector: ".input__element",
	submitButtonSelector: ".input__submit",
	inactiveButtonClass: "input__submit_disabled",
	inputErrorClass: "input__element_type_error",
	errorClass: "input__element-error_active",
};
enableValidation(settings);

document.addEventListener(
	"keydown",
	function (evt) {
		if (evt.keyCode === 27) {
			closeEditProfile();
			closeAddForm();
		}
	},
	false
);

page.addEventListener("mousedown", closeEditProfile);
page.addEventListener("mousedown", closeAddForm);
