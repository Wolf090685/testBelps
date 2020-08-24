$('.faq__item-header').on('click', function () {        
    $(this).toggleClass('active');
    $(this).next().slideToggle(1000);    
    $('.faq__item-content').not($(this).next()).slideUp(1000);  
    $('.faq__item-header').not($(this)).removeClass('active'); 
});