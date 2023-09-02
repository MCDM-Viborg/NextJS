const menu = {



    tmpl : (location) => {

        let path = (location.host === 'mcdm-viborg.github.io') ? location.origin + '/NextJS/' : '/';

        return `<nav class="navigation">
            <a href="${path}">Forside</a>
            <a href="${path}video/video_01.html">Video 01</a>
            <a href="${path}video/video_02.html">Video 02</a>
            <a href="${path}video/video_03.html">Video 03</a>
            <a href="${path}video/video_04.html">Video 04</a>
        </nav>`
    },

    init : () => {


        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforebegin', menu.tmpl(location))

    }

};

menu.init();

