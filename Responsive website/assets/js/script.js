// JavaScript Document for toggle menu
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right ="-200px";
}



// JavaScript Document for story slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


  // JavaScript Document for story slider
$(document).ready(function() {
    $('#autoWidth-2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-2').removeClass('cS-hidden-2');
        } 
    });  
  });


    // JavaScript Document for projects slider
$(document).ready(function() {
    $('#autoWidth-3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-3').removeClass('cS-hidden-3');
        } 
    });  
  });
