const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    const noPendaf = document.getElementById("noPendaftaran");
    const kode = document.getElementById("kode");
    const erorNoPendaf = document.getElementById("erorNoPendaftaran");
    const erorKode = document.getElementById("erorKode");

    erorNoPendaf.textContent = "";
    erorKode.textContent = "";
    if(noPendaf.value.trim() === "") {
        erorNoPendaf.textContent = "No Pendaftaran harus diisi";
        isValid = false;
    }

    if(kode.value.trim() === "") {
        erorKode.textContent = "Kode harus diisi";
        isValid = false;
    }

    if(isValid) {
        alert("Login berhasil");
        window.location.href = "../code/indeks.html";
    }
});