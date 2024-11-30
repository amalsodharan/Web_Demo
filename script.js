function navigate(){
  window.location.href = "signup.html";
}

function signvisible(){
var j = document.getElementById('signDum');
var k = document.getElementById('logDum');


if (j.style.display === "none") {
  j.style.display = "block";
} 

if (k.style.display === "none") {
  k.style.display = "block";
} 

}



function signdis(){
var j = document.getElementById('signDum');
var k = document.getElementById('logDum');


if (j.style.display === "block") {
  j.style.display = "none";
} 

if (k.style.display === "block") {
  k.style.display = "none";
} 

}

function onlyNumberKey(evt) {
 
  let ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}


function m1(){
  $('#myForm').keyup(function(){
        if (fname.value == "") {
          $('#demo1').html("First name cannot be empty");
          $('#fname').css("outline", "1px solid red");
          return false;
        }else {
          $('#demo1').html("");
          $('#fname').css("outline", "none");
        }
      $('#myForm').unbind('keyup').keyup();
  });
}

function m2(){
  $('#myForm').keyup(function(){
        if (lname.value == "") {
          $('#demo2').html("Last name cannot be empty");
          $('#lname').css("outline", "1px solid red");
          return false;
        }else {
          $('#demo2').html("");
          $('#lname').css("outline", "none");
        }
        $('#myForm').unbind('keyup').keyup();
  });
}

function m3(){
  $('#myForm').keyup(function(){
       if (email.value == "" || !email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        $('#demo3').html("Please enter a valid e-mail address");
        $('#email').css("outline", "1px solid red");
        return false;
      }else {
        $('#demo3').html("");
        $('#email').css("outline", "none");
      }
      $('#myForm').unbind('keyup').keyup();
      
  });
}

function m4(){
  $('#myForm').keyup(function(){
       if (phone.value == "" || phone.value.length < 10 || phone.value.length > 10) {
        $('#demo4').html("Please enter your phone number properly");
        $('#phone').css("outline", "1px solid red");
        return false;
      }else {
        $('#demo4').html("");
        $('#phone').css("outline", "none");
      }
      $('#myForm').unbind('keyup').keyup();
      
  });
}

function m5(){
  $('#myForm').keyup(function(){
    if (dob.value == "") {
      $('#demo5').html("Please enter your date of birth");
      $('#dob').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo5').html("");
      $('#dob').css("outline", "none");
    }
    $('#myForm').unbind('keyup').keyup();
      
  });
}

function m6(){
  $('#myForm').keyup(function(){
    if (address.value == "") {
      $('#demo7').html("Please enter your address");
      $('#address').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo7').html("");
      $('#address').css("outline", "none");
    }
      
    $('#myForm').unbind('keyup').keyup();
  });
}

function m7(){
  $('#myForm').keyup(function(){
    if (password.value == "" || password.length < 8) {
      $('#demo9').html("Please enter a password with atleast 8 letters");
      $('#password').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo9').html("");
      $('#password').css("outline", "none");
    }
      
    $('#myForm').unbind('keyup').keyup();
  });
}

function m8(){
  $('#myForm').keyup(function(){
    if (repass.value == "" || repass.value != repass.value) {
      $('#demo10').html("Please re-enter the password");
      $('#repass').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo10').html("");
      $('#repass').css("outline", "none");
    }
      
    $('#myForm').unbind('keyup').keyup();
  });
}



