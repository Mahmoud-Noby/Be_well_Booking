$(document).ready(function () {

    ////////////////////////////////////////////// 
    ////Lab collapse values

    $('input.lab_test').click(function () {
        var group = $(this).parent().parent().parent().parent().parent().parent();
        var group_name = group.find("p").text();
        var seleted_text = $(this).parent().find('label').text();
        var result = group.find('input:checked');
        if (result.length > 0) {
            var resultString = "";
            result.each(function () {
                var selectedValue = $(this).parent().find('label').text();
                resultString += selectedValue + "<br/>";
            });
            $('#div_' + group.get(0).id).html(group_name + '<br />' + resultString);

        } else {
            $('#div_' + group.get(0).id).html(" ");
        }

    });
    ///////////////////////DATE AND TIME PIKER//////////////////////////////////////
$('#lab_request_preferred_datetime').datetimepicker({
    timepicker:false,
    format:'d/m/Y'
    
});
$('#lab_request_preferred_time').datetimepicker({
    datepicker:false,
    formatTime:"h:i a",
    step:30,
    format:"h:i a"
});

/////////////////////// HOME VISIT VALUES//////////////////////////////////////

    //display date Values
    $('#lab_request_preferred_datetime').on('change', function(){
        var chosenDate = $(this).val();
        $('#selected_date').html('<strong>Your visit Date: </strong>'+ chosenDate + '<br />');
    });
  //display  Time Values
    $('#lab_request_preferred_time').on('change', function(){
        var chosenTime = $(this).val();
        $('#selected_time').html('<strong>Your visit time: </strong>'+ chosenTime + '<br />');
    });



        // address Value
        $('.address').keyup(function () {
            var result = $(this).val();
            if (result.length > 0) {
                $('.addressResult').html('<strong>Your Address: </strong>' + result + '<br />');
            } else {
                $('.addressResult').text(" ");
            }
        });
        // phone number input
        $('.phonenumber').keyup(function () {
            var result = $(this).val();
            if (result.length > 0) {
                $('.phone-number').html('<strong>Mobile Number: </strong>' + result + '<br />');
            } else {
                $('.phone-number').text(" ")
            }
        });
    
        ////////////////////////// Chosen City, Area, Branch///////////////////////////////////////////////////////////////
        var cairo_areas = '<option value=""></option><option value="Downtown Cairo"> Downtown Cairo</option><option value="East Cairo">East of Cairo</option><option value="Shubra">Shubra </option><option value="Maadi">El Maadi</option><option value="Heliopolis">Heliopolis</option><option value="Nasr City">Nasr City</option><option value="New Cairo">New Cairo</option>';
        var giza_areas = '<option value=""></option> <option value = "Mohandesen" > Mohandesen</option><option value="Giza">Giza</option><option value="Faisal">Faisal & El-Haram</option><option value="October">6th October </option>';
        var mohandesen_branchs = '<option value=""></option>Al Safa Branch (Main)</option><option value="Mohandesen"> Mohandesen</option><option value="Agouza">Agouza</option><option value="El-Doki	">El-Doki	</option><option value="Ahmed Orabi">Ahmed Orabi</opti';
        var downtown_branchs = '<option value=""></option><option value="Tahrir Square"> Tahrir Square</option><option value="El Lewaa"> El Lewaa</option><option value="Manial 1">Manial 1</option><option value="Manial 2">Manial 2</option><option value="El Sayeda Zainab">El Sayeda Zainab</option><option value=" Kasr El Ainy "> Kasr El Ainy S</option><option value="Zahir"> El Zahir </option><option value=" El Demerdash "> El Demerdash</option><option value="Abbassia "> Abbassia</option>';
        var east_cairo_branchs = '<option value=""></option><option value=" Ain Shams"> Ain Shams</option><option value=" Gesr El suez 1 "> Gesr El suez 1 </option><option value=" Gesr El suez 2 "> Gesr El suez 2 </option><option value=" Gesr El suez 3 "> Gesr El suez 3 </option><option value="Hadayek El Kobba">Hadayek El Kobba</option><option value="Helmyet El-Ziton-1">Helmyet El-Ziton-1</option><option value="Helmyet El-Ziton-2">Helmyet El-Ziton-2</option><option value="El Sawwah">El Sawwah</option><option value="El Matarya">El Matarya</option><option value="Ezbit El-Nakhl">Ezbit El-Nakhl</option><option value="El-khusus">El-khusus</option>';
        var shubra_branchs = ' <option></option><option value="Shubra">Shubra</option><option value="El Khalafawy">El Khalafawy</option><option value="Aga Khan">Aga Khan</option><option value="Shubra El Khima">Shubra El Khima</option>';
        var maadi_branchs = '<option value=""></option><option value="Maadi 1 ">Maadi 1 </option><option value="Maadi 2 ">Maadi 2 </option><option value="Maadi 3 ">Maadi 3 </option><option value="Maadi 4 ">Maadi 4 </option><option value="Zahraa El Maadi 1 ">Zahraa El Maadi 1 </option><option value="Zahraa El Maadi 2 ">Zahraa El Maadi 2 </option><option value="Zahraa El Maadi 3 ">Zahraa El Maadi 3 </option><option value="Mokattam">Mokattam</option><option value="Helwan">Helwan</option>';
        var heliopolis_branchs = ' <option value=""></option><option value="Merghany">Merghany</option><option value="Saint Fatima">Saint Fatima</option><option value="Salah ElDin">Salah El Din</option><option value="Roxy">Roxy</option><option value="El Khalifa EL Maamoun">El Khalifa EL Maamoun</option><option value="Sheraton Buildings">Sheraton Buildings</option><option value="New Nozha">New Nozha</option><option value="Heliopolis">Heliopolis</option>';
        var nasr_city_branchs = ' <option value=""></option><option value="El Nasr Road">El Nasr Road</option><option value="El Tiran">El Tiran</option><option value="City Stars">City Stars</option><option value="Abbas el-Akkad">Abbas el-Akkad</option><option value="Makram Ebeid">Makram Ebeid</option><option value="Mustafa El-Nahas">Mustafa El-Nahas</option><option value="Tenth district ">Tenth district </option><option value="Zahra Nasr City">Zahra Nasr City</option><option value="El-Ahly Club">El-Ahly Club</option>';
        var new_cairo_branchs = ' <option value=""></option><option value="First District	">First District	</option><option value="Fifth District 1">Fifth District 1</option><option value="Fifth District 2">Fifth District 2</option><option value="Fifth District 3">Fifth District 3</option><option value="El-Rehab">El-Rehab</option><option value="El-Oboor City 1">El-Oboor City 1</option><option value="El-Oboor City 2">El-Oboor City 2</option><option value="El-Shrouk City">El-Shrouk City</option><option value="10th Ramdan City">10th Ramdan City</option><option value="Madinaty">Madinaty</option>';
        var giza_branchs = ' <option value=""></option><option value="Murad">Murad</option><option value="GizaAl Bahr Al Aazam">GizaAl Bahr Al Aazam</option><option value="Al Bahr Al Aazam">Al Bahr Al Aazam</option><option value="Ard El-Lewa">Ard El-Lewa</option><option value="Nahia">Nahia</option><option value="Imbaba">Imbaba</option><option value="Bashtil">Bashtil</option><option value="El-Hawamdeyya">El-Hawamdeyya</option>';
        var fasial_branchs = ' <option value=""></option><option value=" Faisal  1 ">Faisal 1</option><option value=" Faisal 2">Faisal 2</option><option value=" Faisal 3 ">Faisal 3</option><option value=" El Haram 1 ">El Haram 1</option><option value=" El Haram 2 ">El Haram 2</option><option value=" El Haram  3">El Haram 3</option><option value=" Hadayek El Ahram 1 ">Hadayek El Ahram 1</option><option value=" Hadayek El Ahram 2 ">Hadayek El Ahram 2</option>';
        var october_branchs = '<option value=""></option><option value="October 1">October 1</option><option value="October 2">October 2</option><option value="October 3">October 3</option><option value="Sheikh Zayed 1">Sheikh Zayed 1</option><option value="Sheikh Zayed 2">Sheikh Zayed 2</option><option value="Sheikh Zayed 3">Sheikh Zayed 3</option>';
    
        $('#lab_request_patient_city').on('change', function () {
        var chosenCity = $('#lab_request_patient_city').val();
            if (chosenCity == 'Giza') {
                $('#lab_request_patient_area').html(giza_areas);
            }
            else if (chosenCity == 'Cairo') {
                $('#lab_request_patient_area').html(cairo_areas);
            }
            else {
                $('#lab_request_patient_area').html('');
            }
        });
        $('#lab_request_patient_area').on('change', function () {
            var area = $(this).val();
            switch (area) {
                case 'Downtown Cairo':
                    $('#lab_request_branch').html(downtown_branchs);
                    break;
                case 'East Cairo':
                    $('#lab_request_branch').html(east_cairo_branchs);
                    break;
                case 'Shubra':
                    $('#lab_request_branch').html(shubra_branchs);
                    break;
                case 'Maadi':
                    $('#lab_request_branch').html(maadi_branchs);
                    break;
                case 'Heliopolis':
                    $('#lab_request_branch').html(heliopolis_branchs);
                    break;
                case 'Nasr City':
                    $('#lab_request_branch').html(nasr_city_branchs);
                    break;
                case 'New Cairo':
                    $('#lab_request_branch').html(new_cairo_branchs);
                    break;
                case 'October':
                    $('#lab_request_branch').html(october_branchs);
                    break;
                case 'Faisal':
                    $('#lab_request_branch').html(fasial_branchs);
                    break;
                case 'Giza':
                    $('#lab_request_branch').html(giza_branchs);
                    break;
                case 'Mohandesen':
                    $('#lab_request_branch').html(mohandesen_branchs);
                    break;
                default:
                    $('#lab_request_branch').html('');
            }
        });
        ////////////////////////// *Display Chosen City, Area, Branch* ///////////////////////////////////////////////////////////////
    
            //display Chosen City 
            $('#lab_request_patient_city').on('change', function(){
                var cityValues = $("#lab_request_patient_city").val();
                $(".citycla").html('<strong>Your City: </strong>' + cityValues + '<br />');
            })
               //display Chosen Area 
            $('#lab_request_patient_area').on('change', function(){
                var areaValues = $("#lab_request_patient_area").val();
                $(".areacla").html('<strong>Your Area: </strong>' + areaValues + '<br />');
            })
               //display Chosen branch 
            $('#lab_request_branch').on('change', function(){
                var labBranch = $("#lab_request_branch").val();
                $(".branchcla").html('<strong> Lab Branch: </strong>' + labBranch + '<br />');
            })
        
            //textarea 
            $('#lab_request_additional_notes').keyup(function () {
                var result = $(this).val();
                if (result.length > 0) {
                    $('.textarea').html('<strong>Your Notes: </strong>' + result + '<br />');
                } else {
                    $('.textarea').text("");
                }
            });
        
    
});