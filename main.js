let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

window.onscroll = ()=>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');

	if (window.scrollY > 60) {
		document.querySelector('#scroll-top').classList.add('active');
	} else {
		document.querySelector('#scroll-top').classList.remove('active');
	}
}

function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
	setInterval(loader, 3000)
}

window.onload = fadeOut();

var swiper = new Swiper(".MySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },

        991: {
            slidesPerView: 4,
        },

        1200: {
            slidesPerView: 5,
        },
    },
});