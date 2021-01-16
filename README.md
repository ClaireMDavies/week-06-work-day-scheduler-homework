# week-06-work-day-scheduler-homework

## Aim of the homework <br>

To create a scheduling page that would change the colouring of each hour block depending on whether it was in the past, present or future. As well as allowing the user to input information, and for the page to retain that information when the page is refreshed. <br>

## How I went about it <br>

We were given some starter code of html and some css.  I created the timeblocks in the html, using some of the styling from the css.  I added unique id's to each of the textareas and save buttons, and was then able to use the textarea id to determine the colour of the timeblocks by slicing the last teo digits from the id, and comparing it with the hour that was retrieved using moment.js.<br>

A similar process was undertaken with taking the text from the text area and writing it to local storage.  The textarea needed to be identified, but that was done so from the save button.  By taking the last 7 digits of the save button id, I was left with the id of the textarea, whose value was then able to be written into local storage.  <br>

Then to retrieve the information from local storage on page load I write a function that would go through each textarea class, attribute the id from each textarea row and where there was a value associated with that id, it would be displayed in the correct area. This function was then called at the start of the .js file <br>

I added in the clear function for local storage, but have commented it out, as it is not required for the page to function correctly, but it is useful to have there to clear it all down for when submitting it. <br>

## The finished work <br>

The live site is found at [GitHubPages]: https://clairemdavies.github.io/week-06-work-day-scheduler-homework/

A Screenshot of the page follows: <br>
![workdayscheduler3.png](assets/workdayscheduler3.png) <br>
