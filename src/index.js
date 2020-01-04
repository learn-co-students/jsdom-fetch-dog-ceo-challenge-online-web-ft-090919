function displayImage(url, index) {
  const imageContainer = document.querySelector("#dog-image-container")

  console.log(url)
  let imgElement = document.createElement("img")
  imgElement.src = url
  console.log(imgElement)
  imageContainer.appendChild(imgElement)
}

function addBreed(breed, index) {
  const listContainer = document.querySelector("#dog-breeds")

  let liElement = document.createElement("li")
  liElement.innerHTML = breed
  listContainer.appendChild(liElement)
}

function addColorListenerToList() {
  document.querySelector("#dog-breeds").addEventListener("click", function(element){
    element.target.style.color = "red"
  })
}

function filterListListener(){
  document.querySelector("#breed-dropdown").addEventListener("change", (event) => {
    filterList()
  })
}

function filterList(){
  let dropDownValue = document.querySelector("#breed-dropdown").value
  let liArray = document.querySelectorAll("li")
  for(i = 0; i < liArray.length; i++){
    if(liArray[i].innerHTML[0] != dropDownValue){
      liArray[i].style.display = "none"
    } else {
      liArray[i].style.display = "block"
    }
  }
}

document.addEventListener("DOMContentLoaded", function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(imgUrl).then(resp => resp.json())
  .then(json => {
    console.log(json.message)
    json.message.forEach(displayImage)
  })

  fetch(breedUrl).then(resp => resp.json())
  .then(json => {
    breeds = Object.keys(json.message)
    breeds.forEach(addBreed)})
  .then(addColorListenerToList())
  .then(filterListListener())
  
})
