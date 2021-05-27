$(document).ready(function() {
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

    (function() {
        textFocus();
    })(jQuery);


    $(".form_control").focus(function() {
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

    $(".form_control").focusout(function() {
        if (!$(this).val()) {
            if ($(this).attr('type') === 'date') {
                return;
            }

            if (!$(this).siblings().hasClass("sit")) {
                $(this).siblings().addClass("sit")
                if ($(this).attr('placeholder')) {
                    $(this).removeAttr('placeholder');
                }
            }
        }
    })

    $(".pay-attitude-phone").keyup(function() {
        if ($(this).val()) {
            $(".transaction-pin-area").removeClass("hide")
        } else {
            $(".transaction-pin-area").addClass("hide")
        }
    })





    /* USSD modal */
    $("#handleUssdModal").click(function() {
        const ussdModalWrapper = $(".ussd-message-wrapper");
        const overlay = $(".overlay");
        // ussdModalWrapper.show();
        // overlay.show();
        ussdModalWrapper.removeClass("hide")
        overlay.removeClass("hide")
    });
});