function calculateAge(birthdate) {
      const birthDate = new Date(birthdate);
      const today = new Date();

      const diffTime = Math.abs(today - birthDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const days = diffDays % 365;

      return `${years} Tahun ${days} Hari`;
    }

    function getCurrentTime() {
      const now = new Date();
      const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
      const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

      const dayOfWeek = daysOfWeek[now.getDay()];
      const day = now.getDate();
      const month = months[now.getMonth()];
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const milliseconds = now.getMilliseconds();

      const formattedTime = `${dayOfWeek}, ${day} - ${month} - ${year}`;
      const digitalClock = `<span id="hour">${hours}</span>:
                           <span id="minutes">${minutes}</span>:
                           <span id="seconds">${seconds}</span>.
                           <span id="milliseconds">${milliseconds}</span>`;

      document.getElementById('date').textContent = formattedTime;
      document.getElementById('digitalClock').innerHTML = digitalClock;

      return formattedTime;
    }

    function updateCurrentTime() {
      getCurrentTime();
    }

    function updateStopwatch() {
      const stopwatchSpan = document.getElementById('stopwatchSpan');
      let milliseconds = 0;

      setInterval(() => {
        milliseconds++;
        stopwatchSpan.textContent = `: ${Math.floor(milliseconds / 100)}.${milliseconds % 100}`;
      }, 10);
    }

    try {
      document.getElementById('ageMe').textContent = calculateAge('2007-10-30');
      document.getElementById('ageShe').textContent = calculateAge('2007-11-25');
      updateCurrentTime();
      updateStopwatch();

      setInterval(updateCurrentTime, 1);
    } catch (error) {
      console.error('Error:', error);
    }



function hitungSelisihTanggal(tanggal1, tanggal2) {
  var tahun1 = tanggal1.getFullYear();
  var tahun2 = tanggal2.getFullYear();
  var selisihTahun = tahun2 - tahun1;

  var tanggalAwalTahun1 = new Date(tanggal1);
  tanggalAwalTahun1.setFullYear(tahun1);
  var tanggalAwalTahun2 = new Date(tanggal2);
  tanggalAwalTahun2.setFullYear(tahun2);

  var selisihHari = Math.floor((tanggalAwalTahun2 - tanggalAwalTahun1) / (1000 * 60 * 60 * 24));
  var sisaHari = selisihHari - (selisihTahun * 365 + hitungHariKabisat(tahun1, tahun2));

  return { tahun: selisihTahun, hari: sisaHari };
}

function hitungHariKabisat(tahun1, tahun2) {
  var jumlahHariKabisat = 0;
  for (var tahun = tahun1; tahun <= tahun2; tahun++) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
      jumlahHariKabisat++;
    }
  }
  return jumlahHariKabisat;
}

function updateAge() {
  var tanggalLahirMe = new Date('November 3, 2007');
  var tanggalLahirShe = new Date('November 29, 2007');
  var tanggalSekarang = new Date();

  var selisihTanggalMe = hitungSelisihTanggal(tanggalLahirMe, tanggalSekarang);
  var selisihTanggalShe = hitungSelisihTanggal(tanggalLahirShe, tanggalSekarang);

  document.getElementById('ageMe').innerHTML = selisihTanggalMe.tahun + ' Tahun ' + selisihTanggalMe.hari + ' Hari';
  document.getElementById('ageShe').innerHTML = selisihTanggalShe.tahun + ' Tahun ' + selisihTanggalShe.hari + ' Hari';
}

// Panggil fungsi saat halaman dimuat
updateAge();

// Fungsi untuk mengupdate setiap hari
setInterval(updateAge, 86400000); // 86400000 milidetik = 1 hari
