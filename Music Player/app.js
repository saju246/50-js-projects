const audioPlayer = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const playlist = document.getElementById("playlist");
const currentTrackImage = document.getElementById("currentTrackImage");

const tracks = [
    {
        title: "avesham Galatta",
        image : 'images/Aavesham-Malayalam-2024-20240312184108-500x500.jpg',
        source: 'songs/GalattaAaveshamJithu MadhavanFahadh FaasilSushin Shyam,Paal Dabba,Vinayak NazriyaAnwar Rasheed.mp3',
    },
    {
        title: "avesham jaada",
        image : 'images/MV5BOWMyNTA2M2UtMmZkNC00ZWE5LThjZGItODcxNGU2MDBhYTk1XkEyXkFqcGdeQXVyOTU0NjY5MzM@.jpg',
        source: 'songs/Jaada  Aavesham Jithu Madhavan Fahadh Faasil Sushin ShyamSreenath Bhasi Nazriya Anwar Rasheed.mp3',
    },
    {
        title: "Padacchor MHR",
        image : 'images/padachor.png',
        source: 'songs/MHR - Padachor ft.Lil payyan & SA (Official audio).mp3',
    },
    {
        title: "Premalu",
        image : 'images/premalu.jpg',
        source: 'songs/Welcome to Hyderabad Video Song  Premalu  Naslen  Mamitha  Girish AD  Vishnu Vijay Suhail Koya.mp3',
    }
];

let currentTrackIndex = 0;

tracks.forEach((track, index) => {
    const listItem = document.createElement("li");
 
    const image = document.createElement("img");
    image.src = track.image;
    image.alt = track.title;
    listItem.appendChild(image);
 
    const titleSpan = document.createElement("span");
    titleSpan.textContent = track.title;
    listItem.appendChild(titleSpan);
 
    listItem.addEventListener("click", () => playTrack(index));

    playlist.appendChild(listItem);
});

function playTrack(index) {
    currentTrackIndex = index;
    audioPlayer.src = tracks[index].source;
    audioPlayer.play();
    currentTrackImage.src = tracks[index].image;  
}

playButton.addEventListener("click", () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.querySelector('img').src = 'icons/icons8-pause-button-50.png';
    } else {
        audioPlayer.pause();
        playButton.querySelector('img').src = 'icons/icons8-play-48.png';
    }
});

audioPlayer.addEventListener("play", () => {
    playButton.querySelector('img').src = 'icons/icons8-pause-button-50.png';
});

audioPlayer.addEventListener("pause", () => {
    playButton.querySelector('img').src = 'icons/icons8-play-48.png';
});

prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
});

nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

audioPlayer.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});
