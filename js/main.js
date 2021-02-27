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
    })(jQuery);


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



// VANILLA Javascript block
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



/* trigers tab active */

const payItemTab = document.querySelectorAll(".pay-item");
const payDefaultRadio = document.querySelectorAll(".pay-default-radio");


window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    if (event.target.readyState === "complete") {
        for (let i = 0; i < payItemTab.length; i++) {
            payItemTab[i].addEventListener("click", () => triggerActive(payItemTab[i]));

        }
    }
});




const triggerActive = (arg) => {
    for (let sibling of arg.parentNode.children) {
        if (sibling === arg) {
            sibling.classList.add("active");
            sibling.firstElementChild.nextElementSibling.setAttribute('checked', true);
            if (sibling.classList.contains("active")) {
                if (!sibling.firstElementChild.classList.contains("shadow")) {
                    sibling.firstElementChild.classList.add("shadow");
                    for (let siblings of sibling.parentNode.children) {
                        if (siblings != sibling) {
                            if (siblings.firstElementChild.classList.contains("shadow")) {
                                siblings.firstElementChild.classList.remove("shadow");
                            }

                        }
                    }
                }
            }


            /* content */
            const optionContent = document.querySelectorAll(".option-content .tab_content");
            for (let x = 0; x < optionContent.length; x++) {
                // console.log(optionContent[x].getAttribute("id"))
                let contentId = optionContent[x].getAttribute("id");
                if (contentId === arg.lastElementChild.value) {
                    optionContent[x].classList.remove("hide");
                    // console.log(optionContent[x].parentNode.children);
                    for (let siblings of optionContent[x].parentNode.children) {
                        // console.log(siblings)
                        if (siblings != optionContent[x]) {
                            siblings.classList.add("hide")
                        }
                    }
                }
            }
        }
        else {
            sibling.classList.remove("active");
        }
    }
}

