var count = 1;

function addItem() {
	var listItem = '<li>' + $('#todo').val() + '<span class="delete">X</span></li>';
	$('#todos').append(listItem);
	$('#todo').val('');
	count++;
	$('#count').text(count);
}

$(document).ready(function() {
	$('#submit').click(addItem);
  	$('.delete').live('click', function() {
		$(this).parent().remove();
		count--;
		$('#count').text(count);
	});
});