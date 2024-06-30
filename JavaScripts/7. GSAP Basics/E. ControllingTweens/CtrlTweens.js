let play = document.querySelector('.start-button');
let pause = document.querySelector('.pause-button');
let restart = document.querySelector('.restart-button');

let tween = gsap.to('.box', {
  y: -200,
  duration: 5,
  ease: 'linear',
  repeat: -1,
  yoyo: true,
  backgroud: 'Crimson'
})

play.addEventListener('click', () => tween.play());
pause.addEventListener('click', () => tween.pause());
restart.addEventListener('click', () => tween.restart());