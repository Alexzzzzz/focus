document.addEventListener('DOMContentLoaded',() => {
  console.log('works');
  anime.timeline({
    easing:'easeInOutCirc',
  })
  .add({
    targets: '.topHeader',
    translateX:['-500', '0'],
    opacity: [0, 1],
    easing: 'easeInOutQuart',
    delay: 50,
    offset: '-=100',
  })
  .add({
    targets: '.headerContentText',
    translateY: [600, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeInOutQuart',
    offset: '-=800',
    delay: 150,
    rotate: '1turn'

  })
  .add({
    targets: '.headerContentImage',
    translateX: [800, 0],
    opacity: [0, 1],
    duration: 1200,
    easing: 'easeInOutQuart',
    offset: '-=1400',
    delay: 250,
    rotate: '-1turn'
  })
  var buttonEl = document.querySelector('.getStartedButton');

  function animateButton(scale, duration, elasticity) {
    anime.remove(buttonEl);
    anime({
      targets: buttonEl,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }

  function enterButton() { animateButton(1.2, 800, 400) };
  function leaveButton() { animateButton(1.0, 600, 300) };

  buttonEl.addEventListener('mouseenter', enterButton, false);
  buttonEl.addEventListener('mouseleave', leaveButton, false);
})
