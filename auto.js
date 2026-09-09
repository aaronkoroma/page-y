document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('input');
    const suggestionsPanel = document.getElementById('suggestionsPanel');
    const suggestionsList = document.getElementById('suggestionsList');

    // Terminate engine sequence safely if global navigation search node is not found on current page
    if (!searchInput || !suggestionsPanel || !suggestionsList) return;

    searchInput.addEventListener('keyup', function() {
        const query = searchInput.value.trim().toLowerCase();
        let html = '';

        if (query) {
            let matchesFound = false;

            // Loop through global array metrics declared inside words.js
            for (const word of WORDS) {
                if (word.toLowerCase().startsWith(query)) {
                    html += `<a href="${word}.html"><li>${word}</li></a>`;
                    matchesFound = true;
                }
            }

            // Diagnostic rendering block condition
            if (!matchesFound) {
                html = '<li class="no-match-item">Match not found!</li>';
            }

            suggestionsList.innerHTML = html;
            suggestionsPanel.style.display = 'block';
        } else {
            // Drop target tree display properties cleanly when filter inputs are cleared
            suggestionsList.innerHTML = '';
            suggestionsPanel.style.display = 'none';
        }
    });
});
