Notes:

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    fetch(imgUrl)
     .then(resp => resp.json())
     .then(result => renderImages(result));
   }
   
function renderImages(json) {
    console.log(json["message"][0])
    console.log(json["message"][1])
    console.log(json["message"][2])
    console.log(json["message"][3])
         
    //  const main = document.querySelector('main')
    //  json.forEach(image => {
    //    const h2 = document.createElement('h2')
    //    h2.innerHTML = `<h2>${image.name}</h2>`
    //    main.appendChild(h2)
    //  })
   }
   


     // function renderDogs(json) {

    //     const dogData = json["message"];
      
    //     for (const dog of dogData) {
    //     //   buildDogImage(dogImageUrl);
    //         displayDog(dog)
    //     }
    //   }