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
	errorElement.classList.add(settings.errorClass);
	errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	errorElement.classList.remove(settings.errorClass);
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
		submitButton.classList.add(settings.inactiveButtonClass);
		submitButton.setAttribute("disabled", true);
	} else {
		submitButton.classList.remove(settings.inactiveButtonClass);

		submitButton.removeAttribute("disabled", true);
	}
};

const setEventListeners = (formElement) => {
	const inputList = Array.from(
		formElement.querySelectorAll(settings.inputSelector)
	);
	const submitButton = formElement.querySelector(settings.submitButtonSelector);
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
	const formList = Array.from(document.querySelectorAll(settings.formSelector));
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
	// inputErrorClass: "input__element_type_error",
	errorClass: "input-error_active",
};
enableValidation(settings);

const esc = document.addEventListener(
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
