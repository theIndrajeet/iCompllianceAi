// Country Database Module - Displays regulatory information for all jurisdictions
// Dependencies: complianceData.js must be loaded before this script
document.addEventListener('DOMContentLoaded', () => {
    // DOM element references
    const searchInput = document.getElementById('search-input');
    const countryGrid = document.getElementById('country-grid');
    const filterSelect = document.getElementById('zone-filter');

    /**
     * Aggregates all jurisdictions from complianceData
     * Returns array with both detailed countries and basic jurisdiction entries
     */
    function getAllJurisdictions() {
        const allJurisdictions = [];
        
        // Process countries with full regulatory data
        Object.values(complianceData.countries).forEach(country => {
            allJurisdictions.push({
                name: country.name,
                region: country.region,
                hasDetailedData: true,
                data: country,
                // Handle both string and object colorCode formats
                zone: typeof country.colorCode === 'string' ? country.colorCode : 'varies'
            });
        });
        
        // Add jurisdictions that only exist in regional lists
        Object.entries(complianceData.jurisdictions).forEach(([region, regionJurisdictions]) => {
            if (Array.isArray(regionJurisdictions)) {
                regionJurisdictions.forEach(jurisdictionName => {
                    // Prevent duplicate entries
                    if (!allJurisdictions.some(j => j.name === jurisdictionName)) {
                        allJurisdictions.push({
                            name: jurisdictionName,
                            region: region,
                            hasDetailedData: false,
                            data: null,
                            zone: 'unknown'
                        });
                    }
                });
            }
        });
        
        return allJurisdictions;
    }

    /**
     * Renders country cards in the grid
     * Groups by region with headers
     */
    function renderCountries(jurisdictions) {
        countryGrid.innerHTML = '';
        
        let currentRegion = '';
        jurisdictions.forEach(jurisdiction => {
            // Insert region header when region changes
            if (jurisdiction.region !== currentRegion) {
                currentRegion = jurisdiction.region;
                const regionHeader = document.createElement('div');
                regionHeader.className = 'region-header';
                const regionJurisdictionCount = complianceData.jurisdictions[currentRegion]?.length || 0;
                regionHeader.innerHTML = `
                    <h2>${currentRegion}
                        <span>${regionJurisdictionCount} jurisdictions</span>
                    </h2>`;
                countryGrid.appendChild(regionHeader);
            }
            
            // Create country card element
            const card = document.createElement('div');
            card.className = `country-card ${jurisdiction.zone}`;
            
            if (jurisdiction.hasDetailedData) {
                // Full data available - create detailed card
                const country = jurisdiction.data;
                card.onclick = () => showCountryDetails(country.name);
                card.innerHTML = `
                    <div class="country-header">
                        <span class="country-flag">${country.flag || getFlagForJurisdiction(country.name)}</span>
                        <h3>${country.name}</h3>
                        <span class="zone-badge ${jurisdiction.zone}">${jurisdiction.zone.toUpperCase()}</span>
                    </div>
                    <div class="country-details">
                        <div class="regulation">
                            <strong>Counselling:</strong> 
                            <span class="status ${country.counselling?.regulated ? 'regulated' : 'unregulated'}">
                                ${country.counselling?.regulated ? 'Regulated' : 'Unregulated'}
                            </span>
                        </div>
                        <div class="regulation">
                            <strong>Psychology:</strong> 
                            <span class="status ${country.psychology?.regulated ? 'regulated' : 'unregulated'}">
                                ${country.psychology?.regulated ? 'Regulated' : 'Unregulated'}
                            </span>
                        </div>
                        <div class="regulation">
                            <strong>Clinical:</strong> 
                            <span class="status ${country.clinical?.regulated ? 'regulated' : 'unregulated'}">
                                ${country.clinical?.regulated ? 'Regulated' : 'Unregulated'}
                            </span>
                        </div>
                    </div>
                    <div class="country-footer">
                        View full details <i class="fas fa-chevron-right"></i>
                    </div>`;
            } else {
                // Limited data - create basic card
                const flag = getFlagForJurisdiction(jurisdiction.name);
                card.innerHTML = `
                    <div class="country-header">
                        <span class="country-flag">${flag}</span>
                        <h3>${jurisdiction.name}</h3>
                        <span class="zone-badge unknown">UNKNOWN</span>
                    </div>
                    <div class="country-details">
                        <div class="notes">
                            Full regulatory data pending
                        </div>
                    </div>`;
            }
            
            countryGrid.appendChild(card);
        });
    }

    /**
     * Filters jurisdictions based on search term and zone selection
     */
    function filterCountries() {
        const searchTerm = searchInput.value.toLowerCase();
        const zoneFilter = filterSelect.value;
        
        const allJurisdictions = getAllJurisdictions();
        const filtered = allJurisdictions.filter(jurisdiction => {
            // Text search matches name or region
            const matchesSearch = jurisdiction.name.toLowerCase().includes(searchTerm) || 
                                jurisdiction.region.toLowerCase().includes(searchTerm);
            // Zone filter matches selected zone
            const matchesZone = zoneFilter === 'all' || 
                              (zoneFilter === 'varies' && jurisdiction.zone === 'varies') ||
                              jurisdiction.zone === zoneFilter;
            
            return matchesSearch && matchesZone;
        });
        
        renderCountries(filtered);
    }

    // Initialize if data is available
    if (complianceData) {
        renderCountries(getAllJurisdictions());
        // Attach event listeners
        if (searchInput) searchInput.addEventListener('input', filterCountries);
        if (filterSelect) filterSelect.addEventListener('change', filterCountries);
    } else {
        console.error('complianceData not loaded');
    }

    /**
     * Displays detailed modal for selected country
     * Shows all regulatory requirements by service type
     */
    function showCountryDetails(countryName) {
        const country = complianceData.countries[countryName];
        if (!country) {
            console.warn(`Country details not found for: ${countryName}`);
            return;
        }
        
        // Create modal HTML
        const modalHTML = `
            <div class="modal-overlay" id="modalOverlay">
                <div class="modal">
                    <div class="modal-header">
                        <h3>${country.name} - Regulatory Details</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-section">
                            <h4>Counselling Regulations</h4>
                            <p>${country.counselling?.requirements || 'No data available'}</p>
                        </div>
                        <div class="modal-section">
                            <h4>Psychology Regulations</h4>
                            <p>${country.psychology?.requirements || 'No data available'}</p>
                        </div>
                        <div class="modal-section">
                            <h4>Clinical Regulations</h4>
                            <p>${country.clinical?.requirements || 'No data available'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modal = document.getElementById('modalOverlay');
        // Close modal on overlay click or close button
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('.modal-close')) {
                modal.remove();
            }
        });
    }
    
    // Export functions to global scope for external access
    window.showCountryDetails = showCountryDetails;
    window.getFlagForJurisdiction = getFlagForJurisdiction;
});
