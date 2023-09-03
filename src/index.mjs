const application = {

    data : {
        title : 'NextJS - MCDM Viborg',
        description : `NextJS vidoer til MCDM Viborg : <a href="https://github.com/MCDM-Viborg/NextJS#readme" target="_blank">https://github.com/MCDM-Viborg/NextJS</a>`,
        videos : [
            {
                chapter : "chapter-1",
                title : "Kom igang",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_Intro_2023.mp4",
                description : "Introduktion til at arbejde med NextJS."
            },
            {
                chapter : "chapter-2",
                title : "Installation af NextJS projekt.",
                video : "https://mcdm-resources.ams3.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_installation_2023.mp4",
                description : "Installation af nextJS projektet."
            },
            {
                chapter : "chapter-3",
                title : "Byg, Start og udvikling af vores NEXT projekt.",
                video : "https://mcdm-resources.ams3.cdn.digitaloceanspaces.com/tutorials/nextjs/NEXTJS_BygStart.mp4",
                description : "Hvordan vi bygger, starter og udvikler vores NEXT projekt."
            }
        ]
    },

    bodyTmpl : (location) => {

        let path = (location.host === 'mcdm-viborg.github.io') ? location.origin + '/NextJS/' : '/';

        return `<div>
            <h1><img src="./assets/square_logo.png" width="50px">${application.data.title}</h1>
            <p>${application.data.description}</p>
            <h3>Index</h3>
            <ul>
                ${application.data.videos.map((video, index) => { return `<li><a href="${path}?chapter=${video.chapter}">${video.title}</a></li>` }).join('')}
            </ul>
        
            <div id="video"></div>
        </div>`

    },

    indexTmpl : () => {

        return `<p>...</p>`

    },

    videoTmpl : (obj) => {

        return `<div class="video">
            <h2>${obj.title}</h2>
            <video width="650" src="${obj.video}" controls></video>    
            <p>${obj.description}</p>
        </div>`

    },

    init : () => {

        const body = document.querySelector('body');
        const index = new URLSearchParams(location.search).get('index');
        const chapter = new URLSearchParams(location.search).get('chapter');
        
        // Adding the body template.
        body.insertAdjacentHTML('afterbegin', application.bodyTmpl(location))
        let video = chapter ? application.data.videos.find((video) => video.chapter === chapter) : application.data.videos[index];

        // Adding the video template.
        let videoContainer = document.querySelector('#video');
        if(video) {
           
            videoContainer.insertAdjacentHTML('beforebegin', application.videoTmpl(video))
    
        } else {

            videoContainer.insertAdjacentHTML('beforebegin', application.indexTmpl())

        }

    }

};

application.init();

