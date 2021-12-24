let config1 = {
    type: 'carousel',
    perView: 1,
    autoplay:2500,
    animationDuration: 600,
    animationTimingFunc: 'linear',
    breakpoints: {
        767: {
            perView: 1
        },
        992: {
            perView: 1
        }
    }
};

new Glide('._clnt_xyns_slider1', config1).mount();

let config2 = {
    type: 'carousel',
    perView:3,
    breakpoints: {
        767: {
            perView: 2
        },
        992: {
            perView: 3
        }
    }
}

new Glide('._research_slider', config2).mount();