// JQuery block

$(document).ready(function () {
  // alert("hello world!");


  // console.log($(".otp-digit"));
  // var otpDigit = $(".otp-digit");
  // otpDigit.forEach(element => {
  //   console.log(element)
  // });

  // $('body').keydown(function (e) {
  //   console.log('keyup called');
  //   var code = e.keyCode || e.which;
  //   if (code == '9') {
  //     alert('Tab pressed');
  //   }
  // });



});






// Vanilla Javascript block

// back history
function goBack() {
  window.history.back();
}


// Copy to clipboard
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("bankCode");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}


// var otpDigit = document.querySelectorAll(".otp-digit")
// console.log(otpDigit)

