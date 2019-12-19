$(document).ready(function(){
    $('.client_preferred_time').datetimepicker({
        datepicker:false,
        formatTime:"h:i a",
        step:30,
        format:"h:i a"
    });
})