const waktu = document.getElementById('waktu');

function hitungMundur() {
  const tanggalSekarang = new Date();
  const tahunBaru = new Date(`Januari 1, ${tanggalSekarang.getFullYear() + 1} 00:00:00`);

  const selisihWaktu = tahunBaru.getTime() - tanggalSekarang.getTime();
  const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

  waktu.innerText = `${hari} hari, ${jam} jam, ${menit} menit, ${detik} detik`;
}

setInterval(hitungMundur, 1000);
hitungMundur();