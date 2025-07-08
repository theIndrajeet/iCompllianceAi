# iCompliance Tool - IT Handover Documentation

## Project Overview
iCompliance is a cross-border compliance assessment tool for mental health services. Built by the Legal Team at Intellect to determine if healthcare providers can legally serve clients across different jurisdictions.

## Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Framework**: None - Pure JavaScript implementation
- **External Dependencies**:
  - Chart.js (dashboard visualization)
  - Showdown.js (Markdown rendering for AI chatbot)
  - Font Awesome (icons)
  - Google Gemini API (AI explanations)
- **Deployment**: Netlify static hosting

## Project Structure
```
idem/
├── index.html              # Main calculator page
├── dashboard.html          # Compliance framework overview
├── compliance-matrix.html  # Rule matrix display
├── compliance-bot.html     # AI chatbot interface
├── country-database.html   # Jurisdiction directory
├── Cross-Border-Hiring-Assessment.html  # HR assessment tool
├── navigation.js           # Shared navigation component
├── navigation.css          # Navigation styles
├── complianceData.js       # Core regulatory data
├── countrydatabase.js      # Country display logic
├── dashboard.js            # Dashboard error handling
├── cleanComplianceData.js  # Data maintenance utility
└── netlify.toml           # Deployment configuration
```

## Core Components

### 1. Compliance Calculator (index.html)
**Purpose**: Main tool to check if Provider → Client service is allowed
- **Key Functions**:
  - `analyzeCompliance()` - Main analysis entry point
  - `findComplianceRule()` - Determines compliance status
  - `determineZone()` - Maps jurisdiction to color zone
  - `displayResult()` - Renders analysis results

### 2. Color Zone System
The compliance framework uses three zones:
- **Green**: Least restrictive regulations
- **Blue**: Moderate restrictions
- **Red**: Most restrictive, often requires local license

### 3. Service Types
Three supported service types:
- `counselling` - Basic counselling services
- `counselling-psychology` - Counselling psychology
- `clinical` - Clinical psychology services

### 4. Data Structure (complianceData.js)
```javascript
{
  jurisdictions: { region: [country_list] },
  countries: {
    "Country Name": {
      colorCode: "green|blue|red|{service-specific}",
      counselling: { regulated: bool, requirements: string },
      psychology: { regulated: bool, requirements: string },
      clinical: { regulated: bool, requirements: string },
      crossBorder: { inbound: string, outbound: string }
    }
  },
  rules: [ { providerColorCode, clientColorCode, notes } ]
}
```

## API Integration
- **Gemini API Key**: Hardcoded in multiple files
- **Endpoints**: Uses Gemini 2.0 Flash model
- **Note**: API key should be moved to environment variables

## Key Maintenance Tasks

### Adding New Countries
1. Add country to `complianceData.js` under `countries` object
2. Add jurisdiction name to appropriate region in `jurisdictions`
3. Run `cleanComplianceData.js` if adding deprecated service types

### Updating Compliance Rules
1. Modify `rules` array in `complianceData.js`
2. Update zone mappings in country entries
3. Test with calculator to verify changes

### Common Issues
1. **Missing Dependencies**: Check Chart.js and Showdown.js CDN links
2. **Navigation Not Showing**: Ensure navigation.js loads before page scripts
3. **Country Not Found**: Verify country name matches exactly in data

## Development Guidelines
1. **No Build Process**: Direct file editing, no compilation needed
2. **Browser Compatibility**: Modern browsers only (ES6+ features used)
3. **Mobile Support**: Responsive design with mobile menu
4. **Error Handling**: Graceful fallbacks for missing data

## Deployment
- **Platform**: Netlify
- **Config**: `netlify.toml` redirects root to dashboard.html
- **Updates**: Push to Git repository triggers auto-deployment

## Security Considerations
1. API key exposure in client-side code
2. No authentication/authorization implemented
3. All compliance data publicly accessible

## Future Improvements
1. Move API keys to server-side proxy
2. Add user authentication system
3. Implement data versioning/audit trail
4. Add automated testing
5. Create admin interface for data updates

## Contact
Created by: Legal Team, Intellect
Purpose: Internal compliance assessment tool
Status: Prototype for internal review

---
*This handover document prepared for IT team takeover of the iCompliance project.* 