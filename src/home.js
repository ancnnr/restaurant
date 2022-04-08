// home page

const homeUI = (() => {

    function loadHome () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
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