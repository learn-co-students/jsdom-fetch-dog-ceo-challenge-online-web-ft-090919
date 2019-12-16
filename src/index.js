
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImageContainer = document.getElementById("dog-image-container")

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreedsList = document.getElementById("dog-breeds")

const filter = document.getElementById("breed-dropdown")

fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        json.message.forEach(item => displayImage(item))
    })

function displayImage(img) {
    let imageToAdd = '<img src="' + `${img}` + '">'
    dogImageContainer.innerHTML += imageToAdd
}

fetch(breedUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json) {
        let breeds = Object.keys(json.message)
        breeds.forEach(breed => addBreedToList(breed))

        const lis = document.querySelectorAll("li")
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click", () => {
                lis[i].style.color = "blue"
            })
        }
    })

function addBreedToList(breed) {
    let breedToAdd = `<li>${breed}</li>`
    dogBreedsList.innerHTML += breedToAdd
}

filter.addEventListener("change", function(event) {
    event.preventDefault()
    let lis = document.querySelectorAll("li")
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].innerText[0] === filter.value) {
            lis[i].style.display = ""
        } else {
            lis[i].style.display = "none"
        }
    }
})