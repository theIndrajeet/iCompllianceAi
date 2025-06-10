// Simplified AI Compliance API server with reliable fallback system
const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Track API success for rapid feedback
let apiCallSuccessful = false;
let lastApiErrorMessage = "API not tested yet";
let lastErrorTimestamp = Date.now();

// Add request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from the root directory (e.g., index.html, compliance-bot.html)
app.use(express.static(path.join(__dirname)));

// Test function to validate the Gemini API key works
async function testGeminiAPI(apiKey) {
    // Try with the current model name format
    const testUrl = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`;
    const simplePayload = {
        contents: [{
            role: "user",
            parts: [{ text: "Hello, please respond with 'API key is working correctly' if you receive this message." }]
        }]
    };

    try {
        console.log('Sending test request to Gemini API...');
        const response = await fetch(testUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(simplePayload)
        });

        console.log('Test response status:', response.status);
        const responseText = await response.text();
        console.log('Test response body:', responseText);

        if (response.ok) {
            console.log('✅ Gemini API key is valid and working!');
            return true;
        } else {
            console.error('❌ Gemini API key is NOT working! Response:', responseText);
            return false;
        }
    } catch (err) {
        console.error('❌ Error testing Gemini API:', err);
        return false;
    }
}

// Fallback responses for common compliance questions
const fallbackResponses = {
    compliance: `# Compliance Best Practices

Compliance refers to adhering to regulations, standards, and legal requirements applicable to an organization. Here are key best practices:

1. **Identify Relevant Regulations**: Determine which laws and regulations apply to your organization
2. **Document Policies and Procedures**: Maintain clear documentation of compliance policies
3. **Regular Risk Assessments**: Conduct periodic evaluations to identify compliance risks
4. **Training**: Ensure all employees understand compliance requirements
5. **Monitoring**: Implement systems to continuously monitor compliance status
6. **Incident Response Plan**: Have procedures in place for addressing violations

For specific compliance questions, please consult with your legal team or compliance officer.`,
    
    gdpr: `# GDPR Overview

The General Data Protection Regulation (GDPR) is a comprehensive EU data protection law that became enforceable in 2018. Key principles include:

1. **Lawfulness, Fairness, and Transparency**: Processing must be legal, fair, and transparent
2. **Purpose Limitation**: Data should be collected for specified purposes only
3. **Data Minimization**: Only collect necessary data
4. **Accuracy**: Ensure data is accurate and kept up to date
5. **Storage Limitation**: Keep data only as long as necessary
6. **Integrity and Confidentiality**: Process data securely
7. **Accountability**: Organizations must demonstrate compliance

Penalties for non-compliance can reach up to 4% of annual global turnover or €20 million, whichever is higher.`,
    
    hipaa: `# HIPAA Compliance

The Health Insurance Portability and Accountability Act (HIPAA) regulates the use and disclosure of Protected Health Information (PHI) in the United States. Key requirements include:

1. **Privacy Rule**: Sets standards for the protection of PHI
2. **Security Rule**: Specifies safeguards for electronic PHI
3. **Breach Notification Rule**: Requirements for reporting data breaches
4. **Omnibus Rule**: Expanded requirements and increased penalties

Organizations must implement physical, technical, and administrative safeguards to protect patient information and regularly assess their compliance.`,
    
    crossborder: `# Cross-Border Data Transfer Regulations

Moving data across international borders involves navigating complex regulations:

1. **EU to Non-EU Transfers**: Requires adequate safeguards like Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), or transfers to countries with adequacy decisions

2. **Asia-Pacific Regulations**: Countries like Japan, South Korea, and Singapore have their own data protection laws

3. **Key Considerations**:
   - Identify what data is being transferred
   - Determine legal basis for transfer
   - Implement appropriate safeguards
   - Document the transfer process
   - Conduct Data Protection Impact Assessments

