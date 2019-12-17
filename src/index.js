console.log('%c HI', 'color: firebrick')

function loadImgs(img){
  let imgDiv = document.querySelector("#dog-image-container")

  let newImg = document.createElement("img")
  newImg.setAttribute("src", img)
  imgDiv.appendChild(newImg)
}

function loadBreed(breed){
  let breedList = document.querySelector("#dog-breeds")
  let newEl = document.createElement("li")
  newEl.innerHTML = breed
  breedList.appendChild(newEl)
}


function changeColor(elem){
  console.log(elem)
  elem.style.color = "green"
}


function filterBreeds(elem){
  let itms = document.querySelectorAll("li")

  itms.forEach(function(itm){
    itm.style.display = "block"
    if (itm.innerText[0] === elem.value ){
      console.log(itm)
    }else {
      itm.style.display = "none"
    }

  })
}

document.addEventListener('DOMContentLoaded', function(){

  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  let breedList = document.querySelector("#breed-dropdown")
  let breedFilter = document.querySelector("#breed-dropdown")



  fetch(imgUrl)
  .then(function(resp){
    return resp.json()
  })
  .then(function(json){
    json["message"].forEach(function(img){
      loadImgs(img)
    })
  })


  fetch(breedUrl)
  .then(function(resp){
    return resp.json()
  }).then(function(json){
    for (breed in json["message"]){
      loadBreed(breed)
    }
  })

  document.addEventListener('click', function(e){
    e.target.style.color = "red"
  })

  breedFilter.addEventListener('change', function(e){
    filterBreeds(e.target)
  })



})
