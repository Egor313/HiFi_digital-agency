const isSwiper__product = document.querySelector('.product__swiper');
if (isSwiper__product) {
        const productSwiper = new Swiper('.product__swiper', {
        loop: true,
        grabCursor: true,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        pagination: {
            el: '.product__pagination',
            clickable: true,
            type: 'bullets',
        },
    });
}

const isSwiper__testi = document.querySelector('.testi__swiper');
if (isSwiper__testi) {
    const testiSwiper = new Swiper('.testi__swiper', {
        loop: true,
        spaceBetween: 20,
        grabCursor: true,
        speed: 800,
       
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40 // Змінено з 40 на бажане значення
            }
        },


        pagination: {
            el: '.testi__pagination',
            clickable: true,
        },

    });
}