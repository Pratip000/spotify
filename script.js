console.log("Welcome to Spotify");
//initializethe variables
let songindex =0;
let audioelement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let songItemPlay=document.getElementsByClassName('songItemPlay');
let progressbar = document.getElementById('progressbar');
let masterSongName = document.getElementById('masterSongName');
let songitem= Array.from(document.getElementsByClassName('songitem'));
let gif = document.getElementById('gif');
let songs = [

{ songName:"Let Me Love" , filepath:"songs/1.mp3" , coverpath:"images/cover1.jpg"},
{ songName:" Aashiqui" , filepath:"songs/2.mp3" , coverpath:"images/cover2.jpg"},
{ songName:"Mareej-e" , filepath:"songs/3.mp3" , coverpath:"images/cover3.jpg"},
{ songName:"Kaise Hua" , filepath:"songs/4.mp3" , coverpath:"images/cover4.jpg"},
{ songName:"Lag ja Gale" , filepath:"songs/5.mp3" , coverpath:"images/cover5.jpg"},
{ songName:"Mann Mera" , filepath:"songs/6.mp3" , coverpath:"images/cover6.jpg"},
{ songName:"Tera Ghata" , filepath:"songs/7.mp3" , coverpath:"images/cover7.jpg"},

     
]
songitem.forEach((element, i) => {
   console.log(element, i);
   element.getElementsByTagName("img")[0].src = songs[i].coverpath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
 
// audioelement.play();
//play/pause click
  masterPlay.addEventListener('click',()=>{
   if(audioelement.paused || audioelement.currentTime<=0){
      audioelement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
   }else{
      audioelement.pause();
      masterPlay.classList.remove('fa-circle-pause');
      masterPlay.classList.add('fa-circle-play');
      gif.style.opacity=0;
   }
  })

//Listen to the Events
audioelement.addEventListener('timeupdate',()=>{
    
    //seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
   
    progressbar.value = progress;
})
progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})

const makeAllPlays = ()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
   });

}

const button=()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
         element.addEventListener('click',()=>{
            if(audioelement.play){
               audioelement.pause();
            }
         })
   });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
        {
         
        makeAllPlays();
        songindex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        }
        
   });
   
   
});


songItemPlay.addEventListener('click',()=>{
      
   if(audioelement.play){
      audioelement.pause();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity=1;
   }
})



//next click event
document.getElementById('next').addEventListener('click',()=>{
   if(songindex>=6){
      songindex=0;
   }else{
      songindex=songindex+1;
   }
        audioelement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
// previous click event
document.getElementById('previous').addEventListener( 'click', ()=>{
   if(songindex<=0){
      songindex=0;
   }else{
      songindex=songindex-1;
   }
        audioelement.src = `songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
