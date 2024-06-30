// from: In from method you don't have to specifiy the initial state (It will figure out by itself)
gsap.from('.box1', {
  duration: 2,
  y: -50,
  ease: 'linear',
  repeat: -1,
  yoyo: true,
});
// fromTo: in this method you have to specifiy the default svalue, and also the new animation state.
gsap.fromTo('.box2', {
  y: 100,
  opacity: 0,
}, {
  opacity: 1,
  y: -100,
  duration: 3,
  ease: 'linear',
  repeat: -1,
  yoyo: true,
  borderRadius: 0,
});