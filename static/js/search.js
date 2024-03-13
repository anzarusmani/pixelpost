document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const posterTiles = document.querySelectorAll('.poster-tiles-content-details');

    // Function to handle search
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        posterTiles.forEach(function(posterTile) {
            const posterName = posterTile.querySelector('h3').textContent.toLowerCase();
            if (posterName.includes(searchTerm)) {
                posterTile.style.display = 'block'; // Show the poster tile
            } else {
                posterTile.style.display = 'none'; // Hide the poster tile
            }
        });
    }

    // Event listener for search button click
    searchButton.addEventListener('click', handleSearch);

    // Event listener for pressing Enter in the search input
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});
