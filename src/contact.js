// contact page

const contactUI = (() => {

    function loadContact () {
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
        homeContent.append(imgHeader);
    
    
        homeContent.append( contentCard() );
        homeContent.append(contentCard());
        homeContent.append(contentCard());
        homeContent.append(contentCard());
    
        return homeContent;
    }
    
    function contentCard () {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.innerHTML = `
        <h2>Contact One</h2>
        <p>This is the information about a contact. Super simple stuff really!</p>
        <p>This is the information about a contact. Super simple stuff really!</p>
        <p>This is the information about a contact. Super simple stuff really!</p>`;
    
        return content_card
    }

    return { loadContact }

})();




export { contactUI };