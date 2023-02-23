
// wellcome
// const clientName = prompt('what is your name?');
// alert(`welcome ${clientName}`);

// NAVd
const menuIcon = document.getElementsByClassName('menu-icon');
const navContainer = document.getElementsByClassName('nav-container');
navDropOpened = false;
menuIcon[0].addEventListener('click', function() {

  if(!navDropOpened) {
    navContainer[0].style.marginTop='-1px';
    navContainer[0].style.opacity='1';
    navDropOpened = true;
  } else {
    navContainer[0].style.marginTop='-197px';
    navContainer[0].style.opacity='0';
    navDropOpened = false;
  }
});



// validate
const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name').value;
  const dateInput = document.getElementById('tanggal').value;
  const genderInput = document.querySelector('input[name="gender"]:checked').value;
  const emailInput = document.getElementById('email').value;
  const messageInput = document.getElementById('message').value;

  if(!nameInput || !dateInput || !genderInput || !emailInput || !messageInput) {
    alert('Input fields cannot be empty')
  } else {
    document.getElementById('outputCurrentTime').innerHTML=new Date();
    document.getElementById('outputName').innerHTML=nameInput;
    document.getElementById('outputDateOfBirth').innerHTML=dateInput;
    document.getElementById('outputEmail').innerHTML=emailInput;
    document.getElementById('outputGender').innerHTML=genderInput;
    document.getElementById('outputMessage').innerHTML=messageInput;
  }
})










