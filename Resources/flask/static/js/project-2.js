//This code provides me with the length of the letters in the logo so that I can add them in the css styling
const logo = document.querySelectorAll("#logo path");
  // console.log(logo);
  for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  };

//Declare an array to account for all the tl-item and timeline items in the HTML
var nums = [1, 2, 3, 4, 5];

//JQuery function to create the mouse enter and mouse leave effect which is the timeline 
//whenever we enter and leave a div in the landing page.
$(document).ready(function(){
  $.easing.easeOutCubic = function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  }
  
  for(i=0; i<=nums.length; i++){
    $(".tl-item" + nums[i]).mouseenter(function(){
      for(j=0; j <= nums.length; j++){
        $(this).find('#timeline'+ nums[j]).stop(true, true).fadeIn(100, 'easeOutCubic');
      }
    });
  }

   for(i=0; i<=nums.length; i++){
    $(".tl-item" + nums[i]).mouseleave(function(){
      for(j=0; j <= nums.length; j++){
        $(this).find('#timeline'+ nums[j]).stop(true, true).fadeOut(1000, 'easeOutCubic');
      }
    });
  }

});

//Creates the modal upon click of a point on the timeline in the landing page
$('#exampleModal').on('show.bs.modal', function (click) {

    // Button that triggered the modal
    var li = $(click.relatedTarget)

    // Extract info from data attributes 
    var recipient = li.data('whatever')
      
    // Updating the modal content using 
    // jQuery query selectors
    var modal = $(this)

    modal.find('.modal-title')
        .text('New message to ' + recipient)
          
    modal.find('.modal-body p')
        .text('Welcome to ' + recipient)
})