console.log("%c HI", "color: firebrick");

function addImage(dogPicUrl) {
  let container = document.querySelector("#dog-image-container");
  let newImageEl = document.createElement("img");
  newImageEl.src = dogPicUrl;
  container.appendChild(newImageEl);
}

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
      results.message.forEach(image => addImage(image));
    });
}

function loadBreedOptions() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
      breeds = Object.keys(results.message);
      updateBreedList(breeds);
      addBreedSelectListener();
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadImages();
  loadBreedOptions();
});
