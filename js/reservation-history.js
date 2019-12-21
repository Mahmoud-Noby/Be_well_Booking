$(document).ready(function (){
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

})