const formLogin = document.getElementById("form-login");
const noPendaf = document.getElementById("noPendaftaran");
const kode = document.getElementById("kode");
const erorNoPendaf = document.getElementById("erorNoPendaftaran");
const erorKode = document.getElementById("erorKode");

function validasiField(input, errorElement) {
    if (!input.checkValidity()) {
        errorElement.textContent = input.validationMessage;
    } else {
        errorElement.textContent = "";
    }
}

noPendaf.addEventListener("input", () => {
    if (noPendaf.validity.valueMissing) {
        noPendaf.setCustomValidity("No Pendaftaran harus diisi");
    } else {
        noPendaf.setCustomValidity("");
    }
    validasiField(noPendaf, erorNoPendaf);
});

kode.addEventListener("input", () => {
    if (kode.validity.valueMissing) {
        kode.setCustomValidity("Kode harus diisi");
    } else if (kode.validity.tooShort) {
        kode.setCustomValidity("Kode minimal 4 karakter");
    } else {
        kode.setCustomValidity(""); 
    }
    validasiField(kode, erorKode);
});

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    
    validasiField(noPendaf, erorNoPendaf);
    validasiField(kode, erorKode);

    if(formLogin.checkValidity()) {
        alert("Login berhasil");
        window.location.href = "../code/indeks.html";
    }
});