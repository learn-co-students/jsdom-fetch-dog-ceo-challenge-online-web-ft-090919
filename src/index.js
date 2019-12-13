console.log("%c HI", "color: firebrick");

function fetchDogImageData() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  return fetch(imgUrl).then(response => response.json());
}

function renderDogImageData() {
  fetchDogImageData().then(result => renderDogImage(result));
}

function renderDogImage(json) {
  const imgContainer = document.querySelector("#dog-image-container");
  const dogData = json["message"];

  for (dogImageUrl of dogData) {
    const img = buildDogImage(dogImageUrl);
    imgContainer.appendChild(img);
  }
}

function buildDogImage(dogUrl) {
  const imageTag = document.createElement("img");
  imageTag.src = dogUrl;
  return imageTag;
}

function fetchDogBreedData() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  return fetch(breedUrl).then(response => response.json());
}

function renderDogBreedList(filter = "off") {
  clearBreedsList();
  if (filter == "off") {
    fetchDogBreedData().then(result => createBreedList(result));
  } else {
    fetchDogBreedData().then(result => createFilteredBreedList(result, filter));
  }
}

function createBreedList(json) {
  const dogData = json["message"];
  const breedNames = Object.keys(dogData);
  breedListFactory(breedNames);
}

function createFilteredBreedList(json, letter) {
  const dogBreeds = json["message"];
  const breedNames = Object.keys(dogBreeds);

  const filteredBreedNames = breedNames.filter(function(breed) {
    return breed.charAt(0) == letter;
  });

  breedListFactory(filteredBreedNames);
}

function breedListFactory(names) {
  const dogBreedList = document.querySelector("#dog-breeds");

  for (const breedName of names) {
    const listItem = buildBreedListItem(breedName);
    dogBreedList.appendChild(listItem);
  }
}

function buildBreedListItem(dogName) {
  const listItem = document.createElement("li");
  const listItemTextContent = document.createTextNode(dogName);
  listItem.appendChild(listItemTextContent);
  return listItem;
}

function filterBreedList(letter) {
  if (letter == "all") {
    renderDogBreedList();
  } else {
    renderDogBreedList(letter);
  }
}

function clearBreedsList() {
  const dogBreedListItems = document.querySelectorAll("#dog-breeds li");
  for (let i = 0; (li = dogBreedListItems[i]); i++) {
    li.parentNode.removeChild(li);
  }
}

function highlightText(dogBreedItem) {
  dogBreedItem.classList.toggle("highlight");
}

document.addEventListener("DOMContentLoaded", function() {
  const dogBreedList = document.querySelector("#dog-breeds");
  const breedSelect = document.querySelector('#breed-dropdown');

  renderDogBreedList();
  renderDogImageData();

  dogBreedList.addEventListener("click", function(e) {
    const dogBreedListItem = e.target;
    if (dogBreedListItem.tagName == "LI") {
      highlightText(dogBreedListItem);
    }
  });

  breedSelect.addEventListener("change", function(e) {
    const filterLetter = e.target.value;
    filterBreedList(filterLetter);
  });
});
