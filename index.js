// GSAP
gsap.from('nav', {
  duration: 10,
  y: -100,
  ease: 'bounce',
});
gsap.from('nav a #icon', {
  duration: 10,
  x: 100,
  ease: 'rough',
});
gsap.from('a.logo', {
  duration: 10,
  ease:
    ('custom',
    'M0,0 C0.164,-0.044 0.174,1.058 0.276,1.036 0.365,1.016 0.99,0.602 1,1.018 '),
  x: 200,
});

/*Fullscreen btn*/
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
  e.preventDefault();
  if (!fullscreen) {
    fullscreen = true;
    document.documentElement.requestFullscreen();
  } else {
    fullscreen = false;
    document.exitFullscreen();
  }
});

//Dark Mode
function Darkmode() {
  var element = document.getElementById('about');
  element.classList.toggle('dark-mode');

  var element = document.getElementById('darkbody');
  element.classList.toggle('dark-mode-body');

  var element = document.getElementById('aboutcontent');
  element.classList.toggle('about-content-dark');

  var element = document.getElementById('services');
  element.classList.toggle('services-dark');
}

// Sidebar Kanan
function openRightMenu() {
  document.getElementById('right').style.display = 'block';
}

function closeRightMenu() {
  document.getElementById('right').style.display = 'none';
}

