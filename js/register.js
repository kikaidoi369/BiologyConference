// function validateText(id)
// {
//     if($("#"+id).val()==null || $("#"+id).val()=="")
//     {
//         var div = $("#"+id).closest("div");
//         div.removeClass("has-success");
//         $("#glypcn"+id).remove();
//         div.addClass("has-error has-feedback");
//         div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-remove form-control-feedback"></span>');
//         return false;
//     }
//     else{
//         var div = $("#"+id).closest("div");
//         div.removeClass("has-error");
//         $("#glypcn"+id).remove();
//         div.addClass("has-success has-feedback");
//         div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
//         return true;
//     }

// }

// function checkEmail(str)
// {
//   var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
//   if(reg.test(str)){

//   }else{
//     confirm("Please enter the correct Email");
//     document.getElementById("email").value = "";
//   }
// }

function testPrint(id)
{
    console.log(id);
}

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

$(function() {
  google.script.run.withSuccessHandler(showThings)
      .getMenuListFromSheet();
  google.script.run.withSuccessHandler(showMenu)
      .getMenuListFromSheet();
});

function showThings(things) {
  var list = $('#country');
  list.empty();
  for (var i = 0; i < things.length; i++) {
    list.append('<li>' + things[i] + '</li>');
  }
}

function showMenu(menuItems) {
  var list = $('#menu');
  list.find('option').remove();  // remove existing contents

  for (var i = 0; i < menuItems.length; i++) {
    list.append('<option>' + menuItems[i] + '</option>');
  }
}

$(function() {
  google.script.run.withSuccessHandler(showThings)
      .getLotsOfThings();
});

function showThings(things) {
  var list = $('#country');
  list.empty();
  for (var i = 0; i < things.length; i++) {
    list.append('<li>' + things[i] + '</li>');
  }
}

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