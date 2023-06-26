
const music = new Audio("music/atif/1.mp3");

const songs = [
    {
        id: '1',
        songName: `Aadat<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/1.jpg"
    },
    {
        id: '2',
        songName: `Musafir<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/2.jpg"
    },
    {
        id: '3',
        songName: `Pehli Dafa<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/3.jpg"
    },
    {
        id: '4',
        songName: `Be Intehaan<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/4.jpg"
    },
    {
        id: '5',
        songName: `Dekhte Dekhte<br> 
        <div class="subtitle">Atif Aslame</div>`,
        poster: "img/atif/5.jpg"
    },
    {
        id: '6',
        songName: `Dil Diya Gallan<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/6.jpg"
    },
    {
        id: '7',
        songName: `Jeena Jeena<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/7.jpg"
    },
    {
        id: '8',
        songName: `Pehli Nazar Mein<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/8.jpg"
    },
    {
        id: '9',
        songName: `Rang Jo Lagyo<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/9.jpg"
    },
    {
        id: '10',
        songName: `Piya Ore Piya<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/10.jpg"
    },
    {
        id: '11',
        songName: `Jeene Laga Hoon<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/11.jpg"
    },
    {
        id: '12',
        songName: `Tera Hua<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/12.jpg"
    },
    {
        id: '13',
        songName: `Tere Bin<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/13.jpg"
    },
    {
        id: '14',
        songName: `Tere Liye<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/14.jpg"
    },
    {
        id: '15',
        songName: `Tere Sang Yaara<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/15.jpg"
    },
    {
        id: '16',
        songName: `Tu Chahiye<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/16.jpg"
    },
    {
        id: '17',
        songName: `Tu Jaane Na<br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/atif/17.jpg"
    }
];
Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

const makeAllPlay = ()=>{
    let p;
    Array.from(document.getElementsByClassName('playListPlay')).forEach((p) =>{
        p.classList.remove('bi-pause');
        p.classList.add('bi-play-fill');
    })
};

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
let title = document.getElementById('title');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
    makeAllPlay();
});


let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let val = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for(let i=0; i<items.length; i++){
        let as = items[i].getElementsByClassName('content')[0];
        let text_val = as.textContent || as.innerHTML;
        if(text_val.toUpperCase().indexOf(val) > -1){
            items[i].style.display = "flex";
        }
        else{
            items[i].style.display = "none";
        }
        if(input.value == 0){
            search_result.style.display = "none";
        }
        else{
            search_result.style.display = "";
        }
    }

})

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download = document.getElementById('download');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `music/atif/${index}.mp3`;
        poster_master_play.src = `img/atif/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause');
        download.href = `music/atif/${index}.mp3`;
        let songsTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songsTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download.setAttribute('download', songName);
        });
        makeAllPlay();
        el.target.classList.add('bi-pause');
        el.target.classList.remove('bi-play-fill');
        wave.classList.add('active1');
    })
});

let current_start = document.getElementById('current_start');
let current_end = document.getElementById('current_end');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    current_end.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    current_start.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((music_curr/music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', ()=>{
    index--;
    if(index==0){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `music/atif/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/atif/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause');
    wave.classList.add('active1');
});

next.addEventListener('click', ()=>{
    index++;
    if(index==Array.from(document.getElementsByClassName('songItem')).length + 1){
        index = 1;
    }
    music.src = `music/atif/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/atif/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    makeAllPlay();
    el.target.classList.remove('bi-play-fill');
    el.target.classList.add('bi-pause');
    wave.classList.add('active1');
});

//setting left right scroll button of popular song list

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});
//setting left right scroll button of popular artist list

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];
pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
});

let shuffle = document.getElementById('shuffle');
shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    console.log(a);
    switch (a) {
        case 'Next':
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-repeat');
            shuffle.innerHTML = 'repeat';
            break;
        case 'repeat':
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case 'random':
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.innerHTML = 'Next';
            break;
    }
});


const nextMusic = ()=>{
    if(index == songs.length){
        index = 1;
    }
    else{
        index++;
    }
    poster_master_play.src = `img/atif/${index}.jpg`;
    music.src = `music/atif/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    wave.classList.add('active1');
}

const repeatMusic = ()=>{
    index;
    poster_master_play.src = `img/atif/${index}.jpg`;
    music.src = `music/atif/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    wave.classList.add('active1');
}

const randomMusic = ()=>{
    if(index == songs.length){
        index = 1;
    }
    else{
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    poster_master_play.src = `img/atif/${index}.jpg`;
    music.src = `music/atif/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'Next':
            nextMusic();
            break;
        case 'repeat':
            repeatMusic();
            break;
        case 'random':
            randomMusic();
            break;
    }
});
let start = document.getElementById('play1');
start.addEventListener('click', ()=>{
    index = Math.floor((Math.random() * songs.length) + 1);
    poster_master_play.src = `img/atif/${index}.jpg`;
    music.src = `music/atif/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/atif/${index}.mp3`;
    let songsTitles = songs.filter((els)=>{
        return els.id == index;
    });
    songsTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download', songName);
    });
    wave.classList.add('active1');
});

let threedot = document.getElementById('threedot');
let cross = document.getElementById('cross');
let menu = document.getElementsByClassName('menu_side')[0];
let main = document.getElementsByClassName('song_side')[0];
threedot.addEventListener('click', ()=>{
    menu.classList.remove('v-class');
    main.classList.add('v-class');
});
cross.addEventListener('click', ()=>{
    menu.classList.add('v-class');
    main.classList.remove('v-class');
});