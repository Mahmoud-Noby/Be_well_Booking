
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




// Reservation Page 

    var clinic_reservation_info = ' <thead><tr><th scope="col">Status</th><th scope="col">Doctor name</th><th scope="col">Specialty</th><th scope="col">Clinic Name</th><th scope="col">Reservation Date</th><th scope="col">Created at</th></tr></thead>';
    var lab_reservation_info = ' <thead><tr><th scope="col">Branch</th><th scope="col">Lab Tests</th><th scope="col">Visit Date</th><th scope="col">Visit Time</th><th scope="col">Address</th><th scope="col">Created at</th></tr></thead>';
    var rad_reservation_info = ' <thead><tr><th scope="col">Branch</th><th scope="col">Rad Exams</th><th scope="col">Visit Date</th><th scope="col">Visit Time</th><th scope="col">Pre-Paid</th><th scope="col">Created at</th></tr></thead>'


$('.reservation_tab .reservation_clinic').click(function() {
    $(this).addClass('chosen');
    $('#reservation_table').html(clinic_reservation_info);
    $('.reservation_tab .reservation_lab').removeClass('chosen');
    $('.reservation_tab .reservation_rad').removeClass('chosen');
});
$('.reservation_tab .reservation_lab').click(function() {
    $(this).addClass('chosen');
    $('#reservation_table').html(lab_reservation_info);
    $('.reservation_tab .reservation_clinic').removeClass('chosen');
    $('.reservation_tab .reservation_rad').removeClass('chosen');
});
$('.reservation_tab .reservation_rad').click(function() {
    $(this).addClass('chosen');
    $('#reservation_table').html(rad_reservation_info);
    $('.reservation_tab .reservation_lab').removeClass('chosen');
    $('.reservation_tab .reservation_clinic').removeClass('chosen');
    
});

// Mega Search 

var data = [{
    "name": "Declan Haley",
    "email": "Cras.lorem.lorem@nonquam.ca"
},
{
    "name": "Francis Marsh",
    "email": "neque@arcu.edu"
},
{
    "name": "Gage Figueroa",
    "email": "Sed.auctor.odio@magnis.ca"
},
{
    "name": "Asher Gay",
    "email": "Phasellus@nonsapien.ca"
},
{
    "name": "Mego",
    "email": "Phasellus@nonsapien.ca"
}
];
var specs = document.getElementById('auto_complete_specialty');
var clinic = document.getElementById('auto_complete_clinic');

for (var c = 0; c < data.length; c++) {
specs.innerHTML += '<option value="' + data[c].name + '">' + data[c].name + '</option>'
};
for (var c = 0; c < data.length; c++) {
clinic.innerHTML += '<option value="' + data[c].name + '">' + data[c].name + '</option>'
}
var mego = {
    url: "json/doctor.json",
    getValue: "name",
    
};

$("#auto_complete_doctor").easyAutocomplete(mego);


});


