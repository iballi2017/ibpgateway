// JQuery block

$(document).ready(function () {


  function textFocus() {
    if (!$(".form_control").val()) {
      if (!$(".form_control").siblings().hasClass("sit")) {
        $(".form_control").siblings().addClass("sit")
      }
    }
    if ($(".form_control").val()) {
      if ($(".form_control").siblings().hasClass("sit")) {
        $(".form_control").siblings().removeClass("sit")
      }
    }
  }


  (function () {
    textFocus();
  }
  )(jQuery);


  $(".form_control").focus(function () {
    // console.log($(this).siblings())
    if ($(this).siblings().hasClass("sit")) {
      if ($(this).siblings("label").hasClass("valid-till")) {
        $(this).attr('placeholder', "00/00");
      }
      if ($(this).siblings("label").hasClass("dob")) {
        $(this).attr('placeholder', "DD/MM/YYYY");
      }
      // console.log($(this).siblings("label"))
      $(this).siblings().removeClass("sit")
    }
  })
  $(".form_control").focusout(function () {
    // console.log($(this).siblings())
    if (!$(this).val()) {
      if (!$(this).siblings().hasClass("sit")) {
        $(this).siblings().addClass("sit")
        if ($(this).attr('placeholder')) {
          $(this).removeAttr('placeholder');
        }
      }
    }
  })


  $(".pay-attitude-phone").keyup(function () {
    if ($(this).val()) {
      $(".transaction-pin-area").removeClass("hide")
    } else {
      $(".transaction-pin-area").addClass("hide")
    }
  })

});

function greet() {
  window.alert("Page will not refresh!")
}

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

