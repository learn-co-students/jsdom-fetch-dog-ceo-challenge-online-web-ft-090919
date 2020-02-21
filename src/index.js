document.addEventListener('DOMContentLoaded', function() {
    fetch(imgUrl).then( resp => resp.json()).then(json => addImages(json));
    fetch(breedUrl).then( resp => resp.json()).then(json => loadBreeds(json));
});

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds;

function addImages(json) {
    let div = document.getElementById('dog-image-container');
    json['message'].forEach( imgUrl => {
        let img = document.createElement('img');
        img.src = imgUrl;
        div.appendChild(img);
    });
}

function loadBreeds(json) {
    breeds = Object.keys(json.message);
    addBreeds(breeds)
    document.getElementById('breed-dropdown').addEventListener('change', filterBreeds);
}

function addBreeds(breeds) {
    let ul = document.getElementById('dog-breeds');
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.textContent = breed;
        li.id = breed;
        ul.appendChild(li);
    });
    addClickListenerToBreeds();
}

function filterBreeds(e) {
    let ul = document.getElementById('dog-breeds');
    child = ul.lastChild
    while(child) {
        child.remove()
        child = ul.lastChild
    }
    addBreeds(breeds.filter( breed => breed[0] == e.target.value));
}
function addClickListenerToBreeds() {
    let ul = document.getElementById('dog-breeds');
    let children = ul.children;
    for(let i = 0; i < children.length; i++) {
        children[i].onclick = () => { children[i].style.color = 'red'; };
    }
}
