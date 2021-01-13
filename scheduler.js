
    

$(document).ready(function()
{
    var todayDate = moment().format("dddd, MMMM Do YYYY");
    var currentTime = moment().format("HH");
    var pastTime;
    var futureTime;

    $("#currentDay").append(todayDate);
    console.log(currentTime);
});


