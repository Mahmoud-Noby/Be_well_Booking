
// lAB collapse chosen values VALUES
$(document).ready(function () {





    //////////////*****************************************************************************************************************
    ///radiology
    //
    //
    /////////////*******************************************************************************************************************/
    $('.human .switch-card li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');

        $('.human .human-card-content > div').hide();
        $('.' + $(this).data('class')).show();
    });
    $('.human  .show-human-head').hide();
    $('.human  .show-human-arm').hide();
    $('.human  .show-human-leg').hide();
    $('.human  .show-human-chest').hide();
    $('.human  .show-human-git').hide();

    $('.human  .human-head').click(function () {
        $('.human .show-human-arm').hide();
        $('.human  .show-human-leg').hide();
        $('.human  .show-human-chest').hide();
        $('.human  .show-human-git').hide();

        $('.human  .show-human-head').show();
    });

    $('.human  .human-arm').click(function () {
        $('.human  .show-human-head').hide();
        $('.human  .show-human-leg').hide();
        $('.human  .show-human-chest').hide();
        $('.human  .show-human-git').hide();

        $('.human  .show-human-arm').show();
    });

    $('.human  .human-leg').click(function () {
        $('.human  .show-human-head').hide();
        $('.human .show-human-arm').hide();
        $('.human  .show-human-chest').hide();
        $('.human  .show-human-git').hide();

        $('.human  .show-human-leg').show();
    });

    $('.human  .human-chest').click(function () {
        $('.human  .show-human-head').hide();
        $('.human .show-human-arm').hide();
        $('.human  .show-human-leg').hide();
        $('.human  .show-human-git').hide();

        $('.human  .show-human-chest').show();
    });
    $('.human  .human-git').click(function () {
        $('.human  .show-human-head').hide();
        $('.human .show-human-arm').hide();
        $('.human  .show-human-leg').hide();
        $('.human  .show-human-chest').hide();

        $('.human  .show-human-git').show();
    });






});


