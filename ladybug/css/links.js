$(document).ready(function() {
  var $ul = $('#personal-links');
  var $title = $('#title');
  var $url = $('#url');

  
  //get items from local storage
  if(localStorage.getItem('mllinks')){
   $ul.html(localStorage.getItem('mllinks'));
  }
  
  // add new item
  $('#add').click(function () {
    //add http if it is not there already
    var ini = $url.val().substring(0, 4);
    if (ini !== '' && ini !== 'http'){
        $url.val('http://' + $url.val());
    } 
    //adds the new item
    $('#personal-links').append('<li><a href="'+$url.val()+'" target="_blank">'+$title.val()+'</a><button class="removebtn">X</button></li>');
    //saves changes to localstorage
    localStorage.setItem('mllinks', $ul.html());
    //resets form
    $title.val("");
    $url.val("http://");
    $("#add-link-form").slideToggle("100");
  });
  
  //remove item
  $(".removebtn").live('click',function() {
    $(this).parent().replaceWith("");
    //save changes to localstorage
    localStorage.setItem('mllinks', $ul.html());
  });

  //form toggle
  $("#new-link-button").click(function() {
    $("#add-link-form").slideToggle("100");
  });
  
});