let formData = {};
let jsonData;
function display(){

    var l1 = document.getElementById("fname").value;
    var l2 = document.getElementById("lname").value;
    var l3 = document.getElementById("email").value;
    var l4 = document.getElementById("phone").value;
    var l5 = document.getElementById("dob").value;
    var l6 = $('input[name="gender"]:checked').val();
    var l7 = document.getElementById("address").value;
    var l8 = document.getElementById("hobbies").value;
    var l9 = document.getElementById("password").value;
        
        localStorage.setItem("localfname",l1);
        localStorage.setItem("locallname",l2);
        localStorage.setItem("localemail",l3);
        localStorage.setItem("localphone",l4);
        localStorage.setItem("localdob",l5);
        localStorage.setItem("localgender",l6);
        localStorage.setItem("localaddress",l7);
        localStorage.setItem("localhobbies",l8);
        localStorage.setItem("localpassword",l9);

        let form = document.getElementById("myForm");
        for (let i = 0; i < form.elements.length; i++) {
            let element = form.elements[i];
            if (element.type !== "submit") {
                formData[element.name] = element.value;
            }
        }
        jsonData = JSON.stringify(formData);
        console.log(jsonData);
   
  $('#myForm').submit(function(e){    
    e.preventDefault();


    let x1 = $("#fname").val();
    let x2 = $("#lname").val();
    let x3 = $("#email").val();
    let x4 = $("#phone").val();
    let x5 = $("#dob").val();
    let x6 = $('input[name="gender"]:checked').val();
    let x7 = $("#address").val();
    let x8 = $("#hobbies").val();
    let x9 = $("#password").val();
    let x10 = $("#repass").val();
    let x11 = $('input[name="dcheck"]:checked').val();

    console.log(x8);

    
    if (x1 == '') {
      $('#demo1').html("First name cannot be empty");
      $('#fname').css("outline", "1px solid red");
      return false;
    } else {
      $('#demo1').html("");
      $('#fname').css("outline", "none");
    }
    if (x2 == "") {
      $('#demo2').html("Last name cannot be empty");
      $('#lname').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo2').html("");
      $('#lname').css("outline", "none");
    }
    if (x3 == ""|| !x3.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
      $('#demo3').html("Please enter a valid e-mail address");
      $('#email').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo3').html("");
      $('#email').css("outline", "none");
    }
    if (x4 == "" || x4.length < 10 || x4.length > 10) {
      $('#demo4').html("Please enter your phone number properly");
      $('#phone').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo4').html("");
      $('#phone').css("outline", "none");
    }
    if (x5 == "") {
      $('#demo5').html("Please enter your date of birth");
      $('#dob').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo5').html("");
      $('#dob').css("outline", "none");
    }
    if(x6 == null) {
      $('#demo6').html("Please Select a gender");  
      return false;
    }else {
      $('#demo6').html("");
    }
    if (x7 == "") {
      $('#demo7').html("Please enter your address");
      $('#address').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo7').html("");
      $('#address').css("outline", "none");
    }
    if (x8 == "") {
      $('#demo8').html("Please select your hobbies");
      $('#hobbies').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo8').html("");
      $('#hobbies').css("outline", "none");
    }
    if (x9 == "" || x9.length < 8) {
      $('#demo9').html("Please enter a password with atleast 8 letters");
      $('#password').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo9').html("");
      $('#password').css("outline", "none");
    }
    if (x10 == "" || x10 != x9) {
      $('#demo10').html("Please re-enter the password");
      $('#repass').css("outline", "1px solid red");
      return false;
    }else {
      $('#demo10').html("");
      $('#repass').css("outline", "none");
    }
    if (x11 == null) {
      $('#demo11').html("Please agree to the above information");
      $('#dcheck').css("outline", "1px solid red");
        return false;
      }else {
        $('#demo11').html("");
        $('#dcheck').css("outline", "none");
    } 
    
   


    $('#myForm').unbind('submit').submit();
  });


  if(fname.value == '' || lname.value == '' || email.value == '' || phone.value == '' || dob.value == '' || address.value == '' || hobbies.value == '' || password.value == '' || repass.value == '' || dcheck.checked == false){
      console.log("next");
  }else{
    $('#passchecker').css("display", "none");
      fname.value = "";
      lname.value = "";
      email.value = "";
      phone.value = "";
      dob.value = "";
      address.value = "";
      hobbies.value = "";
      password.value = "";
      repass.value = "";
      dcheck.checked = false;
      g1.checked = false;
      g2.checked = false;
      g3.checked = false;
  }
}

function passcheck(){
  $('#passchecker').css("display", "block");
  if (document.getElementById('password').value ==
        document.getElementById('repass').value) {
        document.getElementById('passchecker').style.color = 'green';
        document.getElementById('passchecker').innerHTML = 'matching';
    } else {
        document.getElementById('passchecker').style.color = 'red';
        document.getElementById('passchecker').innerHTML = 'not matching';
    }
}

// function f2(){
//   $('#myForm').submit(function(){

    
//   });
  
// }

function logdisplay(){

  console.log(jsonData);
  let logData = JSON.parse(jsonData);
  console.log(logData);

  if(logData['e-mail'] == emaillog.value && logData['Password'] == passlog.value ){
    location.href = "succes.html";
  }
  else{
    alert("Please Check the e-mail and password you have entered");
  }
  
  $('#logForm').submit(function(e){
    e.preventDefault();

    let y1 = $("#emaillog").val();
    let y2 = $("#passlog").val();


    if (y1 == '' || !y1.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
      $('#lemo1').html("Please enter a valid e-mail address");
      $('#emaillog').css("outline", "1px solid red");
      return false;
    } else {
      $('#lemo1').html("");
      $('#emaillog').css("outline", "none");
    }
    if (y2 == "" || y2.length < 8) {
      $('#lemo2').html("Please enter a password");
      $('#passlog').css("outline", "1px solid red");
      return false;
    }else {
      $('#lemo2').html("");
      $('#passlog').css("outline", "none");
    }
  });
}
function v1(){
$('#logForm').keyup(function(e){
     e.preventDefault();
          if (emaillog.value == '' || !emaillog.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
            $('#lemo1').html("Please enter a valid e-mail address");
            $('#emaillog').css("outline", "1px solid red");
            return false;
          } else {
            $('#lemo1').html("");
            $('#emaillog').css("outline", "none");
          }
    
});
}
function v2(){
  $('#logForm').keyup(function(e){
       e.preventDefault();
        if (passlog.value == "" || passlog.value.length < 8) {
          $('#lemo2').html("Please enter a password");
          $('#passlog').css("outline", "1px solid red");
          return false;
        }else {
          $('#lemo2').html("");
          $('#passlog').css("outline", "none");
        }
      
  });
  }


function refresh(){
  $('#passchecker').css("display", "none");
      fname.value = "";
      lname.value = "";
      email.value = "";
      phone.value = "";
      dob.value = "";
      address.value = "";
      hobbies.value = "";
      password.value = "";
      repass.value = "";
      dcheck.checked = false;
      g1.checked = false;
      g2.checked = false;
      g3.checked = false;

      $('#demo1, #demo2, #demo3, #demo4, #demo5, #demo10, #demo6, #demo7, #demo8, #demo9, #demo10, #demo11').html("");
    $('#fname, #lname, #email, #phone, #dob, #address, #hobbies, #password, #repass, #dcheck').css("outline", "none");
    
}

function refresh2(){
  emaillog.value = "";
  passlog.value = "";

  $('#lemo1, #lemo2').html("");
  $('#emaillog, #passlog').css("outline", "none");
}