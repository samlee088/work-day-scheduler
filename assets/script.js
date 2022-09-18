var today = moment();
$('#currentDay').text(today.format("dddd"));



// var timeNine = moment('15:00','hh:mm');
// var timeTen = moment('16:00','hh:mm');
var items = ["", "", "", "", "", "", "", "", ""];


var saveButtons = document.querySelectorAll('.saveBtn');
saveButtons.forEach(function(saveButton) {
    saveButton.addEventListener("click", function grabData() {
        for (identify=0; identify<9; identify++) {
        
        var data = $('#' + identify).val();
        
        items[identify] = data
        
        }
        
        localStorage.setItem("agenda", JSON.stringify(items))
        
        })
});





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





function color() {

for (identify=0; identify<9;identify++) {
    if (today.isAfter(timeComparison[identify].after) ) {
    
    $('#'+identify).addClass("past");


    }
    
    else if (today.isBetween(timeComparison[identify].before,timeComparison[identify].after)) {

    $('#'+identify).addClass("present");

    }
    
    else {

        $('#'+identify).addClass("future");

    }

    var itemArray = JSON.parse(localStorage.getItem("agenda")) || items
    
    $('#'+identify).val( itemArray[identify])

    
}
}

color();




/* beforetime is always 9
after time is after 10

if today < before time, then color
if today isbetween before time, then color
else if, then color


loop that grabs each unique before time and after time */






/* 
function pageReload () {

    if (today.isBetween(timeNine, timeTen)) {

   console.log("Yes");

   $('#nine').addClass("present");

    }

   else  {
    console.log("No");
   }
} */


function storeItems() {
    localStorage.setItem("agenda", JSON.stringify(items))
}

/* function grabItems() {
    var items = JSON.parse(localStorage.getItem("agenda"))
} */

// pageReload()





/* make either a HTML text connect with jquery, or use bootstrap to make a variable table */


/* breakout is time, 8-5 w/ 1-hr lunch, middle action item for time, and save button */

/* after the save, it will save to local storage so that it reloads after refresh on the page */
/* save with either array, or with individual save states? */
















