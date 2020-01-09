console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  getImages()
  getDogBreeds()
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
  const gallery = document.getElementById('dog-image-container')
  json.message.forEach(img => {
    const i = document.createElement('img')
    i.src = img
    gallery.appendChild(i)
  })

}


function getDogBreeds() {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
    breeds = Object.keys(json.message)
    breeds.forEach(breed => addBreed(breed))
    addBreedSelectListener()
  })
  }

  function updateBreedList(breeds){
  let ul = document.queryselector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))
  }


  function addBreed(breed){
    const ul = document.getElementById('dog-breeds')
    const li = document.createElement('li')
    li.innerText = breed
    li.style.cursor = 'pointer'
    ul.appendChild(li)
    li.addEventListener('click', 'color')
  }

  function color(e){
    e.target.style.color = 'red';
  }



  function selectBreedsWithLetter(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))

  }

  function addBreedSelectListener(){
    let breedDropdown = document.query.Selector('#breed-dropdown')
    breedDropdown.addEventListener('change', function(e){
      selectBreedsWithLetter(e.target.value)
    })
  }