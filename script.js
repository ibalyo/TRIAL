    <script>
        // Contoh JavaScript sederhana (bisa ditempatkan di file script.js terpisah)
        document.addEventListener('DOMContentLoaded', function() {
            const formPendaftaran = document.querySelector('#pendaftaran form');
            if (formPendaftaran) {
                formPendaftaran.addEventListener('submit', function(event) {
                    event.preventDefault();
                    alert('Terima kasih telah mendaftar! Kami akan segera menghubungi Anda.');
                    formPendaftaran.reset();
                });
            }
        });
    </script>
