document.addEventListener('DOMContentLoaded', function() {
    const resultsContainer = document.getElementById('results-container');
    const yearSelect = document.getElementById('year');

    // Sample election data
    const electionData = {
        2024: [
            { state: 'State 1', winner: 'Party A', seats: 40 },
            { state: 'State 2', winner: 'Party B', seats: 30 }
        ],
        2019: [
            { state: 'State 1', winner: 'Party B', seats: 35 },
            { state: 'State 2', winner: 'Party A', seats: 45 }
        ]
    };

    function displayResults(year) {
        const data = electionData[year];
        resultsContainer.innerHTML = ''; // Clear previous results

        data.forEach(result => {
            const resultDiv = document.createElement('div');
            resultDiv.innerHTML = `<strong>${result.state}</strong>: ${result.winner} (${result.seats} seats)`;
            resultsContainer.appendChild(resultDiv);
        });
    }

    // Event listener for year selection
    yearSelect.addEventListener('change', function() {
        displayResults(this.value);
    });

    // Initialize with default year
    displayResults(yearSelect.value);
});
