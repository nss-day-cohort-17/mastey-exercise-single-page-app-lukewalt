//declare glabal variable to store inventory of cars
var wrapper = document.getElementById("wrapper");
var globalCars;

//request data from inventory json file
var carRequest = new XMLHttpRequest();
carRequest.addEventListener("load", displayCars);
carRequest.open("GET", "inventory.json");
carRequest.send();


function displayCars(e) {
    //parses data from request and stores it in global car variable
    globalCars = JSON.parse(e.target.responseText);

    var parseDisplay = "";
    //loops through the array of objects
    for (var i = 0; i < globalCars.cars.length; i++) {
        console.log(globalCars.cars[i].make);
        parseDisplay += `<div>
                            <h3>${globalCars.cars[i].make} ${globalCars.cars[i].model}</h3>
                            <p>Year: ${globalCars.cars[i].year}</p>
                            <p>Price: ${globalCars.cars[i].price}</p>
                            <p>Desription ${globalCars.cars[i].description}</p>
                        </div>`
    }
    //sets html values to corresponding parsed data by indexing them via counter 
    wrapper.innerHTML = (parseDisplay);
}
