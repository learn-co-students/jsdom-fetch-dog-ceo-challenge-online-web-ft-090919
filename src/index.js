console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function fetchPics() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => console.log(json));
}

function renderPics(json) {
  json.forEach(pic => {
    let img = document.createElement("img");
    img.src = pic;
  });
}

addEventListener("DOMContentLoaded", fetchPics());
