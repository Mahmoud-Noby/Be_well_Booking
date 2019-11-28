$(function() {
    
    $('.human .switch-card li').click(function() {
        $(this).addClass('selected').siblings().removeClass('selected');

        $('.human .human-card-content > div').hide();
        $('.' + $(this).data('class')).show();
    });

    $('.human  .human-head').hide();
    
    $('.show-human-head').click(function(){
        $('.human  .human-head').toggle();
    });

    
    $('.human  .human-head-2').hide();
    
    $('.show-human-head-2').click(function(){
        $('.human  .human-head-2').toggle();
    })
    // $('.human  .human-head').click(function() {
    //     $('.' + $(this).data('class')).show();
    // });
})