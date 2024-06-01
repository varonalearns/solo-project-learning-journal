const hideEl = document.querySelectorAll(".hide");
const vmBtnEl = document.getElementById("vm-btn");

function unhide() {
    vmBtnEl.style.display = "none";
    hideEl.forEach( (element) => element.style.display = "block" );
}