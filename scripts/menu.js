// JavaScript Document

(function(d){
	
	// d = document
	
	const $body = d.querySelector('body');
	const $btn = d.querySelector('.btn-menu');
	
	$btn.addEventListener('click', function(){
		
		$body.classList.toggle('show');
		
	});
	
	
})(document);




function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			event.stopPropagation();
		});	
	}
}

$(function() {
	// Bind Click event to the drop down navigation button
	$(".nav-button").click(function() {
	  /*  Toggle the CSS closed class which reduces the height of the UL thus 
		  hiding all LI apart from the first */
	  $(this).parent().parent().toggleClass("closed");
	});
  
  });