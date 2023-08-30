let profileButton = document.querySelector(".profile-info__button");
let popup = document.querySelector(".popup");
let popupOpen = popup.querySelector(".popup_oppened");
let popupContainer = popup.querySelector(".popup-container");
let submitButton = popupContainer.querySelector(".input__submit");
let closeIcon = popup.querySelector(".popup__close-icon");
let page = document.querySelector(".page");

function open() {
	popup.classList.remove("popup_oppened");
	// 	page.setAttribute("style", "opacity:0.5");
	page.classList.add("page_opacity");
}

profileButton.addEventListener("click", open);

function close() {
	popup.classList.add("popup_oppened");
	// page.removeAttribute("style", "opacity:0.5");
	page.classList.remove("page_opacity");
}

closeIcon.addEventListener("click", close);

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
submitButton.addEventListener("click", close);
