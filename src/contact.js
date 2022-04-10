// contact page

import BGImage from './jonnysburger.jpg';

const contactUI = (() => {

    function loadContact () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = new Image();
        imgHeader.classList.add('imgheader');
        imgHeader.src = BGImage;
        homeContent.append(imgHeader);
    
    
        homeContent.append( contentCard("Contact Us", "Phone: 902-555-5555", "Email: jonnys@email.com") );
        homeContent.append(contentCard("Location","Find us at 4287 Hwy 1, Berwick NS"));
    
        return homeContent;
    }
    
    function contentCard (heading, p1, p2="") {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.innerHTML = `
        <h2>${heading}</h2>
        <p>${p1}</p>
        <p>${p2}</p>`;

        if(heading=="Location")
        {
            const mapEmbed = document.createElement('div');
            mapEmbed.classList.add('map-embed');
            mapEmbed.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11278.411586196726!2d-64.7366593!3d45.0329861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9527d314315eb19!2sJonny&#39;s%20Cookhouse%20and%20Ice%20Cream%20Shop!5e0!3m2!1sen!2sca!4v1649549760786!5m2!1sen!2sca" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
            content_card.append(mapEmbed);
        }
    
        return content_card
    }

    return { loadContact }

})();




export { contactUI };