4. **Best Practices**: Regular compliance reviews, data mapping, and privacy training for staff`,
};

// Helper function to find the best matching fallback response
function findBestFallbackResponse(query) {
    query = query.toLowerCase();
    
    // Check for keywords and return appropriate response
    if (query.includes('gdpr') || query.includes('general data protection') || query.includes('eu data')) {
        return fallbackResponses.gdpr;
    } 
    else if (query.includes('hipaa') || query.includes('health insurance portability') || query.includes('health data')) {
        return fallbackResponses.hipaa;
    }
    else if (query.includes('cross-border') || query.includes('international') || query.includes('transfer') || query.includes('data transfer')) {
        return fallbackResponses.crossborder;
    }
    
    // Default fallback response
    return fallbackResponses.compliance;
}

// The proxy endpoint with fallback mechanism
app.post('/api/gemini-proxy', async (req, res) => {
    console.log('Received request to /api/gemini-proxy');
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('API key is not configured on the server');
        // Return fallback response instead of error
        const query = req.body?.contents?.[0]?.parts?.[0]?.text || '';
        const fallbackResponse = findBestFallbackResponse(query);
        
        return res.json({
            candidates: [{
                content: {
                    parts: [{ text: fallbackResponse }],
                    role: 'model'
                },
                finishReason: 'FALLBACK_RESPONSE',
                index: 0
            }],
            promptFeedback: {
                fallbackMode: true,
                reason: 'API key not configured'
            }
        });
    }

    // Use gemini-1.5-pro model with v1beta API - trying all potential combinations to find one that works
    const apiUrls = [
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${apiKey}`
    ];
    
    // Try each API URL in sequence
    for (let i = 0; i < apiUrls.length; i++) {
        const apiUrl = apiUrls[i];
        console.log(`Attempt ${i+1}/${apiUrls.length}: Making request to Gemini API using URL: ${apiUrl}`);
        
        try {
            console.log('Sending request to Gemini API...');
            const geminiResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req.body)
            });

            console.log(`Attempt ${i+1} response status:`, geminiResponse.status);
            const responseText = await geminiResponse.text();
            
            try {
                const data = JSON.parse(responseText);
                
                if (geminiResponse.ok) {
                    // Success! Return the valid response
                    console.log(`✅ Successful API response using endpoint ${i+1}`);
                    return res.json(data);
                }
                
                // If not OK but we have more URLs to try, continue to the next URL
                if (i < apiUrls.length - 1) {
                    console.log(`API attempt ${i+1} failed, trying next endpoint...`);
                    continue;
                }
                
                // We've tried all URLs and none worked - use fallback
                console.error('All API endpoints failed. Last error:', data);
                
                // Use fallback response based on query content
                const query = req.body?.contents?.[0]?.parts?.[0]?.text || '';
                const fallbackResponse = findBestFallbackResponse(query);
                
                return res.json({
                    candidates: [{
                        content: {
                            parts: [{ text: fallbackResponse }],
                            role: 'model'
                        },
                        finishReason: 'FALLBACK_RESPONSE',
                        index: 0
                    }],
                    promptFeedback: {
                        fallbackMode: true,
                        reason: 'API error with all endpoints'
                    }
                });
                
            } catch (e) {
                console.error(`Failed to parse API response ${i+1} as JSON:`, responseText.substring(0, 200));
                
                // If we have more URLs to try, continue
                if (i < apiUrls.length - 1) {
                    continue;
                }
                
                // We've tried all URLs and none worked - use fallback
                const query = req.body?.contents?.[0]?.parts?.[0]?.text || '';
                const fallbackResponse = findBestFallbackResponse(query);
                
                return res.json({
                    candidates: [{
                        content: {
                            parts: [{ text: fallbackResponse }],
                            role: 'model'
                        },
                        finishReason: 'FALLBACK_RESPONSE',
                        index: 0
                    }],
                    promptFeedback: {
                        fallbackMode: true,
                        reason: 'Invalid JSON response from all API endpoints'
                    }
                });
            }
            
        } catch (error) {
            console.error(`API attempt ${i+1} error:`, error.message);
            
            // If we have more URLs to try, continue
            if (i < apiUrls.length - 1) {
                continue;
            }
            
            // We've tried all URLs and none worked - use fallback
            const query = req.body?.contents?.[0]?.parts?.[0]?.text || '';
            const fallbackResponse = findBestFallbackResponse(query);
            
            return res.json({
                candidates: [{
                    content: {
                        parts: [{ text: fallbackResponse }],
                        role: 'model'
                    },
                    finishReason: 'FALLBACK_RESPONSE',
                    index: 0
                }],
                promptFeedback: {
                    fallbackMode: true,
                    reason: 'Network or other error with all API endpoints'
                }
            });
        }
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

// Debug function to safely check if file exists without showing its contents
function checkFileExistence(filePath) {
    try {
        const fs = require('fs');
        const exists = fs.existsSync(filePath);
        if (exists) {
            const stats = fs.statSync(filePath);
            return `File exists (${stats.size} bytes, last modified: ${stats.mtime})`;
        } else {
            return 'File does not exist';
        }
    } catch (err) {
        return `Error checking file: ${err.message}`;
    }
}

// Also update the client-side code to use the correct model
app.get('/api/config', (req, res) => {
    res.json({
        modelName: 'gemini-pro', // The model we're using with the v1 API
        apiAvailable: !!process.env.GEMINI_API_KEY
    });
});

// Start the server
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Serving static files from:', path.join(__dirname));
    console.log('====================== ENV DEBUGGING ======================');
    console.log('.env file status:', checkFileExistence(path.join(__dirname, '.env')));
    console.log('.env.example file status:', checkFileExistence(path.join(__dirname, '.env.example')));
    console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'Key exists (length: ' + process.env.GEMINI_API_KEY.length + ')' : 'NOT SET');
    console.log('==================== END ENV DEBUGGING ====================');
    
    // Run a test API call to verify the key works
    if (process.env.GEMINI_API_KEY) {
        console.log('\n🔍 Testing Gemini API key...');
        const keyWorks = await testGeminiAPI(process.env.GEMINI_API_KEY);
        if (!keyWorks) {
            console.error('\n❌ WARNING: Your Gemini API key did not work in the test!');
            console.error('Please check that your key is valid and has access to the gemini-pro model.');
            console.error('The application will continue running, but chatbot functionality may not work.');
        }
    } else {
        console.error('\n❌ Cannot test API key because none is set in environment variables!');
    }
});
