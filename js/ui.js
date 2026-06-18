class UI {
  constructor() {
    this.musicList = document.querySelector(".music-list");
    this.form = document.querySelector("form");
    this.musicTitle = document.querySelector("#music-title");
    this.player = document.querySelector(".player");
  }

  renderCard(songs) {
    this.musicList.innerHTML = "";

    songs.forEach((song) => {
      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <figure>
                <img
                 src="${song.album.cover_medium}"
                  alt="music-image"
                />

                <div class="play" data-id=${song.id}>
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="music-info">
                <h4>${song.title}</h4>
                <h4>${song.artist.name}</h4>
              </div>
      `;

      this.musicList.appendChild(card);
    });
  }

  renderLoader() {
    this.musicList.innerHTML = `
    <div class="loader-wrapper">
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>
</div>
`;
  }

  renderPlayer(music) {
    this.player.innerHTML = `
      <div class="info">
        <img
          id="music-image"
          src="${music.album.cover_medium}"
          alt="music-image"
        />
        <div>
          <h5>${music.title}</h5>
<p>${music.artist.name}</p>
        </div>
      </div>

      <div class="audio-wrapper">
      <audio
        src="${music.preview}"
        controls
      ></audio>
       </div>

      <div class="icons">
        <i class="bi bi-apple-music"></i>
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-pc-display"></i>
      </div>
    `;

    const audioElement = document.querySelector("audio");

    audioElement.volume = 0.05;
    audioElement.autoplay = true;

    audioElement.addEventListener("play", () => {
      const image = document.querySelector("#music-image");

      image.classList.add("animate");
    });

    audioElement.addEventListener("pause", () => {
      const image = document.querySelector("#music-image");

      image.classList.remove("animate");
    });
  }
}

export default UI;
