
//Items for 
const items = {
    "689145740844":{
        name: "JavaScript Textbook",
        price: 34.95
    },


   "4549292070248": {
       name: "Xerox Paper",
       price: 10.99
   },
   "092265222983": {
    name: "First Aid Kit", 
    price: 20.99
   },
   "X002ELVL3J": {
    name: "Box of Pencils (50ct.)", 
    price: 15.99
   },
   "686024002468": {
    name: "Sanitizing Wipes", 
    price: 10.99

   }, 
   "860004186236": {
    name: "N95 Face Masks", 
    price: 15.99

   }, 

   "036000214000": {
    name: "Kleenex",
    price: 3.99

   }, 

   "809693254156": {
    name: "Hand Sanitizer",
    price: 7.99
   }, 

   "036500060480": {
    name: "Printer Paper",
    price: 9.99
   }, 

   "085014561877": {
    name: "Brush Pens",
    price: 10.99
   }, 

   "X0032YGP2T": {
    name: "Multiport Adapter",
    price: 25.99
   }, 
   
   "B07G6JT1XS": {
    name: "Scissors (20ct.)",
    price: 23.99
   }, 
   
   "9780134682334": {
    name: "iOS Programming Textbook", 
    price: 119.99
   }, 
   
   "718103230759": {
    name: "Spiral Notebook", 
    price: 1.99
   },
}



const cartbutton = document.getElementById("add");
const cart = [];
const  total = document.getElementById("total");
total * 9.25
const barcrode = document.getElementById("barcodenum");
const quantity = document.getElementById("quannum");
  
const div = document.getElementById("item");
const item = document.getElementById("items");
const price = document.getElementById("price");
const q = document.getElementById("q");
const list  = document.getElementById("list");

function addToCart() {
   
    var barcodeNum = barcrode.value;
    var quan = quantity.value;
     var ip = document.createElement("p");
    var di = document.createElement("div");
    var button = document.createElement("button");
    var total = document.createElement("h2");
    
    
      
    if (items.hasOwnProperty(barcodeNum)) {
           console.log("DEBUG: New Checkout")
           console.log("DEBUG: Items has been found: " + items.name)
           console.log("DEBUG: BarcodeNum" + barcodeNum)
           var price = document.createElement("p");
           var product = document.createElement("p");
           var quan = document.createElement("p");
           price = items.price
           product  = items.name
           quan  = items.quan
           console.log("DEBUG: Item Price: " + price) 
           console.log("DEBUG: Item Name: " + product)
           console.log("DEBUG: Item Quanity" + quan)
    } else {
        console.log("DEBUG: Items has NOT been found")
    }
     
    ip.innerText = items.name;
    console.log("DEBUG BarcodeNum: " + barcodeNum)
    total.innerText = items.price
    console.log(total)
     

    

}

console.log("DEBUG: " + cart)
// console.log("DEBUG: " + barcodeNum.value);
cartbutton.addEventListener("click", addToCart);
