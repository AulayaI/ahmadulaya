// File JavaScript ini siap digunakan.
// Kamu bisa menambahkan fitur seperti tombol "Copy to Clipboard"
// untuk script-block di sini nantinya.

console.log("Halaman Tutorial Moodle Ulaya siap!");

/* =========================================
   TAMBAHAN BARU: LOGIKA ACCORDION
   ========================================= */

document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".section-header");

    collapsibles.forEach(header => {
        header.addEventListener("click", function() {
            // Ambil parent element (yaitu <section>)
            const parentSection = this.parentElement;

            // Toggle class 'active'
            parentSection.classList.toggle("active");

            // Optional: Menutup section lain jika satu dibuka (Mode Accordion Murni)
            /*
            document.querySelectorAll('.collapsible').forEach(sec => {
                if (sec !== parentSection) {
                    sec.classList.remove('active');
                }
            });
            */
        });
    });
});

console.log("Fitur Buka-Tutup Tutorial Aktif!");