/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactUI": () => (/* binding */ contactUI)
/* harmony export */ });
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






/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footerDOM)
/* harmony export */ });
function footerDOM() {

    const footerObj = document.createElement('footer');
    footerObj.classList.add('footer');
    footerObj.innerHTML =  "<p>Made by <strong>Adam Conner</strong></p>";
    return footerObj;
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerUI": () => (/* binding */ headerUI)
/* harmony export */ });
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







/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeUI": () => (/* binding */ homeUI)
/* harmony export */ });
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






/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuUI": () => (/* binding */ menuUI)
/* harmony export */ });
// menu page

const menuUI = (() => {

    

    function loadMenu () {
        console.log('loading menu');
        const homeContent = document.createElement('main');
        homeContent.classList.add('main');
        homeContent.classList.add('container');
    
        const imgHeader = document.createElement('img');
        imgHeader.classList.add('imgheader');
        imgHeader.src = '../src/jonnysburger.jpg';
        homeContent.append(imgHeader);
    
    
        homeContent.append(menuCategory("Starters") );
        homeContent.append(menuCategory("Burgers"));
        homeContent.append(menuCategory("Toppings"));
        homeContent.append(menuCategory("Sauces"));
        homeContent.append(menuCategory("Extras"));
        homeContent.append(menuCategory("Substitutions"));

        return homeContent;
    }
    

    function menuCategory (heading) {
        const content_card = document.createElement('div');
        content_card.classList.add('content-card');
        content_card.innerHTML = `<h1>${heading}</h1>`;

        const menuFlexBox = document.createElement('div');
        menuFlexBox.classList.add('menu-grid')
        
        if(heading=="Starters")
        {
            menuList.starters.map((mi) => {
                menuFlexBox.append(new menuItem(mi.name, mi.price, mi.description).getMenuItemDOM());
            })
        }

        else if(heading=="Burgers")
        {
            menuList.burgers.map((b) => {
                menuFlexBox.append(new menuItem(b.name, b.price).getMenuItemDOM())
            })
        }

        else if(heading=="Toppings")
        {
            menuList.choices.toppings.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }
        else if(heading=="Sauces")
        {
            menuList.choices.sauces.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }
        else if(heading=="Extras")
        {
            menuList.choices.extras.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }

        else if(heading=="Substitutions")
        {
            menuList.choices.substitutions.map((t) => {
                menuFlexBox.append(new menuItem(t).getMenuItemDOM())
            })
        }


        content_card.append(menuFlexBox)

        return content_card
    }

    return { loadMenu }

})();


class menuItem {

    constructor(name = "", price = 0.0, description = "") {
        this.name = name;
        this.description = description;
        this.price = (Math.round(price * 100) / 100).toFixed(2);;
    }


    getMenuItemDOM() {
        let menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add('menu-item');

        let itemName = document.createElement('h2');
        itemName.textContent = this.name;

        let itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        
        if(this.price==0.0)
        {
            itemPrice.textContent = "";
        }
        else {
            itemPrice.textContent = "$" + this.price;
        }

        let itemDescription = document.createElement('p');
        itemDescription.textContent = this.description;

        menuItemContainer.append(itemName, itemPrice, itemDescription);

        return menuItemContainer;

    }

}


