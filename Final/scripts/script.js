$(function(){
	$('form').validate({
	
		submitHandler: function (form) { 
            alert('Your form submitted'); 
            return false; 
        }
	});	
});











