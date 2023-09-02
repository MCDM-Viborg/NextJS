const menu = {

    tmpl : () => {
        return `<nav class="navigation">
            <a href="../">Forside</a>
            <a href="./video_01.html">Video 01</a>
            <a href="./video_02.html">Video 02</a>
            <a href="./video_03.html">Video 03</a>
            <a href="./video_04.html">Video 04</a>
        </nav>`
    },

    init : () => {

        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforebegin', menu.tmpl())

    }

};

menu.init();

