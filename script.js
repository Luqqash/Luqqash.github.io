document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');

    setInterval(() => {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.add('active');
    }, 3000);
});

function searchBooks() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const books = document.querySelectorAll('.book-item');
    const results = document.getElementById('searchResults');
    results.innerHTML = '';

    books.forEach(book => {
        if (book.textContent.toLowerCase().includes(query)) {
            results.appendChild(book.cloneNode(true));
        }
    });
}
