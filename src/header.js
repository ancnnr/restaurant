//load and export page header

const headerUI = (() => {

    const header = document.createElement('header');
    const headerContent = document.createElement('div');
    const pageTitle = document.createElement('h2');
    const navBar = document.createElement('div');
    const homeBtn = document.createElement('div');
    const menuBtn = document.createElement('div');
    const contactBtn = document.createElement('div');

    const loadHeader = () => {
        
        header.classList.add('header');
        headerContent.classList.add('container');
        
        pageTitle.classList.add('logo-big');
        pageTitle.textContent = "Jonny's Grill";
        
        navBar.classList.add('navbar');
        
        homeBtn.textContent = "HOME";
        menuBtn.textContent = "MENU";
        contactBtn.textContent = "CONTACT";
    
        navBar.append(homeBtn, menuBtn, contactBtn);
        headerContent.append(pageTitle, navBar);
        header.append(headerContent);
    
        return header;
    };

    const setEventListeners = (a, b, c) => {
        homeBtn.onclick = a;
        menuBtn.onclick = b;
        contactBtn.onclick = c;
    };

    return { loadHeader, setEventListeners };

})();





export { headerUI };