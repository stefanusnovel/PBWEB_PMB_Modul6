const daftarProdi = [
    {
        fakultas: "Keguruan dan Ilmu Pendidikan",
        prodi: [
            "Pendidikan Guru Sekolah Dasar","Bimbingan dan Konseling","Pendidikan Bahasa Inggris","Pendidikan Bahasa, Sastra Indonesia & Daerah"
            , "Pendidikan Sejarah","Pendidikan Ekonomi","Pendidikan Akuntansi","Pendidikan Matematika","Pendidikan Fisika","Pendidikan Biologi",
            "Pendidikan Agama Katolik"
        ]
    },
    {
        fakultas : "Ekonomi",
        prodi : ["Akuntansi","Manajemen"]
    },
    {
        fakultas : "Sains dan Teknologi",
        prodi : ["Teknik Elektro","Teknik Mesin","Informatika","Matematika"]
    },
    {
        fakultas : "Farmasi",
        prodi : ["Farmasi"]
    },
    {
        fakultas : "Psikologi",
        prodi : [
            "Psikologi"
        ]
    }
];

const selectProdiElemen = document.querySelectorAll(".select-prodi");

selectProdiElemen.forEach(select => {
    daftarProdi.forEach((group) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = group.fakultas;

        group.prodi.forEach((namaProdi) => {
            const option = document.createElement("option");
            option.value = namaProdi;
            option.textContent = namaProdi;
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
    });
});

const formPendaftaran = document.getElementById("form-pendaftaran");

// Fungsi menampilkan pesan ke DOM
function validasiField(input, errorElement) {
    if (!input.checkValidity()) {
        errorElement.textContent = input.validationMessage;
    } else {
        errorElement.textContent = "";
    }
}

// Konfigurasi aturan setiap field
const rules = [
    { id: "nama", errId: "erorNama", msgEmpty: "Nama harus diisi", msgInvalid: "Nama minimal 3 karakter" },
    { id: "kelamin", errId: "erorKelamin", msgEmpty: "Jenis Kelamin harus dipilih" },
    { id: "nisn", errId: "erorNisn", msgEmpty: "NISN harus diisi", msgInvalid: "NISN harus berupa angka 10 digit" },
    { id: "email", errId: "erorEmail", msgEmpty: "Email harus diisi", msgInvalid: "Format email tidak valid" },
    { id: "asalSekolah", errId: "erorAsalSekolah", msgEmpty: "Asal Sekolah harus diisi" },
    { id: "jurusan1", errId: "erorJurusan1", msgEmpty: "Pilihan 1 harus dipilih" },
    { id: "jurusan2", errId: "erorJurusan2", msgEmpty: "Pilihan 2 harus dipilih" },
    { id: "jurusan3", errId: "erorJurusan3", msgEmpty: "Pilihan 3 harus dipilih" }
];

// Menerapkan event listener input dinamis ke semua field
rules.forEach(rule => {
    const input = document.getElementById(rule.id);
    const errObj = document.getElementById(rule.errId);

    input.addEventListener("input", () => {
        if (input.validity.valueMissing) {
            input.setCustomValidity(rule.msgEmpty);
        } else if (input.validity.typeMismatch || input.validity.tooShort || input.validity.patternMismatch) {
            input.setCustomValidity(rule.msgInvalid || "Format tidak valid");
        } else {
            input.setCustomValidity("");
        }

        if (rule.id.includes("jurusan")) {
            const j1 = document.getElementById("jurusan1");
            const j2 = document.getElementById("jurusan2");
            const j3 = document.getElementById("jurusan3");

            if(j2.value && j2.value === j1.value) {
                j2.setCustomValidity("Pilihan 2 tidak boleh sama dengan Pilihan 1");
            } else if (!j2.validity.valueMissing) {
                j2.setCustomValidity("");
            }

            if(j3.value && j3.value === j1.value) {
                j3.setCustomValidity("Pilihan 3 tidak boleh sama dengan Pilihan 1");
            } else if(j3.value && j3.value === j2.value) {
                j3.setCustomValidity("Pilihan 3 tidak boleh sama dengan Pilihan 2");
            } else if (!j3.validity.valueMissing) {
                j3.setCustomValidity("");
            }
            
            validasiField(j1, document.getElementById("erorJurusan1"));
            validasiField(j2, document.getElementById("erorJurusan2"));
            validasiField(j3, document.getElementById("erorJurusan3"));
        } else {
            validasiField(input, errObj);
        }
    });
});

formPendaftaran.addEventListener("submit", function(event) {
    event.preventDefault();

    rules.forEach(rule => {
        document.getElementById(rule.id).dispatchEvent(new Event("input"));
    });

    if(formPendaftaran.checkValidity()) {
        alert("Pendaftaran berhasil");
        formPendaftaran.reset();
        
        rules.forEach(rule => {
            document.getElementById(rule.errId).textContent = "";
        });
    }   
});
