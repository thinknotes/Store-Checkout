
//Items for store
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


//Variables needed for cart
var cartbutton = document.getElementById("add");
var cart = [];
var  total = document.getElementById("total");
var barcrode = document.getElementById("barcodenum");
var quantity = document.getElementById("quannum");
  
var div = document.getElementById("item");
var item = document.getElementById("items");
var price = document.getElementById("price");
var q = document.getElementById("q");
var list  = document.getElementById("list");
const CaTaxRate = 1.0925;



//AddToCart function 
function addToCart() {
   
    var barcodeNum = barcrode.value; // takes the barcodenum from the scanner
    var quan = quantity.value;       // takes the user qaunity
    var ip = document.createElement("p");  
    var di = document.createElement("div"); 
    var tdiv = document.getElementById("totaldiv");  //total for products
    var sub = document.getElementById("subtotal");  //total + tax for products


      
    if (items.hasOwnProperty(barcodeNum)) { //Check to see if product is know else will alert the user that product has not been found

           

           let item = items[barcodeNum];   //Grab items from the objects
           let itemToUpdate = Update(item); //Updates quanity when the users adds more
           //Create items need for function 
           var price = document.createElement("p");
           var product = document.createElement("p");
           var cartquan = document.createElement("p");
           var grandTotal = document.createElement("h2");

           //What itmes created equal to from objects
           price.innerText = item.price;
           product.innerText  = item.name;
           cartquan.innerText  = quan;  
           
           if (itemToUpdate) {    // Updates item in cart and return a new toal and grand total
            console.log(itemToUpdate);
             let itemQuan = itemToUpdate.querySelector(".userquanity") 

             //Converts total into a float and rounds the number to the second place in the decmial
             itemQuan.innerText = parseFloat(itemQuan.innerText) + parseFloat(quan); 
             total += item.price * parseFloat(itemQuan.innerText);
             grandTotal = parseFloat(total * CaTaxRate).toFixed(2);
             tdiv.innerText = "Total: $ " + total
             sub.innerText = `Your grand total(including tax, 9.25%, is $${grandTotal}` 
             return;
           }
        

      

          
           //Get total without any new qanity changes
           total += parseFloat(item.price) * parseFloat(quan);
           console.log(total)
           grandTotal = parseFloat(total * (CaTaxRate)).toFixed(2);
    
           // Add item to cart when user press the checkout button
            di.append(product); 
            di.append(price);
            di.append(cartquan);
            di.classList.add("priceStyling");
            list.append(di);
            
            
          //Styles cart 
            di.style.border = "1px solid black";
            di.style.borderRadius = "10px";

           //Total & Subtotal
            tdiv.innerText = "Total: $ " + total
            sub.innerText = `Your grand total(including tax, 9.25%, is $${grandTotal}` 
           



    } else {
        console.log("DEBUG: Items has NOT been found")
        notFound() //Alert if product has not been found
    }
     
    ip.innerText = items.name;
    // console.log("DEBUG BarcodeNum: " + barcodeNum)
    total.innerText = items.price
    // console.log(total)
     
     //Alert the user if product has not been found
    function notFound() {
        alert("Item Has Not Been Found, Please Try Again!!")
    }

    //Update the quanity for cart
   function Update(addedItem){
      var boxes = document.querySelectorAll(".itembox");

      for(let i = 0; i < boxes.length; i++) {
            if (addedItem.name === boxes[i].querySelector(".cartstyling")) {
                 return boxes[i];
            }
      }
   }
}



//Makes cartbutton work when users clicks on it
cartbutton.addEventListener("click", addToCart);
