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
const form_new = document.getElementById('form-new-student');
const importation = document.getElementById('importation');
tab_add.addEventListener('click', function (){
    form_new.style.display = "flex";
    importation.style.display = "none";
    tab_add.classList.add('modal-tab-element-active');
    tab_import.classList.remove('modal-tab-element-active');
});
tab_import.addEventListener('click', function (){
    form_new.style.display = "none";
    importation.style.display = "block";
    tab_add.classList.remove('modal-tab-element-active');
    tab_import.classList.add('modal-tab-element-active');
});

