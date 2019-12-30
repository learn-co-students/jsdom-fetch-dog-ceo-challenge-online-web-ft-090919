// console.log('%c HI', 'color: firebrick')


// added a "hey when this loads" event and then the function loads an immage and then the breed options 
document.addEventListener('DomContentLoaded', function() {
    loadImages();
    loadbreedOptions();
});


// here is where im letting the the above event listner what load images is Im defining a constant with the url after that 
// im fetching that constant (manking a xmlhttprequest no errors yet but im sure I will get there)
function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }

//   not reareally sure whats going on here lol
  function addImage(dogPicUrl) {
      let container = document.querySelector('#dog-image-container');
      let newImageEl = document.createElement('img');
      newImageEl.src = dogPicUrl;
      container.appendChild(newImageEl);
  }
  

  function loadBreed

// this function updates a color. it takes in the arg of an event. then in the function when the event is trigered then change the color to green 
function updateColor(event) {  
    event.target.style.color = 'green'
}

