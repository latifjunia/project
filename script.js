const slides = document.querySelectorAll('.slide');
const description = document.querySelector('.slider-description');
const descriptions = ['Nasi Goreng', 'Tumis Kangkung', 'Mochi', 'Cimol'];
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  description.textContent = descriptions[currentIndex];
});

document.querySelector('.next').addEventListener('click', () => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
  description.textContent = descriptions[currentIndex];
});

function searchItems() {
    // Ambil nilai dari input pencarian
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    
    // Ambil semua elemen card
    var cards = document.querySelectorAll('.card');
    
    // Loop melalui semua kartu dan sembunyikan atau tampilkan
    cards.forEach(function(card) {
      var title = card.querySelector('p').textContent.toLowerCase();
      
      // Jika teks pada card mengandung kata kunci pencarian, tampilkan
      if (title.includes(searchValue)) {
        card.style.display = 'block';  // Tampilkan
      } else {
        card.style.display = 'none';  // Sembunyikan
      }
    });
  }
