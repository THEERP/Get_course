/* global $*/
$(function() { 
    $('.info-list li').on('click', function (event) {   
        let ele_li = event.target;
        $(ele_li).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(ele_li).data('class')).fadeIn();
    });
    
 });