const menuList = {

    starters: [{
        name: "Potato & Cheddar Perogies",
        price: 7.50,
        description: "Fried potato cheddar dumplings, topped with cheddar cheese, bacon bits, salsa & sour cream",

    },
    {
        name: "Onion Rings",
        price: 6.00,
        description: "Thick Cut, Crisp-fried onion rings",
    },
    {
        name: "Deep Fried Pickles",
        price: 7.00,
        description: "Sliced Dill Pickle Spears, breaded & fried crispy. Served s Dipping Sauce",
    }],

    burgers: [
        {
        name: "Plain",
        price: 6.00,
    },
    {
        name: "Original",
        price: 7.25,
    },
    {
        name: "Cheese",
        price: 6.00,
    },
    {
        name: "Bacon Cheese",
        price: 8.75,
    },
    {
        name: "Crispy Chicken",
        price: 8.00,
    },
    {
        name: "Fried Haddock",
        price: 8.00
    }],
    
    choices: {
        toppings: [
            "Lettuce",
            "Tomato",
            "Raw Onion",
            "Red Onion",
            "Pickles",
            "Fried Onion",
            "Banana Peppers",
        ],

        sauces: [
            "Mayo",
            "Ketchup",
            "Mustard",
            "Relish",
            "BBQ Sauce",
            "Sweet Chili",
            "Hot Sauce",
            "Tartar Sauce",
        ],

        extras: [
            "Bacon +$1.00",
            "Cheese +$1.00",
            "Beef Patty +$2.50",
            "Extra Fish +$3.50",
            "Extra Chicken +$2.50",
        ],

        substitutions: [
            "Lettuce Bun +$1.00",
            "Gluten Free Bun +$1.50",
        ],
    },    
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
//Pulls in pageload to set up tabs in header.
//pulls in all 3 tab content modules
//initially loads the home module content to the DOM
//has event listeners for each tab that will clear the dom and re-fill it with the necessary content
 









const uiFunctions = (() => {

    const pageContent = document.getElementById('content');

    const pageLoad = () => {
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_0__.headerUI.loadHeader() );
        pageContent.append( _home_js__WEBPACK_IMPORTED_MODULE_1__.homeUI.loadHome() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    };

    const loadHome = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_0__.headerUI.loadHeader() );
        pageContent.append( _home_js__WEBPACK_IMPORTED_MODULE_1__.homeUI.loadHome() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    };

    const loadMenu = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_0__.headerUI.loadHeader() );
        pageContent.append( _menu_js__WEBPACK_IMPORTED_MODULE_2__.menuUI.loadMenu() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    };

    const loadContact = () => {
        resetDOM(pageContent);
        pageContent.append( _header_js__WEBPACK_IMPORTED_MODULE_0__.headerUI.loadHeader() );
        pageContent.append( _contact_js__WEBPACK_IMPORTED_MODULE_3__.contactUI.loadContact() );
        pageContent.append((0,_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    };

    const resetDOM = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    const setListeners = () => {
        _header_js__WEBPACK_IMPORTED_MODULE_0__.headerUI.setEventListeners(loadHome, loadMenu, loadContact);
    };

    return { pageLoad, setListeners };

})();


uiFunctions.pageLoad();

uiFunctions.setListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5TkFBeU4sc0lBQXNJO0FBQy9WO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsVUFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUM7QUFDSjtBQUNBO0FBQ007QUFDTDtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQW1CO0FBQy9DLDRCQUE0QixxREFBZTtBQUMzQywyQkFBMkIsc0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQW1CO0FBQy9DLDRCQUE0QixxREFBZTtBQUMzQywyQkFBMkIsc0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQW1CO0FBQy9DLDRCQUE0QixxREFBZTtBQUMzQywyQkFBMkIsc0RBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMkRBQW1CO0FBQy9DLDRCQUE0Qiw4REFBcUI7QUFDakQsMkJBQTJCLHNEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRhY3QgcGFnZVxyXG5cclxuY29uc3QgY29udGFjdFVJID0gKCgpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQ29udGFjdCAoKSB7XHJcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ2hlYWRlcicpO1xyXG4gICAgICAgIGltZ0hlYWRlci5zcmMgPSAnLi4vc3JjL2pvbm55c2J1cmdlci5qcGcnO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChpbWdIZWFkZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQoIGNvbnRlbnRDYXJkKFwiQ29udGFjdCBVc1wiLCBcIlBob25lOiA5MDItNTU1LTU1NTVcIiwgXCJFbWFpbDogam9ubnlzQGVtYWlsLmNvbVwiKSApO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChjb250ZW50Q2FyZChcIkxvY2F0aW9uXCIsXCJGaW5kIHVzIGF0IDQyODcgSHd5IDEsIEJlcndpY2sgTlNcIikpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGhvbWVDb250ZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjb250ZW50Q2FyZCAoaGVhZGluZywgcDEsIHAyPVwiXCIpIHtcclxuICAgICAgICBjb25zdCBjb250ZW50X2NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudC1jYXJkJyk7XHJcbiAgICAgICAgY29udGVudF9jYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8aDI+JHtoZWFkaW5nfTwvaDI+XHJcbiAgICAgICAgPHA+JHtwMX08L3A+XHJcbiAgICAgICAgPHA+JHtwMn08L3A+YDtcclxuXHJcbiAgICAgICAgaWYoaGVhZGluZz09XCJMb2NhdGlvblwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwRW1iZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbWFwRW1iZWQuY2xhc3NMaXN0LmFkZCgnbWFwLWVtYmVkJyk7XHJcbiAgICAgICAgICAgIG1hcEVtYmVkLmlubmVySFRNTCA9IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTEyNzguNDExNTg2MTk2NzI2ITJkLTY0LjczNjY1OTMhM2Q0NS4wMzI5ODYxITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDAlM0EweGI5NTI3ZDMxNDMxNWViMTkhMnNKb25ueSYjMzk7cyUyMENvb2tob3VzZSUyMGFuZCUyMEljZSUyMENyZWFtJTIwU2hvcCE1ZTAhM20yITFzZW4hMnNjYSE0djE2NDk1NDk3NjA3ODYhNW0yITFzZW4hMnNjYVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjQwMHB4XCIgc3R5bGU9XCJib3JkZXI6MDtcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT5gO1xyXG4gICAgICAgICAgICBjb250ZW50X2NhcmQuYXBwZW5kKG1hcEVtYmVkKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZENvbnRhY3QgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNvbnRhY3RVSSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3RlckRPTSgpIHtcclxuXHJcbiAgICBjb25zdCBmb290ZXJPYmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlck9iai5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGZvb3Rlck9iai5pbm5lckhUTUwgPSAgXCI8cD5NYWRlIGJ5IDxzdHJvbmc+QWRhbSBDb25uZXI8L3N0cm9uZz48L3A+XCI7XHJcbiAgICByZXR1cm4gZm9vdGVyT2JqO1xyXG59OyIsIi8vbG9hZCBhbmQgZXhwb3J0IHBhZ2UgaGVhZGVyXHJcblxyXG5jb25zdCBoZWFkZXJVSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBcclxuICAgICAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZCgnbG9nby1iaWcnKTtcclxuICAgICAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBcIkpvbm55J3MgR3JpbGxcIjtcclxuICAgICAgICBcclxuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xyXG4gICAgICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICAgICAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XHJcbiAgICBcclxuICAgICAgICBuYXZCYXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xyXG4gICAgICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kKHBhZ2VUaXRsZSwgbmF2QmFyKTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kKGhlYWRlckNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoYSwgYiwgYykgPT4ge1xyXG4gICAgICAgIGhvbWVCdG4ub25jbGljayA9IGE7XHJcbiAgICAgICAgbWVudUJ0bi5vbmNsaWNrID0gYjtcclxuICAgICAgICBjb250YWN0QnRuLm9uY2xpY2sgPSBjO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBsb2FkSGVhZGVyLCBzZXRFdmVudExpc3RlbmVycyB9O1xyXG5cclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBoZWFkZXJVSSB9OyIsIi8vIGhvbWUgcGFnZVxyXG5cclxuY29uc3QgaG9tZVVJID0gKCgpID0+IHtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkSG9tZSAoKSB7XHJcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ2hlYWRlcicpO1xyXG4gICAgICAgIGltZ0hlYWRlci5zcmMgPSAnLi4vc3JjL2pvbm55c2J1cmdlci5qcGcnO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChpbWdIZWFkZXIpO1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKCBjb250ZW50Q2FyZChcclxuICAgICAgICAgICAgXCJXZWxjb21lIHRvIEpvbm55J3MgR3JpbGxcIixcclxuICAgICAgICAgICAgXCJQcm91ZGx5IHNlcnZpbmcgdGhlIEFubmFwb2xpcyBWYWxsZXkncyBiZXN0IEJ1cmdlcnMsIFBvdXRpbmVzICYgSWNlIENyZWFtIHNpbmNlIDIwMDkuIENvbWZvcnQgZm9vZCwgY29va2VkIGZyZXNoIHRvIG9yZGVyLlwiXHJcbiAgICAgICAgKSApO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBob21lQ29udGVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gY29udGVudENhcmQgKGhlYWRpbmcsIHBhcmFncmFwaCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnRfY2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuY2xhc3NMaXN0LmFkZCgnaG9tZS1iYW5uZXInKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxoMT4ke2hlYWRpbmd9PC9oMT5cclxuICAgICAgICA8cD4ke3BhcmFncmFwaH08L3A+YDtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjb250ZW50X2NhcmRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBsb2FkSG9tZSB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgaG9tZVVJIH07IiwiLy8gbWVudSBwYWdlXHJcblxyXG5jb25zdCBtZW51VUkgPSAoKCkgPT4ge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRNZW51ICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBtZW51Jyk7XHJcbiAgICAgICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaW1nSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2ltZ2hlYWRlcicpO1xyXG4gICAgICAgIGltZ0hlYWRlci5zcmMgPSAnLi4vc3JjL2pvbm55c2J1cmdlci5qcGcnO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZChpbWdIZWFkZXIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU3RhcnRlcnNcIikgKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiQnVyZ2Vyc1wiKSk7XHJcbiAgICAgICAgaG9tZUNvbnRlbnQuYXBwZW5kKG1lbnVDYXRlZ29yeShcIlRvcHBpbmdzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU2F1Y2VzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiRXh0cmFzXCIpKTtcclxuICAgICAgICBob21lQ29udGVudC5hcHBlbmQobWVudUNhdGVnb3J5KFwiU3Vic3RpdHV0aW9uc1wiKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBob21lQ29udGVudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGZ1bmN0aW9uIG1lbnVDYXRlZ29yeSAoaGVhZGluZykge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRfY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRlbnRfY2FyZC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWNhcmQnKTtcclxuICAgICAgICBjb250ZW50X2NhcmQuaW5uZXJIVE1MID0gYDxoMT4ke2hlYWRpbmd9PC9oMT5gO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51RmxleEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVGbGV4Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtZ3JpZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaGVhZGluZz09XCJTdGFydGVyc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3Quc3RhcnRlcnMubWFwKChtaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbShtaS5uYW1lLCBtaS5wcmljZSwgbWkuZGVzY3JpcHRpb24pLmdldE1lbnVJdGVtRE9NKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIkJ1cmdlcnNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmJ1cmdlcnMubWFwKChiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKGIubmFtZSwgYi5wcmljZSkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJUb3BwaW5nc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3QuY2hvaWNlcy50b3BwaW5ncy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0odCkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIlNhdWNlc1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWVudUxpc3QuY2hvaWNlcy5zYXVjZXMubWFwKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51RmxleEJveC5hcHBlbmQobmV3IG1lbnVJdGVtKHQpLmdldE1lbnVJdGVtRE9NKCkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaGVhZGluZz09XCJFeHRyYXNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMuZXh0cmFzLm1hcCgodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudUZsZXhCb3guYXBwZW5kKG5ldyBtZW51SXRlbSh0KS5nZXRNZW51SXRlbURPTSgpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZihoZWFkaW5nPT1cIlN1YnN0aXR1dGlvbnNcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lbnVMaXN0LmNob2ljZXMuc3Vic3RpdHV0aW9ucy5tYXAoKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIG1lbnVGbGV4Qm94LmFwcGVuZChuZXcgbWVudUl0ZW0odCkuZ2V0TWVudUl0ZW1ET00oKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb250ZW50X2NhcmQuYXBwZW5kKG1lbnVGbGV4Qm94KVxyXG5cclxuICAgICAgICByZXR1cm4gY29udGVudF9jYXJkXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZE1lbnUgfVxyXG5cclxufSkoKTtcclxuXHJcblxyXG5jbGFzcyBtZW51SXRlbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZSA9IFwiXCIsIHByaWNlID0gMC4wLCBkZXNjcmlwdGlvbiA9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gKE1hdGgucm91bmQocHJpY2UgKiAxMDApIC8gMTAwKS50b0ZpeGVkKDIpOztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TWVudUl0ZW1ET00oKSB7XHJcbiAgICAgICAgbGV0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblxyXG4gICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSB0aGlzLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wcmljZT09MC4wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IFwiJFwiICsgdGhpcy5wcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1OYW1lLCBpdGVtUHJpY2UsIGl0ZW1EZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBtZW51SXRlbUNvbnRhaW5lcjtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgbWVudUxpc3QgPSB7XHJcblxyXG4gICAgc3RhcnRlcnM6IFt7XHJcbiAgICAgICAgbmFtZTogXCJQb3RhdG8gJiBDaGVkZGFyIFBlcm9naWVzXCIsXHJcbiAgICAgICAgcHJpY2U6IDcuNTAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnJpZWQgcG90YXRvIGNoZWRkYXIgZHVtcGxpbmdzLCB0b3BwZWQgd2l0aCBjaGVkZGFyIGNoZWVzZSwgYmFjb24gYml0cywgc2Fsc2EgJiBzb3VyIGNyZWFtXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk9uaW9uIFJpbmdzXCIsXHJcbiAgICAgICAgcHJpY2U6IDYuMDAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpY2sgQ3V0LCBDcmlzcC1mcmllZCBvbmlvbiByaW5nc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRlZXAgRnJpZWQgUGlja2xlc1wiLFxyXG4gICAgICAgIHByaWNlOiA3LjAwLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNsaWNlZCBEaWxsIFBpY2tsZSBTcGVhcnMsIGJyZWFkZWQgJiBmcmllZCBjcmlzcHkuIFNlcnZlZCBzIERpcHBpbmcgU2F1Y2VcIixcclxuICAgIH1dLFxyXG5cclxuICAgIGJ1cmdlcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQbGFpblwiLFxyXG4gICAgICAgIHByaWNlOiA2LjAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIk9yaWdpbmFsXCIsXHJcbiAgICAgICAgcHJpY2U6IDcuMjUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ2hlZXNlXCIsXHJcbiAgICAgICAgcHJpY2U6IDYuMDAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQmFjb24gQ2hlZXNlXCIsXHJcbiAgICAgICAgcHJpY2U6IDguNzUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3Jpc3B5IENoaWNrZW5cIixcclxuICAgICAgICBwcmljZTogOC4wMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJGcmllZCBIYWRkb2NrXCIsXHJcbiAgICAgICAgcHJpY2U6IDguMDBcclxuICAgIH1dLFxyXG4gICAgXHJcbiAgICBjaG9pY2VzOiB7XHJcbiAgICAgICAgdG9wcGluZ3M6IFtcclxuICAgICAgICAgICAgXCJMZXR0dWNlXCIsXHJcbiAgICAgICAgICAgIFwiVG9tYXRvXCIsXHJcbiAgICAgICAgICAgIFwiUmF3IE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiUmVkIE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiUGlja2xlc1wiLFxyXG4gICAgICAgICAgICBcIkZyaWVkIE9uaW9uXCIsXHJcbiAgICAgICAgICAgIFwiQmFuYW5hIFBlcHBlcnNcIixcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBzYXVjZXM6IFtcclxuICAgICAgICAgICAgXCJNYXlvXCIsXHJcbiAgICAgICAgICAgIFwiS2V0Y2h1cFwiLFxyXG4gICAgICAgICAgICBcIk11c3RhcmRcIixcclxuICAgICAgICAgICAgXCJSZWxpc2hcIixcclxuICAgICAgICAgICAgXCJCQlEgU2F1Y2VcIixcclxuICAgICAgICAgICAgXCJTd2VldCBDaGlsaVwiLFxyXG4gICAgICAgICAgICBcIkhvdCBTYXVjZVwiLFxyXG4gICAgICAgICAgICBcIlRhcnRhciBTYXVjZVwiLFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIGV4dHJhczogW1xyXG4gICAgICAgICAgICBcIkJhY29uICskMS4wMFwiLFxyXG4gICAgICAgICAgICBcIkNoZWVzZSArJDEuMDBcIixcclxuICAgICAgICAgICAgXCJCZWVmIFBhdHR5ICskMi41MFwiLFxyXG4gICAgICAgICAgICBcIkV4dHJhIEZpc2ggKyQzLjUwXCIsXHJcbiAgICAgICAgICAgIFwiRXh0cmEgQ2hpY2tlbiArJDIuNTBcIixcclxuICAgICAgICBdLFxyXG5cclxuICAgICAgICBzdWJzdGl0dXRpb25zOiBbXHJcbiAgICAgICAgICAgIFwiTGV0dHVjZSBCdW4gKyQxLjAwXCIsXHJcbiAgICAgICAgICAgIFwiR2x1dGVuIEZyZWUgQnVuICskMS41MFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LCAgICBcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBtZW51VUkgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vUHVsbHMgaW4gcGFnZWxvYWQgdG8gc2V0IHVwIHRhYnMgaW4gaGVhZGVyLlxyXG4vL3B1bGxzIGluIGFsbCAzIHRhYiBjb250ZW50IG1vZHVsZXNcclxuLy9pbml0aWFsbHkgbG9hZHMgdGhlIGhvbWUgbW9kdWxlIGNvbnRlbnQgdG8gdGhlIERPTVxyXG4vL2hhcyBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lsbCBjbGVhciB0aGUgZG9tIGFuZCByZS1maWxsIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSBjb250ZW50XHJcbiBcclxuaW1wb3J0IHsgaGVhZGVyVUkgfSBmcm9tICcuL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7IGhvbWVVSSB9IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCB7IG1lbnVVSSB9IGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCB7IGNvbnRhY3RVSSB9IGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCBmb290ZXJET00gZnJvbSAnLi9mb290ZXIuanMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgdWlGdW5jdGlvbnMgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBwYWdlTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhlYWRlclVJLmxvYWRIZWFkZXIoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggaG9tZVVJLmxvYWRIb21lKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoZm9vdGVyRE9NKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcclxuICAgICAgICByZXNldERPTShwYWdlQ29udGVudCk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBoZWFkZXJVSS5sb2FkSGVhZGVyKCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhvbWVVSS5sb2FkSG9tZSgpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKGZvb3RlckRPTSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRET00ocGFnZUNvbnRlbnQpO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggaGVhZGVyVUkubG9hZEhlYWRlcigpICk7XHJcbiAgICAgICAgcGFnZUNvbnRlbnQuYXBwZW5kKCBtZW51VUkubG9hZE1lbnUoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZChmb290ZXJET00oKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0RE9NKHBhZ2VDb250ZW50KTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoIGhlYWRlclVJLmxvYWRIZWFkZXIoKSApO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCggY29udGFjdFVJLmxvYWRDb250YWN0KCkgKTtcclxuICAgICAgICBwYWdlQ29udGVudC5hcHBlbmQoZm9vdGVyRE9NKCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldERPTSA9IChwYXJlbnQpID0+IHtcclxuICAgICAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICAgIGhlYWRlclVJLnNldEV2ZW50TGlzdGVuZXJzKGxvYWRIb21lLCBsb2FkTWVudSwgbG9hZENvbnRhY3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4geyBwYWdlTG9hZCwgc2V0TGlzdGVuZXJzIH07XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbnVpRnVuY3Rpb25zLnBhZ2VMb2FkKCk7XHJcblxyXG51aUZ1bmN0aW9ucy5zZXRMaXN0ZW5lcnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=