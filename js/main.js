import API from "./api.js";
import UI from "./ui.js";

const api = new API();

const ui = new UI();

document.addEventListener("DOMContentLoaded", async () => {
  ui.renderLoader();

  const songs = await api.getPopularMusics();

  ui.renderCard(songs);
});

ui.form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = e.target[0].value.trim();

  if (!query) {
    alert("Please perform a valid search operation. !!");

    return;
  }

  ui.renderLoader();

  ui.musicTitle.textContent = ` Results for ${query} `;

  const songs = await api.getSearchMusic(query);

  ui.renderCard(songs);
});

ui.musicList.addEventListener("click", (e) => {
  const playBtn = e.target.closest(".play");
  if (playBtn) {
    const id = playBtn.dataset.id;
    const music = api.musics.find((music) => music.id == id);
    ui.renderPlayer(music);
  }
});
