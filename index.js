
const music = new Audio("music/1.mp3");

const songs = [
    {
        id: '1',
        songName: `Tere Hawale<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `Bhalobasha Tarpor<br> 
        <div class="subtitle">Arnab</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: `60's Love<br> 
        <div class="subtitle">Level Five</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: `Tune jo na kaha<br> 
        <div class="subtitle">Mauhit Chauhan</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: `Prostab<br> 
        <div class="subtitle">Odd Signature</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: `Barishein<br> 
        <div class="subtitle">Anuv Jain</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: `Tomake<br> 
        <div class="subtitle">Warfaze</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: `Dil to baccha hain ji<br> 
        <div class="subtitle">Nasiruddin Shah</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: `Apna bana le<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: `Afreen Afreen<br> 
        <div class="subtitle">Rahat Fateh Ali Khan</div>`,
        poster: "img/10.jpg"
    },
    {
        id: '11',
        songName: `Tu Hi Hain Ashiqui<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/11.jpg"
    },
    {
        id: '12',
        songName: `Dhal Jaun Main<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/12.jpg"
    },
    {
        id: '13',
        songName: `Hain Dil Ye Mera<br> 
        <div class="subtitle">Arijit Singhe</div>`,
        poster: "img/13.jpg"
    },
    {
        id: '14',
        songName: `Hamari Adhuri Kahani<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/14.jpg"
    },
    {
        id: '15',
        songName: `Humdard<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/15.jpg"
    },
    {
        id: '16',
        songName: `Hawayein<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/16.jpg"
    },
    {
        id: '17',
        songName: `Itni Si Baat Hain<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/17.jpg"
    },
    {
        id: '18',
        songName: `Khayriyat<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/18.jpg"
    },
    {
        id: '19',
        songName: `Marjaavan<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/19.jpg"
    },
    {
        id: '20',
        songName: `Mast Magan<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/20.jpg"
    },
    {
        id: '21',
        songName: `Phir Bhi Tumko Chahunga<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/21.jpg"
    },
    {
        id: '22',
        songName: `Samjhawan<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/22.jpg"
    },
    {
        id: '23',
        songName: `Tera Fitoor<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/23.jpg"
    },
    {
        id: '24',
        songName: `Thoda Aur<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/24.jpg"
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
        music.src = `music/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause');
        download.href = `music/${index}.mp3`;
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
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `music/${index}.mp3`;
    music.play();
    poster_master_play.src = `img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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
    poster_master_play.src = `img/${index}.jpg`;
    music.src = `music/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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
    poster_master_play.src = `img/${index}.jpg`;
    music.src = `music/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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
    poster_master_play.src = `img/${index}.jpg`;
    music.src = `music/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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
    poster_master_play.src = `img/${index}.jpg`;
    music.src = `music/${index}.mp3`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause');
    download.href = `music/${index}.mp3`;
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