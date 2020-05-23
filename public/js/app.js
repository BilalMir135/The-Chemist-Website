/* Open */
function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

/* Close */
function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

//Get button
const mybutton = document.getElementById('myBtn');

//When the user scrolls down 20px from the top of document, show thw button
window.onscroll = () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = 'flex';
  } else {
    mybutton.style.display = 'none';
  }
};

//when the user clicks on the button scroll to the top of the document
mybutton.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});

//Preloader
function preloader() {
  setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('main-body').style.display = 'block';
}
