// Function to calculate Zakat Maal
function calculateZakatMaal() {
    const totalAssets = parseFloat(document.getElementById('totalAssets').value);
    const totalDebts = parseFloat(document.getElementById('totalDebts').value);
    const zakatPercentageMaal = parseFloat(document.getElementById('zakatPercentageMaal').value);

    // Validate inputs
    if (isNaN(totalAssets) || totalAssets <= 0 || isNaN(totalDebts) || totalDebts < 0) {
        document.getElementById('resultMaal').textContent = 'Harap masukkan nilai yang valid.';
        return;
    }

    const netAssets = totalAssets - totalDebts;
    if (netAssets <= 0) {
        document.getElementById('resultMaal').textContent = 'Tidak ada harta yang bisa dikenakan zakat.';
        return;
    }

    const zakatMaal = (netAssets * zakatPercentageMaal) / 100;
    document.getElementById('resultMaal').textContent = `Zakat Maal yang harus dibayarkan: Rp${zakatMaal.toFixed(2)}`;
}

// Function to calculate Qurban distribution
function calculateQurban() {
    const animalType = document.getElementById('animalType').value;
    const totalWeightQurban = parseFloat(document.getElementById('totalWeightQurban').value);

    // Validate inputs
    if (isNaN(totalWeightQurban) || totalWeightQurban <= 0) {
        document.getElementById('resultQurban').textContent = 'Harap masukkan nilai yang valid.';
        return;
    }

    let meatWeight;
    let resultText;

    switch (animalType) {
        case 'kambing':
            meatWeight = totalWeightQurban * 0.482;
            resultText = `Pembagian Daging Kambing: ${meatWeight.toFixed(2)} kg`;
            break;
        case 'sapi':
        case 'kerbau':
        case 'unta':
            meatWeight = totalWeightQurban * 0.482; // Asumsi berat daging sama untuk sapi, kerbau, dan unta
            const ownerShare = meatWeight / 3;
            const neighborsShare = meatWeight / 3;
            const poorShare = meatWeight / 3;
            resultText = `Pembagian Daging ${animalType.charAt(0).toUpperCase() + animalType.slice(1)}:\n` +
                         `Sepertiga untuk Pemilik: ${ownerShare.toFixed(2)} kg\n` +
                         `Sepertiga untuk Kerabat/Tetangga: ${neighborsShare.toFixed(2)} kg\n` +
                         `Sepertiga untuk Fakir Miskin: ${poorShare.toFixed(2)} kg`;
            break;
        default:
            meatWeight = 0;
            resultText = 'Jenis hewan tidak valid.';
    }

    document.getElementById('resultQurban').textContent = resultText;
}

// Code to handle the help modal
// Get the modal
var modal = document.getElementById("helpModal");

// Get the button that opens the modal
var btn = document.getElementById("helpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
