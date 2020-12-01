const tanah = document.querySelectorAll('.tanah');
const tikus = document.querySelectorAll('.tikus');
const scores = document.querySelector('.score span');
const countdown = document.querySelector('.countdown span');
const btn__start = document.querySelector('.btn__start');
let LatestTanah;
let finish;
let score;

function randomTanah(tanah){
   const lengthTanah = tanah.length;
   const random = Math.floor(Math.random() * lengthTanah);
   if(tanah[random] == LatestTanah) { randomTanah(tanah) }
    LatestTanah = tanah[random];
   return random;
}
function randomWaktu(min,max){
    return Math.round(Math.random() *  (max-min) + min);
}

function outMouse(){
    const random = randomTanah(tanah);
    tanah[random].classList.add('out');
    setTimeout(() => {
        tanah[random].classList.remove('out');
        if(!finish){outMouse()}
    }, randomWaktu(100,700))
    
}

function start(){ 
    btn__start.disabled = true;
    let time = 10;
    countdown.textContent = time;
    const timer = setInterval(function(){
        time--;
        countdown.textContent = time;
        if (time == 0) {
            // clearInterval(timer);
            stop(timer);
        }
    },1000)
    finish = false;
    score = 0;
    scores.textContent = score;
    outMouse();
    setTimeout(() => {
        finish = true;
    btn__start.disabled = false;
    }, time * 1000)
    
}

function punch(){
    score++;
    this.parentNode.classList.remove('out');
    scores.textContent = score;

}

tikus.forEach(tikuss=>{
    tikuss.addEventListener('click',punch); 
})

function stop(timer){
    finish = true;
    btn__start.disabled = false;
    clearInterval(timer)   

}
