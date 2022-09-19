
// Variables section
var today = moment();
$('#currentDay').text(today.format("dddd" +" " + "MMM Do YY"));

var items = ["", "", "", "", "", "", "", "", ""];
var saveButtons = document.querySelectorAll('.saveBtn');


// Array for the different time blocks indicating the start of the hour and the end of the hour

let timeComparison = 
[
    {
        identify : 0,
        before : moment('09:00','hh:mm'),
        after : moment('10:00','hh:mm'),
    },
    {
        identify : 1,
        before : moment('10:00','hh:mm'),
        after : moment('11:00','hh:mm'),
    },
    {
        identify : 2,
        before : moment('11:00','hh:mm'),
        after : moment('12:00','hh:mm'),
    },
    {
        identify : 3,
        before : moment('12:00','hh:mm'),
        after : moment('13:00','hh:mm'),
    },
    {
        identify : 4,
        before : moment('13:00','hh:mm'),
        after : moment('14:00','hh:mm'),
    }
    ,
    {
        identify : 5,
        before : moment('14:00','hh:mm'),
        after : moment('15:00','hh:mm'),
    }
    ,
    {
        identify : 6,
        before : moment('15:00','hh:mm'),
        after : moment('16:00','hh:mm'),
    }
    ,
    {
        identify : 7,
        before : moment('16:00','hh:mm'),
        after : moment('17:00','hh:mm'),
    },
    {
        identify : 8,
        before : moment('17:00','hh:mm'),
        after : moment('18:00','hh:mm'),
    }
]


// This function used to style the webpage, and also grab local storage data for the schedule events

function color() {

for (identify=0; identify<9;identify++) {
    if (today.isSame(timeComparison[identify].before)) {

        $('#' + identify).addClass("present");

    }
    
    else if (today.isSame(timeComparison[identify].after)) {

        $('#'+identify).addClass("past");
    
    }

    else if (today.isBetween(timeComparison[identify].before,timeComparison[identify].after)) {

    $('#'+identify).addClass("present");

    }
    
    else if (
        
        today.isAfter(timeComparison[identify].after) ) {
    
            $('#'+identify).addClass("past");
        
    }

    else {

        $('#'+identify).addClass("future");

    }

    var itemArray = JSON.parse(localStorage.getItem("agenda")) || items
    
    $('#'+identify).val( itemArray[identify])

    
}
}

color();

// This function is for the save buttons to store schedule items into the local storage

saveButtons.forEach(function(saveButton) {
    saveButton.addEventListener("click", function grabData() {
        for (identify=0; identify<9; identify++) {
        
        var data = $('#' + identify).val();
        
        items[identify] = data
        
        }
        
        localStorage.setItem("agenda", JSON.stringify(items))
        
        })
});










