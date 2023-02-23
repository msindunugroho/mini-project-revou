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