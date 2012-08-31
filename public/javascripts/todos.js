/*global $, document */

(function() {

var count = 1;

function addItem() {
	var listItem = '<li>' + $('#todo').val() + '<span class="delete">X</span></li>';
	$('#todos').append(listItem);
	$('#todo').val('');
	count++;
	$('#count').text(count);
}

function deleteItem() {
	$(this).parent().remove();
	count -= 1;
	$('#count').text(count);
}

$(document).ready(function() {
	$('#submit').click(addItem);
	$('#todos').on('click', '.delete', deleteItem);
});

})();