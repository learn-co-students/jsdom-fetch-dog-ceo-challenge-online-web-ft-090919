console.log('%c HI', 'color: firebrick')

//  Challenge 1 - done
//  Challenge 2 - done 
//  Challenge 3 - done
//  Challenge 4 - in process


//  IMAGES 

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
     fetch(imgUrl)
     .then(resp => resp.json())
     .then(json => renderDogs(json));
    //  .then(dogs => {
    //      dogs.forEach(dog => displayDog(dog))
    //  })
    }

function renderDogs(json) {
    const dogData = json["message"];
    dogData.forEach(dog => displayDog(dog))
}


function image(dog){
    return `
    <div class="dog">
        <img src=${dog} class="dog-image">
    </div>
    `
}

const displayDog = (dog) => {
    const dogImageContainer = document.getElementById("dog-image-container")
    // const imageTag = document.createElement("img")
    // imageTag.src = dog
    dogImageContainer.innerHTML += image(dog)
}


// BREEDS 

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds() {
     fetch(breedUrl)
     .then(resp => resp.json())
     .then(json => renderBreeds(json));
    }


function renderBreeds(json) {
    const breedData = json["message"];
    const breedNames = Object.keys(breedData);
    // breedNames.forEach(breed => displayBreed(breed))
    breedList(breedNames)
}

function breedList(breedNames) {
    //  if filter is ""
    breedNames.forEach(breed => displayBreed(breed))
    // else 
    // call on fuction to filter, or filter within this one
}
    
    
function list(breed){
    return `
     <div class="breed" id="breed">
           <li>${breed}</li>
     </div>
    `
}
    
const displayBreed = (breed) => {
    // const dogImageContainer= document.getElementById("dog-image-container")
    // dogImageContainer.innerHTML += image(dog)
    const dogBreedsList = document.getElementById('dog-breeds')
    dogBreedsList.innerHTML += list(breed)
}
    

//  CHANGE LINK COLOR


// change color of dog breed name on click
function clickEvent(){
    const dogBreeds = document.getElementById('dog-breeds')

    dogBreeds.addEventListener("click", function(event) {
        const dogBreed = event.target 

        if (dogBreed.tagName == "LI") {
        changeColor(dogBreed)
    }
})
}


const changeColor = (dogBreed) => {
    dogBreed.style.color = "green"
}





//  SELECT DOG BASED ON FIRST LETTER


// select dog based on first letter (a, b, c, d)

function selectEvent(){
    const breedDropdown = document.getElementById('breed-dropdown')

    // define breedNames in here and pass with letter to filter function
    // Maybe make an array, push the dog-breeds info in, and iterate through
    
    // const breedNames = document.getElementById('dog-breeds')

    const breedNames = ["afghan", "boxer", "chihuahua", "dachshund"]

    breedDropdown.addEventListener("change", function(event) {
        const letter = event.target.value
 
        if (letter == "a") {
        filterBreeds(breedNames, letter)
    }
  })
}



function filterBreeds(breedNames, letter) {
    const filteredBreedNames = breedNames.filter(function(breed) {
    return breed.charAt(0) == letter
    })
    return filteredBreedNames
}


// function filterBreedNames(breedNames, letter) {
//     const filteredBreedNames = breedNames.filter(function(breed) {
//       return breed.charAt(0) == letter;
//     });
  
//     return filteredBreedNames;
//   }





   
document.addEventListener('DOMContentLoaded', function() {
     fetchImages()
     fetchBreeds()
     clickEvent()
     selectEvent()
})


notes:

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
     fetch(imgUrl)
     .then(resp => resp.json())
     .then(dogs => {
         dogs.forEach(dog => displayDog(dog))
     })
    }

function image(dog){
    return `
    <div class="dog">
        <img src=${dog.image} class="dog-image">
    </div>
    `
}

const displayDog = (dog) => {
    const dogImageContainer = document.getElementById("dog-image-container")
    dogImageContainer.innerHTML += image(dog)
  }


// 
   
document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
})

// 