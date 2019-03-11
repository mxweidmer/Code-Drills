

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    //
    // Within the document, set an on click listener for the element with a class of "letterA"
    $(".letterA").on("click", function() {
        $("#text-div").append("A")
    }) 
    $(".letterB").on("click", function() {
        $("#text-div").append("B")
    })
    $(".letterC").on("click", function() {
        $("#text-div").append("C")
    })
    $(".letterD").on("click", function() {
        $("#text-div").append("D")
    })
    $(".letterE").on("click", function() {
        $("#text-div").append("E")
    })
    $(".letterF").on("click", function() {
        $("#text-div").append("F")
    })
    $(".letterG").on("click", function() {
        $("#text-div").append("G")
    })

    // and on and on with different letters
        // When that element is clicked, append the string "A" to the `text-div` element

        
    // Within the document, set an on click listener for the element with a class of "letterB"

    
        // When that element is clicked, append the string "B" to the `text-div` element

        
    // Continue for the other letters




        
})
