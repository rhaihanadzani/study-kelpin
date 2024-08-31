const z = 10;
const y = 15;
const x = z * y;
console.log(x);

// =================================================================================================================
// belajar tipe data
// string
const nama = "calvin ramadhan";
console.log(nama);

const kelas = "kelas 1 sma";
console.log(kelas);

// number
const umur = 16;
const umur2 = 20;

const angka1 = 10;
const angka2 = "calvin ramadhan";
const total = angka1 + angka2;
console.log(total);

// boolean
const benar = true;
const salah = false;
const contoh = "1" === 1;
console.log(contoh);

// array
const angka = [1, 2, 3, 4, 5];
const buah = ["mangga", "pisang", "semangka"];
console.log(buah[0]);
const buah1 = "pepaya";
const tambahbuah = buah.concat(buah1);
console.log(tambahbuah);
const lihat_array = tambahbuah.length;
console.log(lihat_array);

// object
const data = {
  nama: "calvin ramadhan",
  umur: 16,
  kelas: "kelas 1 sma",
};
console.log(data.umur);

// study kasus
const namamhs = [
  {
    nama: "calvin ramadhan",
    umur: 16,
    kelas: "kelas 1 sma",
  },
  { nama: "syahrul ramadhan", umur: 16, kelas: "kelas 1 sma" },
  { nama: "akbar ramadhan", umur: 16, kelas: "kelas 1 sma" },
];
console.log(namamhs);
const mhs = namamhs.map((m, i) => i + 1);
console.log(mhs);
