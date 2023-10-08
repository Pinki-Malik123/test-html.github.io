'use strict';
const tabs = document.querySelectorAll('[data-id]');
const contents = document.querySelectorAll('[data-content]');
let id = 0;

tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
        tabs[id].classList.remove('active');
        tab.classList.add('active');
        id = tab.getAttribute('data-id');
        contents.forEach(function (box) {
            box.classList.add('hide');
            if (box.getAttribute('data-content') == id){
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});

// Day Night 
var switchBody = document.getElementById("switch");
//"hsl(238, 50%, 12%)";
var main = document.getElementById("main1");
switchBody.addEventListener("click", toggle);

function toggle(){
  switchBody.classList.toggle("off");
  main.classList.toggle("dark_mode");
// main.style.transition="all 0.5s linear ease-in-out";
}
// ====================gallery box ===============
//  ***** LIGHTBOX AREA  ***** 
const lightbox = document.createElement('div')
const images = document.querySelectorAll('img:not(.profile)')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    //  This blocks the background from scolling when lightbox is open - must set overflow in main css otherwise on the first time you click on the modal the page will scroll to the top
    document.body.style.overflowY='hidden'
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
  document.body.style.overflowY='scroll'
})

// gallery slider 
