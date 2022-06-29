// Lets Begin
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("padding");
var ndNav = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
var ndsticky = ndNav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  }else if (window.pageYOffset >= sticky){
    navbar.classList.remove("sticky");
  }
}



// Pages Link Pop ups
let productLink = document.getElementById('productLinksss');
let swipe = document.getElementById('whyswipe');

productLink.addEventListener('click', () => {
  document.getElementById('st-pop-container').style.display = 'block';
  document.getElementById('st-pop-container2').style.display = 'none';
})
swipe.addEventListener('click', () => {
  document.getElementById('st-pop-container2').style.display = 'block';
  document.getElementById('st-pop-container').style.display = 'none';
})






// Switching From login pop up to sign up pop up without animation
document.querySelector('#su').addEventListener('click', () => {
  if(document.getElementById('su').innerText = 'Login') {
    document.getElementById('su').innerText = 'sign up';
    document.getElementById('su').style.display = 'none';
    document.getElementById('sus').style.display = 'block';
    document.getElementById('st-p').innerText = 'Already have an account?';
    document.getElementById('chenge-login').innerText = 'Create Account';
  }
})
document.querySelector('#sus').addEventListener('click', () => {
  if(document.getElementById('sus').innerText = 'Login'){
    document.getElementById('su').style.display = 'block';
    document.getElementById('sus').style.display = 'none';
    document.getElementById('st-p').innerText = "You don't have an account?";
    document.getElementById('chenge-login').innerText = 'Login';
  }
})
document.querySelector('#sus-nd').addEventListener('click', () => {
  if(document.getElementById('sus-nd').innerText = 'Login') {
    document.getElementById('sus-nd').style.display = 'none';
    document.getElementById('su-nd').style.display = 'block';
    document.getElementById('st-p-nd').innerText = "You don't have an account?";
    document.getElementById('chenge-login-nd').innerText = 'Login';
  }
})
document.querySelector('#su-nd').addEventListener('click', () => {
    if(document.getElementById('su-nd').innerText = 'Sign up') {
      document.getElementById('sus-nd').style.display = 'block';
      document.getElementById('su-nd').style.display = 'none';
      document.getElementById('st-p-nd').innerText = 'Already have an account';
      document.getElementById('chenge-login-nd').innerText = 'Create Account';
  }
})




// Login And Get Started Hoverring
document.getElementById('st-btn').addEventListener('mousemove', () => {
  document.getElementById('padding').style.backgroundColor = '#f1f2ff';
})
document.getElementById('nd-btn').addEventListener('mousemove', () => {
  document.getElementById('padding').style.backgroundColor = '#f1f2ff';
})
document.getElementById('nd-btn').addEventListener('mouseleave', () => {
  document.getElementById('padding').style.backgroundColor = '';
})
document.getElementById('st-btn').addEventListener('mouseleave', () => {
  document.getElementById('padding').style.backgroundColor = '';
})



// Making the Overlay not to scroll to the top on display block
document.getElementById('st-btn').addEventListener('click', () => {
  var topp = (window.pageYOffset)+'px';
  document.querySelector("html").style.top = '-'+topp;
  document.getElementById('overlay').style.display = 'block';
  document.querySelector('.login-container').style.display = 'block';
  document.querySelector('html').style.position = 'fixed';
  document.querySelector('html').style.left = '0';
});

document.getElementById('nd-btn').addEventListener('click', () => {
  var toppp = (window.pageYOffset)+'px';
  document.getElementById('overlay-nd').style.display = 'block';
  document.getElementById('log-cont').style.display = 'block';
  document.querySelector('html').style.position = 'fixed';
  document.querySelector('html').style.top = '-'+toppp
  document.querySelector('html').style.left = '0';
});
document.getElementById('mob-st-btn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('padding').style.display = 'none';
});
document.getElementById('mob-nd-btn').addEventListener('click', () => {
  document.getElementById('overlay-nd').style.display = 'block';
  document.getElementById('padding').style.display = 'none';
});

// Taking out the overlay pop up
document.getElementById('overlay').addEventListener('click', () => {
  var scrYY = document.querySelector('html').offsetTop;
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('html').style.position = 'initial';
});
document.getElementById('overlay-nd').addEventListener('click', () => {
  var scrY = document.querySelector('html').offsetTop;
  document.getElementById('overlay-nd').style.display = 'none';
  document.querySelector('html').style.position = 'initial';
});





// Mouseup functions for the pop ups
document.addEventListener('mouseup', function(e) {
  var container2 = document.getElementById('st-pop-container2');
  if (!container2.contains(e.target)) {
    container2.style.display = 'none';
  }
});

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('st-pop-container');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});



// // The Scroll Timeline at the top of the page
// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";
// const scrollTracker = document.querySelector('.onscroll');
// const scrollTrackingTimeline = new ScrollTimeline ({
//   source: document.scrollingElement,
//   orientation: "block",
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)]
// });

// scrollTracker.animate(
//   {
//     transform: ["scaleX(0)", "scaleX(1)"]
//   },
//   {
//     duration: 1,
//     timeline: scrollTrackingTimeline,
//   }
// );





// Media Queries Pop ups
document.getElementById('Prodtt').addEventListener('click', () => {
  document.getElementById('prodt-drop-down-cont').classList.toggle('prodtt-st-toggle');
  document.getElementById('drop-downi').classList.toggle('drop-downi-toggle');
})
document.getElementById('prodtt-Nd').addEventListener('click', () => {
  document.getElementById('prodt-drop-down-contND').classList.toggle('prodtt-st-toggle');
  document.getElementById('drop-downiND').classList.toggle('drop-downi-toggle');
})


document.getElementById('bar-btn').addEventListener('click', () => {
  document.getElementById('mobile-pop-up').style.display = 'block';
  document.querySelector('html').style.position = 'fixed';
  document.getElementById('padding').style.display = 'none';
})
document.getElementById('mob-cancel-btn').addEventListener('click', () => {
  document.getElementById('mobile-pop-up').style.display = 'none';
  document.querySelector('html').style.position = 'initial';
  document.getElementById('padding').style.display = 'block'
  document.getElementById('padding').style.animation = 'none'
})