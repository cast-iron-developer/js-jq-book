//greeting
var greeting = 'Howdy ';
var name = 'Sam';
var message = ', please check your order:';

var welcome = greeting + name + message;

//print out the greeting
var elGreeting = document.getElementById('greeting');
elGreeting.textContent = welcome;

//Order:
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$ ' + subTotal;

var elShipping = document.getElementById('shipping');
elShipping.textContent = '$ ' + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$ ' + grandTotal;