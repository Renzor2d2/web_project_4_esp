const profileButton = document.querySelector(".profile-info__button");
const popup = document.querySelector(".popup");
const popupOpen = popup.querySelector(".popup_oppened");
const closeIcon = popup.querySelector(".popup__close-icon");
const page = document.querySelector(".page");
const addPopup = document.querySelector(".addpopup");
const addButton = document.querySelector(".profile__button-add");
const closeIconAdd = addPopup.querySelector(".addpopup__close-icon");
const addOpen = addPopup.querySelector(".addpopup_oppened");
const submitButtonForm = document.getElementById("newButton");

const Events = document.addEventListener("keydown", function (evt) {
	if (evt.key === "Escape") {
		closeEditProfile();
		closeAddForm();
		// closeEmergent();
	}
});
//Popup EditProfile
function openEditProfile() {
	popup.classList.remove("popup_oppened");
	page.classList.add("page_opacity");
	const addEvent = document.addEventListener("keydown", Events);
}
function closeEditProfile() {
	popup.classList.add("popup_oppened");
	page.classList.remove("page_opacity");
	const removeEvent = document.removeEventListener("keydown", Events);
}

profileButton.addEventListener("click", openEditProfile);
closeIcon.addEventListener("click", closeEditProfile);
page.addEventListener("mousedown", closeEditProfile);

//////popup Newplace
function openAddform() {
	addPopup.classList.remove("addpopup_oppened");
	page.classList.add("page_opacity");
	const addEvent = document.addEventListener("keydown", Events);
}
function closeAddForm() {
	addPopup.classList.add("addpopup_oppened");
	page.classList.remove("page_opacity");
	const removeEvent = document.removeEventListener("keydown", Events);
}

addButton.addEventListener("click", openAddform);

closeIconAdd.addEventListener("click", closeAddForm);
submitButtonForm.addEventListener("click", closeAddForm);
page.addEventListener("mousedown", closeAddForm);

///popup EmergentWindow
// function openEmergent() {
// 	const emergentCard = document.querySelector(".addEmergent");
// 	emergentCard.classList.remove("addEmergent_oppened");
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
