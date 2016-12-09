//declare glabal variable to store inventory of cars
var globalCars;
var wrapper = document.getElementById("wrapper");
//request data from inventory json file
var carRequest = new XMLHttpRequest();
carRequest.addEventListener("load", displayCars);
carRequest.open("GET", "inventory.json");
carRequest.send();


var parseDisplay = "";
function displayCars(e) {
    //parses data from request and stores it in global car variable
    globalCars = JSON.parse(e.target.responseText);

    //loops through the array of objects
    for (var i = 0; i < globalCars.cars.length; i++) {
        console.log(globalCars.cars[i].make);
        parseDisplay += `<div class="col-md-3 indvDsp" id="${[i]}">
                            <h3>${globalCars.cars[i].make} ${globalCars.cars[i].model}</h3>
                            <p>Year: ${globalCars.cars[i].year}</p>
                            <p>Price: ${globalCars.cars[i].price}</p>
                            <p>Desription ${globalCars.cars[i].description}</p>
                        </div>`
    }

    //sets html values to corresponding parsed data by indexing them via counter
    wrapper.innerHTML = parseDisplay;

    var idCounter = document.getElementsByClassName("indvDsp");
    var searchInput = document.getElementById("inputField");

    for (var i = 0; i < idCounter.length; i++) {
        idCounter[i].addEventListener("click", function(e) {
            e.currentTarget.style.background = "lightgrey";
            e.currentTarget.style.border = "5px solid black";
            searchInput.innerHTML = "";
            searchInput.focus();
        })
    }

}


//changes the background color of each item when clicked

var displayBox = ("indvDsp");
