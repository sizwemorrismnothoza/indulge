

/***
 * Cart section
 */

/**Variables used for the cart */
let menu = [];
let cart = [];

let total = 0;
let subTotal = 0;
let vat = 0;

$(() => { 
    /**Loading the menu */
    loadMenu();

    /**cart start*/
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        sessionStorage.setItem("hasCodeRunBefore", true);

    } else {
        cart = JSON.parse(sessionStorage.getItem("cart"));
        cart.forEach(product => {
            subTotal = subTotal + product.price;
            console.log('sub total is: ' + subTotal);
        });
    }

    /**Add to cart */
    /**Selecting all the add to cart buttons */
    let addToCartBtns = document.querySelectorAll(".card-body .btn-success");

    /**Casting from node list to an array */
    let arrAddToCartBtns = Array.from(addToCartBtns);

    /**Adding a click event to all the add to cart buttons */
    for (i = 0; i < arrAddToCartBtns.length; i++){
        arrAddToCartBtns[i].addEventListener('click', (event) => { 

            let index = event.target.id;

            if (cart.length == 0) {
                addToCart(menu[index]);
                alert('Here is your 10% discount coupon Reference: indulge369')
            } else { 
                
                addToCart(menu[index]);
            }

            subTotal = subTotal + Number.parseInt(menu[index].price);
            alert('im working on this total:  sub total : ' + subTotal);
            console.log('im working on this total:  sub total : ' + subTotal);
            // alert('Your total is: R ' + subTotal + Number.parseInt( menu[index].price));
            //This does not seem right but it get the job done.  is there another way 
            document.location.reload(true);   
        });
    }

    // let cartIcon = $('.cart-icon');
    let cartIcon = document.querySelector('.cart-icon');
    count = cart.length;

    if (cart.length > 0) {
        cartIcon.classList.add('non-empty');
        let root = document.querySelector(':root');
        root.style.setProperty('--after-content', `"${count}"`)
    } else { 
        cartIcon.classList.remove('non-empty');
        // cartIcon.set
    }

    /**Dropdown menu */
    $('.dropdown-toggle').click(function () {
        /**method chaining and show/ hide megthod */
        $(this).next('.dropdown').slideToggle();
    });

    $(document).click(function(e) 
    { 
        var target = e.target; 
        if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) 
        { $('.dropdown').slideUp(); }
        });

    })

/**Product / Menu item class */
class Product { 
    constructor(id, imageUrl, name, price, description) { 
        this.id = id;
        this.imageUrl = imageUrl;
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = 1;
    }   
}

function addToCart(product) { 
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log("adding to cart");   
}

function updateQuantity(product, updatedProduct) {
    cart = JSON.parse(sessionStorage.getItem('cart'));
    cart.pop(product);
    cart.push(updatedProduct);
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function loadMenu() { 
    /**item 1 */
    menu.push(
        new Product(
            0,
            'https://img.taste.com.au/NKCEs_sX/w720-h480-cfill-q80/taste/2016/11/tomato-hummus-crostini-25282-1.jpeg',
            'Tomato & hummus crostini',
            35,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )
    /**item 2 */
    menu.push(
        new Product(
            '1',
            'https://img.taste.com.au/8bhSjhef/w720-h480-cfill-q80/taste/2016/11/antipasto-garlic-bread-45790-1.jpeg',
            'Antipasto garlic bread',
            50,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )
    /**item 3 */
    menu.push(
        new Product(
            '2',
            'https://img.taste.com.au/1JcMzWLI/w720-h480-cfill-q80/taste/2016/11/bacon-and-cheese-croquettes-74345-1.jpeg',
            'Bacon and cheese croquettes',
            55,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )
    /**item 4 */
    menu.push(
        new Product(
            '3',
            'https://img.taste.com.au/OPy8lBpw/w720-h480-cfill-q80/taste/2020/06/july20_big-breakfast-pizza-162747-1.jpg',
            'Big breakfast pizza',
            65,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )
    /**item 5 */
    menu.push(
        new Product(
            '4',
            'https://img.taste.com.au/72RU2lmW/w720-h480-cfill-q80/taste/2021/12/super-breakfast-bowl-175797-1.jpg',
            'Super breakfast bowl',
            50,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )
    /**item 6 */
    menu.push(
        new Product(
            '5',
            'https://img.taste.com.au/1dydKVs-/w720-h480-cfill-q80/taste/2021/12/healthy-breakfast-tacos-175758-2.jpg',
            'Healthy breakfast tacos',
            45,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, ad.'
        )
    )

    console.log('done loading menu');
}
