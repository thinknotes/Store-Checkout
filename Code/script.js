
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

function addToCart() {
   
    var barcodeNum = barcrode.value;
    var quan = quantity.value;
    var ip = document.createElement("p");
    var di = document.createElement("div");
    var tdiv = document.getElementById("totaldiv");
    var sub = document.getElementById("subtotal");


      
    if (items.hasOwnProperty(barcodeNum)) {

           

           let item = items[barcodeNum];
           let itemToUpdate = Update(item);
           var price = document.createElement("p");
           var product = document.createElement("p");
           var cartquan = document.createElement("p");
           var grandTotal = document.createElement("h2");
           price.innerText = item.price;
           product.innerText  = item.name;
           cartquan.innerText  = quan;
           
           if (itemToUpdate) {
            console.log(itemToUpdate);
             let itemQuan = itemToUpdate.querySelector(".userquanity")
             itemQuan.innerText = parseFloat(itemQuan.innerText) + parseFloat(quan);
             total += item.price * parseFloat(itemQuan.innerText);
             grandTotal = parseFloat(total * CaTaxRate).toFixed(2);
             tdiv.innerText = "Total: $ " + total
             sub.innerText = `Your grand total(including tax, 9.25%, is $${grandTotal}` 
             return;
           }
        

      


           product.classList.add("cartstyling");
           price.classList.add("priceStyling");
           cartquan.classList.add("userquanity");
          
           total += parseFloat(item.price) * parseFloat(quan);
           console.log(total)
           grandTotal = parseFloat(total * (CaTaxRate)).toFixed(2);
           di.classList.add("itembox");
           
            di.append(product);
            di.append(price);
            di.append(cartquan);
            di.classList.add("priceStyling");
            price.classList.add("style");
            product.classList.add("priceStyling");
            list.append(di);
            
            
        
            di.style.border = "1px solid black";
            di.style.borderRadius = "10px";
            tdiv.innerText = "Total: $ " + total
            sub.innerText = `Your grand total(including tax, 9.25%, is $${grandTotal}` 
           



    } else {
        console.log("DEBUG: Items has NOT been found")
        notFound()
    }
     
    ip.innerText = items.name;
    console.log("DEBUG BarcodeNum: " + barcodeNum)
    total.innerText = items.price
    console.log(total)
     
     
    function notFound() {
        alert("Item Has Not Been Found, Please Try Again!!")
    }

    
   function Update(addedItem){
      var boxes = document.querySelectorAll(".itembox");

      for(let i = 0; i < boxes.length; i++) {
            if (addedItem.name === boxes[i].querySelector(".cartstyling").innerText) {
                 return boxes[i];
            }
      }
   }
}



console.log("DEBUG: " + cart)
cartbutton.addEventListener("click", addToCart);
