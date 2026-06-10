# kelompok-7-kelas-F-sistem-informasi# Skenario Test Case
*Project:* Sistem Informasi Promosi Villa Parfum Berbasis Web  
*Kelas:* F Sistem Informasi  
*Kelompok:* 7  
*Anggota:* M. Defa Alpajri, Redo Ahmad Naufal, Ridel Saputra  
 
---
 
## 1. POSITIVE TEST CASE
 
---
 
### TC-VILLA-001
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-001 |
| *Title* | Login admin berhasil dengan data valid |
| *Objective* | Memastikan admin dapat login ke sistem dengan kredensial yang benar |
| *Precondition* | Admin sudah terdaftar di database, halaman login dapat diakses |
| *Test Data* | Username: admin, Password: admin123 |
| *Steps* | 1. Buka halaman login admin <br> 2. Masukkan username dan password yang valid <br> 3. Klik tombol "Login" |
| *Expected Result* | Sistem menampilkan halaman dashboard admin |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-002
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-002 |
| *Title* | Menampilkan daftar villa parfum dengan sukses |
| *Objective* | Memastikan halaman katalog menampilkan semua data villa yang tersedia |
| *Precondition* | Data villa sudah tersimpan di database, user mengakses halaman katalog |
| *Test Data* | Data villa: nama, foto, harga, deskripsi tersedia di database |
| *Steps* | 1. Buka halaman utama website <br> 2. Klik menu "Katalog Villa" <br> 3. Lihat daftar villa yang tampil |
| *Expected Result* | Sistem menampilkan daftar villa parfum beserta foto, nama, harga, dan deskripsi |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-003
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-003 |
| *Title* | Admin berhasil menambahkan data villa baru |
| *Objective* | Memastikan admin dapat menambahkan informasi villa baru ke sistem |
| *Precondition* | Admin sudah login, halaman tambah villa dapat diakses |
| *Test Data* | Nama Villa: "Villa Lavender", Harga: Rp500.000/malam, Kapasitas: 4 orang, Foto: villa.jpg |
| *Steps* | 1. Login sebagai admin <br> 2. Klik menu "Kelola Villa" <br> 3. Klik tombol "Tambah Villa" <br> 4. Isi semua field dengan data valid <br> 5. Klik tombol "Simpan" |
| *Expected Result* | Data villa baru berhasil tersimpan dan muncul di halaman katalog |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-004
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-004 |
| *Title* | Pengunjung berhasil melakukan pemesanan villa |
| *Objective* | Memastikan pengunjung dapat memesan villa melalui form pemesanan |
| *Precondition* | Villa tersedia, form pemesanan dapat diakses |
| *Test Data* | Nama: Budi Santoso, No. HP: 08123456789, Check-in: 20-06-2026, Check-out: 22-06-2026 |
| *Steps* | 1. Buka halaman detail villa <br> 2. Klik tombol "Pesan Sekarang" <br> 3. Isi form pemesanan dengan data lengkap <br> 4. Klik tombol "Konfirmasi Pemesanan" |
| *Expected Result* | Sistem menyimpan data pemesanan dan menampilkan pesan konfirmasi pemesanan berhasil |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-005
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-005 |
| *Title* | Fitur pencarian villa berhasil menemukan hasil yang sesuai |
| *Objective* | Memastikan fitur pencarian dapat menemukan villa berdasarkan kata kunci |
| *Precondition* | Data villa tersedia di database, halaman pencarian dapat diakses |
| *Test Data* | Kata kunci pencarian: "Lavender" |
| *Steps* | 1. Buka halaman utama website <br> 2. Ketik "Lavender" pada kolom pencarian <br> 3. Klik tombol "Cari" |
| *Expected Result* | Sistem menampilkan villa yang mengandung kata "Lavender" pada nama atau deskripsinya |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
## 2. NEGATIVE TEST CASE
 
---
 
### TC-VILLA-006
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-006 |
| *Title* | Login admin gagal dengan password salah |
| *Objective* | Memastikan sistem menolak login dengan kredensial yang tidak valid |
| *Precondition* | Halaman login dapat diakses |
| *Test Data* | Username: admin, Password: salah999 |
| *Steps* | 1. Buka halaman login admin <br> 2. Masukkan username yang benar dan password yang salah <br> 3. Klik tombol "Login" |
| *Expected Result* | Sistem menampilkan pesan error "Username atau Password salah" dan tidak membuka dashboard |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-007
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-007 |
| *Title* | Form pemesanan gagal dikirim jika field kosong |
| *Objective* | Memastikan sistem memvalidasi field wajib pada form pemesanan |
| *Precondition* | Halaman form pemesanan dapat diakses |
| *Test Data* | Nama: (kosong), No. HP: (kosong), Tanggal: (kosong) |
| *Steps* | 1. Buka halaman form pemesanan villa <br> 2. Biarkan semua field kosong <br> 3. Klik tombol "Konfirmasi Pemesanan" |
| *Expected Result* | Sistem menampilkan pesan validasi "Field tidak boleh kosong" dan form tidak terkirim |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-008
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-008 |
| *Title* | Admin gagal menambah villa tanpa foto |
| *Objective* | Memastikan sistem memvalidasi bahwa foto wajib diupload saat tambah villa |
| *Precondition* | Admin sudah login, halaman tambah villa dapat diakses |
| *Test Data* | Nama Villa: "Villa Rose", Harga: Rp400.000, Foto: (tidak diupload) |
| *Steps* | 1. Login sebagai admin <br> 2. Klik "Tambah Villa" <br> 3. Isi nama dan harga, tapi tidak upload foto <br> 4. Klik tombol "Simpan" |
| *Expected Result* | Sistem menampilkan pesan "Foto villa wajib diupload" dan data tidak tersimpan |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-009
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-009 |
| *Title* | Pencarian villa tidak menemukan hasil |
| *Objective* | Memastikan sistem menampilkan pesan yang sesuai jika hasil pencarian kosong |
| *Precondition* | Halaman pencarian dapat diakses |
| *Test Data* | Kata kunci: "VillaXYZTidakAda" |
| *Steps* | 1. Buka halaman utama website <br> 2. Ketik kata kunci yang tidak ada di database <br> 3. Klik tombol "Cari" |
| *Expected Result* | Sistem menampilkan pesan "Villa tidak ditemukan" atau "Hasil pencarian kosong" |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-010
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-010 |
| *Title* | Input nomor HP dengan format tidak valid pada form pemesanan |
| *Objective* | Memastikan sistem memvalidasi format nomor HP yang dimasukkan |
| *Precondition* | Halaman form pemesanan dapat diakses |
| *Test Data* | Nama: Andi, No. HP: "abcdefgh", Tanggal: 20-06-2026 |
| *Steps* | 1. Buka halaman form pemesanan <br> 2. Isi nama dengan benar <br> 3. Masukkan nomor HP berupa huruf: "abcdefgh" <br> 4. Klik "Konfirmasi Pemesanan" |
| *Expected Result* | Sistem menampilkan pesan "Format nomor HP tidak valid" dan form tidak terkirim |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
## 3. EDGE CASE TEST CASE
 
