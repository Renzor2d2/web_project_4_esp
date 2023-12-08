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
