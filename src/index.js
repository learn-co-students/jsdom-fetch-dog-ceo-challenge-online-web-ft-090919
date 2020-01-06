console.log('%c HI', 'color: firebrick')

function getImage(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(json){
    const main = document.getElementById('dog-image-container')
    json['message'].forEach(message => {
        const img = document.createElement('img')
        img.setAttribute('src', message);
        main.appendChild(img)
    })
}


function getBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => listBreeds(json))
}

function listBreeds(json){
    const list = document.getElementById('dog-breeds')
    for (const breed in json['message']){
        const li = document.createElement('li')
        li.innerHTML = `<li>${breed}</li>`
        list.appendChild(li)
    }
}

function changeColor(){
    const listItems = document.querySelectorAll("li")
    for (const item of listItems ){
        item.addEventListener('click', event => {
            item.style.cssText = "color: red";
    })
}
}

document.addEventListener('DOMContentLoaded', function(){
    getImage()
    getBreeds()
    changeColor()
})



