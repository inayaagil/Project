function hitung() {
    let bil1 = parseFloat(document.getElementById("bil1").value);
    let bil2 = parseFloat(document.getElementById("bil2").value);
    let operator = document.getElementById("operator").value;
    let hasil = 0;
  
    if (isNaN(bil1) || isNaN(bil2)) {
      alert("Masukkan angka yang valid!");
      return;
    }
  
    switch (operator) {
      case "tambah":
        hasil = bil1 + bil2;
        break;
      case "kurang":
        hasil = bil1 - bil2;
        break;
      case "kali":
        hasil = bil1 * bil2;
        break;
      case "bagi":
        if (bil2 === 0) {
          alert("Tidak bisa membagi dengan nol!");
          return;
        }
        hasil = bil1 / bil2;
        break;
    }
  
    alert("Hasil Perhitungan: " + hasil);
  }
  
  function ulang() {
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
    document.getElementById("operator").selectedIndex = 0;
  }