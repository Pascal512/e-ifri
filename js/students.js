var modal = document.getElementById("myModal");
var btn = document.getElementById("btn-add-student");
btn.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function preventEnterSubmit(event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
}
var formNewStudent = document.getElementById('form-new-student');
formNewStudent.addEventListener('keydown', preventEnterSubmit);

const tab_add = document.getElementById('tab-add-student');
const tab_import = document.getElementById('tab-import-student');
