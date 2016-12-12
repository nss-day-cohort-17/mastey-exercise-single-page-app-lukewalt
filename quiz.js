//declare glabal variable to store inventory of cars
var globalCars;
var parseDisplay = "";
var wrapper = document.getElementById("wrapper");

//request data from inventory json file
var carRequest = new XMLHttpRequest();
carRequest.addEventListener("load", loadInventory);
carRequest.open("GET", "inventory.json");
carRequest.send();


function loadInventory(e) {
    //parses data from request and stores it in global car variable
    globalCars = JSON.parse(e.target.responseText);
    populatePage();
}

function populatePage() {
    //loops through the array of objects and compiles list of each car info
    for (var i = 0; i < globalCars.cars.length; i++) {
        // console.log(globalCars.cars[i].make);
        parseDisplay += `<div class="col-md-3 indvDsp" id="${[i]}">
                            <h3>${globalCars.cars[i].make} ${globalCars.cars[i].model}</h3>
                            <h4>Year</h4>
                            <p>${globalCars.cars[i].year}</p>
                            <h4>Price</h4>
                            <p> ${globalCars.cars[i].price}</p>
                            <h4>Description</h4>
                            <p class="dscr"> ${globalCars.cars[i].description}</p>
                        </div>`
    }

    //sets html values to corresponding parsed data by indexing them via counter
    wrapper.innerHTML = parseDisplay;
    eventListeners();
}

function eventListeners(){

    var indvDsp = document.getElementsByClassName("indvDsp");
    var dscr = document.getElementsByClassName("dscr");
    var searchInput = document.getElementById("inputField");

    for (var i = 0; i < indvDsp.length; i++) {

        indvDsp[i].addEventListener("click", function(e) {
            //changes style of target
            e.currentTarget.style.background = "lightgrey";
            e.currentTarget.style.border = "5px solid black";
            //calls focus to input field
            searchInput.focus();
            //calls description into input field
            var currentEl = '';
            currentEl = e.currentTarget.children[6];
            searchInput.value = currentEl.innerText;
            mirror(currentEl);
        })
    }
}

function mirror(arg) {
    var searchInput = document.getElementById("inputField");

    searchInput.addEventListener("keypress", function(){
        // console.log(arg);
        arg.innerText = searchInput.value;
    });

}

//changes the background color of each item when clicked
