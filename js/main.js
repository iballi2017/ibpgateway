
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