---
 
### TC-VILLA-011
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-011 |
| *Title* | Upload foto villa dengan ukuran file sangat besar (>10MB) |
| *Objective* | Memastikan sistem menangani upload file yang melebihi batas ukuran |
| *Precondition* | Admin sudah login, halaman tambah villa dapat diakses |
| *Test Data* | File foto: gambar.jpg berukuran 15MB |
| *Steps* | 1. Login sebagai admin <br> 2. Klik "Tambah Villa" <br> 3. Isi semua field <br> 4. Upload foto berukuran 15MB <br> 5. Klik "Simpan" |
| *Expected Result* | Sistem menampilkan pesan "Ukuran file terlalu besar, maksimal 10MB" dan upload ditolak |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-012
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-012 |
| *Title* | Tanggal check-out lebih awal dari tanggal check-in |
| *Objective* | Memastikan sistem memvalidasi logika tanggal pemesanan |
| *Precondition* | Halaman form pemesanan dapat diakses |
| *Test Data* | Check-in: 25-06-2026, Check-out: 23-06-2026 |
| *Steps* | 1. Buka halaman form pemesanan <br> 2. Isi data diri dengan benar <br> 3. Pilih tanggal check-in: 25-06-2026 <br> 4. Pilih tanggal check-out: 23-06-2026 (lebih awal) <br> 5. Klik "Konfirmasi Pemesanan" |
| *Expected Result* | Sistem menampilkan pesan "Tanggal check-out harus setelah tanggal check-in" |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-013
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-013 |
| *Title* | Input nama villa dengan karakter spesial dan simbol |
| *Objective* | Memastikan sistem menangani input nama villa yang mengandung karakter tidak biasa |
| *Precondition* | Admin sudah login, halaman tambah villa dapat diakses |
| *Test Data* | Nama Villa: "@#Villa$$%^&*!!" |
| *Steps* | 1. Login sebagai admin <br> 2. Klik "Tambah Villa" <br> 3. Masukkan nama villa: "@#Villa$$%^&*!!" <br> 4. Isi field lainnya secara normal <br> 5. Klik "Simpan" |
| *Expected Result* | Sistem menampilkan pesan validasi "Nama villa tidak boleh mengandung karakter spesial" atau menolak input |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-014
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-014 |
| *Title* | Pemesanan villa pada tanggal yang sudah dipesan (double booking) |
| *Objective* | Memastikan sistem mencegah pemesanan ganda pada tanggal yang sama |
| *Precondition* | Villa sudah dipesan pada tanggal 20-06-2026 s/d 22-06-2026 |
| *Test Data* | Check-in: 21-06-2026, Check-out: 23-06-2026 (tanggal bertabrakan) |
| *Steps* | 1. Buka halaman pemesanan villa yang sudah terpesan <br> 2. Isi form dengan tanggal yang bertabrakan <br> 3. Klik "Konfirmasi Pemesanan" |
| *Expected Result* | Sistem menampilkan pesan "Villa tidak tersedia pada tanggal yang dipilih" dan pemesanan dibatalkan |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
### TC-VILLA-015
| Field | Description |
|---|---|
| *Test Case ID* | TC-VILLA-015 |
| *Title* | Login admin dengan username sangat panjang (lebih dari 255 karakter) |
| *Objective* | Memastikan sistem menangani input username yang melebihi batas karakter |
| *Precondition* | Halaman login dapat diakses |
| *Test Data* | Username: "aaaa...aaaa" (300 karakter), Password: admin123 |
| *Steps* | 1. Buka halaman login admin <br> 2. Paste username sepanjang 300 karakter <br> 3. Masukkan password <br> 4. Klik tombol "Login" |
| *Expected Result* | Sistem menampilkan pesan "Username terlalu panjang" atau membatasi input secara otomatis |
| *Actual Result* | (Diisi setelah pengujian) |
| *Status (Pass/Fail)* | (Diisi setelah pengujian) |
| *Remarks/Notes* | - |
 
---
 
Dokumen ini dibuat sebagai bagian dari tugas PJBL mata kuliah Sistem Informasi.  
*Tanggal Pembuatan: 10 Juni 2026
