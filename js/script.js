// Яндекс карта
ymaps.ready(init);
function init(){
	var myMap = new ymaps.Map("map", {
    center: [55.740653, 37.573112],
    zoom: 16
  });

	// Метка на карте
	var myPlacemark = new ymaps.Placemark([55.740653, 37.573112], {}, {
		preset: 'islands#orangeIcon',
		iconImageSize: [35, 40],
		iconImageOffset: [0, -2]
	});

	myMap.geoObjects.add(myPlacemark); 
}

// Swiper
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 30,
	loop: true,
  grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 5000,
	}
});