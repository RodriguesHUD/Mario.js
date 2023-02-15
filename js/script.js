const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pipe2 = document.querySelector('.pipe2');



    const jump = () => {
        mario.classList.add('jump');
        mario.src = "./imagens/mario-jump.png"
        mario.style.width = "90px"
        
        
        setTimeout(() => {
            mario.classList.remove('jump');
            mario.src = "./imagens/mario.gif"
            mario.style.width = ""
        }, 500);

        
    }

const death = setInterval(() => {    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${pipePosition}px`;

            
            mario.src="./imagens/game-over.png";
            mario.style.width = '80px' 
            mario.style.marginLeft = '50px'
            
            document.removeEventListener('keydown', jump);
            
            
            clearInterval(loop);
        }

        
    }, 10);


    
document.addEventListener('keydown', jump);
    










let audio = document.getElementById('audio');
let playAudio = document.getElementById('playAudio');
let count = 0;

        function playPause() {
            if(count == 0){
                count = 1;
                audio.play();
                
            }
            else {
                count = 0;
                audio.pause();
            }
        }
    
    

