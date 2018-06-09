
function autocomplete(inp, arr) 
{
      
  var currentFocus;
  
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      
      this.parentNode.appendChild(a);
      
      for (i = 0; i < arr.length; i++) {
        
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          
          b = document.createElement("DIV");
          
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
         
          b.addEventListener("click", function(e) {
              
              inp.value = this.getElementsByTagName("input")[0].value;
              
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
      
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        
        currentFocus++;
        
        addActive(x);
      } else if (e.keyCode == 38) { //up
        
        currentFocus--;
        
        addActive(x);
      } else if (e.keyCode == 13) {
        
        e.preventDefault();
        if (currentFocus > -1) {
          
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    
    if (!x) return false;
    
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}
    
var countries = ["Andorra","United Arab Emirates","Afghanistan","Antigua and Barbuda","Anguilla","Albania","Armenia","Netherlands Antilles","Angola","Antarctica","Argentina","American Samoa","Austria","Australia","Aruba","Azerbaijan","Bosnia and Herzegovina","Barbados","Bangladesh","Belgium","Burkina Faso","Bulgaria","Bahrain","Burundi","Benin","Saint Barthelemy","Bermuda","Brunei","Bolivia","Brazil","Bahamas","Bhutan","Botswana","Belarus","Belize","Canada","Cocos Islands","Democratic Republic of the Congo","Central African Republic","Republic of the Congo","Switzerland","Ivory Coast","Cook Islands","Chile","Cameroon","China","Colombia","Costa Rica","Cuba","Cape Verde","Curacao","Christmas Island","Cyprus","Czech Republic","Germany","Djibouti","Denmark","Dominica","Dominican Republic","Algeria","Ecuador","Estonia","Egypt","Western Sahara","Eritrea","Spain","Ethiopia","Finland","Fiji","Falkland Islands","Micronesia","Faroe Islands","France","Gabon","United Kingdom","Grenada","Georgia","Guernsey","Ghana","Gibraltar","Greenland","Gambia","Guinea","Equatorial Guinea","Greece","Guatemala","Guam","Guinea-Bissau","Guyana","Hong Kong","Honduras","Croatia","Haiti","Hungary","Indonesia","Ireland","Israel","Isle of Man","India","British Indian Ocean Territory","Iraq","Iran","Iceland","Italy","Jersey","Jamaica","Jordan","Japan","Kenya","Kyrgyzstan","Cambodia","Kiribati","Comoros","Saint Kitts and Nevis","North Korea","South Korea","Kuwait","Cayman Islands","Kazakhstan","Laos","Lebanon","Saint Lucia","Liechtenstein","Sri Lanka","Liberia","Lesotho","Lithuania","Luxembourg","Latvia","Libya","Morocco","Monaco","Moldova","Montenegro","Saint Martin","Madagascar","Marshall Islands","Macedonia","Mali","Myanmar","Mongolia","Macau","Northern Mariana Islands","Mauritania","Montserrat","Malta","Mauritius","Maldives","Malawi","Mexico","Malaysia","Mozambique","Namibia","New Caledonia","Niger","Nigeria","Nicaragua","Netherlands","Norway","Nepal","Nauru","Niue","New Zealand","Oman","Panama","Peru","French Polynesia","Papua New Guinea","Philippines","Pakistan","Poland","Saint Pierre and Miquelon","Pitcairn","Puerto Rico","Palestine","Portugal","Palau","Paraguay","Qatar","Reunion","Romania","Serbia","Russia","Rwanda","Saudi Arabia","Solomon Islands","Seychelles","Sudan","Sweden","Singapore","Saint Helena","Slovenia","Svalbard and Jan Mayen","Slovakia","Sierra Leone","San Marino","Senegal","Somalia","Suriname","South Sudan","Sao Tome and Principe","El Salvador","Sint Maarten","Syria","Swaziland","Turks and Caicos Islands","Chad","Togo","Thailand","Tajikistan","Tokelau","East Timor","Turkmenistan","Tunisia","Tonga","Turkey","Trinidad and Tobago","Tuvalu","Taiwan","Tanzania","Ukraine","Uganda","United States","Uruguay","Uzbekistan","Vatican","Saint Vincent and the Grenadines","Venezuela","British Virgin Islands","U.S. Virgin Islands","Vietnam","Vanuatu","Wallis and Futuna","Samoa","Kosovo","Yemen","Mayotte","South Africa","Zambia","Zimbabwe"];

var dialcodes = ["+376","+971","+93","+1-268","+1-264","+355","+374","+599","+244","+672","+54","+1-684","+43","+61","+297","+994","+387","+1-246","+880","+32","+226","+359","+973","+257","+229","+590","+1-441","+673","+591","+55","+1-242","+975","+267","+375","+501","+1","+61","+243","+236","+242","+41","+225","+682","+56","+237","+86","+57","+506","+53","+238","+599","+61","+357","+420","+49","+253","+45","+1-767","+1-809", "+1-829", "+1-849","+213","+593","+372","+20","+212","+291","+34","+251","+358","+679","+500","+691","+298","+33","+241","+44","+1-473","+995","+44-1481","+233","+350","+299","+220","+224","+240","+30","+502","+1-671","+245","+592","+852","+504","+385","+509","+36","+62","+353","+972","+44-1624","+91","+246","+964","+98","+354","+39","+44-1534","+1-876","+962","+81","+254","+996","+855","+686","+269","+1-869","+850","+82","+965","+1-345","+7","+856","+961","+1-758","+423","+94","+231","+266","+370","+352","+371","+218","+212","+377","+373","+382","+590","+261","+692","+389","+223","+95","+976","+853","+1-670","+222","+1-664","+356","+230","+960","+265","+52","+60","+258","+264","+687","+227","+234","+505","+31","+47","+977","+674","+683","+64","+968","+507","+51","+689","+675","+63","+92","+48","+508","+64","+1-787", "+1-939","+970","+351","+680","+595","+974","+262","+40","+381","+7","+250","+966","+677","+248","+249","+46","+65","+290","+386","+47","+421","+232","+378","+221","+252","+597","+211","+239","+503","+1-721","+963","+268","+1-649","+235","+228","+66","+992","+690","+670","+993","+216","+676","+90","+1-868","+688","+886","+255","+380","+256","+1","+598","+998","+379","+1-784","+58","+1-284","+1-340","+84","+678","+681","+685","+383","+967","+262","+27","+260","+263"]

function invalidText(id)
{
    var div = $("#"+id).closest("div");
        div.removeClass("has-success");
        $("#glypcn"+id).remove();
        div.addClass("has-error has-feedback");
        div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback" style="top : 7.5px"></span>');
}

function validText(id)
{
    var div = $("#"+id).closest("div");
        div.removeClass("has-error");
        $("#glypcn"+id).remove();
        div.addClass("has-success has-feedback");
        div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback" style="top : 7.5px"></span>');
}

function checkEmailText()
{
    var txt = document.getElementById("email").value;
    var id = "email";
    
    if(txt.value =='' || txt.value.length < 5){
        $("#divCheckEmailText").html("Please enter more than 5 characters!");

        invalidText(id);

        return false;
    }else if ( txt.value.length > 30) {
        $("#divCheckEmailText").html("Please enter less than 30 characters!");

        invalidText(id);

        return false;
    }else {
        $("#divCheckEmailText").html("");
        
        validText(id);
        
        return true;
    }
    
}

function validateEmail(id)
{
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!email_regex.test($("#"+id).val()))
    {
        invalidText(id);
        $("#divCheckEmailText").html("E-mail is incorrect!");
        return false;
    }
    else{
        validText(id);
        $("#divCheckEmailText").html("");
        return true;
    }
}

function checkPassword()
{
    var pass = document.getElementById("password").value;
    var id = "password";
    // var pass = $("#password");
    if(pass.value =='' || password.value.length < 8){
        $("#divCheckPassword").html("Please enter more than 8 characters!");

        invalidText(id);

        return false;
    }else if ( password.value.length > 20) {
        $("#divCheckPassword").html("Please enter less than 20 characters!");

        invalidText(id);

        return false;
    }else {
        $("#divCheckPassword").html("");
        
        validText(id);
        
        return true;
    }
    
    var lowerCaseLetters = /[a-z]/g;
    if(pass.value.match(lowerCaseLetters)) { 
      
    } else {
      
    }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(pass.value.match(upperCaseLetters)) { 
      
    } else {
      
    }
  
    // Validate numbers
    var pass = /[0-9]/g;
    if(myInput.value.match(numbers)) { 
      
    } else {
      
    }
  
    // Validate length
    if(pass.value.length >= 8) {

    } else {

    }
}

function checkPasswordMatch() 
{

    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();
    var id = "confirmPassword";

    if (password != confirmPassword){
        
        $("#divCheckPasswordMatch").html("Passwords do not match!");
        invalidText(confirmPassword);

        return false;
    }
    else{
        
        $("#divCheckPasswordMatch").html("");
        validText(confirmPassword);
        return true;
    }
}

// $(function() {
//   google.script.run.withSuccessHandler(showThings)
//       .getMenuListFromSheet();
//   google.script.run.withSuccessHandler(showMenu)
//       .getMenuListFromSheet();
// });

// function showThings(things) {
//   var list = $('#country');
//   list.empty();
//   for (var i = 0; i < things.length; i++) {
//     list.append('<li>' + things[i] + '</li>');
//   }
// }

// function showMenu(menuItems) {
//   var list = $('#menu');
//   list.find('option').remove();  // remove existing contents

//   for (var i = 0; i < menuItems.length; i++) {
//     list.append('<option>' + menuItems[i] + '</option>');
//   }
// }

$(function(){
  
  // $(".dropdown-menu li a").click(function(){
    
  //   $(".btn:first-child").text($(this).text());
  //    $(".btn:first-child").val($(this).text());
  // });
  // $(".dropdown-menu li a").click(function(){
  //   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret car-mid"></span>');
  //   $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  // });

  $(".dropdown-menu").on('click', 'li a', function(){
        $(this).parent().parent().siblings(".btn:first-child").html($(this).text()+' <span class="caret car-mid"></span>');
        $(this).parent().parent().siblings(".btn:first-child").val($(this).text());
    });

});

$(document).ready(
    function()
    {
        $("#contactButton").click(function()
        {
         // if(!validateText("contactName"))
         // {
         //    return false;
         // }
         if(!validateEmail("email"))
         {
            return false;
         }
         if(!checkPassword())
         {
            return false;
         }
         // if(!validateText("contactAddress1"))
         // {
         //    return false;
         // }
         // if(!validateText("contactCity"))
         // {
         //    return false;
         // }
         $("form#contactForm").submit();
        }

        );
    }
);