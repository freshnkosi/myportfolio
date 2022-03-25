var model = document.getElementById("themodel");
var brand = document.getElementById("thebrand");
var year = document.getElementById("theyear");
var condition= document.getElementById("thecondition");
var price = document.getElementById("theprice");

var car= {
    themodel: "Fortuner",
    thebrand: "Toyota",
    theyear:2019,
    thecondition:"New",
    theprice:400000

}

model.innerHTML= car.themodel;
brand.innerHTML= car.thebrand;
year.innerHTML= car.theyear;
condition.innerHTML= car.thecondition;
price.innerHTML= car.theprice;