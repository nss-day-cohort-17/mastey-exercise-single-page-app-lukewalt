//declare glabal variable to store inventory of cars
var globalCars;

//request data from inventory json file
var carRequest = new HMLHttpRequeset();
carRequest.addEventListener("load", displayCars);
carRequest.open("GET", "inventory.json");
carRequest.send;




displayCars(e) => {
    //parses data from request and stores it in global car variable
    var globalCars = JSON.parse(e.target.responseText);

    var parseDisplay = "";
}
