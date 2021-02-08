TweenMax.to('.ball', 5,  { ease: Bounce.easeOut, bottom: 0 });
TweenMax.to('.ball', 4, { backgroundColor: 'yellow', delay: 2})

TweenMax.from('.box1', 2, {x: 0, delay: 1, repeat: 'infinite', yoyo: true, width: 200})


const animationTime = 6;

TweenMax.to('.sun', animationTime, { x: window.innerWidth - 300, ease: Power0.easeNone, delay: 1});
TweenMax.to('.sun', animationTime/2, { 
    y: -window.innerHeight + 300, 
    repeat: 1, 
    yoyo: true, 
    delay: 1, 
    backgroundColor: 'yellow',
    boxShadow: '0 0 120px 0 yellow'
})