

//declare glabal variable to store inventory of cars
var globalCars;

var searchInput = document.getElementById("inputField");
var submitButton = document.getElementById("submitButton");

var wrapper = document.getElementById("wrapper");
var parseDisplay = "";
var indvDsp = document.getElementsByClassName("indvDsp");
var dscr = document.getElementsByClassName("dscr");
var curDescription;


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
    //anonymous function calls style function with target and color arguments
    wrapper.addEventListener("click", function(e){
        style(e, " tomato ")
    });
}


// You should add a function that changes the thickness of the border of a car element,
// and changes its background color. The function must accept two arguments:
//     A car DOM element that was clicked on.
//     A color name of your choice (see behavior requirement 5 above).
function style(e, color) {

    //changes class of target which adds styling
    e.target.closest(".indvDsp").className += " divSelected " + color;
    //calls focus to input field
    searchInput.focus();
    //starta an empty text field instead of populating the text field with the current description
    searchInput.value = " ";
    //stores current description in global varible
    curDescription = e.target.closest(".indvDsp").children[6];
    //calls function that allows the text to be edited
    inputEdit();
}


//event listener calls mirror which sets description equal to current user input per keystroke
function inputEdit() {
    searchInput.addEventListener("keyup", mirror);
}


//listens for enter key and leaves edit mode upon press
function mirror(e) {
    //sets to user input
    curDescription.innerText = searchInput.value;
    if (e.key === 'Enter') {
        //removes event listeners
        removal();
    }
}


// You should add a function that resets the border thickness and background color
// for each car element back to the original values.
submitButton.addEventListener("click", removal);
function removal() {
    //goes through each div to reset class name
    for (var i = 0; i < indvDsp.length; i++) {
        //sets the class back to original state
        indvDsp[i].className = " col-md-3 indvDsp "
    }
    //sets input field back to empty state
    searchInput.value = "";
    //switches out of edit mode
    searchInput.removeEventListener("keyup", mirror);
}

















/*
//
//    ##   #    #  ####  #    #  ####  #####
//   #  #  ##   # #    # #    # #    # #    #
//  #    # # #  # #      ###### #    # #    #
//  ###### #  # # #      #    # #    # #####
//  #    # #   ## #    # #    # #    # #   #
//  #    # #    #  ####  #    #  ####  #    #
//
*/
