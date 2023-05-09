/*
Build an e-commerce application that sells different types of products with varying properties, such as price, size, and color. 
The application should use inheritance to create a base product class that contains the shared properties and methods of all products,
and then create subclasses that inherit from the base class and add their own unique properties and methods.

To accomplish this, you should start by creating a Product class with properties such as price, size, and color.
This class should also contain methods that all products will have, such as a method to display the product information.

Next, you should create subclasses for each type of product that you want to sell, such as Clothing, Electronics, or Books.
 These subclasses should inherit from the Product class and add their own unique properties and methods.
For example, the Clothing class might have a size property and a method to calculate the appropriate size based on the user's measurements.

Once you have created the necessary classes, you can use them to create instances of each product type in your e-commerce application.
You should provide a way for users to view the available products, add them to a shopping cart, and make a purchase.



- After selecting all of the “add-to-cart” buttons, how can I set each button to add its corresponding product
to create a new instance of the product and add it to the shopping cart?
- It should also invoke a function that that adds the product’s cost to the subtotal of the cart.

*/

class Product {
  constructor(price, name) {
    this.productPrice = price;
    this.productName = name;
  }

  get pname() {
    return this.productName;
  }

  set pname(name) {
    this.productName = name;
  }

  get pprice() {
    return this.productPrice;
  }

  set pprice(price) {
    this.productPrice = price;
  }
}

class Clothing extends Product {
  constructor(price, name, size, color, brand) {
    super(price);
    super(name);
    this.itemSize = size;
    this.itemColor = color;
    this.itemBrand = brand;
  }

  get size() {
    return this.itemSize;
  }

  set size(size) {
    this.itemSize = size;
  }
  get color() {
    return this.itemColor;
  }

  set color(color) {
    this.itemColor = color;
  }
  get brand() {
    return this.itemBrand;
  }

  set brand(brandName) {
    this.itemBrand = brandName;
  }
  
}

class Book extends Product {
  constructor(price, name, author, pages) {
    super(price);
    super(name);
    this.bookAuthor = author;
    this.bookPages = pages;
  }

  get author() {
    return this.bookAuthor;
  }

  set author(author) {
    this.bookAuthor = author;
  }

  get pages() {
    return this.bookPages;
  }

  set pages(pages) {
    this.bookPages = pages;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      //if the index is not found the indexOf()funtion will return '-1'
      this.items.splice(index, 1);
    }
  }
  getTotalCost() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
//get all the elements from the html
let cart = document.getElementById('cart');
let cartItems = document.getElementById('cart-total-items');
let addSmartphone = document.getElementById('smartphone');
let addLaptop = document.getElementById('laptop');
let addHeadphones = document.getElementById('headphones');
let addTshirt = document.getElementById('t-shirt');
const productsInCart = [];

// function renderCart(productsInCart) {
// 
// }

let buttons = [addSmartphone, addLaptop, addHeadphones, addTshirt];
let itemsInCart = 0;
buttons.forEach(button => button.addEventListener('click', () => {
  let product = new Product(5, button.id);
  let ul = document.getElementById("cart-list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(product.pname));
  ul.appendChild(li);

  itemsInCart++;
} ))
//get all "add-to-cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

//add onClick event 


function productFactory(name, price) {
  switch (name) {
    case 'laptop':
      const newLaptop = new Product(price, name)
      productsInCart.push(newLaptop)
      console.log(productsInCart)
      // renderCart(productsInCart) test
      break;
  
    default:
      console.log(name)
      break;
  }

}

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const price = e.target.previousSibling.previousSibling.id;
    productFactory(button.id, price);
  })
})



// When the button is clicked a new instance of that item should be created and added to the cart 

//iterate through all products and create new instance of the class
//take the price from the html element using the id
//create a ne winstance of the product, make an UL and add the items as li

//make a function thet is invoked when one of add-to-cart buttons is clicked 
//the function should create a new instance of the product 
