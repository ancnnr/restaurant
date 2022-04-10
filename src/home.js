// home page

import BGImage from './jonnysburger.jpg';

const homeUI = (() => {

    function loadHome () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');


        const imgHeader = new Image();
        imgHeader.classList.add('imgheader');
        imgHeader.src = BGImage;
        homeContent.append(imgHeader);
        


        homeContent.append( contentCard(
            "Welcome to Jonny's Grill",
            "Proudly serving the Annapolis Valley's best Burgers, Poutines & Ice Cream since 2009. Comfort food, cooked fresh to order."
        ) );

    
        return homeContent;
    }
    
    function contentCard (heading, paragraph) {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.classList.add('home-banner');
        content_card.innerHTML = `
        <h1>${heading}</h1>
        <p>${paragraph}</p>`;
    
        return content_card
    }

    return { loadHome }

})();




export { homeUI };


/*
import Icon from './icon.png';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
*/