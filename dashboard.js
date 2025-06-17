// Error handling for dependencies
if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded. Please include it before dashboard.js');
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = '<p style="color: red; text-align: center; padding: 20px; background: #222; border-radius: 8px;">Error: Chart.js library is missing. The dashboard cannot be rendered.</p>';
        container.prepend(errorDiv);
    });
}

if (typeof complianceData === 'undefined') {
    console.error('complianceData is not defined. Make sure complianceData.js is loaded before dashboard.js');
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = '<p style="color: red; text-align: center; padding: 20px; background: #222; border-radius: 8px;">Error: complianceData is missing. The dashboard cannot be rendered.</p>';
        container.prepend(errorDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if complianceData is loaded
    if (typeof complianceData === 'undefined') {
        console.error('complianceData.js is not loaded or has an error.');
        // Display an error message on the dashboard itself
        const container = document.querySelector('.container');
        if(container) {
            container.innerHTML = `<div class="glass-card" style="text-align: center; color: var(--danger);">
                <h2>Error Loading Data</h2>
                <p>The 'complianceData.js' file could not be found or is invalid. The dashboard cannot be displayed.</p>
            </div>`;
        }
        return;
    }

    // Check if complianceData is loaded
    if (typeof complianceData === 'undefined' || !complianceData) {
        console.error('Compliance data is missing or invalid.');
        // Optionally, display an error message to the user
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = '<p class="error-message">Could not load compliance data. Dashboard cannot be displayed.</p>';
        }
        return; // Stop execution if data is missing
    }
});