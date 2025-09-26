// Toggle menu mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Prompt nama saat pertama kali masuk
window.onload = function () {
  let nama = "";

  // Ulangi sampai user isi nama (tidak kosong)
  while (!nama || nama.trim() === "") {
    nama = prompt("Selamat datang, silakan isi nama anda:", "");
    if (nama === null) {
      alert("Form dibatalkan.");
      return; // hentikan script jika Cancel ditekan
    }
    if (nama.trim() === "") {
      alert("Nama tidak boleh kosong. Silakan isi form!");
    }
  }

  // Kalau lolos validasi, tampilkan di halaman
  const welcomeText = document.getElementById("welcome-text");
  welcomeText.textContent = `Hi ${nama}, Welcome To DikaTECH`;
};

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // ambil data form
  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const pesan = document.getElementById("pesan").value;

  // tampilkan di output
  document.getElementById("currentTime").textContent = new Date().toString();
  document.getElementById("outNama").textContent = nama;
  document.getElementById("outTanggal").textContent = tanggal;
  document.getElementById("outGender").textContent = gender;
  document.getElementById("outPesan").textContent = pesan;
});

