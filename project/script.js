document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nama = form.nama.value.trim();
        const email = form.email.value.trim();
        const pesan = form.pesan.value.trim();
  
        if (!nama || !email || !pesan) {
          alert("Harap isi semua kolom form.");
          return;
        }
  
        alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim.`);
        form.reset();
      });
    }
  });