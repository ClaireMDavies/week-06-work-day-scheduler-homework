
    

$(document).ready(function()
{   //retrieving the day
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





    
    
});

