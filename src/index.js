//Pulls in pageload to set up tabs in header.
//pulls in all 3 tab content modules
//initially loads the home module content to the DOM
//has event listeners for each tab that will clear the dom and re-fill it with the necessary content
 
import { headerUI } from './header.js';
import { homeUI } from './home.js';
import { menuUI } from './menu.js';
import { contactUI } from './contact.js';




const uiFunctions = (() => {

    const pageContent = document.getElementById('content');

    const pageLoad = () => {
        pageContent.append( headerUI.loadHeader() );
        pageContent.append( homeUI.loadHome() );
    };

    const loadHome = () => {
        resetDOM(pageContent);
        pageContent.append( headerUI.loadHeader() );
        pageContent.append( homeUI.loadHome() );
    };

    const loadMenu = () => {
        resetDOM(pageContent);
        pageContent.append( headerUI.loadHeader() );
        pageContent.append( menuUI.loadMenu() );
    };

    const loadContact = () => {
        resetDOM(pageContent);
        pageContent.append( headerUI.loadHeader() );
        pageContent.append( contactUI.loadContact() );
    };

    const resetDOM = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const setListeners = () => {
        headerUI.setEventListeners(loadHome, loadMenu, loadContact);
    };

    return { pageLoad, setListeners };

})();


uiFunctions.pageLoad();

uiFunctions.setListeners();