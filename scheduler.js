
    

$(document).ready(function()
{  
    //writing local storage data to page on page load
    loadSchedule();
    


    //retrieving the day
    var todayDate = moment().format("dddd, MMMM Do YYYY");
    //retrieving the hour
    var currentHour = moment().format("HH");

    //displaying current day
    $("#currentDay").append(todayDate);

    $(".description").each(function(index) {
        
        // get the id of each row description so we can extract the hour from it
        var rowId = $(this).attr("id");

        // the hour is the last two characters of the id
        rowHour = parseInt(rowId.slice(-2));

        if (currentHour > rowHour)
        {
            $(this).addClass("past");
        }
        else if (currentHour < rowHour)
        {
            $(this).addClass("future");
        }
        else
        {
            // current hour
            $(this).addClass("present");
        }
        
        
    

    });
    //saving the information in relevant hour to local storage
    $(".saveBtn").click(function() {

        var buttonId = $(this).attr("id");
        var textAreaId = buttonId.slice(-7);
        
        var rowText = $("#" + textAreaId).val();
        localStorage.setItem(textAreaId, rowText);
        console.log(localStorage);
    });
    

});

//retrieving info from local storage
function loadSchedule() {

    $(".description").each(function(index) {
        var rowId = $(this).attr("id");
        var hourText = localStorage.getItem(rowId);

        $("#" + rowId).val(hourText);
    });
}