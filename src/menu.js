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



export { menuUI };