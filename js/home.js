$(document).ready(function (){
    
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


})