

$('.click-list').click(function () {
    $(this).next('.open-list').slideToggle(600);
});







$(document).ready(function(){

	var body = $('body');
	var navToggle = $('.nav-toggle');
	var navMenu = $('.nav-menu');
	var listToggle = $('.caret', navMenu);
	var overlay = $('.overlay');
  
	navToggle.on('click', function () {
	  body.toggleClass('nav-shown');
	  overlayShow();
	});
  
	$('*').click(function (e) {
	  if (!$(e.target).is('.nav-toggle') 
		  && !$(e.target).is('.nav-toggle *') 
		  && !$(e.target).is('.nav-menu') 
		  && !$(e.target).is('.nav-menu *')) {
		body.removeClass('nav-shown');
	  }
	});
  
	$('[data-menu-target]').each(function () {
  
	  var $this = $(this);
	  var $attr = $this.attr('data-menu-target');
	  var $back = $('.back');
  
	  $this.click(function () {
		$('[data-menu="' + $attr + '"]').toggleClass('shown');
		return false;
	  });
  
	  $back.click(function () {
		$('[data-menu="' + $attr + '"]').removeClass('shown');
	  });
  
	});
  
	overlay.on('click', function(){
	  overlayHide();
	})
  
	function overlayShow(){
	  overlay.show();
	}
  
	function overlayHide(){
	  overlay.hide();
	}
  
  }) 




























$(window).scroll(function(){
  
	let oppai = $(this).scrollTop(); 
	
	$('#content article').css({opacity:100/oppai,filter: 'blur('+oppai/100+'px)'});  
	  $('#content').css({opacity: 100/oppai}); 
	
  if(oppai>190){
	  if(!$('body').hasClass('abrido'))
		  $('#header-main').addClass('arre'); 
	}
  else{
	$('#header-main').removeClass('arre');
	  }
  });
  
  $('#burger').on('click',function(e) {
	
	  e.preventDefault();
	
	  $('#nav-main, body, #burger').toggleClass('abrido');
	
	  if($('#header-main').hasClass('arre'))
		  {$('#header-main').removeClass('arre').addClass('arreno');}
	  else if($('#header-main').hasClass('arreno'))
		  {	$('#header-main').removeClass('arreno');
			  setTimeout(()=>{$('#header-main').addClass('arre')},800);}
  
  });


  
$(document).ready(function() {
    // if ( $(window).width <= 640 ) {
        $('.nav-header').click(function() {
          var self = $(this);
    
          self.next('ul').slideToggle();
        });   
    // }
		});
		











		var submenus = document.querySelectorAll("ul.sub-menu");
		if(submenus.length > 0) for(var i=0; i<submenus.length; i++) {
				var span = document.createElement('span');
				span.classList.add('expand');
				span.innerHTML = "+";
		
				span.addEventListener('click', function(){
						this.classList.toggle('active');
						// this.nextElementSibling.classList.toggle('active');
					this.parentNode.classList.toggle('active');
				});
			
				submenus[i].previousElementSibling.appendChild(span);
				submenus[i].parentNode.insertBefore(span, submenus[i]);
		}
		
		
		














		















		(function($) {
			$.fn.menumaker = function(options) {
					
					var cssmenu = $(this), settings = $.extend({
						title: "BCIT COMP 1950",
						format: "dropdown",
						sticky: false
					}, options);
		
					return this.each(function() {
						cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
						$(this).find("#menu-button").on('click', function(){
							$(this).toggleClass('menu-opened');
							var mainmenu = $(this).next('ul');
							if (mainmenu.hasClass('open')) { 
								mainmenu.hide().removeClass('open');
							}
							else {
								mainmenu.show().addClass('open');
								if (settings.format === "dropdown") {
									mainmenu.find('ul').show();
								}
							}
						});
		
						cssmenu.find('li ul').parent().addClass('has-sub');
		
						multiTg = function() {
							cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
							cssmenu.find('.submenu-button').on('click', function() {
								$(this).toggleClass('submenu-opened');
								if ($(this).siblings('ul').hasClass('open')) {
									$(this).siblings('ul').removeClass('open').hide();
								}
								else {
									$(this).siblings('ul').addClass('open').show();
								}
							});
						};
		
						if (settings.format === 'multitoggle') multiTg();
						else cssmenu.addClass('dropdown');
		
						if (settings.sticky === true) cssmenu.css('position', 'fixed');
		
						resizeFix = function() {
							if ($( window ).width() > 768) {
								cssmenu.find('ul').show();
							}
		
							if ($(window).width() <= 768) {
								cssmenu.find('ul').hide().removeClass('open');
							}
						};
						resizeFix();
						return $(window).on('resize', resizeFix);
		
					});
			};
		})(jQuery);
		



		(function($){
		$(document).ready(function(){
		
		$("#cssmenu").menumaker({
			 title: "COMP 1950",
			 format: "multitoggle"
		});
		
		});
		})(jQuery);



		$(function() {
			var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;
		
				// Variables privadas
				var links = this.el.find('.link');
				// Evento
				links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
			}
		
			Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
					$this = $(this),
					$next = $this.next();
		
				$next.slideToggle();
				$this.parent().toggleClass('open');
		
				if (!e.data.multiple) {
					$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
				};
			}	
		
			var accordion = new Accordion($('#accordion'), false);
		});
		