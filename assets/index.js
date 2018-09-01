import './css/main.scss';

import Swiper from 'swiper';
import $ from 'jquery';
var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

function windowSize() {
    if ($(window).width() < '768') {
        var mySwiperNews = new Swiper('.swiper-container-two', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        var mySwiperTwo = new Swiper('.swiper-container-two', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    if ($(window).width() < '760') {
        $('.projects-gallery').css('width', '70%');
    } else {
        $('.projects-gallery').css('width', '100%');
    }


    if ($(window).width() < '598') {
        $('.projects-gallery').css('width', '100%');
    }
    if ($(window).width() < '526') {
        $('.tag').css('top', '85%');
    }


    if ($(window).width() < '388') {
        $('.tag').css('top', '78%');
    }
}
$(window).on('load', windowSize);
$(window).resize(windowSize);
$(window).on('load resize', windowSize);