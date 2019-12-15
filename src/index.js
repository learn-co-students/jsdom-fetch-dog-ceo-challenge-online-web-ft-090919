// Dog Images
function getDogImageData() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  return fetch(imgUrl).then(response => response.json());
}

function renderDogImageSection() {
  getDogImageData().then(result => renderDogImage(result));
}

function renderDogImage(json) {
  const dogData = json["message"];

  for (const dogImageUrl of dogData) {
    buildDogImage(dogImageUrl);
  }
}

function buildDogImage(dogUrl) {
  const imgContainer = document.querySelector("#dog-image-container");
  const imageTag = document.createElement("img");
  imageTag.src = dogUrl;
  imgContainer.appendChild(imageTag);
}

// dog breeds
function getDogBreedData() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  return fetch(breedUrl).then(response => response.json());
}

function renderDogBreedListSection(filter) {
  clearBreedsList();
  getDogBreedData().then(result => renderBreedList(result, filter));
}

function renderBreedList(json, filter) {
  const dogData = json["message"];
  const breedNames = Object.keys(dogData);

  if (filter == "") {
    createBreedList(breedNames);
  } else {
    const filteredBreedNames = filterBreedNames(breedNames, filter);
    createBreedList(filteredBreedNames);
  }
}

function filterBreedNames(breedNames, letter) {
  const filteredBreedNames = breedNames.filter(function(breed) {
    return breed.charAt(0) == letter;
  });

  return filteredBreedNames;
}

function createBreedList(names) {
  for (const breedName of names) {
    buildBreedListItem(breedName);
  }
}

function buildBreedListItem(dogName) {
  const dogBreedList = document.querySelector("#dog-breeds");
  const listItem = document.createElement("li");
  const listItemTextContent = document.createTextNode(dogName);
  listItem.appendChild(listItemTextContent);
  dogBreedList.appendChild(listItem);
}

function clearBreedsList() {
  const dogBreedListItems = document.querySelectorAll("#dog-breeds li");
  for (let i = 0; (li = dogBreedListItems[i]); i++) {
    li.parentNode.removeChild(li);
  }
}

function toggleHighlightText(dogBreedItem) {
  dogBreedItem.classList.toggle("highlight");
}

document.addEventListener("DOMContentLoaded", function() {
  renderDogBreedListSection("");
  renderDogImageSection();

  const dogBreedList = document.querySelector("#dog-breeds");
  const breedSelect = document.querySelector("#breed-dropdown");

  dogBreedList.addEventListener("click", function(e) {
    const dogBreedListItem = e.target;
    if (dogBreedListItem.tagName == "LI") {
      toggleHighlightText(dogBreedListItem);
    }
  });

  breedSelect.addEventListener("change", function(e) {
    const filterLetter = e.target.value;
    renderDogBreedListSection(filterLetter);
  });
});
