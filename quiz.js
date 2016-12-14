

//declare glabal variable to store inventory of cars
var globalCars;

var searchInput = document.getElementById("inputField");
var submitButton = document.getElementById("submitButton");

var wrapper = document.getElementById("wrapper");
var parseDisplay = "";
var indvDsp = document.getElementsByClassName("indvDsp");
var dscr = document.getElementsByClassName("dscr");



//request data from inventory json file
var carRequest = new XMLHttpRequest();
carRequest.addEventListener("load", loadInventory);
carRequest.open("GET", "inventory.json");
carRequest.send();


// You should add a function that loads the `inventory.json`
// file and stores the inventory in a variable. This function should accept
function loadInventory(e) {
    //parses data from request and stores it in global car variable
    globalCars = JSON.parse(e.target.responseText);
    populatePage();
}
//You should add a function `populatePage` that
//renders the inventory to the page
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
    activateEvents();
}


// You should add a function that only creates all of the eventHandlers that you need for the application.
// Name the function `activateEvents`.
function activateEvents(){
    wrapper.addEventListener("click", style);

}
// You should add a function that changes the thickness of the border of a car element,
// and changes its background color. The function must accept two arguments:
//     A car DOM element that was clicked on.
//     A color name of your choice (see behavior requirement 5 above).

var x;

function style(e, color) {
    //changes style of target

    e.target.closest(".indvDsp").className += " selected ";
    //calls focus to input field
    searchInput.focus();
    //calls description into input field
    searchInput.value = e.target.closest(".indvDsp").children[6].innerText;
    x = e.target.closest(".indvDsp").children[6];
    console.log(x);
    inputEdit();//e.target.closest(".indvDsp").children[6]
}

function inputEdit() { //description
    searchInput.addEventListener("keyup", mirror);
}

function mirror(e) {
    x.innerText = searchInput.value;
    if (e.key === 'Enter') {
        removal();
    }
        // console.log(x.innerText = searchInput.value);
}

// You should add a function that resets the border thickness and background color
// for each car element back to the original values.
submitButton.addEventListener("click", removal);
function removal() {
    for (var i = 0; i < indvDsp.length; i++) {
        indvDsp[i].className = " col-md-3 indvDsp "
    }
    searchInput.value = "";

    searchInput.removeEventListener("keyup", mirror);


}


















// sfasdfasdf
