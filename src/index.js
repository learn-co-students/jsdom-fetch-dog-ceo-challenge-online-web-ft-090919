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



function fetchBreeds() {
  const breedURL = "https://dog.ceo/api/breeds/list/all";

  fetch(breedURL)
    .then(results => results.json())
    .then(res => {
      res.message.forEach(breed => loadBreedOptions(breed);
    });
}


function loadBreedOptions(breed){
    let container = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerHTML = breed;
    container.appendChild(li); 
}
document.addEventListener("DOMContentLoaded", function() {
  loadImages();
  loadBreedOptions();
});