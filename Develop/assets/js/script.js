$( document ).ready(function() {
    // Handler for .ready() called.
 
    // Get Local Storage
    var saved = localStorage.getItem("savedText");
    console.log(saved)
    $("textarea").val(saved);
    
    // Current time with moment.js
    var currentTime = moment()
    .format("[Today is] dddd, MMMM Do YYYY <p></p> hh:mm:ss");
    console.log(currentTime);

    document.getElementById("currentDay").innerHTML = currentTime;
    
    
    
    //  Listen for click event
       $(".saveBtn").on("click", function(event){
           event.preventDefault()
        console.log('click')
        var savedText =  $("textarea").val();

    // Local Storage


            
        
            localStorage.setItem("savedText", savedText); 
            
         
         alert(savedText)
    
    })
    });

   
      
    

            //  Changing color depending on time

    //Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "taskarea"
    var timeBlockElements = $(".textarea");
   
    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;
        

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");
    

         
          
        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
           
        }
    }

   

}

// checkTime every 5 minutes
setInterval(checkTime(), (100 * 60) * 5);

    