console.log('%c HI', 'color: firebrick')
// I'm really bad with knowing where to put semicolons

// grab list from API
function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
  .then(resp => resp.json())
  .then(json => {
    const breeds = Object.keys(json.message);
    renderBreeds(breeds);
  });
}

// create li for each breed and append to ul element
function renderBreeds(breeds) {
    const ul = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.innerText = `${breed}`;
        ul.appendChild(li);
        li.addEventListener('click', updateColor);
    })
}

// load images
function fetchImages() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(image => addImage(image))
    });
}

// add image to DOM
function addImage(url) {
    let container = document.getElementById('dog-image-container');
    let img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
}

// update color of target
function updateColor(event) {
    event.target.style.color = 'blue'; // how to change to random colors on click?
}

// change list of breeds in list based on selection
// following functions copy/pasted and tweaked, needs more work to be functional
function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
}

function selectBreedsStartingWith(letter) {
    updateFilteredBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateFilteredBreedList(breeds) {
    let ul = document.getElementById('filtered-dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreedToFilteredList(breed));
}

function addBreedToFilteredList(breed) {
    let ul = document.getElementById('filtered-dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

document.addEventListener('DOMContentLoaded', function() {
fetchBreeds();
fetchImages();
})