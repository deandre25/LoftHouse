/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn'),
      navIcon = document.querySelector('.nav-icon'),
      nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') {
            input.value = '';
        }
    });
    input.addEventListener('blur', () => {
        if (input.value == '+') {
            input.value = '';
        }
    });
});

/* Maps */

function initMap() {
    const myLatlng = { lat: 50.449, lng: 30.516 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: myLatlng,
    });
    const marker = new google.maps.Marker({
      position: myLatlng,
      map,
      title: "Click to zoom",
    });
  
    map.addListener("center_changed", () => {
      window.setTimeout(() => {
        map.panTo(marker.getPosition());
      }, 3000);
    });
    marker.addListener("click", () => {
      map.setZoom(12);
      map.setCenter(marker.getPosition());
    });
}
  
window.initMap = initMap;