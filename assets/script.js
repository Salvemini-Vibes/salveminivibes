document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const carouselContainer = document.getElementById("carousel");
            data.people.forEach(person => {
                const personElement = createPersonElement(person);
                carouselContainer.appendChild(personElement);
            });

            // Altre operazioni con i dati JSON se necessario
        })
        .catch(error => console.error("Errore nel caricamento dei dati:", error));
});

function createPersonElement(person) {
    const personElement = document.createElement("div");
    personElement.className = "person";

    const image = document.createElement("img");
    image.src = person.image;
    personElement.appendChild(image);

    const name = document.createElement("h2");
    name.textContent = person.name;
    personElement.appendChild(name);

    const role = document.createElement("p");
    role.textContent = person.role;
    personElement.appendChild(role);

    return personElement;
}

// CHECKSTATUS

var options = {
    channel: "tayson", // TODO: Change this to the streams username you want to embed
    width: 1920,
    height: 1080,
    controls: false,
  };
  var player = new Twitch.Player("twitch", options);

  player.addEventListener(Twitch.Player.READY, initiate)

  function initiate() {
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.removeEventListener(Twitch.Player.READY, initiate);
  }

  function handleOnline() {
    document.getElementById("twitch").classList.remove('hide');
    player.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    player.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.setMuted(true);
    document.getElementById('offlinedataimg').style.display = 'none'; 
  }

  function handleOffline() {
    document.getElementById("twitch").classList.add('hide');
    player.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    player.addEventListener(Twitch.Player.ONLINE, handleOnline);
    player.setMuted(true);
  }
  player.setVolume(0.5);

  // ANIMATION
  function myFunction() {
    const selector = document.querySelector('.main-content');
    selector.classList.add('magictime', 'vanishIn');
  }

             // Simula il caricamento, ad esempio aspettando 3 secondi
             setTimeout(function () {
                // Dopo il caricamento, nascondi la pagina di caricamento e mostra il contenuto principale
                document.getElementById('loading-container').style.display = 'none';
                document.getElementById('main-content').style.display = 'block'; 


            }, 4000); // Imposta il tempo desiderato in millisecondi

    // COLORPALETTE-VIDEO
