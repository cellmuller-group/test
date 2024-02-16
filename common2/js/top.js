

//mainSlideArea
$(function(){
	var slider = $('#mainSlideArea .bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		pager: true,
		controls: false,
		speed: 600,
		pause: 6000,
		slideWidth: 665,
		pagerCustom: '#bx-pager',
		onSlideAfter: function(){ slider.startAuto(); }
	});
});

//slideBnBlock
$(function(){
	var slider = $('.slideBnBlock .slideBn').bxSlider({
		auto: true,
		pager: false,
		controls: true,
		speed: 600,
		pause: 6000,
		slideWidth: 206,
    minSlides: 5,
    maxSlides: 5,
		moveSlides: 1,
    slideMargin: 9,
		onSlideAfter: function(){ slider.startAuto(); }
	});
});

//globalnavi
$(function(){
$('.gnavStyle01 .gnav').click(function() {
	if($(this).closest(".openUnderBox").hasClass("hover")){
		$('.openUnderBox').removeClass("hover");
		return false;
	}else{
		$('.openUnderBox').removeClass("hover");
		$(this).closest(".openUnderBox").toggleClass("hover");
		return false;
	}
});
});

//insuranceSearch
$(function(){
	$('#insuranceSearch .selectBlock [class*="genre"]').on('click', function(){
		//checkbox
		$(this).toggleClass('on');
		//link
		var target = $('#insuranceSearch .selectBlock [class*="genre"]').not('.on').map(function(){
			return '.' + $(this).attr('class');
		}).get().join(', ');
		$('#insuranceSearch .insuranceBtnList li').hide().not(target).show();
	});
});

//campaignArea
$(function(){
	//height
	var $bnr = $('#campaignArea #campaignBnrList ul li'),
		bnrNum = $bnr.length,
		bnrRow = Math.round(bnrNum / 4),
		bnrHeight = 80,
		bnrMarginTop = 15;
	$('#campaignArea #campaignBnrList ul').css('height', (bnrHeight + bnrMarginTop) * bnrRow);
	//colorbox
	$('#campaignArea .hdg p a').colorbox({
		inline: true,
		className: 'colorboxCampaignBnr',
		opacity: 0.8,
		onComplete: function(){
			//banner
			$('#campaignBnrList li').each(function(i){
				$(this).hide().delay(200 * i).animate({opacity:'show'}, 300);
			});
		}
	});
});

