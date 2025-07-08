// Dashboard Module - Handles error states when required dependencies are missing
// Dependencies: Chart.js library and complianceData.js must be loaded before this script

// Check for Chart.js dependency
if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded. Please include it before dashboard.js');
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = '<p style="color: red; text-align: center; padding: 20px; background: #222; border-radius: 8px;">Error: Chart.js library is missing. The dashboard cannot be rendered.</p>';
        container.prepend(errorDiv);
    });
}

// Check for complianceData dependency
if (typeof complianceData === 'undefined') {
    console.error('complianceData is not defined. Make sure complianceData.js is loaded before dashboard.js');
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.querySelector('.container') || document.body;
        const errorDiv = document.createElement('div');
        errorDiv.innerHTML = '<p style="color: red; text-align: center; padding: 20px; background: #222; border-radius: 8px;">Error: complianceData is missing. The dashboard cannot be rendered.</p>';
        container.prepend(errorDiv);
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Additional validation for complianceData
    if (typeof complianceData === 'undefined') {
        console.error('complianceData.js is not loaded or has an error.');
        const container = document.querySelector('.container');
        if(container) {
            container.innerHTML = `<div class="glass-card" style="text-align: center; color: var(--danger);">
                <h2>Error Loading Data</h2>
                <p>The 'complianceData.js' file could not be found or is invalid. The dashboard cannot be displayed.</p>
            </div>`;
        }
        return;
    }

    // Final validation check before rendering
    if (typeof complianceData === 'undefined' || !complianceData) {
        console.error('Compliance data is missing or invalid.');
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = '<p class="error-message">Could not load compliance data. Dashboard cannot be displayed.</p>';
        }
        return;
    }
    
    // Note: Actual dashboard rendering code would go here
    // Currently this file only handles error states
});