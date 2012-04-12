$(document).ready(function() {

  var textFieldInput = $('#todo');

  $('#submit').bind('click', function(){
    var value = textFieldInput.val();

    var deleteButton = ' <span class="delete">X</span>';

    var listItem = '<li>' + value + deleteButton + '</li>';

    var li = $(listItem);

    $("#todos").append(li);
    textFieldInput.val('');

    var count = $('#todos').children('li').length;

    $("#count").html(count);

  });  


});