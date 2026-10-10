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

formPendaftaran.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;
    
    function checkInput(id, errorId, pesan) {
        const input = document.getElementById(id);
        const errorElement = document.getElementById(errorId);
        if(input.value.trim() === "") {
            errorElement.textContent = pesan;
            isValid = false;
        } else {
            errorElement.textContent = "";
        }
    }

    checkInput("nama", "erorNama", "Nama harus diisi");
    checkInput("kelamin", "erorKelamin", "Jenis Kelamin harus dipilih");
    checkInput("nisn", "erorNisn", "NISN harus diisi");
    checkInput("email", "erorEmail", "Email harus diisi");
    checkInput("asalSekolah", "erorAsalSekolah", "Asal Sekolah harus diisi");
    checkInput("jurusan1", "erorJurusan1", "Pilihan 1 harus dipilih");
    checkInput("jurusan2", "erorJurusan2", "Pilihan 2 harus dipilih");  
    checkInput("jurusan3", "erorJurusan3", "Pilihan 3 harus dipilih");

    const jurusan1 = document.getElementById("jurusan1").value;
    const jurusan2 = document.getElementById("jurusan2").value;
    const jurusan3 = document.getElementById("jurusan3").value;

    const erorJurusan2 = document.getElementById("erorJurusan2");
    const erorJurusan3 = document.getElementById("erorJurusan3");

    if (jurusan2 !== "") erorJurusan2.textContent = "";
    if (jurusan3 !== "") erorJurusan3.textContent = "";

    if (jurusan2 !== "" && jurusan2 === jurusan1) {
        erorJurusan2.textContent = "Pilihan 2 tidak boleh sama dengan Pilihan 1";
        isValid = false;
    }

    if (jurusan3 !== "") {
        if (jurusan3 === jurusan1) {
            erorJurusan3.textContent = "Pilihan 3 tidak boleh sama dengan Pilihan 1";
            isValid = false;
        } else if (jurusan3 === jurusan2) {
            erorJurusan3.textContent = "Pilihan 3 tidak boleh sama dengan Pilihan 2";
            isValid = false;
        }
    }
    
    if(isValid) {
        alert("Pendaftaran berhasil");
        formPendaftaran.reset();
    }   
});
