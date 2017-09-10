"use strict";

var SizeVar = document.getElementById("Size");

var Toppingsvar = document.getElementById("Toppings");

var PriceVar = document.getElementById("Price");


var Pizzainfo = [
	{
	 Size: "Big",     
	 Toppings:   [ "Pepperoni", "Chicken", "Peppercheese"],
	 Verð: "20$"
	}
];

var Size = Pizzainfo[0].Size; 
var Toppings = Pizzainfo[0].Toppings;
var Verð = Pizzainfo[0].Verð;


SizeVar.textContent = Size; 

Toppingsvar.textContent = Toppings; 

PriceVar.textContent = Verð;



function Pizzaconstructor(verð, stærð, topping) 
{
    this.verd = verð;
    this.staerd = stærð;
    this.toppur = topping;
}

var Pizza1 = new Pizzaconstructor("20$","Stór","Kjúklingur");
var Pizza2 = new Pizzaconstructor("16$","Miðlungs","Migluostur");

document.getElementById("Pizza1").innerHTML = "Pizza nr.1 kostar " + Pizza1.verd + " stærðin er " + Pizza1.staerd + " og á henni er " + Pizza1.toppur; 

document.getElementById("Pizza2").innerHTML = "Pizza nr.1 kostar " + Pizza2.verd + " stærðin er " + Pizza2.staerd + " og á henni er " + Pizza2.toppur; 