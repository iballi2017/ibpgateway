// JQuery block

$(document).ready(function () {

  // $(".form_control").focus(function () {
  //   // console.log($(this).siblings())
  //   if ($(this).siblings().hasClass("sit")) {
  //     if ($(this).siblings("label").hasClass("valid-till")) {
  //       $(this).attr('placeholder', "00/00");
  //     }
  //     console.log($(this).siblings("label"))
  //     $(this).siblings().removeClass("sit")
  //   }
  // })
  // $(".form_control").focusout(function () {
  //   // console.log($(this).siblings())
  //   if (!$(this).siblings().hasClass("sit")) {
  //     $(this).siblings().addClass("sit")
  //     if ($(this).attr('placeholder')) {
  //       $(this).removeAttr('placeholder');
  //     }
  //   }
  // })
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

