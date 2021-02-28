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
const optionContent = document.querySelectorAll(".option-content .tab_content");


window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    if (event.target.readyState === "complete") {
        for (let i = 0; i < payItemTab.length; i++) {
            /* toggle title based on the number of available payment options */
            if(payItemTab.length===1){
                const dynText = document.querySelector(".dynText");
                if(!dynText.classList.contains("hide")){
                    dynText.classList.add("hide");
                }
            }
            /* */
            if (!payItemTab[0].classList.contains("active")) {
                payItemTab[0].classList.add("active");
                /* CONTENT */
                /* Looping through the content area */
                for (let y = 0; y < optionContent.length; y++) {
                    let contentId = optionContent[y].getAttribute("id");
                    if (contentId === payItemTab[0].lastElementChild.value) {
                        optionContent[y].classList.remove("hide");
                    }
                }
                /* */
            }
            if (payItemTab[i].classList.contains("active")) {
                payItemTab[i].firstElementChild.classList.add("shadow");
            }
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


            /* CONTENT */
            /* Looping through the content area */
            for (let x = 0; x < optionContent.length; x++) {
                let contentId = optionContent[x].getAttribute("id");
                if (contentId === arg.lastElementChild.value) {
                    optionContent[x].classList.remove("hide");
                    for (let siblings of optionContent[x].parentNode.children) {
                        if (siblings != optionContent[x]) {
                            siblings.classList.add("hide")
                        }
                    }
                }
            }
            /* */
        }
        else {
            sibling.classList.remove("active");
        }
    }
}

/* sucess message */
function handleSuccessModal() {
    const successMessageWrapper = document.querySelector(".success-message-wrapper");
    const overlay = document.querySelector(".overlay");
    if (successMessageWrapper.classList.contains("hide") && overlay.classList.contains("hide")) {
        successMessageWrapper.classList.remove("hide")
        overlay.classList.remove("hide")
    }
    setTimeout(() => {
        const ring = document.querySelector(".ring");
        if (ring.classList.contains("hide")) {
            ring.classList.remove("hide")
        }
    }, 800)
}