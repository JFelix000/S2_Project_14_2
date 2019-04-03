"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

    Author: Jose Felix
   Date:   4.3.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
window.onload = setupCart;

function setupCart() {
      // regarding any element in the addButton class
      var addButtons = document.getElementsByClassName("addButton");
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;
      }
}
function addItem(e) {
      // this is to have the e.target. for the nextsibling 
      var foodItem = e.target.nextElementSibling;
      // value of the id attribute for foodItem
      var foodID = foodItem.valueOf("id");
      var foodDescription = foodItem.cloneNode;
      var cartBox = document.getElementById("cart");
      document.createElement("span");
}