
// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlebars
app.set('view engine', 'hbs');
// where to find all of the views
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {
  // set active or not for navigation
  state = {home: true, contact: false, about: false, menu: false, shop: false};
  // set specifics for <head>
  head = {
    title: "BiaBao - Authentic Asian Cuisine", 
    description: "Welcome to BiaBao - Sligo's destination for authentic Chinese and Asian fusion cuisine. Enjoy traditional flavours with a modern twist, dine-in or order takeaway, and connect with us online.", 
    keywords: "BiaBao Sligo, Chinese cuisine, Asian fusion, authentic food, family-friendly restaurant, takeaway Sligo, modern dining"
  };
  res.render('index', {state: state, head: head});
  console.log('home');
});

// contact route
app.get('/contact', (req, res) => {
  state = {home: false, contact: true, about: false, menu: false, shop: false};
  head = {
    title: "Contact Us - BiaBao", 
    description: "Contact BiaBao in Sligo for reservations, takeaway orders, or general enquiries. View our opening hours, location on Google Maps, and key contact details.", 
    keywords: "BiaBao Sligo, contact BiaBao, Chinese restaurant Sligo, Asian fusion Sligo, restaurant phone number, opening hours, location map, takeaway orders, reservations, BiaBao address, restaurant email"
  };
  res.render('contact', {state: state, head: head});
  console.log('contact');
});

// about route
app.get('/about', (req, res) => {
  state = {home: false, contact: false, about: true, menu: false, shop: false};
  head = {
    title: "About Us - BiaBao", 
    description: "Discover the story behind BiaBao, Sligo's rebranded Asian fusion restaurant. Learn about our history, values, and vision for serving authentic, sustainable cuisine with a modern twist.", 
    keywords: "BiaBao Sligo, about BiaBao, Jalan Jalan Sligo, restaurant history, Asian fusion, authentic dining, community, BiaBao values, BiaBao vision"
  };
  res.render('about', {state: state, head: head});
  console.log('about');
});

// menu route
app.get('/menu', (req, res) => {
  state = {home: false, contact: false, about: false, menu: true, shop: false};
  head = {
    title: "BiaBao Menu", 
    description: "Browse BiaBao's full selection of authentic Chinese and Asian fusion dishes. View our Dinner, Lunch, Vegan, and Gluten-Free menus online or download them in PDF.", 
    keywords: "BiaBao menu, Asian fusion food, dinner menu, lunch menu, vegan menu, gluten-free menu, Sligo restaurant, takeaway food, baozi, pho, curry, duck, noodles"
  };
  res.render('menu', {state: state, head: head});
  console.log('menu');
});

// shop/order route
app.get('/shop', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: true};
  head = {
    title: "Order Online - BiaBao", 
    description: "Order delicious Asian fusion dishes online from BiaBao. Browse our menu, add items to cart, and enjoy convenient delivery or pickup in Sligo.", 
    keywords: "BiaBao order online, Chinese food delivery, Asian takeaway Sligo, order food online, BiaBao shop, online menu, food delivery Sligo"
  };
  res.render('shop', {state: state, head: head});
  console.log('shop');
});

// cart route
app.get('/cart', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "Shopping Cart - BiaBao", 
    description: "Review your order and proceed to checkout. Enjoy delicious Asian fusion cuisine delivered to your door.", 
    keywords: "BiaBao cart, shopping cart, order review, checkout, food delivery"
  };
  res.render('cart', {state: state, head: head});
  console.log('cart');
});

// checkout route
app.get('/checkout', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "Checkout - BiaBao", 
    description: "Complete your order with secure payment. Fast delivery to your door.", 
    keywords: "BiaBao checkout, payment, order food, secure checkout"
  };
  res.render('checkout', {state: state, head: head});
  console.log('checkout');
});

// order success route
app.get('/ordersuccess', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "Order Successful - BiaBao", 
    description: "Thank you for your order! Your food is on the way.", 
    keywords: "BiaBao order confirmation, order success"
  };
  res.render('ordersuccess', {state: state, head: head});
  console.log('ordersuccess');
});

// login route
app.get('/login', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "Login - BiaBao", 
    description: "Login to your BiaBao account to manage orders and personal details.", 
    keywords: "BiaBao login, user login, account access"
  };
  res.render('login', {state: state, head: head});
  console.log('login');
});

// register route
app.get('/register', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "Register - BiaBao", 
    description: "Create a BiaBao account for faster checkout and order tracking.", 
    keywords: "BiaBao register, create account, sign up"
  };
  res.render('register', {state: state, head: head});
  console.log('register');
});

// user details route
app.get('/userdetails', (req, res) => {
  state = {home: false, contact: false, about: false, menu: false, shop: false};
  head = {
    title: "User Details - BiaBao", 
    description: "Manage your personal information and delivery addresses.", 
    keywords: "BiaBao user details, account settings, personal information"
  };
  res.render('userdetails', {state: state, head: head});
  console.log('userdetails');
});


// thank you route
app.get('/thankyou', (req, res) => {
  const { name, email, message } = req.query; // Extract data from the query string

  res.render('thankyou', {
    title: 'Thank You',
    name,
    email,
    message
  });
});

// Serve products JSON
app.get('/data/products.json', (req, res) => {
  res.sendFile(__dirname + '/public/data/products.json');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});