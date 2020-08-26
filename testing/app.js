
$(document).ready(function () {
    // alert("jlgjglgu")


    function textFocus(){
        if (!$(".form_control").val()) {
            if (!$(".form_control").siblings().hasClass("sit")) {
                $(".form_control").siblings().addClass("sit")
                // if ($(".form_control").attr('placeholder')) {
                //     $(".form_control").removeAttr('placeholder');
                // }
            }
        }
        if ($(".form_control").val()) {
            if ($(".form_control").siblings().hasClass("sit")) {
                $(".form_control").siblings().removeClass("sit")
            }
        }
        // console.log("bnbb")
        // console.log("hello")
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

        console.log($(this).val())
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
})