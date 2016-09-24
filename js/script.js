$(document).ready(function(){
	
	$(window).scroll(function(){
		
		var columns = $("#section").find('.column');
		var elevator = $("#elevator");
		var top = $(document).scrollTop();
		var currentId = '';
		var toolbar = $('#toolbar');
		var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		
		columns.each(function(){
			var _this = $(this);
			
			if(top > _this.offset().top - 800){
				currentId = '#' + _this.attr('id');
			}else{
				return false;
			}
			
		});
		//alert(h);
		var currentLink = elevator.find(".current");
		var currentH4 = $('#section').find(".active");
		if(currentId && currentLink.attr('id') != currentId){
			currentLink.removeClass("current");
			elevator.find("[href="+currentId+"]").parent().addClass("current");
			currentH4.removeClass('active');
			$(currentId).find('h4').addClass('active');
		}
		
		if(top>100 && top< 3290){
			elevator.css('display','block');
		}else{
			elevator.css('display','none');
		}
		
		if(top > h){
			toolbar.css('display','block');
		}else{
			toolbar.css('display','none');
		}
		
	});
	
	
});