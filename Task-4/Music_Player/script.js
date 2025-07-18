const songs = [{
    title: "Daayre",
    artist: "Arijit Singh",
    src: "assets/song1.mp3"
},
{
    title: "Darkhaast",
    artist: "Mithoon,Arijit Singh",
    src: "assets/song2.mp3"
},
{
    title: "Jab Tak",
    artist: "Armaan Malik",
    src: "Assets/song3.mp3"
},
{
    title: "Kaun Tujhe",
    artist: "Palak Muchhal",
    src: "Assets/song4.mp3"
},
{
    title: "Perfect",
    artist: "Ed Sheeran",
    src: "Assets/song5.mp3"
},
{
    title: "Sapphire",
    artist: "Ed Sheeran, Arijit Singh",
    src: "Assets/song6.mp3"
},
{
    title: "Tu Jaane Na",
    artist: "Atif Aslam, Pritam",
    src: "Assets/song8.mp3"
},
{
    title: "Ye Tune Kya Kiya",
    artist: "Pritam, Javed Bashir",
    src: "Assets/song10.mp3"
}
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const previous = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const currentTimeEl = document.getElementById("current-time");
const progress = document.getElementById("progress");
const durationEl = document.getElementById("duration");
const volume = document.getElementById("volume");
const playlist = document.getElementById("Playlist");

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    title.textContent = song.title;
    artist.textContent = song.artist;
    updatePlaylistUI();
}

function playSong() {
    audio.play();
    play.innerHTML = "&#10073;&#10073;";
}

function pauseSong() {
    audio.pause();
    play.innerHTML = "&#9654";
}

function togglePlay() {
    if (audio.paused) playSong();
    else pauseSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function updateProgress(){
    const { currentTime, duration } = audio;
    progress.value = (currentTime / duration) * 100;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
}

function setProgress(e) {
    const percent = e.target.value;
    audio.currentTime = (percent / 100) * audio.duration;
}

function setVolume(e) {
    audio.volume = e.target.value;
}

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function updatePlaylistUI() {
    const items = document.querySelectorAll(".playlist-item");
    items.forEach((item, idx) => {
        item.classList.toggle("active", idx === currentSongIndex);
    });
}

function renderPlaylist() {
    playlist.innerHTML = "";
    songs.forEach((song, idx) => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        item.textContent = `${song.title} - ${song.artist}`;
        item.addEventListener("click", () => {
            currentSongIndex = idx;
            loadSong(idx);
            playSong();
        });
        playlist.appendChild(item);
    });
}


play.addEventListener("click", togglePlay);
previous.addEventListener("click", prevSong);
next.addEventListener("click", nextSong);
progress.addEventListener("input", setProgress);
volume.addEventListener("input", setVolume);
audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);

loadSong(currentSongIndex);
renderPlaylist();
volume.value = 0.5;
audio.volume = 0.5;


