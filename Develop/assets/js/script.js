$( document ).ready(function() {
    // Handler for .ready() called.
    /**
     * Listen for click event
     * 
     * save value to local storage
     * 
     * 
     */

    $(".saveBtn").on("click", function(){
        console.log("clicked")

        var savedText =  $("#eventBox").val();
        console.log(savedText);
    })





});
