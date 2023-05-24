// operator (tambah +, kurang -, kali *, bagi /)

// jangan pakai pemisah apapun pas masukkin angka yang ribuan (ex: harga, tahun, dll)
// pemisah hanya digunakan untuk memudahkan manusia membaca saja yagesya
var gaji = 5000000;
var bulan = 12;
var lembur = 250000;

// operasi penambahan
console.log((gaji + lembur).toLocaleString()) // -> kalau dikosongin, ini pakai format Amerika

// operasi pengurangan
console.log(gaji - lembur)

// operasi perkalian
var total = gaji * bulan;
console.log(total.toLocaleString('id-ID')) // -> kalau mau pakai format Indonesia, tambahin id-ID pada tanda kurung toLocaleString

// toLocaleString() -> mengganti tulisan angka yg ribet jadi lebih gampang dipahami manusia

// operasi pembagian
pembulatan = Math.round(gaji / bulan) // -> cara pembulatan
console.log(pembulatan.toString())

// shortcut copy paste gece abis di VS CODE:S
/* 
Blok baris yg mau dicopy (ga usah semua kalimat full, yg penting barisnya ke copy), trus pencet shift + alt + tanda bawah/ atas (sesuai kebutuhan copynya mau dimana)
*/

