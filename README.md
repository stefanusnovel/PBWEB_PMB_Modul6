# Identitas 
Nama : Stefanus Novelino Kurniawan
NIM  : 255314032

# Latihan Soal Evaluasi Mandiri

1. Jelaskan mangapa validasi client-side tidak boleh menjadi satu-satunya lapisan validasi pada aplikasi web
Jawab : Validasi client-side dilakukan di browser (menggunakan HTML5 atau JavaScript), sehingga sangat mudah dilewati jika pengguna mematikan eksekusi JavaScript pada browser mereka, atau jika mereka mengirimkan HTTP request secara langsung ke server (misalnya menggunakan Postman atau skrip otomatis). Oleh karena itu, validasi di sisi server (server-side) mutlak diperlukan pada aplikasi nyata sebagai benteng keamanan terakhir yang tidak bisa dimanipulasi dari luar.

2. Sebutkan minimal tiga atribut validasi bawaan HTML5 beserta fungsinya masing-masing
Jawab : a. required : Menetapkan bahwa suatu field wajib diisi (tidak boleh kosong) sebelum form dapat dikirim
b. type : Memicu validasi format spesifik dari bawaan browser, misalnya type email mengharuskan adanya simbol "@" atau number hanya menerima angka
c. minlength / maxlangth : Membatasi jumlah karakter minimum atau maksimum yang boleh diketikkan oleh pengguna
d. pattern : Memaksa input pengguna untuk cocok dengan pola terterntu
e. min/max : Menetapkan batas nilai angka atau tanggal minimum dan maksimum

3. Jelaskan perbedaan antara input.checkValidity() dan input.reportValidity()
Jawab : a. input.checkValidity() : Mengecek status validasi secara silent di latar belakang dan hanya mengembalikan nilai boolean (true jika valid, false jika tidak valid).Metode ini tidak memunculkan notifikasi apapun ke layar pengguna

b. input.reportValidity() : Melakukan pengecekan validalitas dan secara otomatis menampilkan tooltip dan balon pesan bawaan browser dilayar pengguna jika input tersebut tidak valid, lalu mengembalikan nilai boolean

4. Apa fungsi setCustomValidity("") (string kosong), dan mengapa penting memanggilnya kembali setelah error diperbaiki?
Jawab : Fungsi setCustomValidity("") dengan parameter string kosong adalah untuk menghapus pesan error kustom yang sebelumnya diterapkan, sehingga elemen tersebut kembali dianggap valid oleh browser. Memanggil string kosong ini sangat penting karena jika pesan error kustom tidak di-reset, elemen tersebut akan terus terkunci dalam status invalid (form tidak akan bisa disubmit), meskipun pengguna sudah mengetikkan data yang benar.

5. Rancang aturan validasi (beserta pseudocode) agar field "Tanggal Lahir" tidak boleh berada dimasa depan
Jawab : a. Sistem mengambil tanggal yang baru saja dimasukkan oleh pengguna
b. Sistem mengambil tanggal hari ini, dan jam hari ini direset ke 00.00
c. Mengecek apakah tanggal yang dimasukan ternyata lebih dari tanggal hari ini, memunculkan pesan eror
d. Tapi kalau tanggalnya sudah benar, sistem akan menghapus pesan error tersebut supaya form dianggap valid dan bisa dikirim