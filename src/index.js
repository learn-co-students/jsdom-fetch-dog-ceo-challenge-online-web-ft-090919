console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function challengeOne() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImages(json));
}
  
function addImages(json) {
    const container = document.getElementById('dog-image-container')
    json.message.forEach(link => {
        const img = document.createElement('img')
        img.src = link
        container.appendChild(img)
    })
}

function challengeTwo() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json));
}

function addBreeds(json) {
    const ul = document.getElementById('dog-breeds')
    const breeds = Object.keys(json.message)
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
        li.addEventListener('click', e => {
            e.target.style.color = 'red'
          })
    })
}
  
document.addEventListener('DOMContentLoaded', function() {
    challengeOne();
    challengeTwo();
})
  