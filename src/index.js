console.log("%c HI", "color: firebrick");

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
      results.message.forEach(image => renderImage(image));
    });
}

renderImage(image){
    let img = document.createElement(img);
    img.src = image
    let div = document.querySelector('div#dog-image-container')
    div.appendChild(img)
}

addEventListener("DOMContentLoaded", loadImages());
