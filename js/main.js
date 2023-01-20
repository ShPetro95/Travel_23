
//carusel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin:20,
    startPosition: 0,
    items: 1,
    responsive: {
		640: {
			items: 3,
			startPosition: 1,
		},

        850: {
            items:3,
        },
		1200: {
			items: 3,
			margin: 30,
		},
	},
});

$('.slider_btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');

$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

})


//Nav Icon

const navBtn = document.querySelector('.nav_toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function (){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
};
