const complianceData = {
    jurisdictions: {
        "Middle East": [
            "Afghanistan",
            "Bahrain",
            "Georgia",
            "Iran",
            "Iraq",
            "Israel",
            "Jordan",
            "Kuwait",
            "Lebanon",
            "Oman",
            "Palestine",
            "Qatar",
            "Saudi Arabia",
            "Syria",
            "Turkey",
            "United Arab Emirates",
            "Yemen"
            // TODO: Verify all Middle Eastern countries from complianceData.countries are listed here and match exact names.
        ],
        "Europe": [
            "Albania",
            "Andorra",
            "Austria",
            "Belarus",
            "Belgium",
            "Bosnia & Herzegovina",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Italy",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Malta",
            "Moldova",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "North Macedonia",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Russia",
            "San Marino",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "Ukraine",
            "United Kingdom"
            // TODO: Verify all European countries from complianceData.countries are listed here and match exact names.
        ],
        "Asia": [
            "Armenia",
            "Azerbaijan",
            "Bangladesh",
            "Bhutan",
            "Brunei",
            "Cambodia",
            "China",
            "Hong Kong",
            "India",
            "Indonesia",
            "Japan",
            "Kazakhstan",
            "Kyrgyzstan",
            "Laos",
            "Macau",
            "Malaysia",
            "Maldives",
            "Mongolia",
            "Myanmar",
            "Nepal",
            "Pakistan",
            "Philippines",
            "Singapore",
            "South Korea",
            "Sri Lanka",
            "Taiwan",
            "Tajikistan",
            "Thailand",
            "Timor-Leste",
            "Turkmenistan",
            "Uzbekistan",
            "Vietnam"
            // TODO: Verify all Asian countries from complianceData.countries are listed here and match exact names.
        ],
        "Africa": [
            "Algeria",
            "Angola",
            "Benin",
            "Botswana",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cameroon",
            "Central African Republic",
            "Chad",
            "Comoros",
            "Congo (Republic of the Congo)",
            "Côte d'Ivoire (Ivory Coast)",
            "Democratic Republic of the Congo",
            "Djibouti",
            "Egypt",
            "Equatorial Guinea",
            "Eritrea",
            "Eswatini",
            "Gabon",
            "Gambia",
            "Ghana",
            "Guinea",
            "Guinea-Bissau",
            "Kenya",
            "Lesotho",
            "Liberia",
            "Libya",
            "Madagascar",
            "Malawi",
            "Mali",
            "Mauritania",
            "Mauritius",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Niger",
            "Nigeria",
            "Rwanda",
            "Sao Tome and Principe",
            "Senegal",
            "Seychelles",
            "Sierra Leone",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Sudan",
            "Tanzania",
            "Togo",
            "Tunisia",
            "Uganda",
            "Zambia",
            "Zimbabwe"
            // TODO: Verify all African countries from complianceData.countries are listed here and match exact names.
        ],
        "North America": [
            // TODO: Add North American countries from complianceData.countries here (e.g., "Mexico")
        ],
        "Latin America": [
            "Argentina",
            "Bolivia",
            "Brazil",
            "Chile",
            "Colombia",
            "Costa Rica",
            "Cuba",
            "Dominican Republic",
            "Ecuador",
            "El Salvador",
            "Falkland Islands",
            "Guatemala",
            "Honduras",
            "Mexico",
            "Nicaragua",
            "Panama",
            "Paraguay",
            "Peru",
            "Puerto Rico",
            "Uruguay",
            "Venezuela"
            // TODO: Verify all Latin American countries from complianceData.countries are listed here and match exact names.
        ],
        "Pacific Ocean Islands": [
            "Fiji",
            "Kiribati",
            "Marshall Islands",
            "Micronesia",
            "Nauru",
            "Palau",
            "Papua New Guinea",
            "Samoa",
            "Solomon Islands",
            "Tonga",
            "Tuvalu",
            "Vanuatu"
            // TODO: Verify all Pacific Ocean Islands from complianceData.countries are listed here and match exact names.
        ],
        "ANZ & Oceania": [
            "Australia",
            "New Zealand"
            // TODO: Verify all ANZ & Oceanian countries from complianceData.countries are listed here and match exact names. Add others if needed (e.g., Fiji, Samoa etc. if they should be in this list).
        ]
        // You can add more regions following this pattern. Ensure country names match exactly with entries in 'complianceData.countries'.
    },
    jobRoles: ['Counsellor', 'Counselling Psychologist', 'Clinical Psychologist'],
    rules: [
        { clientColorCode: 'Green', providerColorCode: 'Green', clientConsented: true, providerIntlLicenseNote: 'No', canEnableCrossBorder: 'Yes', notes: '', updated: '2024-06-04' },
        { clientColorCode: 'Green', providerColorCode: 'Blue', clientConsented: true, providerIntlLicenseNote: 'Yes (meets local conditions)', canEnableCrossBorder: 'Yes', notes: "Inbound services–No issue here as the provider in the blue zone is only blue for Inbound services.\n\nFor outbound services: Provider from Blue zone to client in Green zone.\n1. Provider information e.g. Full name, Credentials – qualification and institute name and Licenses (if any).\n2. So the Client can choose the provider and consent to their services.\n3. Services should be limited to consultation. We will not have capacity to prescribe medication, diagnose and treat the client.\n4. If our clinician were to provide \"care treatment\" for legal/regime, activity, process, practice or any alternative wording.", updated: '2024-06-04' },
        { clientColorCode: 'Green', providerColorCode: 'Red', clientConsented: true, providerIntlLicenseNote: 'Yes', canEnableCrossBorder: 'Yes', notes: "Even if client is in Green, provider’s country prohibits export – is this a blocker?\nInbound services–No issue here as the provider in the Red zone is only red for Inbound services.\n\nFor outbound services: Provider from Red zone to client in Green zone.\n1. Provider information e.g. Full name, Credentials – qualification and institute name and Licenses (if any).\n2. So the Client can choose the provider and consent to their services.", updated: '2024-06-04' },
        { clientColorCode: 'Blue', providerColorCode: 'Green', clientConsented: true, providerIntlLicenseNote: 'Yes', canEnableCrossBorder: 'Yes', notes: '', updated: '2024-06-04' },
        { clientColorCode: 'Blue', providerColorCode: 'Blue', clientConsented: true, providerIntlLicenseNote: 'Yes', canEnableCrossBorder: 'Yes', notes: '', updated: '2024-06-04' },
        { clientColorCode: 'Blue', providerColorCode: 'Red', clientConsented: true, providerIntlLicenseNote: 'May be, dependent on the Blue country’s compliance rules', canEnableCrossBorder: 'Yes, consult Clinical for final approval. Provider in a Blue-to-Red scenario usually requires local legal sign-off.', notes: "Yes, consult Clinical for final approval. Provider in a Blue-to-Red scenario usually requires local legal sign-off.", updated: '2024-06-04' },
        { clientColorCode: 'Red', providerColorCode: 'Green', clientConsented: true, providerIntlLicenseNote: "No, unless the Provider has the specific country's license/qualification requirements.", canEnableCrossBorder: 'No', notes: "Inbound services–The provider in the Green zone can serve inbound.\nFor outbound services: Provider in Red zone to client in Green zone–they must hold the specific local license to practice.", updated: '2024-06-04' },
        { clientColorCode: 'Red', providerColorCode: 'Blue', clientConsented: true, providerIntlLicenseNote: "No, unless the Provider has the specific country's license/qualification requirements.", canEnableCrossBorder: 'No', notes: "Inbound services–The provider in the Blue zone can serve inbound for consultation only.\nFor outbound services: Provider from Red to client in Blue–Provider must hold Blue-zone license or have temporary registration.", updated: '2024-06-04' },
        { clientColorCode: 'Red', providerColorCode: 'Red', clientConsented: true, providerIntlLicenseNote: 'Yes', canEnableCrossBorder: "No, unless the Provider has \nthe specific country's license/ \nqualification requirements.", notes: "Inbound services: The provider in the Red zone is red for Inbound services. They must have the \nrequired license or qualification to practise (i.e. provide services) within the country.\n\nFor outbound services:\nOnly for those who have the specific license/specific qualification required.\n(E.g. a resident who migrates internationally can still provide online cross-border services.)", updated: '2024-06-04' }
    ],
    countries: {

"Australia": {
    name: "Australia",
    flag: "🇦🇺",
    region: "ANZ",
    regulatory: "Psychology Board of Australia / AHPRA (Australian Health Practitioner Regulation Agency) (ahpra.gov.au) (for psychologists); ACA (Australian Counselling Association), PACFA (Psychotherapy and Counselling Federation of Australia) (self-regulatory for counsellors).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "No legal req. Recommended: Diploma/Bachelor/Master in Counselling.",
        training: "To join ACA/PACFA: meet training & supervision criteria. (Registration with these bodies is voluntary but often expected.)",
        renewal: "Dependent on voluntary body membership."
    },
    counsellingPsychology: {
        regulated: true, // as "Psychologist" with endorsement
        requirements: "6+ years training (4-year psychology undergrad + 2-year accredited Masters/Doctorate in Counselling Psychology + supervised practice). Must obtain AHPRA registration + Counselling Psych endorsement.",
        training: "4-year psychology undergrad + 2-year accredited Masters/Doctorate in Counselling Psychology + supervised practice.",
        renewal: "Requires AHPRA registration renewal and ongoing CPD."
    },
    clinical: {
        regulated: true, // as "Psychologist" with endorsement
        requirements: "6-8 years training (Honours + Master/Doctorate in Clinical Psych + 1500+ hrs supervised practice). Must be registered psychologist and then receive Clinical Psychologist endorsement. AHPRA license & ongoing CPD mandatory.",
        training: "Honours + Master/Doctorate in Clinical Psych + 1500+ hrs supervised practice.",
        renewal: "AHPRA license & ongoing CPD mandatory."
    },
    notes: "Counselling: Self-regulated by ACA, PACFA. globalhealtheducation.com mentioned as a reference.\nPsychology: ahpra.gov.au for AHPRA.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"New Zealand": {
    name: "New Zealand",
    flag: "🇳🇿",
    region: "ANZ",
    regulatory: "NZ Psychologists Board (psychologistsboard.org.nz) (for psychologists under HPCA Act); NZAC (New Zealand Association of Counsellors) (self-regulatory for counsellors).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "No legal req. Typically Bachelor or Master of Counselling, Post graduate diploma as well. NZAC membership requires approved qualification + supervision.",
        training: "Anyone can use “counsellor” title, but employment usually demands NZAC registration.",
        renewal: "Dependent on NZAC membership if held."
    },
    counsellingPsychology: {
        regulated: true, // as "Psychologist"
        requirements: "6+ years education (usually Master of Counselling Psychology+ supervised internship). Must obtain Psychologist registration via NZ Psychologists Board and often work within a “counselling psychology” scope (often recognized by NZ Psychological Society College).",
        training: "Usually Master of Counselling Psychology+ supervised internship.",
        renewal: "Requires NZ Psychologists Board registration and Annual Practising Certificate."
    },
    clinical: {
        regulated: true, // as "Psychologist" with Clinical Psychologist scope
        requirements: "7+ years training (Psychology undergrad + Doctorate or Master’s/DipClinPsych in Clinical Psychology with 1500 hours supervised training). Must be registered and hold Annual Practising Certificate in the Clinical Psychologist scope.",
        training: "Psychology undergrad + Doctorate or Master’s/DipClinPsych in Clinical Psychology with 1500 hours supervised training.",
        renewal: "Requires Annual Practising Certificate."
    },
    notes: "Counselling: Self-regulated (e.g., NZAC). reddit.com mentioned as a reference for HPCA Act coverage.\nPsychology: psychologistsboard.org.nz for NZ Psychologists Board.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Fiji": {
    name: "Fiji",
    flag: "🇫🇯",
    region: "Oceania",
    regulatory: "Fiji Psychological Society/Oceania Psychology Register (self-regulated). Ministry of Health (health.gov.fj) (employment context).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "No set legal requirements. In practice: Postgrad Diploma in Counselling/Psychology preferred; register with Oceania Psychology or Fiji Assoc. of Social Workers.",
        training: "Postgrad Diploma in Counselling/Psychology preferred.",
        renewal: "Not applicable (legal regulation); voluntary bodies have own rules."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Typically B.A. or M.A. in Psychology. Often joins Fiji Psychological Society.",
        training: "Credibility via academic qualifications; no license needed.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s/PhD in Clinical Psychology (usually abroad). Often employed by MoH or NGOs.",
        training: "No license required; qualification-based practice.",
        renewal: "Not applicable."
    },
    notes: "General: Self-regulated via Fiji Psychological Society/Oceania Psychology Register. Calls in 2023 to establish a licensing board (fbcnews.com.fj).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Papua New Guinea": {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    region: "Oceania",
    regulatory: "PNG Counsellors Association (voluntary).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "No formal criteria. Credibility via training/PNGCA membership; no legal mandate.",
        training: "Many have Diploma in Guidance & Counselling (for school counselors) or short training.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Psychology degree (if available) or related field typically needed to be called a “psychologist.”",
        training: "No legal requirements beyond education.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s in Clinical Psychology rare in PNG. If present, works under MoH or mental health services by qualification.",
        training: "No license or registration.",
        renewal: "Not applicable."
    },
    notes: "Counselling: PNG Counsellors Association exists (voluntary). iac-irtac-research.org referenced.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Samoa": {
    name: "Samoa",
    flag: "🇼🇸",
    region: "Oceania",
    regulatory: "Allied Health Profession Council; Ministry of Health (https://www.health.gov.ws). (Regulated under Allied Health Professions Act 2014).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true,
        requirements: "Education: Diploma or degree in counselling or related field. Professional Associations: Allied Health Profession Council registration mandatory.",
        training: "Evidence of supervised experience.",
        renewal: "Allied Health Profession Council registration likely implies renewal."
    },
    counsellingPsychology: {
        regulated: true, // under same Act as other psychologists
        requirements: "Education: Master’s in psychology with counselling specialization. Professional Associations: Allied Health Profession Council registration.",
        training: "Substantial supervised counselling practice.",
        renewal: "Allied Health Profession Council registration likely implies renewal."
    },
    clinical: {
        regulated: true, // under Allied Health Professions Act
        requirements: "Education: Advanced degree in clinical psychology (Master’s or Doctorate). Professional Associations: Allied Health Profession Council registration.",
        training: "Supervised clinical experience.",
        renewal: "Allied Health Profession Council registration likely implies renewal."
    },
    notes: "General: All three professions are regulated under the Allied Health Professions Act 2014 and require registration with the Allied Health Profession Council.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards). Clinical Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards).",
        outbound: "Counselling: Implied allowed as per GREEN status (if registered). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Tonga": {
    name: "Tonga",
    flag: "🇹🇴",
    region: "Oceania",
    regulatory: "Health Practitioners Board; Ministry of Health (https://www.health.gov.to). (Regulated under Medical, Dental and Allied Health Practitioners Act 2021).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true,
        requirements: "Education: Diploma or degree in counselling or related field. Professional Associations: Health Practitioners Board registration mandatory.",
        training: "Supervised practice and good-character references.",
        renewal: "Health Practitioners Board registration likely implies renewal."
    },
    counsellingPsychology: {
        regulated: true, // under "Psychologist" title
        requirements: "Education: Advanced degree in psychology (Master’s in counselling/clinical psychology). Professional Associations: Health Practitioners Board registration.",
        training: "Supervised experience.",
        renewal: "Health Practitioners Board registration likely implies renewal."
    },
    clinical: {
        regulated: true, // under 2021 Act
        requirements: "Education: Doctoral or Master’s degree in clinical psychology. Professional Associations: Health Practitioners Board registration.",
        training: "Clinical supervised hours required.",
        renewal: "Health Practitioners Board registration likely implies renewal."
    },
    notes: "General: All three professions regulated under the Medical, Dental and Allied Health Practitioners Act 2021.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards). Clinical Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards).",
        outbound: "Counselling: Implied allowed as per GREEN status (if Board registered). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Vanuatu": {
    name: "Vanuatu",
    flag: "🇻🇺",
    region: "Oceania",
    regulatory: "Health Practitioners Board; Ministry of Health (https://www.health.gov.vu). (Health Practitioners Act (Cap 164)).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // Partially
        requirements: "Education: Relevant training or qualification typical.",
        training: "No formal national requirements. No dedicated licensing pathway for counsellors.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false, // no separate category
        requirements: "Education: Master’s or Doctorate in psychology typical.",
        training: "Board registration possible on case-by-case basis. No specific licensing process.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false, // licensing does not yet exist
        requirements: "Education: Master’s/PhD in clinical psychology expected.",
        training: "Board authorization possible. Health Practitioners Board registration if practising.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Regulation is broad under Health Practitioners Act (Cap 164).",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Kiribati": {
    name: "Kiribati",
    flag: "🇰🇮",
    region: "Oceania",
    regulatory: "Kiribati Medical Council; Ministry of Health (https://www.health.gov.ki). (Medical Services Act 1996).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // Indirectly Yes (if considered psychologist)
        requirements: "Education: No formal counsellor licence; counselling often by nurses/social workers with training.",
        training: "No set national requirements. No distinct registration for counsellors.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Education: Master’s or PhD in psychology. Professional Associations: Kiribati Medical Council registration.",
        training: "Council vetting of credentials.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as allied-health practitioner
        requirements: "Education: Postgraduate degree in clinical psychology. Professional Associations: Kiribati Medical Council registration.",
        training: "Evidence of practical training.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Medical Services Act 1996 is the primary legislation.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards). Clinical Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Marshall Islands": {
    name: "Marshall Islands",
    flag: "🇲🇭",
    region: "Oceania",
    regulatory: "Board of Health Professions; Ministry of Health & Human Services (https://www.rmihealth.org). (Health Professions Licensing Act 2009).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true,
        requirements: "Education: Bachelor’s or Master’s in counselling or related field. Professional Associations: Board of Health Professions licensure mandatory.",
        training: "Supervised practice hours.",
        renewal: "Licensure typically implies renewal."
    },
    counsellingPsychology: {
        regulated: true, // under "Psychologist" title
        requirements: "Education: Doctorate (PhD/PsyD) or Master’s in Counseling Psychology. Professional Associations: Board of Health Professions licensure.",
        training: "Graduate-supervised practice.",
        renewal: "Licensure typically implies renewal."
    },
    clinical: {
        regulated: true, // under same Act
        requirements: "Education: PhD or PsyD in Clinical Psychology. Professional Associations: Board of Health Professions licensure.",
        training: "Extensive supervised training.",
        renewal: "Licensure typically implies renewal."
    },
    notes: "General: Health Professions Licensing Act 2009 is key.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards). Clinical Psychology: Pending determination based on service zone status (regulation suggests inbound requires meeting local standards).",
        outbound: "Counselling: Implied allowed as per GREEN status (if Board licensed). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Solomon Islands": {
    name: "Solomon Islands",
    flag: "🇸🇧",
    region: "Oceania",
    regulatory: "Ministry of Health (https://www.health.gov.sb). (Health Workers Act 1982).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // Yes (potentially, as allied health)
        requirements: "Education: Certificate or diploma in community services typical.",
        training: "No universal statutory requirements. No dedicated counselling registration.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: Advanced degree in psychology (Master’s or PhD) expected.",
        training: "Ministry of Health validation of credentials. No formal licensing mechanism.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Master’s or Doctorate in Clinical Psychology.",
        training: "Ministry permission rather than formal license. No licensing board exists.",
        renewal: "Not applicable."
    },
    notes: "General: Health Workers Act 1982 is the relevant legislation.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
    },

        // --- EUROPE ---
        "Albania": {
            name: "Albania",
            flag: "🇦🇱",
            region: "Europe",
            regulatory: "Order of Psychologists of the Republic of Albania (https://www.ordini.al)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: true,
                requirements: "License to Practice: Registration with the Order of Psychologists of the Republic of Albania is required. A Bachelor’s degree plus a Master’s degree in Psychology from a recognized institution is required.",
                training: "Candidates must complete a supervised internship (approximately 1 year, ~1,000 hours) integrated into or following their Master’s studies and pass a state examination.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License to Practice: The same psychologist license applies. To practice as a counselling psychologist, one must follow the general pathway to become a licensed psychologist.",
                training: "Complete a Bachelor’s + Master’s in Psychology, fulfill the required supervised internship (≈1 year/1,000 hours), and pass the state exam. Additional postgraduate specialization in counseling is available but does not yield a separate legal title.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Registration with the Order of Psychologists (often with an indication of clinical specialization) is required. A candidate must hold a Master’s degree in Clinical Psychology or complete additional postgraduate specialized training in clinical psychology.",
                training: "This typically involves an extra year (or more) of supervised clinical internship (beyond the basic internship required for general psychology) and passing a specialized state examination. Once these requirements are met, the professional registers as a clinical psychologist with the Order of Psychologists.",
                renewal: "Not specified in provided data."
            },
            notes: "General: The practice of psychological counseling and its specializations (Counselling Psychology, Clinical Psychology) are regulated under the broader psychology profession by the Order of Psychologists of the Republic of Albania.\nURL: Order of Psychologists of the Republic of Albania: https://www.ordini.al",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Andorra": {
            name: "Andorra",
            flag: "🇦🇩",
            region: "Europe",
            regulatory: "Col·legi Oficial de Psicòlegs d’Andorra (for psychologists); Local health authorities.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, social work, or a related field.",
                training: "Many pursue specialized counselling courses and complete approximately 200–300 hours of supervised practice through local or private training programs.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s (or Doctorate) degree in psychology is required, followed by registration with the state authority. Education: Counselling psychologists typically hold a Master’s degree in Psychology (in line with level 7 of Andorra’s qualifications framework).",
                training: "Many complete their academic practica during the degree; no extra post‐graduation supervised practice is statutorily required.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s degree in Psychology and register with the Col·legi Oficial de Psicòlegs d’Andorra. Education: A Bachelor’s degree plus a Master’s degree in Psychology (aligned with Andorra’s level 7 framework) is required.",
                training: "Clinical training is obtained through the academic program with integrated practicum; no extra post‐graduate supervised practice is mandated beyond the degree’s practica.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: IAC-IRTAC-Research...confirms no specific regulation exists for counsellors in Andorra: https://iac-irtac-research.org/andorra/, WHO MiNDbank’s collection...also does not mandate licensure for “counsellors”: https://extranet.who.int/mindbank/collection/country/andorra/general_health_legislation\nCounselling Psychology: Professional/Regulatory Body: Local health authorities as reflected in Andorran health legislation (compiled by sources such as IAC‑IRTAC‑Research). Reference: IAC‑IRTAC‑Research – Andorra. Professional Associations: Practitioners generally register with the Col·legi Oficial de Psicòlegs d’Andorra.\nClinical Psychology: Licensing Body: Col·legi Oficial de Psicòlegs d’Andorra URL: https://elperiodic.ad/societat/el-collegi-de-psicolegs-endureix-lacces-a-la-professio/",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Austria": {
            name: "Austria",
            flag: "🇦🇹",
            region: "Europe",
            regulatory: "Austrian Federal Ministry of Social Affairs, Health, Care and Consumer Protection (and associated regional bodies/psychological chambers).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social work is common.",
                training: "Practitioners often complete postgraduate counselling courses and typically accumulate 200–300 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology (with additional postgraduate training for psychotherapy) is required, along with registration through regional authorities. Education: Counselling psychologists typically hold a Master’s degree in Psychology.",
                training: "Many complete their academic practica during the degree; no extra post‐graduation supervised practice is statutorily required.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must complete a Master’s degree in Psychology plus accredited postgraduate training with supervised practice, and register with the relevant regional authority. Education: A Bachelor’s degree plus a Master’s degree in Psychology (typically a 5‑year program) is required.",
                training: "For clinical psychology, postgraduate training is mandatory and must include approximately 1,500–2,500 hours of supervised practice integrated into the program.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Austrian Federal Ministry of Social Affairs, Health, Care and Consumer Protection provides the legal framework for health professions. No specific licence for “counsellors” is required: https://www.sozialministerium.at, Austrian legal databases (such as RIS – Rechtsinformationssystem) list regulations for clinical and psychotherapeutic professions, but “counselling” per se remains unprotected.\nCounselling Psychology: Professional/Regulatory Body: Austrian Federal Ministry of Social Affairs, Health, Care and Consumer Protection (and associated regional bodies). Reference: https://www.sozialministerium.at\nClinical Psychology: Licensing Body: Austrian Federal Ministry of Social Affairs, Health, Care and Consumer Protection URL: https://www.sozialministerium.at\nComment by Salman in source: \"Counselling and Clin Psychs to be considered part of psychotherapeutic professions\"",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Belarus": {
            name: "Belarus",
            flag: "🇧🇾",
            region: "Europe",
            regulatory: "Ministry of Health of the Republic of Belarus (http://minzdrav.gov.by/en)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally possess a Bachelor’s or Master’s degree in psychology or social work.",
                training: "Although not mandated by law, additional specialized training and practical supervised experience (around 200 hours) are common.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required and you must register with the state authority. Education: A higher education degree in Psychology (specialist or Master’s level) is required.",
                training: "Although not statutorily mandated, many professionals gain additional supervised experience through university practicum or on‐the‐job training.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s degree in Psychology and register with the state. Education: A university degree in Psychology (specialist or Master’s level) is required.",
                training: "While there is no formal additional supervised internship mandated now, clinical psychologists usually gain practical experience during their academic training.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Ministry of Health of the Republic of Belarus offers the official portal for health regulations: http://minzdrav.gov.by/en. A review of Belarusian health law does not reveal any specific statutory requirement for licensure as a “counsellor.”\nCounselling Psychology: Professional/Regulatory Body: Ministry of Health of the Republic of Belarus. Reference: http://minzdrav.gov.by/en\nClinical Psychology: Licensing Body: Ministry of Health of the Republic of Belarus URL: The ministry of health of the Republic of Belarus (repeated URL: http://minzdrav.gov.by/en)",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Belgium": {
            name: "Belgium",
            flag: "🇧🇪",
            region: "Europe",
            regulatory: "Belgian Commission of Psychologists (Commission des Psychologues / Commissie van Psychologen) (https://www.compsy.be/en); Federal Public Service (FPS) Health (https://www.health.belgium.be/en)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor's or Master's degree in a related field like psychology or social sciences is common.",
                training: "Specialized counselling courses from private institutions or universities are frequently pursued.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: You must register as a psychologist with the Commission des Psychologues / Commissie van Psychologen. Holding a recognized Master’s degree (or equivalent) in psychology is required. Education: A Bachelor’s degree in Psychology followed by a Master’s degree in Psychology (typically a total of 5 years of post‑secondary education) from a recognized institution is required.",
                training: "Candidates must complete a supervised internship—generally lasting about 1 year (approximately 1,000 hours)—integrated into or immediately following the Master’s program. Successful completion of this internship, along with passing the state professional exam, is necessary.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must be registered with the Belgian Commission of Psychologists (Commissie van Psychologen). Education: Master’s degree in Psychology (120 ECTS) from a recognized Belgian or equivalent foreign institution.",
                training: "Supervised Practice: Typically integrated into the Master’s program (hundreds of hours of practicum). Additional supervised clinical experience may be required to work in certain health settings. Clinical psychologists are recognized further under Belgian health regulations (Act on Health Care Professions).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: References: Belgian Commission of Psychologists: https://www.compsy.be/en; Federal Public Service (FPS) Health: https://www.health.belgium.be/en\nCounselling Psychology: Professional/Regulatory Body: Belgian Commission of Psychologists: https://www.compsy.be/en. All psychologists—including those practicing counselling psychology—must be registered with the Belgian Commission of Psychologists. This registration is mandatory to legally use the title “Psychologist” and to provide psychological services.\nClinical Psychology: Licensing Body: Belgian Commission of Psychologists https://www.compsy.be/en. Register as “Psychologist” with the Belgian Commission of Psychologists.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Bosnia & Herzegovina": {
            name: "Bosnia & Herzegovina",
            flag: "🇧🇦",
            region: "Europe",
            regulatory: "Federal Ministry of Health of Bosnia and Herzegovina (http://www.fbih.gov.ba); Regional or national psychological chambers.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social work is typically required.",
                training: "Counsellors often complete further specialized training courses and around 200 hours of supervised practice through local institutions.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s (or Doctorate) degree in psychology is required with mandatory registration through the relevant regional/national body. Education: A Master’s degree in Psychology (typically a 5‑year program) is the standard requirement.",
                training: "A supervised internship (approximately one year) is proposed in draft legislation, with many graduates already undertaking informal mentorship.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology, complete a one-year supervised internship, and pass the professional exam. Education: A Master’s degree in Psychology (typically 5 years of study) is required for independent practice.",
                training: "A supervised internship of approximately one year (around 2,000 hours) is expected before taking the state professional exam for clinical specialization.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Federal Ministry of Health of Bosnia and Herzegovina’s official website (http://www.fbih.gov.ba) shows regulation for clinical roles but does not mandate a licence specifically for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Regional or national psychological chambers (as referenced via the Federal Ministry of Health). Reference: http://www.fbih.gov.ba\nClinical Psychology: Licensing Body: Croatian or regional Psychological Chamber (per Federal Ministry of Health guidance) URL: http://www.fbih.gov.ba. Relevant Associations: Federal Ministry of Health of BiH; local Psychologists’ Chamber.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Bulgaria": {
            name: "Bulgaria",
            flag: "🇧🇬",
            region: "Europe",
            regulatory: "Bulgarian Ministry of Health (https://www.mh.government.bg)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors usually hold a Bachelor’s or Master’s degree in psychology, counselling, or social sciences.",
                training: "Additional specialized training courses and approximately 200–300 hours of supervised practice are frequently pursued.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with registration mandated by law. Education: Counselling psychologists generally hold a Master’s degree in Psychology.",
                training: "Many pursue specialized counselling courses and additional supervised practice (roughly 200–300 hours), though no state-mandated internship exists.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology and register with the state. Education: A Master’s (or Doctorate) degree in Psychology is required to practice as a clinical psychologist.",
                training: "Although Bulgaria does not mandate a formal post‐graduate supervised internship for the title “psychologist,” clinical psychologists typically acquire additional training (approximately 200–300 hours or more) during their academic studies and via voluntary clinical placements.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Bulgarian Ministry of Health (https://www.mh.government.bg) governs health professions; however, no separate legal requirement exists for the title “counsellor.”\nCounselling Psychology: Professional/Regulatory Body: Bulgarian Ministry of Health. Reference: https://www.mh.government.bg\nClinical Psychology: Licensing Body: Bulgarian Ministry of Health URL: https://www.mh.government.bg",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Croatia": {
            name: "Croatia",
            flag: "🇭🇷",
            region: "Europe",
            regulatory: "Croatian Psychological Chamber; Croatian Ministry of Health (https://zdravstvo.gov.hr)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Typically, a Bachelor’s or Master’s degree in psychology, counselling, or social work is expected.",
                training: "Counsellors often complete postgraduate training and about 200 hours of supervised practice through accredited programs.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, and registration is done via the Croatian Psychological Chamber. Education: A Master’s degree in Psychology is required for independent practice as a licensed psychologist.",
                training: "A mandatory one-year supervised internship (approximately 2,000 hours) is required before taking the state licensing exam.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s degree in Psychology, complete a one-year supervised internship (approximately 2,000 hours), and pass the state professional exam. Education: A Master’s degree in Psychology (5-year university program) is required.",
                training: "A mandatory one‑year supervised internship (approximately 2,000 hours) must be completed after graduation before passing the state exam.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Croatian health laws (available via the Croatian Ministry of Health: https://zdravstvo.gov.hr) protect titles such as “psychologist” and “psychotherapist,” but “counsellor” is not a separately regulated title.\nCounselling Psychology: Professional/Regulatory Body: Croatian Psychological Chamber (as indicated through national health regulations). Reference: https://zdravstvo.gov.hr\nClinical Psychology: Licensing Body: Croatian Psychological Chamber URL: https://narodne-novine.nn.hr/clanci/sluzbeni/305170.html",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Cyprus": {
            name: "Cyprus",
            flag: "🇨�",
            region: "Europe",
            regulatory: "Cyprus Psychological Society (under the Cyprus Ministry of Health: http://www.moh.gov.cy); Council for the Registration of Professional Psychologists.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social work is common.",
                training: "Many practitioners pursue additional specialized counselling training and approximately 200 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology (with additional supervised training for clinical practice) is required, with mandatory registration. Education: A Bachelor’s degree plus a postgraduate (Master’s) degree in an applied psychology field is required.",
                training: "Postgraduate training must include at least 1,000 hours of supervised practice, either integrated into the degree or completed afterward.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s degree in Psychology (with at least 1,000 hours of supervised practice) and register with the relevant authority. Education: A Bachelor’s degree plus a postgraduate (Master’s) degree in an applied psychology field is required.",
                training: "The postgraduate program must include at least 1,000 hours of supervised practice (integrated into the degree or completed afterward).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Cyprus Ministry of Health (http://www.moh.gov.cy) provides the legal framework for regulated mental health roles (e.g., clinical psychologists), yet no dedicated licence exists for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Cyprus Psychological Society (under the Cyprus Ministry of Health). Reference: http://www.moh.gov.cy. Registration is through the Council for the Registration of Professional Psychologists.\nClinical Psychology: Licensing Body: Cyprus Psychological Society (under the Ministry of Health) URL: http://www.moh.gov.cy. Registration is through the Council for the Registration of Professional Psychologists.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Czech Republic": {
            name: "Czech Republic",
            flag: "🇨🇿",
            region: "Europe",
            regulatory: "Czech Ministry of Health (https://www.mzcr.cz) and associated psychological associations/chambers.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "It is common to complete further training programs and around 200 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required along with registration with the state or a professional chamber. Education: A Master’s (or equivalent) degree in Psychology is required.",
                training: "For clinical specialties, additional postgraduate supervised training (which can span several years) is needed; for general counselling practice, supervised practice is typically pursued voluntarily or within employment.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s (or Doctorate) degree in Psychology and pass the state exam for clinical specialization. Education: A Bachelor’s degree plus a Master’s (or Doctorate) degree in Psychology is required.",
                training: "For clinical specialization, several years of supervised postgraduate training (potentially totaling around 5 additional years) is required; general clinical practice requires supervised practicum integrated into specialization training.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: According to the Czech Ministry of Health (https://www.mzcr.cz), regulation focuses on medical and psychotherapeutic professions rather than on “counselling” as a distinct field.\nCounselling Psychology: Professional/Regulatory Body: Czech Ministry of Health and associated psychological associations. Reference: https://www.mzcr.cz\nClinical Psychology: Licensing Body: Czech Ministry of Health and relevant professional associations URL: https://www.mzcr.cz.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Denmark": {
            name: "Denmark",
            flag: "🇩🇰",
            region: "Europe",
            regulatory: "Danish Supervisory Board (details via Retsinformation.dk)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Often a Bachelor’s/Master’s in a relevant field (education, social sciences, psychology).",
                training: "Additional recognized psychotherapeutic or counselling certificate from a private school or the Danish Psychotherapeutic Association (if they meet their standards of 4 years’ training).",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: Authorization from the Danish Supervisory Board (through the Danish Act on Psychologists). Minimum requirement: a Master’s degree (Cand.psych.) and further supervised practice to be an “authorized psychologist.” Education: Cand.psych. (5-year Master’s) from a recognized Danish university or an equivalent foreign Master’s recognized by Danish authorities.",
                training: "Supervised Practice Hours: After graduation, at least 2 years of supervised practice for full authorization (approx. 1,600+ hours), but it can vary.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Under the Danish Act on Psychologists, you need authorization from the Danish Supervisory Board to use the title “authorized psychologist.” Typically requires a Cand.psych. (Master’s in Psychology) + 2 years supervised practice. Education: Cand.psych. (5-year university degree in Psychology) or recognized equivalent. The degree must include relevant clinical/health psychology content.",
                training: "Supervised Practice: 2 years of supervised practice (about 1,600+ hours) post-degree to become an authorized psychologist.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Notes/References: Danish Act on Psychologists (Consolidation Act Not Regulated. 494): https://www.retsinformation.dk; Dansk Psykoterapeutforening: https://dpfo.dk/\nCounselling Psychology: Professional/Regulatory Body: Danish Supervisory Board, details via Retsinformation.dk\nClinical Psychology: Licensing Body: Danish Supervisory Board via https://www.retsinformation.dk (for the Act on Psychologists). Regulatory Body: Refer to https://www.retsinformation.dk for legislation details.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Estonia": {
            name: "Estonia",
            flag: "🇪🇪",
            region: "Europe",
            regulatory: "Estonian Psychological Association / Ministry of Social Affairs (https://www.sm.ee/en)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social sciences is typical.",
                training: "Additional specialized counselling courses and approximately 200+ hours of supervised practice are frequently pursued.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, and registration is mandatory. Education: A Master’s degree in Psychology (following a 3‑year Bachelor plus a 2‑year Master) is required.",
                training: "Graduates must complete a one-year supervised internship (approximately 1,600 hours) in an approved setting.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s degree in Psychology and complete a one-year supervised internship (approx. 1,600 hours). Education: A Bachelor’s plus a Master’s degree in Psychology (following EuroPsy standards: 3+2 years) is required.",
                training: "A supervised internship of about 1 year (approximately 1,600 hours) in an approved setting is mandatory.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Estonian Ministry of Social Affairs (https://www.sm.ee/en) governs health and social services without imposing specific licensure on counsellors.\nCounselling Psychology: Professional/Regulatory Body: Estonian Psychological Association / Ministry of Social Affairs. Reference: https://www.sm.ee/en. Authorization is granted by the Estonian Psychological Association in cooperation with the Ministry of Social Affairs.\nClinical Psychology: Licensing Body: Estonian Psychological Association / Ministry of Social Affairs URL: https://www.sm.ee/en. Certification is granted by the Estonian Psychological Association in cooperation with the Ministry of Social Affairs.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Finland": {
            name: "Finland",
            flag: "🇫🇮",
            region: "Europe",
            regulatory: "Valvira (National Supervisory Authority for Welfare and Health) (https://www.valvira.fi/web/en)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Many Finnish counsellors hold at least a Bachelor’s or Master’s in counseling, social work, or psychology.",
                training: "Private training programs in “Solution‐Focused Counselling,” “Cognitive Counselling,” or similar.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A license (right to practice) from Valvira (National Supervisory Authority for Welfare and Health). Requires a recognized Master’s degree in psychology and adherence to Valvira’s requirements. Education: 5-year Master’s degree in Psychology from a recognized Finnish (or equivalent) university.",
                training: "Supervised Practice Hours: Usually completed within the Master’s curriculum (practical training, placements). Additional supervised hours may be required depending on the university and subsequent specialization.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Issued by Valvira (National Supervisory Authority for Welfare and Health). Requires a 5-year Master’s in Psychology (or equivalent) plus any additional training for clinical roles. Education: 5-year Master’s in Psychology (3-year Bachelor + 2-year Master’s) from a Finnish university (or an approved foreign equivalent). Your studies must include clinical/health psychology modules if you plan to do clinical practice.",
                training: "Supervised Practice: Practical placements often integrated in the Master’s. Some workplaces may require extra supervised experience for clinical roles.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Notes/References: Valvira (National Supervisory Authority): https://www.valvira.fi/web/en\nCounselling Psychology: Professional/Regulatory Body: Valvira: https://www.valvira.fi/web/en\nClinical Psychology: Licensing Body: Valvira: https://www.valvira.fi/web/en. Must obtain a license to practice as a psychologist from Valvira (National Supervisory Authority for Welfare and Health).",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "France": {
            name: "France",
            flag: "🇫🇷",
            region: "Europe",
            regulatory: "ARS (Agence Régionale de Santé) (https://www.ars.sante.fr)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Many who practice “counselling” in France may have a Master’s in Psychology, or a specific “Diplôme Universitaire” in counselling/psychotherapy from a university.",
                training: "Various private institutes offer diplomas or certificates in “counselling.”",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: Must be listed on the ADELI register via the Agence Régionale de Santé (ARS) if you wish to use the title “psychologist.” Requires a recognized Master’s degree (Master 2) in Psychology. Education: Master 2 (Bac+5) in Psychology (recognized by the state).",
                training: "Supervised Practice Hours: Typically 500 hours (or more) of practicum during the Master’s program.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Must be on the ADELI register via the Agence Régionale de Santé (ARS). Typically requires a Master’s (Bac+5) in Psychology and appropriate clinical internships. Education: Master 2 (Bac+5) in Psychology from a recognized university.",
                training: "Clinical internships (usually 500+ hours) during the Master’s are standard. Supervised Practice: Largely done during Master’s, though some clinical positions may ask for additional post-degree supervised experience.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Notes/References: Legifrance (French Law Portal): https://www.legifrance.gouv.fr; ARS (Agence Régionale de Santé): https://www.ars.sante.fr\nCounselling Psychology: Professional/Regulatory Body: ARS (Agence Régionale de Santé): https://www.ars.sante.fr; Legifrance (French Law Portal): https://www.legifrance.gouv.fr\nClinical Psychology: Licensing Body: ARS: https://www.ars.sante.fr; Legifrance: https://www.legifrance.gouv.fr. To use the title “psychologue” (including clinical roles), you must register with the Agence Régionale de Santé (ARS) and obtain an ADELI number.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Germany": {
            name: "Germany",
            flag: "🇩🇪",
            region: "Europe",
            regulatory: "Regional Health Authorities (Approbationsbehörde); Federal Chamber of Psychotherapists (Bundespsychotherapeutenkammer - BPtK) (https://www.bptk.de)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'green',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Often a Bachelor’s/Master’s in Psychology or Social Work, then additional counselling training from private institutes.",
                training: "Some choose the Heilpraktiker (Psychotherapy) pathway to offer broader mental‐health interventions legally; however, this is not mandatory for basic “counselling.”",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: false,
                requirements: "License Needed: Approbation (license to practice) as a psychological psychotherapist if you are providing clinical/therapeutic services beyond basic counselling. Regulated by regional health authorities under the Psychotherapist Act (PsychThG). Education: 5-year integrated or Bachelor+Master in Psychology from a recognized university (incl. certain clinical components).",
                training: "Then, specialized post‐graduate psychotherapy training (3-5 years) to gain Approbation as a psychotherapist. Supervised Practice Hours: Approx. 1,200 to 1,800 hours of practical training + 600 hours supervised therapy sessions (varies by training institute).",
                renewal: "Not specified in provided data (Approbation license is for life, but CPD expected for psychotherapists)."
            },
            clinical: {
                regulated: true, // As "Psychologischer Psychotherapeut"
                requirements: "License to Practice: Psychologists providing clinical/psychotherapeutic services must obtain Approbation under the Psychotherapist Act (PsychThG). Requires a 5-year Psych degree + 3-5 years of postgrad psychotherapy training. Education: 5-year degree in Psychology (Bachelor + Master’s) covering clinical components.",
                training: "After that, to practice clinically (i.e., provide psychotherapy), you typically complete an additional 3-5 years of specialized training leading to Approbation as a “Psychologischer Psychotherapeut.” Supervised Practice: During the postgrad psychotherapy training, you must fulfill ~1,200 to 1,800 hours (depending on the institute) of supervised clinical work.",
                renewal: "Not specified in provided data (Approbation license is for life, but CPD expected)."
            },
            notes: "Counselling: Notes/References: Psychotherapist Act (PsychThG): https://www.gesetze-im-internet.de/psychthg/; Federal Chamber of Psychotherapists: https://www.bptk.de\nCounselling Psychology: Professional/Regulatory Body: Federal Chamber of Psychotherapists (Bundespsychotherapeutenkammer): https://www.bptk.de\nClinical Psychology: Licensing Body: Regional Health Authorities (Approbationsbehörde). Federal Chamber of Psychotherapists (Bundespsychotherapeutenkammer): https://www.bptk.de. Approbation is required for psychotherapeutic practice. “Clinical psychologist” per se is not a separate legal title, but effectively you become a licensed Psychological Psychotherapist for clinical/therapy work.",
            crossBorder: {
                inbound: "Counselling & Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling & Counselling Psychology: Implied allowed (Green). Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Greece": {
            name: "Greece",
            flag: "🇬🇷",
            region: "Europe",
            regulatory: "Hellenic Psychological Society (via the Ministry of Health: https://www.moh.gov.gr); Regional health authorities.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Many complete specialized counselling training and typically obtain around 200–300 hours of supervised clinical practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, along with registration with the appropriate authority. Education: A Bachelor’s (Ptychion) degree in Psychology is the minimum, though many practitioners hold a Master’s or Doctorate.",
                training: "There is no formal state-mandated post-degree supervised practice; however, many counselling psychologists acquire additional supervised clinical experience informally or through employer-based training.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s or Doctorate in Psychology and register with the appropriate regional authority. Education: A Bachelor’s (Ptychion) degree in Psychology is the minimum; many clinical psychologists hold a Master’s or Doctorate.",
                training: "There is no formal statutory supervised internship; however, clinical psychologists typically gain extensive practical experience through university practicum and subsequent employment.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Greek Ministry of Health (https://www.moh.gov.gr) oversees health professions. While psychotherapy is regulated, “counselling” per se remains unprotected.\nCounselling Psychology: Professional/Regulatory Body: Hellenic Psychological Society (via the Ministry of Health). Reference: https://www.moh.gov.gr\nClinical Psychology: Licensing Body: Hellenic Psychological Society (via the Ministry of Health) URL: https://www.moh.gov.gr. Registration is through the regional health authorities.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Hungary": {
            name: "Hungary",
            flag: "🇭🇺",
            region: "Europe",
            regulatory: "Hungarian Psychological Association (Magyar Pszichológiai Társaság); Hungarian Ministry of Human Capacities; Regional psychology chambers. (Government portal: https://www.kormany.hu/en)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social work is common.",
                training: "Practitioners typically pursue additional specialized training and about 200–300 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required and registration is mandatory. Education: A Master’s degree in Psychology is required.",
                training: "For clinical practice, additional postgraduate specialist training with supervised practice (approximately 2–3 years) is expected, while counselling psychology may require a shorter period of supervised practice.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s (or Doctorate) degree in Psychology and complete additional postgraduate specialist training (2–3 years of supervised practice) before registration. Education: A Master’s (or Doctorate) degree in Psychology is required.",
                training: "For clinical practice, additional postgraduate specialization training (usually 2–3 years with substantial supervised practice hours) is required.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Hungarian regulations, accessible via the Hungarian Government portal (https://www.kormany.hu/en), focus on clinical roles; no separate licensure for counsellors exists.\nCounselling Psychology: Professional/Regulatory Body: Hungarian Psychological Association (via national regulations). Reference: https://www.kormany.hu/en. Relevant Associations: Hungarian Ministry of Human Capacities; regional psychology chambers.\nClinical Psychology: Licensing Body: Hungarian Psychological Association (via national regulations) URL: https://www.kormany.hu/en. Relevant Associations: Hungarian Ministry of Human Capacities; regional psychology chambers.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Iceland": {
            name: "Iceland",
            flag: "🇮🇸",
            region: "Europe",
            regulatory: "Icelandic Directorate of Health (https://www.landlaeknir.is); Icelandic Psychological Association.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally have a Bachelor’s or Master’s degree in psychology, counselling, or related social sciences.",
                training: "Many pursue additional specialised training courses and complete approximately 200 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with mandatory registration. Education: A Cand.psych. degree (equivalent to a Master’s in Psychology plus integrated practical training) is required—typically a 5‑year program plus a supervised internship.",
                training: "Approximately 1 year of supervised practice (integrated in the degree) is required for general licensure; additional supervised training is needed for specialist roles.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must complete a Cand.psych. degree (including integrated supervised practice) and apply for authorization from the Icelandic Directorate of Health. Education: A Cand.psych. degree (equivalent to a Master’s in Psychology plus integrated supervised practice) is required (a 5-year academic program with practical training).",
                training: "Integrated supervised practice (approximately 1 year or about 1,500 hours) is included in the program; additional supervised practice is required for specialist certification.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Icelandic Directorate of Health (https://www.landlaeknir.is) confirms that while clinical psychology is regulated, the term “counsellor” is not legally protected.\nCounselling Psychology: Professional/Regulatory Body: Icelandic Directorate of Health and the Icelandic Psychological Association. Reference: https://www.landlaeknir.is. Authorization is granted by the Icelandic Directorate of Health after successful completion of academic and practical training.\nClinical Psychology: Licensing Body: Icelandic Directorate of Health and Icelandic Psychological Association URL: https://www.landlaeknir.is. Authorization is granted by the Icelandic Directorate of Health after verifying academic and practical training.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
         "Ireland": {
            name: "Ireland",
            flag: "🇮🇪",
            region: "Europe",
            regulatory: "CORU (Health & Social Care Professionals Council) (https://www.coru.ie) (statutory regulation in progress/pending for some roles); Psychological Society of Ireland (PSI) (https://www.psychologicalsociety.ie); Irish Association for Counselling and Psychotherapy (IACP) (https://www.iacp.ie).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'green',
                'clinical': 'green',
},
            counselling: {
                regulated: false, // Statutory regulation pending via CORU
                requirements: "Degree or Postgraduate Diploma in counselling or psychotherapy from a recognized institution. Commonly recognized membership bodies: IACP (Irish Association for Counselling and Psychotherapy) – typically requires at least a Level 8 or 9 qualification (on the NFQ), supervised practice hours, and adherence to a code of ethics. IAHIP (Irish Association of Humanistic and Integrative Psychotherapy).",
                training: "Supervised practice hours required for IACP membership. Minimum training standards for bodies like BACP/IACP (around 400 hours of taught work and 100+ hours of supervised placement). An assessed clinical placement. Adherence to an ethical framework.",
                renewal: "Not specified in provided data (likely depends on voluntary body membership)."
            },
            counsellingPsychology: {
                regulated: false, // Statutory regulation pending via CORU
                requirements: "License Needed: As of now, mandatory regulation for “counselling psychologist” is not fully enacted. Many are accredited under the Psychological Society of Ireland (PSI) Division of Counselling Psychology. Education: Many counselling psychologists hold a Master’s or Doctorate in Psychology.",
                training: "In practice, many acquire additional supervised clinical experience (which may amount to approximately 200–300 hours or more) and further training through postgraduate courses.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: false, // Statutory regulation pending via CORU
                requirements: "License to Practice: Currently, many clinical psychologists register with the Psychological Society of Ireland (PSI). Once CORU fully implements statutory registration for psychologists, it will become mandatory for all practice, including clinical. Education: Typically a Bachelor’s in Psychology (recognized by the Psychological Society of Ireland, PSI) + a Doctorate in Clinical Psychology (or occasionally a Master’s route, though doctorates are standard for clinical).",
                training: "Supervised Practice: The Doctorate includes placements (often 1,000+ hours total). Some Master’s-level programs also have considerable supervised clinical training.",
                renewal: "Not specified in provided data."
            },
            notes: "General: Statutory regulation for counsellors, psychotherapists, and psychologists (including counselling and clinical psychologists) is in progress or pending under CORU. Current practice often relies on voluntary registration/accreditation with professional bodies like IACP and PSI.",
            crossBorder: {
                inbound: "Counselling, Counselling Psychology & Clinical Psychology: Cross-border allowed.",
                outbound: "Counselling, Counselling Psychology & Clinical Psychology: Implied allowed (Green)."
            },
            updated: "2025-06-05"
        },
        "Italy": {
            name: "Italy",
            flag: "🇮🇹",
            region: "Europe",
            regulatory: "Ordine degli Psicologi; Italian Ministry of Health (https://www.salute.gov.it)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Many pursue postgraduate training programs and complete around 200–300 hours of supervised clinical practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required; registration is done through the Ordine degli Psicologi. Education: A Laurea Magistrale in Psicologia (a 5-year university program) is required.",
                training: "A mandatory one-year supervised internship (approximately 1,000 hours) is required to sit for the state exam. Successful candidates must pass the Esame di Stato and register with the Ordine degli Psicologi.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Laurea Magistrale in Psicologia (5-year degree), complete a 1-year supervised internship (approx. 1,000 hours), and pass the Esame di Stato. Education: A Laurea Magistrale in Psicologia (5-year program, typically 3+2 years) is required.",
                training: "A mandatory 12-month supervised internship (approximately 1,000 hours) must be completed, followed by the Esame di Stato (State Exam).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Italian Ministry of Health (https://www.salute.gov.it) regulates titles like “psychologist” and “psychotherapist” but does not impose a specific licence for practising as a counsellor.\nCounselling Psychology: Professional/Regulatory Body: Ordine degli Psicologi. Reference: https://www.salute.gov.it\nClinical Psychology: Licensing Body: Ordine degli Psicologi URL: https://www.salute.gov.it",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Latvia": {
            name: "Latvia",
            flag: "🇱🇻",
            region: "Europe",
            regulatory: "Latvian Psychological Association; Ministry of Health (https://www.vm.gov.lv)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social sciences is the norm.",
                training: "Additional specialized counselling courses and approximately 200 hours of supervised practice are commonly pursued.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, with mandatory registration. Education: A Master’s degree in Psychology (following a Bachelor’s + Master’s pathway, totaling about 5 years) is required.",
                training: "New graduates must work under supervision (typically for at least 1 year) until they obtain a psychologist’s certificate. Certification is granted by the Latvian Psychological Association upon assessment of supervised practice.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s degree in Psychology and complete a mandatory supervised period (typically at least 1 year) for certification. Education: A Master’s degree in Psychology (following a 3+2 system) is required.",
                training: "Graduates must complete a supervised practice period (typically at least 1 year) before obtaining full certification.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Latvia’s Ministry of Health (https://www.vm.gov.lv) does not list “counsellor” among the protected titles, confirming that the role is unlicensed.\nCounselling Psychology: Professional/Regulatory Body: Latvian Psychological Association. Reference: https://www.vm.gov.lv\nClinical Psychology: Licensing Body: Latvian Psychological Association URL: https://www.vm.gov.lv. Certification is granted by the Latvian Psychological Association.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Liechtenstein": {
            name: "Liechtenstein",
            flag: "🇱🇮",
            region: "Europe",
            regulatory: "Liechtenstein Health Office (often in coordination with Swiss/Austrian bodies) (https://www.llv.li)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally have a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Many pursue additional specialized training and supervised practical experience, though formal statutory requirements are minimal.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized degree in psychology (typically a Master’s or higher) is required, with registration usually managed via cross‑border arrangements with Swiss or Austrian authorities. Education: A Master’s degree in Psychology (usually obtained abroad) is required.",
                training: "There is no additional local supervised practice requirement; practitioners rely on the training completed in their home country. Recognition of foreign qualifications is managed by the Liechtenstein Health Office, often in coordination with Swiss/Austrian bodies.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s (or higher) degree in Psychology (often obtained abroad) and have your credentials recognized by the local authority. Education: A Master’s degree in Psychology (usually obtained abroad, equivalent to a Master’s) is required.",
                training: "There is no additional local supervised practice mandated; practitioners rely on the training completed in their home country. Recognition of foreign qualifications is managed by the Liechtenstein Health Office.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The official Liechtenstein government portal (https://www.llv.li) provides access to health regulations but does not require specific licensure for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Liechtenstein’s regulatory framework (coordinated with neighboring jurisdictions). Reference: https://www.llv.li\nClinical Psychology: Licensing Body: Liechtenstein Health Office (in coordination with Swiss/Austrian authorities) URL: https://www.llv.li.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Lithuania": {
            name: "Lithuania",
            flag: "🇱🇹",
            region: "Europe",
            regulatory: "Lithuanian Psychological Association (voluntary registration); Ministry of Health (https://sam.lrv.lt/en) (voluntary registration for psychologists)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'green',
                'clinical': 'green',
},
            counselling: {
                regulated: false,
                requirements: "Education: A Bachelor’s or Master’s degree in psychology, counselling, or social work is typically expected.",
                training: "Counsellors frequently pursue additional training courses and about 200 hours of supervised practice through accredited programs.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: { // Marked as GREEN, implying 'not regulated' in the context of strict RED/BLUE definitions
                regulated: false, // Based on "not protected or regulated by law"
                requirements: "Education: A Master’s degree in Psychology (as part of a Bachelor + Master sequence) is expected.", // "License Needed" and "mandatory registration" seems to conflict with overall "not regulated" statement for psychologist title. Green zone implies less restriction.
                training: "Currently, there is no legally mandated supervised practice period since Lithuania does not have a formal licensing framework for psychologists.",
                renewal: "Not specified in provided data."
            },
            clinical: { // Marked as GREEN
                regulated: false, // Based on "not regulated by a dedicated state-mandated licensure system"
                requirements: "Education: A Master’s degree in Psychology (via the Bologna system, 3+2 years) is required.",
                training: "Currently, no legally mandated supervised practice is required since the licensing framework is not fully established; many gain practical experience during their studies and on the job.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Lithuanian Ministry of Health (https://sam.lrv.lt/en) governs health professions; “counsellor” is not included as a regulated title.\nCounselling Psychology: Professional/Regulatory Body: Lithuanian Psychological Association. Reference: https://sam.lrv.lt/en. Many practitioners voluntarily join the Lithuanian Psychological Association for quality assurance and networking. Ministry of Health (voluntary registration).\nClinical Psychology: Licensing Body: Voluntary membership in the Lithuanian Psychological Association is common URL: The History of Lithuanian Psychology. Registration is voluntary through the Lithuanian Psychological Association. Ministry of Health (voluntary registration).",
            crossBorder: {
                inbound: "Counselling, Counselling Psychology & Clinical Psychology: Cross-border allowed.",
                outbound: "Counselling, Counselling Psychology & Clinical Psychology: Implied allowed (Green)."
            },
            updated: "2025-06-05"
        },
        "Luxembourg": {
            name: "Luxembourg",
            flag: "🇱🇺",
            region: "Europe",
            regulatory: "Luxembourg Ministry of Health (https://sante.public.lu); Luxembourg Psychological Society.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social sciences.",
                training: "Additional specialized counselling courses and approximately 200 hours of supervised practice are often pursued.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, and registration with the appropriate authority is mandatory. Education: A Master’s degree in Psychology (5 years of university studies) is required.",
                training: "A supervised internship (stage) is required – typically between 1 and 2 years (approximately 1,500–1,600 hours) depending on the specific pathway.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s degree in Psychology and complete a supervised internship (typically 1–2 years). Education: A Master’s degree in Psychology (5 years of university study) is required.",
                training: "A supervised internship (stage) of 1–2 years (approximately 1,500–1,600 hours) is mandated for full recognition, particularly for clinical roles.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Luxembourg Ministry of Health (https://sante.public.lu) regulates certain clinical roles, but “counsellor” itself remains unprotected.\nCounselling Psychology: Professional/Regulatory Body: Luxembourg Psychological Society (via the Ministry of Health). Reference: https://sante.public.lu. Registration is managed by the national authorities.\nClinical Psychology: Licensing Body: Luxembourg Psychological Society (via the Ministry of Health) URL: https://sante.public.lu. Registration is managed by the national authorities.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Malta": {
            name: "Malta",
            flag: "🇲🇹",
            region: "Europe",
            regulatory: "Malta Psychological Association (or the Ministry for Health’s Psychology Board) (https://www.mcp.org.mt / https://www.health.gov.mt)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors usually hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "It is common to complete additional specialized counselling training and 200–300 hours of supervised practical experience.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, with mandatory registration through Maltese authorities. Education: A Master’s degree in Psychology (following a Bachelor’s degree, totaling about 5 years) is required.",
                training: "After graduation, a mandatory supervised practice period of 2 years (approximately 2,000 hours) is required before obtaining full licensure.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must have a Master’s degree in Psychology and complete a mandatory 2-year supervised practice period before full licensure. Education: A Master’s degree in Psychology (following a Bachelor’s in Psychology) is required.",
                training: "A mandatory supervised practice period of 2 years (approximately 2,000 hours) is required before obtaining full licensure.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Malta Ministry for Health (https://www.health.gov.mt) does not specify licensure for counsellors as a separate category.\nCounselling Psychology: Professional/Regulatory Body: Malta Psychological Association (or the Ministry for Health). Reference: https://www.mcp.org.mt. Practitioners must be registered with the Malta Psychological Association (or the Ministry for Health’s Psychology Board).\nClinical Psychology: Licensing Body: Malta Psychological Association (or Ministry for Health’s Psychology Board) URL: https://www.health.gov.mt. Registration is through the Malta Psychological Association (or the Ministry for Health’s Psychology Board).",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Moldova": {
            name: "Moldova",
            flag: "🇲🇩",
            region: "Europe",
            regulatory: "Ministry of Health of Moldova (http://msmps.gov.md) (Voluntary registration for clinical psychology).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'green', // Clinical psychology explicitly GREEN
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Although not legally mandated, many pursue additional specialised counselling courses and supervised practice (around 200 hours).",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s (or Doctorate) degree in psychology is required with mandatory registration. Education: A university degree in Psychology (typically a 4–5 year program, with a Master’s being preferred) is expected.",
                training: "No formal supervised practice period is legislated; practical training is gained during the degree and on-the-job experience.",
                renewal: "Not specified in provided data."
            },
            clinical: { // Clinical is GREEN here
                regulated: false, // "not regulated by a dedicated licensing framework"
                requirements: "Education: A university degree in Psychology (preferably a Master’s degree) is required.",
                training: "There is no formal state‑mandated supervised internship; practical training is typically obtained during the degree program and through work experience.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Ministry of Health of Moldova (http://msmps.gov.md) governs health services without a dedicated licence for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Ministry of Health of Moldova. Reference: http://msmps.gov.md\nClinical Psychology: Licensing Body: Ministry of Health of Moldova (voluntary registration) URL: http://msmps.gov.md. There is no mandatory licensing exam; registration is often voluntary.",
            crossBorder: {
                inbound: "Counselling & Clinical Psychology: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling & Clinical Psychology: Implied allowed (Green). Counselling Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Monaco": {
            name: "Monaco",
            flag: "🇲🇨",
            region: "Europe",
            regulatory: "Monaco’s Ministry of Health (https://www.gouv.mc)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally hold a Bachelor’s or Master’s degree in a related field such as psychology or social work.",
                training: "Many pursue further specialized counselling training and supervised practical experience.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with registration mandated by local health regulations. Education: A Master’s degree in Psychology is required (typically obtained abroad, such as a French State Diploma).",
                training: "The training requirements are those of the country of qualification; no additional local supervised practice is imposed. Recognition is based on the foreign qualification (usually meeting French standards), with authorization granted by Monaco’s Ministry of Health.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology and have your foreign qualifications recognized for practice in Monaco. Education: A Master’s degree in Psychology is required (usually based on French standards, e.g. a French Laurea Magistrale).",
                training: "The training requirements are those of the country of qualification; for example, French-trained psychologists complete a 1-year internship (approximately 500 hours) as part of their degree. Practitioners must have their foreign qualifications recognized by Monaco’s authorities.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Monaco’s government portal (https://www.gouv.mc) provides information on health regulation, with no separate requirement for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Monaco’s Ministry of Health. Reference: https://www.gouv.mc\nClinical Psychology: Licensing Body: Monaco’s Ministry of Health URL: https://www.gouv.mc",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Montenegro": {
            name: "Montenegro",
            flag: "🇲🇪",
            region: "Europe",
            regulatory: "Montenegrin Psychological Association (or via the Ministry of Health: http://www.mzdravlje.me)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Additional specialised training and around 200 hours of supervised practice are common.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s degree in psychology is required, and registration with the national authority is mandatory. Education: A Master’s degree in Psychology (5-year university program) is required under draft legislation.",
                training: "A supervised internship of approximately 9 months is proposed as a requirement before licensure.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s degree in Psychology, complete a supervised internship (approximately 9 months), and pass a professional competency exam. Education: A Master’s degree in Psychology (5-year program) is required as per draft legislation.",
                training: "A supervised internship of approximately 9 months (around 2,000 hours) is required before taking the professional exam.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Montenegro’s Ministry of Health (http://www.mzdravlje.me) does not list “counsellor” among regulated professions.\nCounselling Psychology: Professional/Regulatory Body: Montenegrin Psychological Association (or via the Ministry of Health). Reference: http://www.mzdravlje.me. Registration is expected with the Montenegrin Psychological Association once the new law is implemented.\nClinical Psychology: Licensing Body: Montenegrin Psychological Association (or via the Ministry of Health) URL: http://www.mzdravlje.me. Registration is expected through the Montenegrin Psychological Association once regulations are finalized.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Netherlands": {
            name: "Netherlands",
            flag: "🇳🇱",
            region: "Europe",
            regulatory: "BIG Register (https://english.bigregister.nl/); Netherlands Institute of Psychologists (NIP) (https://www.psynip.nl)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Many counsellors hold at least a Bachelor’s/Master’s in Psychology, Social Work, or allied fields.",
                training: "They may undertake counselling training through private institutions. Some join voluntary bodies like the Algemene Beroepsvereniging voor Counseling (ABvC) if they complete recognized coursework and supervised hours.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: BIG register (Wet BIG) for healthcare psychologists: GZ-psycholoog. Requires a recognized Master’s plus post-master’s professional training. Education: Master’s in Psychology + post-master’s “GZ-opleiding” (2-year training program).",
                training: "Supervised Practice Hours: The 2-year GZ-psycholoog training includes practical clinical work (hundreds of supervised hours).",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Must first register as a “GZ-psycholoog” (general healthcare psychologist) and then complete further specialized training to be a “klinisch psycholoog.” The “klinisch psycholoog” is a post-master’s or post-GZ recognized specialism. Education: Master’s in Psychology plus completion of the 2-year “GZ-opleiding” to become a “GZ-psycholoog” (general healthcare psychologist). Further training (4-year post-GZ) is required to become a klinisch psycholoog (clinical psychologist).",
                training: "Supervised Practice: Each stage (GZ-opleiding and klinisch psycholoog route) includes extensive supervised clinical practice (hundreds of hours).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Notes/References: BIG Register: https://english.bigregister.nl/; Netherlands Institute of Psychologists (NIP): https://www.psynip.nl\nCounselling Psychology: Professional/Regulatory Body: BIG Register: https://english.bigregister.nl/; NIP (Dutch Institute of Psychologists): https://www.psynip.nl\nClinical Psychology: Licensing Body: BIG register: https://english.bigregister.nl/. Registered under the BIG register: GZ-psycholoog = basic healthcare psychologist; Klinisch psycholoog = advanced specialization.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "North Macedonia": {
            name: "North Macedonia",
            flag: "🇲🇰",
            region: "Europe",
            regulatory: "North Macedonian Psychological Association; Ministry of Health (http://www.mz.gov.mk) (draft regulations pending for some aspects).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "It is common to pursue additional training and around 200 hours of supervised practice to enhance clinical skills.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with mandatory registration. Education: A Master’s degree in Psychology (or an equivalent 4‑year degree under the older system) is typically required.",
                training: "Although national regulation is still in development, many new psychologists gain informal supervised experience (approximately 1 year) through mentorship arrangements.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology and register with the national authority. Education: A Master’s degree in Psychology (or equivalent under the previous system) is required.",
                training: "Although national regulations are still under development, many new clinical psychologists complete approximately 1 year of supervised practice informally before independent practice.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Ministry of Health of North Macedonia (http://www.mz.gov.mk) does not mandate a specific licence for counsellors.\nCounselling Psychology: Professional/Regulatory Body: North Macedonian Psychological Association. Reference: http://www.mz.gov.mk. Ministry of Health (draft regulations pending).\nClinical Psychology: Licensing Body: North Macedonian Psychological Association URL: http://www.mz.gov.mk. Registration is expected via the North Macedonian Psychological Association once formal regulation is enacted.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Norway": {
            name: "Norway",
            flag: "🇳🇴",
            region: "Europe",
            regulatory: "Norwegian Directorate of Health (https://www.helsedirektoratet.no); Norwegian Psychological Association.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors usually hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Additional specialized training programs and 200–300 hours of supervised practice are typically completed.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, and registration is mandatory. Education: A professional degree in Psychology (Cand.psychol., a 6‑year integrated program) is required.",
                training: "The final year of the program includes an integrated supervised internship (approximately 1,500 hours) in various settings.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must complete the Cand.psychol. degree (6-year integrated program including a supervised internship) and obtain authorization from the Norwegian Directorate of Health. Education: A professional degree in Psychology (Cand.psychol., a 6-year integrated program) is required.",
                training: "The program includes a supervised internship (approximately 1,500 hours) integrated into the final year.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Norwegian Directorate of Health (https://www.helsedirektoratet.no) regulates clinical roles (e.g. psychologists) but not counselling as an independent, licensed profession.\nCounselling Psychology: Professional/Regulatory Body: Norwegian Directorate of Health. Reference: https://www.helsedirektoratet.no. Graduates apply to the Norwegian Directorate of Health for authorization; many also join the Norwegian Psychological Association.\nClinical Psychology: Licensing Body: Norwegian Directorate of Health URL: https://www.helsedirektoratet.no. Graduates must apply for authorization with the Norwegian Directorate of Health.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Poland": {
            name: "Poland",
            flag: "🇵🇱",
            region: "Europe",
            regulatory: "Polish Psychological Association or relevant local chamber (governed by Act on the Profession of Psychologist, 2001).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Often a Bachelor’s or Master’s in psychology, pedagogy, or related field.",
                training: "Specialized counselling courses from training institutes (e.g., CBT or other approaches).",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: Registration as a psychologist under the 2001 Act. Requires a Master’s in Psychology from a recognized institution. Education: Master’s in Psychology from a recognized Polish or equivalent foreign institution.",
                training: "Supervised Practice Hours: Typically integrated into the Master’s program. Additional specialized training in counselling is optional but often done via private institutes.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: Must have a Master’s in Psychology. Then you typically undertake advanced clinical specialization recognized by relevant health authorities or professional associations. Education: Master’s in Psychology from a recognized institution.",
                training: "Supervised Practice: Integrated in the Master’s program. Additional supervised training is typically required for recognized clinical specializations (e.g., hospital placements).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: Notes/References: Act of 8 June 2001 on the profession of psychologist and self-government of psychologists (Ustawa o zawodzie psychologa)\nCounselling Psychology: Professional/Regulatory Body: Polish Psychological Association or relevant local chamber, though a formal nationwide licensing board is still somewhat decentralized.\nClinical Psychology: Licensing Body: Governed by the Act on the Profession of Psychologist (2001). Implementation is somewhat decentralized but functionally required to use “psychologist.” Clinical specialization often recognized by local health authorities or postgraduate certification.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Portugal": {
            name: "Portugal",
            flag: "🇵🇹",
            region: "Europe",
            regulatory: "Ordem dos Psicólogos Portugueses; Portuguese Ministry of Health (https://www.sns.gov.pt)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically possess a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Many pursue further specialized counselling training and typically complete around 200 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, and you must register with the Ordem dos Psicólogos Portugueses. Education: A Mestrado em Psicologia (integrated 5‑year program: 3‑year licenciatura + 2‑year master) is required to practice as a psychologist.",
                training: "A mandatory professional internship (Estágio) of about 12 months (approximately 1,500–1,600 hours) is required after graduation. Successful completion of the internship (assessed by the Ordem dos Psicólogos Portugueses) leads to registration as a licensed psychologist.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Mestrado em Psicologia (Master’s degree) and complete a mandatory professional internship (approximately 1,500–1,600 hours). Education: A Mestrado em Psicologia (integrated 5-year program: 3-year licenciatura + 2-year mestrado) is required.",
                training: "A mandatory professional internship (Estágio) of approximately 1,500–1,600 hours is required after graduation.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Portuguese Ministry of Health (https://www.sns.gov.pt) oversees regulated mental health professions but does not impose licensure for the generic title “counsellor.”\nCounselling Psychology: Professional/Regulatory Body: Ordem dos Psicólogos Portugueses. Reference: https://www.sns.gov.pt\nClinical Psychology: Licensing Body: Ordem dos Psicólogos Portugueses URL: https://www.sns.gov.pt. Registration is through the Ordem dos Psicólogos Portugueses upon successful completion of the internship.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Romania": {
            name: "Romania",
            flag: "🇷🇴",
            region: "Europe",
            regulatory: "Romanian College of Psychologists; Romanian Ministry of Health (https://ms.ro)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'blue',
                'clinical': 'blue',
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Additional specialised training courses and around 200 hours of supervised practice are frequently pursued to ensure competency.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with registration via the Romanian College of Psychologists. Education: A Master’s degree in Psychology (following a 3‑year Bachelor’s, typically a 3+2 model) is standard for professional practice.",
                training: "A supervised practice period of at least 2 years is expected (gaining experience as a “practicant” before full independent practice). Advancement to autonomous practice requires passing an evaluation/exam by the Romanian College of Psychologists.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a Master’s (or Doctorate) degree in Psychology, complete at least 2 years of supervised practice, and pass a professional evaluation exam. Education: A Master’s (or Doctorate) degree in Psychology is required (following the standard 3+2 model).",
                training: "A supervised practice period of at least 2 years is required (gaining experience as a “practicant” before independent practice).",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Romanian Ministry of Health (https://ms.ro) regulates clinical and psychotherapeutic roles without a dedicated licence for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Romanian College of Psychologists. Reference: https://ms.ro\nClinical Psychology: Licensing Body: Romanian College of Psychologists URL: https://ms.ro. Registration is through the Romanian College of Psychologists after passing a professional evaluation exam.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services - consent needed & limited to consultation only."
            },
            updated: "2025-06-05"
        },
        "Russia": {
            name: "Russia",
            flag: "🇷🇺",
            region: "Europe",
            regulatory: "Russian Ministry of Health (https://www.rosminzdrav.ru); Russian Psychological Society.",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors usually hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Further specialized counselling training and 200–300 hours of supervised practice are common for professional development.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with mandatory registration under Russian health laws. Education: A Specialist or Master’s degree in Psychology (typically a 5‑year program) is required.",
                training: "There is no formal national requirement for additional supervised practice, though many clinicians pursue voluntary postgraduate training (around 200–300 hours) if seeking specialization in psychotherapy.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Specialist or Master’s/Doctorate degree in Psychology and register with the Russian Ministry of Health. Education: A Specialist or Master’s/Doctorate degree in Psychology (typically a 5-year program) is required.",
                training: "There is no formal state‑mandated additional supervised practice for general psychology; however, clinical specialization usually involves voluntary postgraduate training (approximately 200–300 hours or more) if pursuing psychotherapy credentials.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Russian Ministry of Health (https://www.rosminzdrav.ru) governs clinical practice, with no separate regulation for counsellors.\nCounselling Psychology: Professional/Regulatory Body: Russian Ministry of Health. Reference: https://www.rosminzdrav.ru. Practitioners generally register based on their academic qualifications; some may seek further accreditation for clinical specialties.\nClinical Psychology: Licensing Body: Russian Ministry of Health URL: https://www.rosminzdrav.ru. Practice is based on academic qualifications; further certification for clinical specialties is pursued on a voluntary basis.",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "San Marino": {
            name: "San Marino",
            flag: "🇸🇲",
            region: "Europe",
            regulatory: "San Marino regulatory authority for health professions (often by equivalence with Italian Ordine degli Psicologi). (Government portal: https://www.sanmarino.sm)",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors typically hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Additional training courses and supervised practical experience (often around 200 hours) are pursued voluntarily.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s (or higher) degree in psychology is required, with registration mandated by local legal requirements. Education: A Master’s-equivalent degree in Psychology is required (typically recognized via the Italian system, i.e. Laurea Magistrale in Psicologia).",
                training: "The standard Italian supervised internship (approximately 1,000 hours over 12 months) is accepted. San Marino recognizes foreign qualifications (typically Italian), and practitioners must register with the relevant San Marinese authority.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or higher) degree in Psychology and have your qualifications recognized by San Marino’s regulatory authority. Education: A Master’s-equivalent degree in Psychology is required (typically recognized via the Italian system, e.g. Laurea Magistrale in Psicologia).",
                training: "The standard Italian supervised internship (approximately 1,000 hours over 12 months) is accepted without additional local requirements. Recognition is based on the Italian licensure system; practitioners must register with the relevant San Marinese authority once credentials are verified.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: San Marino’s official portal (https://www.sanmarino.sm) does not specify any licensing requirement for counsellors.\nCounselling Psychology: Professional/Regulatory Body: San Marino regulatory authority for health professions. Reference: https://www.sanmarino.sm\nClinical Psychology: Licensing Body: San Marino regulatory authority for health professions URL: https://www.sanmarino.sm",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },
        "Serbia": {
            name: "Serbia",
            flag: "🇷🇸",
            region: "Europe",
            regulatory: "Serbian Psychological Chamber; Serbian Ministry of Health (http://www.zdravlje.gov.rs) (pending full regulation for some aspects).",
            colorCode: {
                'counselling': 'green',
                'counselling-psychology': 'red',
                'clinical': 'red'
},
            counselling: {
                regulated: false,
                requirements: "Education: Counsellors generally hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
                training: "Many complete further specialised training and approximately 200–300 hours of supervised practice.",
                renewal: "Not specified in provided data."
            },
            counsellingPsychology: {
                regulated: true,
                requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, with registration with the national psychological chamber. Education: A Master’s degree in Psychology (or equivalent under the Bologna system) is required.",
                training: "A one-year supervised internship is generally expected (either as a probationary period or via formal mentorship), although full statutory regulation is pending. Many psychologists join the Serbian Psychological Chamber, and future legislation is expected to formalize the internship and examination process.",
                renewal: "Not specified in provided data."
            },
            clinical: {
                regulated: true,
                requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology, complete a supervised internship (typically 1 year), and pass a professional exam. Education: A Master’s (or Doctorate) degree in Psychology is required (as per the Bologna system).",
                training: "A supervised internship (typically about 1 year) is expected before full independent practice, though formal regulation is pending. Registration is obtained via the Serbian Psychological Chamber once the supervised period and professional exam are completed.",
                renewal: "Not specified in provided data."
            },
            notes: "Counselling: The Serbian Ministry of Health (http://www.zdravlje.gov.rs) oversees health services but does not require a specific licence for the title “counsellor.”\nCounselling Psychology: Professional/Regulatory Body: Serbian Psychological Chamber. Reference: http://www.zdravlje.gov.rs. Ministry of Health (pending full regulation).\nClinical Psychology: Licensing Body: Serbian Psychological Chamber URL: http://www.zdravlje.gov.rs. Serbian Ministry of Health (pending full regulation).",
            crossBorder: {
                inbound: "Counselling: Cross-border allowed. Counselling Psychology & Clinical Psychology: Inbound Services - License / specific qualification required.",
                outbound: "Counselling: Implied allowed (Green). Counselling Psychology & Clinical Psychology: Outbound services only for those with specific license/qualification."
            },
            updated: "2025-06-05"
        },

// Assuming the previous entry was "Serbia": { ... },
"Slovakia": {
    name: "Slovakia",
    flag: "🇸🇰",
    region: "Europe",
    regulatory: "Slovak Psychological Society (or equivalent regulatory authority); Slovak Ministry of Health (https://www.health.gov.sk).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'blue',
        'clinical': 'blue',
},
    counselling: {
        regulated: false,
        requirements: "Education: Counsellors typically have a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
        training: "Additional specialised counselling training and roughly 200 hours of supervised practice are common.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: A recognized Master’s degree in psychology is required, with mandatory registration. Education: A Master’s degree in Psychology (a 5‑year program) is required for practice.",
        training: "In healthcare settings, additional supervised practice (2–3 years for specialization) is needed; for counselling psychology, a shorter supervised period (around 1–2 years) is typical. Registration is obtained via the Slovak Psychological Society or an equivalent authority once the supervised practice is completed.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: You must complete a Master’s degree in Psychology and, for clinical practice, complete additional supervised specialization training (typically 1–2 years) and pass a state certification exam. Education: A Master’s degree in Psychology (5-year university program) is required.",
        training: "For clinical practice, additional supervised specialization training (typically 1–2 years) is required, including practical work integrated into the training program. Registration is via the Slovak Psychological Society or equivalent regulatory body after completing the required supervised practice and passing the certification exam.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: The Slovak Ministry of Health (https://www.health.gov.sk) regulates health professions generally; “counsellor” is not a title subject to statutory licensure.\nCounselling Psychology: Professional/Regulatory Body: Slovak Psychological Society (or equivalent regulatory authority). Reference: https://www.health.gov.sk\nClinical Psychology: Licensing Body: Slovak Psychological Society (or equivalent regulatory authority) URL: https://www.health.gov.sk.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed (prerequisite qualification & registration). Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services - consent needed & limited to consultation only. Clinical Psychology: Outbound services - consent needed & limited to consultation only."
    },
    updated: "2025-06-05"
},
"Slovenia": {
    name: "Slovenia",
    flag: "🇸🇮",
    region: "Europe",
    regulatory: "Slovenian Ministry of Health (https://www.gov.si/en/ministries/ministry-of-health) or the Slovenian Psychological Chamber.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'blue',
        'clinical': 'blue',
},
    counselling: {
        regulated: false,
        requirements: "Education: Counsellors generally hold a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
        training: "Additional specialized counselling courses and around 200 hours of supervised practice are frequently pursued.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: Holding a recognized Master’s or Doctorate degree in psychology is required, with mandatory registration. Education: A Master’s degree in Psychology is required (the current standard under the Bologna process).",
        training: "A 12-month supervised practicum is mandated by recent regulations. Graduates must pass a professional exam and register with the Slovenian Ministry of Health (or Psychological Chamber) to practice.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology and complete a one-year supervised practicum, then pass a professional exam. Education: A Master’s (or Doctorate) degree in Psychology is required (currently a 5‑year Bologna Master).",
        training: "A supervised internship of about 1 year (approximately 1,000 hours) is mandatory as part of the practical training. Registration is obtained after passing a professional exam administered by the Slovenian Ministry of Health or Psychological Chamber.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: The Slovenian Ministry of Health (https://www.gov.si/en/ministries/ministry-of-health) shows that while related clinical professions are regulated, counselling is not separately licensed.\nCounselling Psychology: Professional/Regulatory Body: Slovenian Ministry of Health (or the Slovenian Psychological Chamber). Reference: https://www.gov.si/en/ministries/ministry-of-health\nClinical Psychology: Licensing Body: Slovenian Ministry of Health or the Slovenian Psychological Chamber URL: https://www.gov.si/en/ministries/ministry-of-health.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed (prerequisite qualification & registration). Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services - consent needed & limited to consultation only. Clinical Psychology: Outbound services - consent needed & limited to consultation only."
    },
    updated: "2025-06-05"
},
"Spain": {
    name: "Spain",
    flag: "🇪🇸",
    region: "Europe",
    regulatory: "Colegio Oficial de Psicólogos (via the Spanish Ministry of Health: https://www.mscbs.gob.es).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'blue',
        'clinical': 'blue',
},
    counselling: {
        regulated: false,
        requirements: "Education: Counsellors typically possess a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
        training: "It is common for counsellors to complete further specialized training courses and approximately 200 hours of supervised practice to ensure clinical competence.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: A recognized Master’s or Doctorate degree in psychology is required, and you must register with the Colegio Oficial de Psicólogos. Education: A combined Bachelor’s plus Master’s degree in Psychology (typically 6 years total) is required for licensed practice as a psychologist.",
        training: "For clinical or counselling specialties, a supervised internship is part of the Master’s program (often 500 hours) or the full-time clinical residency (PIR) that can total thousands of hours for clinical roles. Registration with the Colegio Oficial de Psicólogos is mandatory; the route may vary between the General Health Psychologist (via Master’s practicum) or Clinical Psychologist (via a PIR residency exam).",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: You must hold a recognized Master’s (or Doctorate) degree in Psychology and complete the required supervised training (via Master’s practicum or clinical residency such as the PIR exam for clinical specialization). Education: A combined Bachelor’s plus Master’s degree in Psychology (typically 6 years total) is required.",
        training: "Clinical training includes a supervised practicum integrated into the Master’s program (at least 500 hours) or a full-time clinical residency (PIR) for specialized clinical psychology. Registration is through the Colegio Oficial de Psicólogos after successful completion of the required supervised training.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: The Spanish Ministry of Health (https://www.mscbs.gob.es) regulates professions such as psychologists and psychotherapists; there is no separate legal requirement for “counsellors.”\nCounselling Psychology: Professional/Regulatory Body: Colegio Oficial de Psicólogos (via the Spanish Ministry of Health). Reference: https://www.mscbs.gob.es\nClinical Psychology: Licensing Body: Colegio Oficial de Psicólogos (via the Spanish Ministry of Health) URL: https://www.mscbs.gob.es.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed (prerequisite qualification & registration). Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services - consent needed & limited to consultation only. Clinical Psychology: Outbound services - consent needed & limited to consultation only."
    },
    updated: "2025-06-05"
},
"Sweden": {
    name: "Sweden",
    flag: "🇸🇪",
    region: "Europe",
    regulatory: "Socialstyrelsen (National Board of Health and Welfare) (https://www.socialstyrelsen.se)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'blue',
        'clinical': 'blue',
},
    counselling: {
        regulated: false,
        requirements: "Usually a Bachelor’s or Master’s in psychology, social work, or counselling from a recognized institution.",
        training: "Additional training in “Samtalsterapi” (talk therapy) or “samtalsbehandling” through private or university certificate programs.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: License as a “leg. psykolog.” Requires a 5-year Master’s in Psychology + 1-year supervised practice (PTP) in Sweden. Education: 5-year integrated Psychology program (300 ECTS) + 1-year supervised practice (PTP).",
        training: "Supervised Practice Hours: The PTP year typically amounts to ~1,500–1,600 hours of supervised work.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: 5-year psychology program + 1-year (PTP) supervised practice, leading to “leg. psykolog.” For advanced clinical/psychotherapeutic roles, additional recognized specializations exist. Education: 5-year integrated Psychology program (300 ECTS) + 1-year PTP (praktisk tjänstgöring) of supervised practice.",
        training: "Supervised Practice: The PTP year is ~1,500–1,600 hours in a clinical setting.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: Notes/References: Socialstyrelsen (National Board of Health and Welfare): https://www.socialstyrelsen.se\nCounselling Psychology: Professional/Regulatory Body: Socialstyrelsen: https://www.socialstyrelsen.se\nClinical Psychology: Licensing Body: Socialstyrelsen: https://www.socialstyrelsen.se. After completing the PTP, you apply to Socialstyrelsen to become “Legitimerad psykolog” (licensed psychologist).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed (prerequisite qualification & registration). Clinical Psychology: Cross-border allowed (prerequisite qualification & registration).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services - consent needed & limited to consultation only. Clinical Psychology: Outbound services - consent needed & limited to consultation only."
    },
    updated: "2025-06-05"
},
"Switzerland": {
    name: "Switzerland",
    flag: "🇨🇭",
    region: "Europe",
    regulatory: "Swiss Federal Office of Public Health; Cantonal authorities; Federation of Swiss Psychologists (FSP) (https://www.psychologie.ch/)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Many Swiss‐based counsellors hold a Bachelor’s/Master’s in psychology or social work plus a postgraduate certificate in counselling.",
        training: "The FSP (Föderation der Schweizer Psychologinnen und Psychologen) or professional counseling associations set voluntary guidelines. “Psychotherapist” is regulated under the PsyG, but “counsellor” is not.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: A recognized Master’s in Psychology + compliance with cantonal/federal rules. “Psychotherapist” is further regulated, requiring advanced specialization. Education: Bachelor + Master’s in Psychology from a recognized university.",
        training: "Supervised Practice Hours: Varies by canton and specialism. For psychotherapy (not exactly “counselling psychology”), advanced specialized training is required.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: A recognized Bachelor + Master’s in Psychology is mandatory to use “psychologist.” Additional specialized postgraduate training is needed for “psychotherapist.” Education: Bachelor + Master’s in Psychology from a recognized university. Additional specialized postgraduate training for “psychotherapy” or recognized “clinical psychology” track.",
        training: "Supervised Practice: Varies by canton and specialization. For “psychological psychotherapist,” you need thousands of hours across coursework and supervised practice.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: Notes/References: Swiss Psychology Professions Act (PsyG): https://www.admin.ch/opc/de/classified-compilation/20130559/index.html; Federation of Swiss Psychologists: https://www.psychologie.ch/\nCounselling Psychology: Professional/Regulatory Body: Swiss Federal Office of Public Health, Swiss Federation of Psychologists (FSP): https://www.psychologie.ch/\nClinical Psychology: Licensing Body: Swiss Federal Office of Public Health, plus cantonal authorities. Federation of Swiss Psychologists (FSP): https://www.psychologie.ch/. Under the Psychology Professions Act (PsyG), “psychologist” is recognized. “Clinical psychologist” or “psychotherapist” requires further certification, often overseen by cantonal authorities or the FSP.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Ukraine": {
    name: "Ukraine",
    flag: "🇺🇦",
    region: "Europe",
    regulatory: "Ukrainian Psychological Association; Ministry of Health (https://moz.gov.ua)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Education: Counsellors typically have a Bachelor’s or Master’s degree in psychology, counselling, or social work.",
        training: "Many pursue additional training courses and complete approximately 200 hours of supervised practice, though requirements are not statutorily set.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: A recognized Master’s degree in psychology is required, with mandatory registration with the state. Education: A Master’s degree in Psychology is required for independent practice.",
        training: "Although no formal supervised practice period is legislated, many psychologists complete additional training (approximately 200 hours or more) through internships or mentorship programs.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: You must hold a recognized Master’s degree in Psychology and register with the state. Education: A Master’s degree in Psychology is required.",
        training: "Although not always strictly mandated, many clinical psychologists complete additional supervised practice (typically around 200+ hours) through internships or on-the‑job training.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: The Ministry of Health of Ukraine (https://moz.gov.ua) does not list “counsellor” among the regulated health professions.\nCounselling Psychology: Professional/Regulatory Body: Ukrainian Psychological Association. Reference: https://moz.gov.ua. Registration with the Ukrainian Psychological Association is common for maintaining professional standards.\nClinical Psychology: Licensing Body: Ukrainian Psychological Association URL: https://moz.gov.ua. Registration with the Ukrainian Psychological Association is common for standardization and quality assurance.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"United Kingdom": {
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    regulatory: "Health and Care Professions Council (HCPC) (https://www.hcpc-uk.org); British Psychological Society (BPS) (https://www.bps.org.uk) (accreditation); Voluntary bodies for counsellors (BACP, UKCP, NCS, NCPS).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Often a Level 4 or Level 5 Diploma in Counselling (or higher) from a recognized awarding body. Most reputable counsellors also hold a Bachelor’s or Master’s in counselling/related fields plus substantial supervised practice hours. Membership with BACP (British Association for Counselling & Psychotherapy), UKCP, or NCS (National Counselling Society) or NCPS is typical.",
        training: "These bodies generally require: Minimum training standards (around 400 hours of taught work and 100+ hours of supervised placement). An assessed clinical placement. Adherence to an ethical framework.",
        renewal: "Not specified in provided data (dependent on voluntary body membership)."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: Must register with the Health and Care Professions Council (HCPC) under the domain of “Practitioner Psychologist.” Requires completing a BPS (British Psychological Society) accredited postgraduate program in Counselling Psychology (Doctorate or equivalent), plus supervised training. Education: BPS‐accredited Doctorate in Counselling Psychology (or equivalent M-level + top-up route).",
        training: "Supervised Practice Hours: Typically 450+ hours of supervised counselling/therapy practice within the doctoral program. Additional requirements (personal therapy hours, supervised placement, etc.) vary by institution.",
        renewal: "Not specified in provided data (HCPC registration requires renewal)."
    },
    clinical: {
        regulated: true,
        requirements: "License to Practice: You must complete a Doctorate in Clinical Psychology (DClinPsych) accredited by the British Psychological Society (BPS) and then register with the HCPC to use the title “Clinical Psychologist.” Education: A BPS-accredited undergraduate in Psychology + a Doctorate in Clinical Psychology (DClinPsych) (3-year program) is the standard route.",
        training: "Supervised Practice: The DClinPsych includes placements totaling up to 1,500+ hours of supervised clinical experience (varies by university).",
        renewal: "Not specified in provided data (HCPC registration requires renewal)."
    },
    notes: "Counselling: Notes/References: BACP: https://www.bacp.co.uk; UKCP: https://www.psychotherapy.org.uk/; Professional Standards Authority: https://www.professionalstandards.org.uk/\nCounselling Psychology: Professional/Regulatory Body: HCPC: https://www.hcpc-uk.org; BPS Division of Counselling Psychology: https://www.bps.org.uk/\nClinical Psychology: Licensing Body: HCPC: https://www.hcpc-uk.org; BPS (accreditation): https://www.bps.org.uk. Must register with the Health and Care Professions Council (HCPC) to legally use the title “Clinical Psychologist.”",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
// Assuming the previous European entries ended, this continues the 'countries' object
"Brunei Darussalam": {
    name: "Brunei Darussalam",
    flag: "🇧🇳",
    region: "Asia",
    regulatory: "Allied Health Professions Council of Brunei Darussalam (AHPCBD) (for regulated roles); Brunei Counselling Association (PERKAB) (voluntary for counsellors).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Brunei. Practitioners typically hold relevant academic qualifications (usually a Master’s in Counselling from Universiti Brunei Darussalam or overseas universities).",
        training: "Voluntary registration is possible through professional bodies, such as the Brunei Counselling Association (PERKAB), but it is not legally mandatory.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Psychologists who practice counselling would need to meet the general psychologist registration requirements rather than specific counselling psychology standards. No separate legal licensing exists for counselling psychologists.",
        training: "Practitioners typically register as general psychologists with the Allied Health Professions Council of Brunei Darussalam (AHPCBD).",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Must hold at least a Master’s or Doctorate in Clinical Psychology from a recognized institution. Requires supervised clinical practice experience, registration with the Allied Health Professions Council of Brunei Darussalam (AHPCBD)...",
        training: "...and compliance with ongoing continuing education for annual renewal.",
        renewal: "Annual renewal"
    },
    notes: "Counselling: Counsellors typically operate without government-issued credentials.\nCounselling Psychology: No separate legal licensing exists for counselling psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"China": {
    name: "China",
    flag: "🇨🇳",
    region: "Asia",
    regulatory: "National Health Commission (for psychotherapists in medical settings); Chinese Psychological Society (voluntary association).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Currently, no mandatory requirements exist. Historically, counsellors required approved training and passing a national exam. Today, counsellors typically possess a psychology or education-related degree.",
        training: "They might also obtain voluntary certificates from professional associations like the Chinese Psychological Society, but these are not legally required.",
        renewal: "Not applicable as national regulation discontinued."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No separate legal requirements exist. Professionals usually hold advanced degrees (Master’s or PhD) in psychology, specialized in counselling psychology.",
        training: "Voluntary certification through associations like the Chinese Psychological Society exists but is not mandatory.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: true, // Partially, in medical settings
        requirements: "Clinical psychologists working in medical institutions must have a Master’s or higher in Clinical Psychology, complete supervised clinical training, and pass the psychotherapist certification exam administered by the National Health Commission.",
        training: "Supervised clinical training, and pass the psychotherapist certification exam administered by the National Health Commission.",
        renewal: "Not specified for the psychotherapist certification."
    },
    notes: "Counselling Psychology: From China Lawyer: \"1.Psychological counselling is not classified as a medical service and may be provided by trained or skilled counsellors. 2.Psychological counsellors are not allowed to provide any psychotherapy or diagnosis and treatment of any mental disorders.\"\nClinical Psychology: No licensing requirement exists outside medical/clinical settings.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required. (This applies if operating within medical settings requiring the Psychotherapist certification).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.) (This applies if they hold the Psychotherapist certification)."
    },
    updated: "2025-06-05"
},
"Hong Kong": {
    name: "Hong Kong",
    flag: "🇭🇰",
    region: "Asia",
    regulatory: "Hong Kong Professional Counselling Association (HKPCA) (voluntary); Hong Kong Psychological Society (HKPS) (voluntary register); Hong Kong Institute of Clinical Psychologists (HKICP) (voluntary).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "Legally, none. Typically, counsellors possess postgraduate diplomas or Master’s degrees in counselling.",
        training: "Many choose voluntary certification from bodies like the Hong Kong Professional Counselling Association (HKPCA) to enhance credibility.",
        renewal: "Not applicable (legal regulation); voluntary bodies have own renewal."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No legal requirements exist. Counselling psychologists usually have a Master’s or Doctoral degree in counselling psychology...",
        training: "...supervised practice experience, and often voluntarily register with professional bodies like the Hong Kong Psychological Society (HKPS).",
        renewal: "Not applicable (legal regulation); voluntary bodies have own renewal."
    },
    clinical: {
        regulated: false,
        requirements: "Typically requires a Master’s or Doctoral degree in Clinical Psychology from accredited universities (e.g., HKU or CUHK) and supervised practice.",
        training: "Practitioners commonly obtain voluntary registration from professional bodies (HKPS or HKICP), but this is not legally mandated.",
        renewal: "Not applicable (legal regulation); voluntary bodies have own renewal."
    },
    notes: "Counselling: Voluntary professional certifications exist from associations like Hong Kong Professional Counselling Association (HKPCA), but they’re not legally mandated.\nCounselling Psychology: The Hong Kong Psychological Society (HKPS) voluntarily maintains a register of psychologists, including counselling psychologists.\nClinical Psychology: Practitioners typically have voluntary registration with the Hong Kong Psychological Society (HKPS) or the Hong Kong Institute of Clinical Psychologists (HKICP), but this is not legally required.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border is allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"India": {
    name: "India",
    flag: "🇮🇳",
    region: "Asia",
    regulatory: "Rehabilitation Council of India (RCI) (for Clinical Psychology).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "No legal requirements exist. Practitioners usually hold a Master’s degree in Psychology, Counselling Psychology, Social Work, or relevant postgraduate diplomas.",
        training: "Although professional bodies like the Indian Association for Counselling Psychology exist, membership is entirely voluntary.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal licensing requirements exist. Typically, counselling psychologists possess a Master’s or M.Phil/Ph.D. degree in Counselling Psychology.",
        training: "Professional credibility generally relies on institutional affiliation or voluntary professional association memberships.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: true,
        requirements: "Clinical Psychologists must hold at least an M.Phil in Clinical Psychology or Professional Diploma in Clinical Psychology (PDCP) from RCI-recognized institutions and be registered with RCI.",
        training: "Must complete at least an M.Phil in Clinical Psychology or Professional Diploma in Clinical Psychology (PDCP) from RCI-recognized institutions. After training, practitioners must register with the Rehabilitation Council of India (RCI) to legally practice as clinical psychologists.",
        renewal: "RCI registration requires renewal"
    },
    notes: "General: Lack of regulation for general counselling raises concerns about unqualified practitioners.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Indonesia": {
    name: "Indonesia",
    flag: "🇮🇩",
    region: "Asia",
    regulatory: "Indonesian Psychological Association (HIMPSI); Ministry of Health (for Clinical Psychologist license - SIPPK).",
    colorCode: {
        'counselling': 'green', // Regulated indirectly, but cross-border seems Green
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // Indirectly via psychologist licensing
        requirements: "No separate counselling license exists. Counselling practitioners must usually hold a Master’s Degree in Professional Psychology and be licensed as psychologists.",
        training: "This involves passing a national competency exam and obtaining the Surat Izin Praktek Psikologi (SIPP) from the Indonesian Psychological Association (HIMPSI).",
        renewal: "SIPP likely requires renewal"
    },
    counsellingPsychology: {
        regulated: true, // As licensed psychologist
        requirements: "Practitioners must complete a Bachelor’s in Psychology, a Master’s in Professional Psychology, pass the national competency exam, and obtain the general psychologist license (Surat Izin Praktek Psikologi - SIPP) from the Indonesian Psychological Association (HIMPSI).",
        training: "No special license for counselling psychology exists apart from this general psychologist license.",
        renewal: "SIPP likely requires renewal"
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must obtain a psychologist license (Surat Izin Praktik Psikolog - SIPP) from the Indonesian Psychological Association (HIMPSI), followed by obtaining a specific clinical practice license (Surat Izin Praktik Psikolog Klinis - SIPPK) from the Ministry of Health.",
        training: "Must first obtain a Master’s in Professional Psychology (clinical specialization), pass the national competency exam, register as a general psychologist (SIPP) with HIMPSI, and then secure an additional Clinical Psychologist license (SIPPK) from the Ministry of Health to practice clinically.",
        renewal: "SIPPK likely requires renewal"
    },
    notes: "General: Psychologist license is Surat Izin Praktek Psikologi (SIPP) from HIMPSI. Clinical practice license is Surat Izin Praktik Psikolog Klinis (SIPPK) from Ministry of Health.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (presuming the provider meets Indonesian psychologist licensing requirements). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding SIPP). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.) Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Japan": {
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia",
    regulatory: "Ministry of Health, Labour and Welfare & Ministry of Education (for Certified Public Psychologist - CPP).",
    colorCode: {
        'counselling': 'green', // Regulated via CPP, but cross-border seems Green
        'counselling-psychology': 'green', // Regulated via CPP
        'clinical': 'red'
},
    counselling: {
        regulated: true, // If performing psychological counselling professionally, via CPP
        requirements: "Practitioners typically complete a relevant psychology degree (Bachelor’s plus Master’s), including specified courses, and pass the national Certified Public Psychologist (CPP) examination.",
        training: "While other counselling roles exist (e.g., school counsellors), professional psychological counselling practice is increasingly expected to require CPP licensure.",
        renewal: "Not specified for CPP"
    },
    counsellingPsychology: {
        regulated: true, // Via CPP license
        requirements: "Counselling psychologists must meet Certified Public Psychologist (CPP) licensing requirements, including obtaining relevant psychology degrees, completing mandatory coursework and practicum, and passing the national CPP examination...",
        training: "...administered by the Ministry of Health, Labour and Welfare & Ministry of Education.",
        renewal: "Not specified for CPP"
    },
    clinical: {
        regulated: true, // Via CPP license
        requirements: "Must complete a psychology degree (Master’s or Doctorate), required coursework, and supervised clinical practicum.",
        training: "Practitioners must then pass the national Certified Public Psychologist (CPP) exam administered by the Ministry of Health, Labour and Welfare & Ministry of Education to legally practice.",
        renewal: "Not specified for CPP"
    },
    notes: "License: Certified Public Psychologist (CPP) (公認心理師).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (presuming CPP if professional psychological counselling). Counselling Psychology: Cross-border allowed (presuming CPP). Clinical Psychology: Inbound Services - License / specific qualification required. (i.e., CPP license).",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding CPP for professional psychological counselling). Counselling Psychology: Implied allowed as per GREEN status (if holding CPP). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.) (i.e., CPP license)."
    },
    updated: "2025-06-05"
},
"Macau": {
    name: "Macau",
    flag: "🇲🇴",
    region: "Asia",
    regulatory: "None specified; no formal licensing or regulatory systems.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no official legal requirements for practising counselling. Practitioners usually possess relevant qualifications (e.g., degrees or diplomas in counselling or psychology)...",
        training: "...and employment criteria set by organizations determine practice standards, not government regulations.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No licensing or formal registration exists. Typically, counselling psychologists have advanced degrees (Master’s or Ph.D.) from accredited institutions (often from Hong Kong or abroad)...",
        training: "...relying on professional reputation and organizational standards rather than statutory licensing.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No standardized or legally mandated requirements exist. Clinical psychologists usually hold advanced degrees (Master’s or Doctorate) in Clinical Psychology...",
        training: "...and typically practice under employer or hospital guidelines without formal licensing or government registration.",
        renewal: "Not applicable."
    },
    notes: "General: Practice standards are typically determined by employing organizations rather than government regulations.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Malaysia": {
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    regulatory: "Lembaga Kaunselor Malaysia (Malaysian Board of Counsellors); Malaysian Allied Health Professions Council (MAHPC), Ministry of Health (for Clinical Psychology).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Practitioners must hold a Master’s degree in Counselling accredited by the Board of Counsellors.",
        training: "After graduation, candidates must apply, complete an interview/exam, and register with the Lembaga Kaunselor Malaysia. Registration renewal requires ongoing professional development.",
        renewal: "Requires ongoing professional development"
    },
    counsellingPsychology: {
        regulated: false, // transitioning
        requirements: "No specific licensing exists yet for counselling psychologists. Practitioners typically hold advanced degrees (Master’s or Ph.D.) in counselling psychology or clinical psychology.",
        training: "Many voluntarily join professional associations like the Malaysian Psychological Association (PSIMA), but this is not legally required.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must hold at least a Master’s degree in Clinical Psychology from accredited universities, complete supervised clinical training, and register as Clinical Psychologists with the Malaysian Allied Health Professions Council (MAHPC).",
        training: "Supervised clinical training.",
        renewal: "MAHPC registration likely requires renewal"
    },
    notes: "Counselling License: Registered Counsellor. Licensing Body: Lembaga Kaunselor Malaysia.\nClinical Psychology regulation under Allied Health Professions Act 2016.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (presuming compliance with Malaysian registration if practicing in Malaysia). Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if registered in Malaysia). Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Philippines": {
    name: "Philippines",
    flag: "🇵🇭",
    region: "Asia",
    regulatory: "Professional Regulation Commission (PRC); Board of Psychology (under PRC).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Practitioners must have a Master’s degree in Guidance and Counselling (or equivalent) and pass the Guidance Counselor Licensure Examination conducted by the Professional Regulation Commission (PRC).",
        training: "Successful candidates receive a Certificate of Registration and a Professional Identification Card.",
        renewal: "PRC licenses typically require renewal"
    },
    counsellingPsychology: {
        regulated: true, // As "Psychologist"
        requirements: "Practitioners must hold at least a Master’s degree in Psychology (counselling, clinical, or related specialization), complete supervised training (minimum 200 hours), and pass the Psychologist Licensure Examination administered by the Professional Regulation Commission (PRC), Board of Psychology.",
        training: "Complete supervised training (minimum 200 hours), and pass the Psychologist Licensure Examination.",
        renewal: "PRC licenses typically require renewal"
    },
    clinical: {
        regulated: true, // As "Psychologist"
        requirements: "Practitioners must have a Master’s or Doctorate degree in Clinical Psychology, complete at least 200 hours of supervised practicum, and pass the national Psychologist Licensure Examination administered by the Professional Regulation Commission (PRC), Board of Psychology.",
        training: "Complete at least 200 hours of supervised practicum, and pass the national Psychologist Licensure Examination.",
        renewal: "PRC licenses typically require renewal"
    },
    notes: "Counselling License: Licensed Guidance Counselor (RA 9258).\nPsychologist (incl. Counselling/Clinical Psychologists) License: Licensed Psychologist (RA 10029).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (presuming PRC licensure if practicing as a Guidance Counselor in PH). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if PRC licensed). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.) Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Singapore": {
    name: "Singapore",
    flag: "🇸🇬",
    region: "Asia",
    regulatory: "Singapore Association for Counselling (SAC) (voluntary); Singapore Psychological Society (SPS) (voluntary).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "While there are no legal requirements, practitioners typically hold relevant qualifications, such as a Master’s degree or postgraduate diploma in counselling.",
        training: "Voluntary registration is available through professional bodies like the Singapore Association for Counselling (SAC), which maintains a register of counsellors who meet their standards.",
        renewal: "Not applicable (legal); voluntary bodies have own renewal."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically hold advanced degrees (Master’s or Ph.D.) in psychology with a counselling specialization.",
        training: "Practitioners may voluntarily register with professional bodies, such as the Singapore Psychological Society (SPS), but are not legally required to do so.",
        renewal: "Not applicable (legal); voluntary bodies have own renewal."
    },
    clinical: {
        regulated: false,
        requirements: "No legally mandated requirements exist. Practitioners typically hold a Master’s or Doctoral degree in Clinical Psychology from reputable universities...",
        training: "...and may voluntarily register with professional bodies like the Singapore Psychological Society (SPS).",
        renewal: "Not applicable (legal); voluntary bodies have own renewal."
    },
    notes: "General: Practice is primarily self-regulated through voluntary registration with professional bodies like SAC and SPS.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"South Korea": {
    name: "South Korea",
    flag: "🇰🇷",
    region: "Asia",
    regulatory: "None specified for mandatory licensing; professional associations offer voluntary certifications.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in counselling or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically have advanced degrees (Master’s or Doctoral) in psychology with a focus on counselling.",
        training: "Certification by professional associations is voluntary.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No legally standardized requirements. Typically, clinical psychologists have advanced degrees (Master’s or Doctoral) in Clinical Psychology.",
        training: "Practitioners typically rely on voluntary certifications from professional associations. Certification from professional associations is voluntary and not required by law.",
        renewal: "Not applicable (legal)."
    },
    notes: "General: Professional practice relies on academic qualifications and voluntary certifications from professional associations.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Taiwan": {
    name: "Taiwan",
    flag: "🇹🇼",
    region: "Asia",
    regulatory: "Ministry of Health and Welfare (for licensed psychologists).",
    colorCode: {
        'counselling': 'green', // As Licensed Counselling Psychologist
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // Under Psychologist Act as Counselling Psychologist
        requirements: "To practice counselling legally, individuals must be licensed as counselling psychologists. This requires completing a Master’s degree in counselling psychology, a one-year full-time internship, and passing the national licensing examination.",
        training: "Master’s degree in counselling psychology, a one-year full-time internship, and passing the national licensing examination.",
        renewal: "Licenses typically require renewal"
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Practitioners must complete a Master’s degree in counselling psychology, undertake a one-year full-time internship, and pass the national licensing examination to practice legally.",
        training: "Master’s degree in counselling psychology, a one-year full-time internship, and pass the national licensing examination required by the Psychologist Act to practice as licensed counselling psychologists.",
        renewal: "Licenses typically require renewal"
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must hold a clinical psychologist license, obtained by completing required education, a one-year internship, and passing the national licensing examination.",
        training: "Clinical psychologists must complete a Master’s degree in Clinical Psychology from an accredited university, undertake a one-year supervised internship, and pass a national licensing examination administered under the Psychologist Act.",
        renewal: "Licenses typically require renewal"
    },
    notes: "License: Licensed Counselling Psychologist / Licensed Clinical Psychologist. Licensing Body: Ministry of Health and Welfare.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (as licensed counselling psychologist). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if licensed). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.) Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Thailand": {
    name: "Thailand",
    flag: "🇹🇭",
    region: "Asia",
    regulatory: "None specified for mandatory licensing; professional associations offer voluntary certifications.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in counselling or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically hold advanced degrees (Master’s or Doctoral) in psychology with a counselling specialization.",
        training: "Voluntary certifications from professional bodies exist, but are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No legally mandated standards. Clinical psychologists usually hold a Master’s or Doctoral degree in Clinical Psychology.",
        training: "Practitioners may hold voluntary certifications from professional associations, but these are not legally required.",
        renewal: "Not applicable (legal)."
    },
    notes: "General: Practice relies on academic qualifications and voluntary certifications.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Vietnam": {
    name: "Vietnam",
    flag: "🇻🇳",
    region: "Asia",
    regulatory: "Ministry of Health (efforts ongoing for clinical psychology licensing).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in counselling or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically hold advanced degrees (Master’s or Doctoral) in psychology with a counselling specialization.",
        training: "Practitioners may voluntarily seek certifications from professional associations.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false, // transitioning
        requirements: "Currently, no formal licensing or standardized legal requirements exist. Practitioners typically hold advanced degrees (Master’s or Doctorate) in Clinical Psychology.",
        training: "There are ongoing government efforts to establish formal licensure criteria.",
        renewal: "Not applicable yet."
    },
    notes: "Clinical Psychology: Efforts ongoing by the Ministry of Health to introduce formal licensing.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed (currently, pending new regulations).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status (currently)."
    },
    updated: "2025-06-05"
},
"Bangladesh": {
    name: "Bangladesh",
    flag: "🇧🇩",
    region: "Asia",
    regulatory: "None specified for mandatory licensing; professional associations offer voluntary certifications.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in psychology or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically have advanced degrees (Master’s or Doctoral) in psychology with a counselling specialization.",
        training: "Practitioners may voluntarily seek certifications from professional associations.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No legally standardized requirements. Clinical psychologists usually have Master’s or Doctoral degrees in Clinical Psychology from recognized institutions...",
        training: "...but practice without formal licensing or registration.",
        renewal: "Not applicable (legal)."
    },
    notes: "General: Practice relies on academic qualifications and voluntary certifications.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Pakistan": {
    name: "Pakistan",
    flag: "🇵🇰",
    region: "Asia",
    regulatory: "Pakistan Psychological Association (PPA) (voluntary certifications).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in psychology or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically have advanced degrees and may voluntarily seek certification from professional associations, but regulation is absent.",
        training: "Professional certifications from bodies such as the Pakistan Psychological Association (PPA) are voluntary and not legally required.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No standardized legal requirements. Practitioners typically hold advanced degrees (Master’s or Doctoral) in Clinical Psychology...",
        training: "...but operate without legally mandated registration or licensing.",
        renewal: "Not applicable (legal)."
    },
    notes: "Counselling: However, due to the absence of regulation, individuals with inadequate qualifications can practice, leading to concerns about unqualified practitioners.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Cambodia": {
    name: "Cambodia",
    flag: "🇰🇭",
    region: "Asia",
    regulatory: "None specified for mandatory licensing; NGOs and international organizations may provide training/certification.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "No specific legal requirements exist. Individuals who practice counselling often receive informal or NGO-based training...",
        training: "...and might have short-term certifications or workshops, rather than formal academic degrees in counselling or psychology.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No legally enforced requirements or standards. Practitioners typically hold advanced degrees in psychology from local or international universities...",
        training: "...and may voluntarily seek certifications through NGOs or international organizations, but this is not legally mandated.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements exist. Practitioners may have degrees from local universities (e.g., Royal University of Phnom Penh) or international programs...",
        training: "...but practice occurs informally without formal registration or licensing oversight.",
        renewal: "Not applicable (legal)."
    },
    notes: "General: Psychological counselling services are often informal, provided by individuals trained through NGOs or international bodies.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Myanmar": {
    name: "Myanmar",
    flag: "🇲🇲",
    region: "Asia",
    regulatory: "None specified; very limited formal regulation or training.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "There are no official or legal requirements. Counsellors, when available, typically receive informal training through NGOs or international organizations.",
        training: "Formal academic training in counselling is very limited, and no governmental standards or licensing systems are in place to validate professional qualifications.",
        renewal: "Not applicable (legal)."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official requirements exist. Practitioners who might label themselves as counselling psychologists likely hold degrees in psychology from Myanmar’s limited university offerings, primarily from institutions like the University of Yangon.",
        training: "However, they operate without official registration, oversight, or standardized professional benchmarks.",
        renewal: "Not applicable (legal)."
    },
    clinical: {
        regulated: false,
        requirements: "No standardized or legally recognized requirements exist. Individuals practicing clinical psychology often hold degrees or certifications from abroad or have been informally trained through international collaborations or NGOs.",
        training: "They operate without formal registration or licensing.",
        renewal: "Not applicable (legal)."
    },
    notes: "General: Mental health care system relies largely on psychiatrists; formal regulation for psychologists/counsellors is minimal to non-existent.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
// Assuming the previous entries for Asia (up to Myanmar) ended,
// this continues the 'countries' object
"Kazakhstan": {
    name: "Kazakhstan",
    flag: "🇰🇿",
    region: "Asia",
    regulatory: "Kazakhstan Psychological Society or relevant health authority.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // Indirectly
        requirements: "Individuals aiming to practice counselling typically need to hold a degree in psychology or a related field.",
        training: "Additional certifications or supervised training may be required, depending on the specific area of counselling.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Practitioners must possess relevant qualifications and adhere to standards set by professional bodies or health authorities. Practitioners are expected to have advanced degrees in psychology with specialized training in counselling psychology.",
        training: "They may need to engage in supervised practice and continuous professional development, adhering to standards set by professional bodies or health authorities.",
        renewal: "Continuous professional development implies renewal"
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must obtain licenses from relevant health authorities and comply with professional standards set by regulatory or professional bodies. Clinical psychologists must hold Master’s or Doctoral degrees in Clinical Psychology...",
        training: "...complete supervised clinical practice, and obtain licensure or registration from relevant government or professional regulatory authorities.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling License: Psychologist/Psychotherapist License.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (presuming adherence to local standards if applicable). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Nepal": {
    name: "Nepal",
    flag: "🇳🇵",
    region: "Asia",
    regulatory: "Nepal Health Professional Council (NHPC) (for Clinical Psychology).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in psychology or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable"
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically have advanced degrees (Master’s or Doctoral) in psychology specializing in counselling.",
        training: "Practitioners may voluntarily associate with professional bodies but face no legal mandates. Certification from professional associations is voluntary and not legally mandated.",
        renewal: "Not applicable"
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners are required to obtain a license from the Nepal Health Professional Council, holding recognized Master’s or Doctoral degrees in clinical psychology.",
        training: "Clinical psychologists are required to hold at least a Master’s or Doctoral degree in Clinical Psychology and must be registered and licensed by the Nepal Health Professional Council (NHPC) to practice legally.",
        renewal: "NHPC licenses typically require renewal"
    },
    notes: "General: Lack of formal regulation for counselling and counselling psychology means practice relies on academic qualifications and voluntary associations.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Sri Lanka": {
    name: "Sri Lanka",
    flag: "🇱🇰",
    region: "Asia",
    regulatory: "Sri Lanka Medical Council or relevant health regulatory authorities (for Clinical Psychology).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no legal requirements to practice counselling. Practitioners often hold degrees in psychology or related fields...",
        training: "...and may obtain certifications from professional associations, but these are not legally mandated.",
        renewal: "Not applicable"
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Practitioners typically hold advanced degrees but rely on voluntary certification from professional associations without formal legal regulation.",
        training: "Certification from professional associations is voluntary and not legally mandated.",
        renewal: "Not applicable"
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must be licensed and registered under the Sri Lanka Medical Council or relevant health regulatory authorities. Clinical psychologists must hold a recognized Master’s or Doctoral degree in Clinical Psychology...",
        training: "...and be officially registered and licensed through the Sri Lanka Medical Council or other relevant health regulatory authorities to practice legally.",
        renewal: "Licenses from medical councils typically require renewal"
    },
    notes: "General: Lack of formal regulation for counselling and counselling psychology.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Armenia": {
    name: "Armenia",
    flag: "🇦🇲",
    region: "Asia",
    regulatory: "None specified; unregulated.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "None legally required; many hold psychology‐related degrees but not mandated.",
        training: "Voluntary certifications (often abroad) common but not enforced.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Psychology degree typical but not required by law.",
        training: "No exam or registration required.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s in Clinical Psychology common but not legally mandated.",
        training: "No certification or exam required.",
        renewal: "Not applicable."
    },
    notes: "General: \"Anyone may present as a therapist or counsellor.\" Professional associations are not mandatory.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Azerbaijan": {
    name: "Azerbaijan",
    flag: "🇦🇿",
    region: "Asia",
    regulatory: "Ministry of Education (https://edu.gov.az); Ministry of Health (https://health.gov.az) (oversee standards for \"psychological assistance\").",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending', // Falls under general psychological assistance, but cross-border phrase was PENDING
        'clinical': 'pending', // Falls under general psychological assistance, but cross-border phrase was PENDING
},
    counselling: {
        regulated: true, // Under Law on Psychological Assistance (2018)
        requirements: "Degree in psychology or approved training in psychology.",
        training: "No state licensing exam; diploma and compliance with education law suffice. Registration with Ministry of Health or Education.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // Under Law on Psychological Assistance
        requirements: "Bachelor’s or Master’s in Psychology from an accredited program.",
        training: "Must meet 2018 law’s educational standards; Master’s preferred. Registration with Ministry of Health/Education.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // Under Law on Psychological Assistance
        requirements: "Master’s in Clinical (Medical) Psychology required.",
        training: "Minimum one year of professional experience. Registration with Ministry of Health for clinical practice.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Titles like “psychologist” or “psychotherapy” may only be used by qualified persons under the Law on Psychological Assistance (2018).",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Bhutan": {
    name: "Bhutan",
    flag: "🇧🇹",
    region: "Asia",
    regulatory: "Bhutan Board for Certified Counselors (BBCC) (https://www.bbcc.bt); Bhutan Medical and Health Council (BMHC) (https://www.bmhc.gov.bt).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending', // Falls under BBCC/BMHC, but cross-border phrase was PENDING
        'clinical': 'pending', // BMHC licenses, but cross-border phrase was PENDING
},
    counselling: {
        regulated: true,
        requirements: "Bachelor’s degree in counseling or related field.",
        training: "Pass BBCC national certification exam; complete supervised practical hours. BBCC certification and BMHC registration mandatory.",
        renewal: "BMHC registration likely implies renewal"
    },
    counsellingPsychology: {
        regulated: true, // Falls under BBCC/BMHC
        requirements: "Master’s in counseling or counseling psychology typically required for higher certification.",
        training: "Substantial supervised clinical hours; BBCC exam. BBCC certification and BMHC registration mandatory.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // BMHC licenses
        requirements: "Master’s or Doctoral degree in clinical psychology.",
        training: "BMHC registration/licensure with credential verification. BMHC licensure required; BBCC certification encouraged.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Only certified and registered individuals may practice counselling.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Kyrgyzstan": {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    region: "Asia",
    regulatory: "Kyrgyz Psychological Association (voluntary).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No formal legal requirements; academic background in psychology conventional.",
        training: "No licensing exam or registration.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Bachelor or Specialist degree in Psychology typical but not required.",
        training: "No exam or registry.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s or Ph.D. in Clinical Psychology often obtained abroad.",
        training: "No license or registration.",
        renewal: "Not applicable."
    },
    notes: "General: Profession is unregulated. Kyrgyz Psychological Association is voluntary.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Laos": {
    name: "Laos",
    flag: "🇱🇦",
    region: "Asia",
    regulatory: "None specified; Health Professional Council licenses some health workers but not counsellors/psychologists.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No mandated degree or requirements.",
        training: "No licensing exam or certification.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Academic background in psychology if available but not required.",
        training: "No exam or registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s or Ph.D. in Clinical Psychology typically from abroad.",
        training: "No licensure mechanism.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Maldives": {
    name: "Maldives",
    flag: "🇲🇻",
    region: "Asia",
    regulatory: "Maldives Allied Health Council (MAHC) (https://www.health.gov.mv); Ministry of Health (https://www.health.gov.mv).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending', // Regulated, but cross-border phrase was PENDING
        'clinical': 'pending', // Regulated, but cross-border phrase was PENDING
},
    counselling: {
        regulated: true, // Under Health Professionals Act 13/2015
        requirements: "Master’s degree in counselling or related field for independent practice.",
        training: "≥ 500 hours supervised experience; possible board interview. MAHC registration mandatory.",
        renewal: "MAHC registration likely implies renewal"
    },
    counsellingPsychology: {
        regulated: true, // As "Registered Psychologist"
        requirements: "Doctorate in Psychology (PhD or PsyD) required for psychologist title.",
        training: "≥ 1,000 hours supervised experience. MAHC registration as Registered Psychologist mandatory.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Doctorate (PhD/PsyD) in Clinical Psychology required.",
        training: "≥ 1,000 hours supervised clinical experience. MAHC licensure mandatory.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Counsellors and Psychologists are \"Professionals of Behavioral Sciences\" under Health Professionals Act 13/2015.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Mongolia": {
    name: "Mongolia",
    flag: "🇲🇳",
    region: "Asia",
    regulatory: "Mongolian Psychological Association (voluntary).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No formal legal requirements; training in psychology common.",
        training: "No exam or registration mandated.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Undergraduate or graduate degree typical but not required.",
        training: "No licensing exam.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s or Doctorate in Clinical Psychology typical.",
        training: "No professional license required.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated. Mongolian Psychological Association is voluntary.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Tajikistan": {
    name: "Tajikistan",
    flag: "🇹🇯",
    region: "Asia",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No formal legal requirements; academic psychology background conventional.",
        training: "No mandated certification or exam.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Academic degree in psychology typical but not required.",
        training: "No competency exam.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s in Clinical Psychology typical.",
        training: "No licence issued.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated for counselling/psychology; mental health laws focus on psychiatric care.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Timor-Leste": {
    name: "Timor-Leste",
    flag: "🇹🇱",
    region: "Asia",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No formal legal requirements.",
        training: "No licensing exam.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Degree in psychology typical but not required.",
        training: "No registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Master’s or PhD in Clinical Psychology typical.",
        training: "No local licence.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Turkmenistan": {
    name: "Turkmenistan",
    flag: "🇹🇲",
    region: "Asia",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false,
        requirements: "No formal legal requirements.",
        training: "No licensing criteria.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Higher degree in psychology typical but not required.",
        training: "No exam.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Advanced degree in psychology typical.",
        training: "None.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Uzbekistan": {
    name: "Uzbekistan",
    flag: "🇺🇿",
    region: "Asia",
    regulatory: "Ministry of Health (https://www.minzdrav.uz) (under Law “On the Provision of Psychological Assistance to the Population” as of Nov 2024).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending', // Regulated, but cross-border phrase was PENDING
        'clinical': 'pending', // Regulated, but cross-border phrase was PENDING
},
    counselling: {
        regulated: true, // As of Nov 2024
        requirements: "5-year Specialist or Master’s in Psychology or relevant counselling degree.",
        training: "Certification/registration with Ministry of Health; practical training expected. MoH registration/authorization required.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // Under new law
        requirements: "Specialist (5-year) or Master’s in Psychology.",
        training: "Must comply with forthcoming MoH regulations; certification likely required. MoH registration mandatory.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // Under new law
        requirements: "Master’s with clinical specialization expected.",
        training: "Supervised internship/practicum; MoH registration required. MoH licensing/certification.",
        renewal: "Not specified in provided data."
    },
    notes: "General: New law \"On the Provision of Psychological Assistance to the Population\" effective Nov 2024.",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
// Assuming the previous entries for Asia (up to Uzbekistan) ended,
// this continues the 'countries' object for Latin America
"Brazil": {
    name: "Brazil",
    flag: "🇧🇷",
    region: "Latin America",
    regulatory: "Federal Council of Psychology (Conselho Federal de Psicologia - CFP) (https://www.cfp.org.br); Regional Psychology Councils (Conselhos Regionais de Psicologia - CRPs).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as practice of psychology
        requirements: "A 5-year Psychology degree (Licenciatura em Psicologia) is required to become a licensed psychologist. Practitioners must register with the Regional Psychology Council under the oversight of the Federal Council of Psychology (Conselho Federal de Psicologia - CFP).",
        training: "Many professionals voluntarily pursue additional training in counselling approaches (e.g., humanistic counselling, CBT), but these are not legally required for licensing.",
        renewal: "CRP registration likely requires renewal"
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist
        requirements: "Counselling psychologists typically hold a Bachelor’s degree (Licenciatura) in Psychology, followed by postgraduate specialization (lato-sensu) in counselling psychology or a related area. Practitioners must register with the Regional Psychology Council (Conselho Regional de Psicologia), under oversight of the Federal Council of Psychology (Conselho Federal de Psicologia - CFP).",
        training: "Many complete additional counselling-focused postgraduate training (optional), but the primary requirement is the psychologist licensure (CRP registration).",
        renewal: "CRP registration likely requires renewal"
    },
    clinical: {
        regulated: true, // as licensed psychologist
        requirements: "A Licenciatura in Psychology is required, which typically takes 5 years. Clinical psychologists often pursue lato-sensu postgraduate specialization in Clinical Psychology to deepen their clinical skills. Registration with the Regional Council of Psychology (CRP) under the Federal Council of Psychology (CFP) is required.",
        training: "Clinical training is usually integrated into the undergraduate program, with required supervised internships. No additional mandatory national licensure exam or certification specifically for “Clinical Psychologist” exists beyond the psychologist registration.",
        renewal: "CRP registration likely requires renewal"
    },
    notes: "General: \"Practicing psychological counseling without registration is illegal under Brazilian law.\" \"Brazil’s laws do not differentiate clinical vs. counseling practice for licensure purposes.\"\nRegulatory URLs: Federal Council of Psychology – https://site.cfp.org.br; Regional Councils Directory – https://site.cfp.org.br/sistema-conselhos/",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding CRP registration). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Mexico": {
    name: "Mexico",
    flag: "🇲🇽",
    region: "Latin America",
    regulatory: "Dirección General de Profesiones under the Secretaría de Educación Pública (SEP) (gob.mx/sep); Colegio Mexicano de Psicología A.C. (voluntary) (https://www.colegiomexicanodepsicologia.org).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as psychological service
        requirements: "To legally practice counseling, individuals must hold a federal cédula profesional from the Dirección General de Profesiones under the Secretaría de Educación Pública (SEP). A Licenciatura en Psicología (4–5 years university study) is required.",
        training: "Many counsellors pursue a Master’s in Counselling or Clinical Psychology, though this is not legally required for basic practice.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Counselling psychologists typically hold a Licenciatura en Psicología (Bachelor’s degree) and often pursue a Master’s degree in Counselling Psychology or related specializations. Registration with the Dirección General de Profesiones (SEP) is required.",
        training: "The cédula profesional (professional license) is mandatory for all practising psychologists, and many counselling psychologists complete additional postgraduate diplomas or Master’s degrees in counselling.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "A Licenciatura in Psychology is required. Many clinical psychologists pursue a Master’s degree in Clinical Psychology or a related field to specialize. Registration with the Dirección General de Profesiones (SEP) is required.",
        training: "Supervised clinical practice is often required during postgraduate specialization. While the cédula profesional from the Secretaría de Educación Pública (SEP) authorizes practice, clinical psychologists are expected to pursue advanced clinical training to work in healthcare institutions.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Practicing counseling without this credential [cédula profesional] is considered unauthorized practice.\" \"There is no distinct licensing board for “counseling psychology” beyond the normal professional licensing.\"\nRegulatory URLs: Secretaría de Educación Pública (SEP) – gob.mx/sep (or https://www.gob.mx/sep).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding cédula profesional). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Argentina": {
    name: "Argentina",
    flag: "🇦🇷",
    region: "Latin America",
    regulatory: "Provincial health authority or Colegio de Psicólogos (for psychologists); Argentine Association of Counselors (AAC) (voluntary for \"Consultor Psicológico\") (https://www.aacounselors.org.ar). National Law 23.277 (1985) governs psychology.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, // nationally, but some provincial academic certification
        requirements: "Complete a recognised program in Consultoría Psicológica (Counselling), which is typically a 3-year higher technical degree.",
        training: "Voluntary participation in the Argentine Association of Counselors (AAC), which offers professional support and sets ethical guidelines.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as licensed Psicólogo
        requirements: "The professional must register with the provincial health authority or Colegio de Psicólogos where applicable. Counselling psychologists typically hold a Licenciatura en Psicología (5 years) and may pursue postgraduate certification in counselling psychology or related areas.",
        training: "Provincial registration is required, and many professionals voluntarily pursue further specialization via Consultoría Psicológica programs.",
        renewal: "Provincial registration likely requires renewal"
    },
    clinical: {
        regulated: true, // as licensed Psicólogo
        requirements: "The title “Psicólogo” is protected – one cannot legally present as a clinical psychologist without being licensed. A Licenciatura in Psychology (5 years, including supervised internships) is required. Registration with the local Colegio de Psicólogos is required at the provincial level.",
        training: "Many clinical psychologists undertake postgraduate specialization or Master's degrees in Clinical Psychology or psychotherapy. Certain provinces may offer specialist certifications through their local Colegio de Psicólogos, though these are professional credentials, not additional licenses.",
        renewal: "Provincial registration likely requires renewal"
    },
    notes: "Regulatory URLs: Argentina's national law on psychology - https://www.argentina.gob.ar/normativa/nacional/ley-23277-46245 or https://www.saij.gob.ar.\nExample Colegio: Colegio de Psicólogos de la Provincia de Buenos Aires – https://www.psicologosquilmes.org.ar",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Chile": {
    name: "Chile",
    flag: "🇨🇱",
    region: "Latin America",
    regulatory: "Superintendence of Health (Superintendencia de Salud) (https://www.superdesalud.gob.cl) via National Health Providers Registry (Registro Nacional de Prestadores de Salud).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, // as separate profession, but psychological counselling by psychologists is regulated
        requirements: "Complete a 5-year Psychology degree (leading to the title of “Psicólogo”), including supervised practical training. Registration with the National Health Providers Registry (Registro Nacional de Prestadores de Salud) under the Superintendence of Health is mandatory.",
        training: "Postgraduate diplomas in specific counselling approaches are common but not legally required.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist
        requirements: "Counselling psychologists typically hold a Degree/Título de Psicólogo (5 years), which includes professional practice and a thesis. Registration with the Superintendence of Health (Superintendencia de Salud) is required to be listed in the Registro Nacional de Prestadores de Salud.",
        training: "Some pursue postgraduate diplomas or Master’s degrees in counselling or psychotherapy, though this is not mandatory for registration.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as registered psychologist
        requirements: "A Bachelor’s Degree in Psychology (Título de Psicólogo) is required, which includes supervised internships. Registration with the Superintendencia de Salud is mandatory.",
        training: "Clinical psychologists typically complete a postgraduate diploma or Master’s degree in Clinical Psychology or psychotherapy to gain recognized expertise. The Superintendencia de Salud maintains a National Health Providers Registry, and psychologists with approved clinical postgraduate training can register this specialty.",
        renewal: "Not specified in provided data."
    },
    notes: "Regulatory URL: Chile Atiende (government services) - chileatiende.gob.cl (mentioned for psychologist info).\nNote on source data accuracy: The provided input text for Counselling section mistakenly referenced Argentinian law and associations; this has been interpreted in the context of Chilean psychologist regulation for providing counselling.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if registered psychologist). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Colombia": {
    name: "Colombia",
    flag: "🇨🇴",
    region: "Latin America",
    regulatory: "Colegio Colombiano de Psicólogos (Colpsic) (https://www.colpsic.org.co).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as psychological service
        requirements: "Under Law 1090 of 2006, psychologists must hold a Tarjeta Profesional de Psicólogo issued by the Colegio Colombiano de Psicólogos (Colpsic). A 5-year Psychology degree (Título de Psicólogo) is required.",
        training: "Counselling-specific courses are available, but no separate counselling license exists.",
        renewal: "Tarjeta Profesional likely implies ongoing good standing"
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Counselling psychologists typically hold a Bachelor’s degree in Psychology (Título de Psicólogo), followed by optional specialization in counselling psychology, clinical psychology, or therapy modalities. Mandatory registration with the Colombian College of Psychologists (Colpsic) and issuance of the Tarjeta Profesional.",
        training: "Supervised practice is often part of the university degree; post-degree specialization is optional.",
        renewal: "Tarjeta Profesional likely implies ongoing good standing"
    },
    clinical: {
        regulated: true, // as psychologist with expected specialization
        requirements: "A Bachelor’s Degree in Psychology (Titulo de Psicólogo) is required. Clinical psychologists must hold a Tarjeta Profesional issued by the Colombian College of Psychologists (Colpsic).",
        training: "Most clinical psychologists pursue a Master’s degree or specialist diploma in Clinical Psychology, with supervised clinical training included.",
        renewal: "Tarjeta Profesional likely implies ongoing good standing"
    },
    notes: "General: \"Unauthorized practice, including unlicensed counseling, is illegal under Colombian law.\"\nRegulatory URL: National Civil Service Department – https://www.funcionpublica.gov.co (general government reference). Funlam University - funlam.edu.co (mentioned for clinical psychology info).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding Tarjeta Profesional). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Costa Rica": {
    name: "Costa Rica",
    flag: "🇨🇷",
    region: "Latin America",
    regulatory: "Colegio de Profesionales en Psicología de Costa Rica (https://portal.psicologiacr.com).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as psychological practice
        requirements: "To legally practice counseling, professionals must be registered with the Colegio de Profesionales en Psicología de Costa Rica. Licenciatura en Psicología, typically 5 years (undergraduate and one-year licentiate).",
        training: "University programs include supervised practice, but no separate certification is required for counselling.",
        renewal: "Colegio membership likely implies renewal"
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist
        requirements: "Counselling psychologists typically hold a Licenciatura en Psicología, often complemented by postgraduate specialization in counselling psychology, clinical psychology, or related fields. Registration with the Colegio de Profesionales en Psicología de Costa Rica is required.",
        training: "Supervised practice is embedded in university programs; postgraduate training is encouraged but not mandated.",
        renewal: "Colegio membership likely implies renewal"
    },
    clinical: {
        regulated: true, // as licensed psychologist
        requirements: "A Licenciatura in Psychology is required. Clinical psychologists must register with the Colegio de Profesionales en Psicología de Costa Rica.",
        training: "Although not mandatory for licensure, a Master’s degree in Clinical Psychology or psychotherapy is typically pursued by those working in healthcare or private practice. Clinical internships are part of university training.",
        renewal: "Colegio membership likely implies renewal"
    },
    notes: "General: \"Practicing without being registered is illegal under Costa Rican law (Ley Orgánica del Colegio de Profesionales en Psicología).\"\nLegal Framework URL: https://www.pgrweb.go.cr/scij/Busqueda/Normativa/normas/nrm_texto_completo.aspx?param1=NRTC&nValor1=1&nValor2=8612&strTipM=TC\nNews reference: larepublica.net (mentioned for psychologist info).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if registered with Colegio). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Dominican Republic": {
    name: "Dominican Republic",
    flag: "🇩🇴",
    region: "Latin America",
    regulatory: "Colegio Dominicano de Psicólogos (CODOPSI) (https://codopsi.org.do or https://codopsiorg.wordpress.com); Exequátur from President/Executive branch; Ministry of Higher Education, Science and Technology (MESCyT) (https://www.mescyt.gob.do) (for degree validation).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (5 years), including supervised practice. Obtain an Exequátur (authorization issued by the President/Executive branch) and register with the Colegio Dominicano de Psicólogos (CODOPSI).",
        training: "Foreign degrees must be validated by a Dominican university (revalidación).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist
        requirements: "For non-clinical areas (like... counseling), the law requires the base license (codopsi membership + exequátur). Counselling psychologists typically hold a Licenciatura en Psicología (5 years). Counselling psychologists must obtain the Exequátur (government authorization) and register with CODOPSI.",
        training: "Counselling psychologists often pursue Master’s degrees or postgraduate diplomas in counselling or clinical psychology, especially if working in clinical settings.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // specific additional requirements
        requirements: "A Licenciatura in Psychology is required, followed by postgraduate specialization in Clinical Psychology. Registration with CODOPSI (Colegio Dominicano de Psicólogos) and obtaining the Exequátur (government authorization) is required.",
        training: "Clinical psychologists complete supervised clinical practice as part of their postgraduate training. There is a legal requirement to attain specialization within 5 years if one was already licensed prior to legislative updates.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unauthorized practice, including unlicensed counseling, is subject to legal penalties under Law 22-01.\"\nNews reference: hoy.com.do (mentioned for psychologist info).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if CODOPSI registered and holds Exequátur). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Panama": {
    name: "Panama",
    flag: "🇵🇦",
    region: "Latin America",
    regulatory: "Consejo Técnico de Psicología (https://ctppanama.com). Ministry of Health (MINSA) (https://www.minsa.gob.pa) (general oversight).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as psychology practice
        requirements: "Licenciatura en Psicología, typically 5 years, including supervised practice. Obtain a Certificado de Idoneidad Profesional from the Consejo Técnico de Psicología.",
        training: "Degrees earned abroad must be authenticated and revalidated by the University of Panama (https://www.up.ac.pa).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist, with potential specialty recognition
        requirements: "Counselling psychologists typically hold a Licenciatura en Psicología (5 years). They must obtain the Certificado de Idoneidad Profesional from the Consejo Técnico de Psicología. Specialists (including counselling psychologists) must seek additional Board recognition.",
        training: "Many counselling psychologists pursue Master’s degrees or postgraduate diplomas in counselling or clinical psychology, which is recommended for advertising as a specialist.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // requires specialty license
        requirements: "A Licenciatura in Psychology is required, followed by a Master’s degree or postgraduate specialization in Clinical Psychology. Registration with the Consejo Técnico de Psicología is required.",
        training: "Supervised clinical practice is typically part of the postgraduate program. To work as a Clinical Psychologist, a psychologist must obtain both the general Certificado de Idoneidad Profesional and an additional specialist certification from the Technical Board of Psychology.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unauthorized practice, including unlicensed counseling, is a criminal offense under Panamanian law.\"\nLegal Reference: Law 55 of 2002 - https://docs.panama.justia.com/federales/leyes/55-de-2002.pdf",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding Idoneidad). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Peru": {
    name: "Peru",
    flag: "🇵🇪",
    region: "Latin America",
    regulatory: "Colegio de Psicólogos del Perú (https://cpp.org.pe).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as practice of psychology
        requirements: "Licensure is obtained by earning a 'Licenciatura' or 'Título Profesional' in psychology. Counselling services under psychology require registration with the Colegio de Psicólogos del Perú.",
        training: "To obtain this title [Título Profesional], candidates are typically required to defend a thesis or pass an additional examination.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as licensed psychologist
        requirements: "Counselling psychologists typically hold a Licenciatura en Psicología (Bachelor’s degree), which includes supervised clinical training. Counselling psychologists must register with the Colegio de Psicólogos del Perú to obtain their professional license.",
        training: "Further postgraduate specialization in counselling psychology is available but not mandatory for basic licensure.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as licensed psychologist
        requirements: "A Bachelor’s Degree in Psychology (Licenciatura en Psicología) is required, typically including supervised clinical internships. Registration with the Colegio de Psicólogos del Perú is mandatory to obtain the professional license.",
        training: "A postgraduate diploma or Master’s degree in Clinical Psychology is required for those specializing in clinical practice, with additional supervised practice often included.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Título Profesional\" in psychology is a professional title permitting practice, not just an academic degree.\nRegulatory URL: Government Legal Portal (El Peruano) – https://www.elperuano.pe. Colegio de Periodistas listed in error for Colegio de Psicólogos link.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if licensed with Colegio de Psicólogos). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Falkland Islands": {
    name: "Falkland Islands",
    flag: "🇫🇰",
    region: "Latin America",
    regulatory: "No local licensing regime; follows UK guidance, e.g., UK Health and Care Professions Council (HCPC) (https://www.hcpc-uk.org) for employer requirements.",
    colorCode: {
        'counselling': 'pending',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: false, // locally
        requirements: "Professionals typically need at least a bachelor's or master's degree in psychology or counseling that meets UK standards.",
        training: "UK Health and Care Professions Council (HCPC) registration or equivalent foreign license is expected.",
        renewal: "Dependent on foreign credential."
    },
    counsellingPsychology: {
        regulated: false, // locally
        requirements: "Doctorate or Master's in Psychology (with specialization in counseling psychology) that meets UK standards.",
        training: "Must be registered with HCPC or equivalent body and maintain foreign license.",
        renewal: "Dependent on foreign credential."
    },
    clinical: {
        regulated: false, // locally
        requirements: "Doctorate in Clinical Psychology (or similar) from a recognized program and must be fully qualified abroad.",
        training: "Must hold current HCPC registration (UK) or comparable foreign license with ongoing CPD.",
        renewal: "Dependent on foreign credential."
    },
    notes: "General: \"The Falkland Islands has no independent legislation regulating psychologists or counselors. As a UK Overseas Territory, it follows UK guidance. The government health department ensures practitioners are properly qualified (usually via UK credentials).\" Employers require appropriate foreign qualifications and registrations.",
    crossBorder: {
        inbound: "Counselling: Pending determination based on service zone status. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Pending determination based on PENDING status and reliance on foreign credentials. Counselling Psychology: Pending determination based on PENDING status and reliance on foreign credentials. Clinical Psychology: Pending determination based on PENDING status and reliance on foreign credentials."
    },
    updated: "2025-06-05"
},
"Guatemala": {
    name: "Guatemala",
    flag: "🇬🇹",
    region: "Latin America",
    regulatory: "Colegio de Psicólogos de Guatemala (or Colegio de Humanidades).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as part of regulated psychology
        requirements: "Licenciatura en Psicología (5-year bachelor’s degree) from an accredited university. Mandatory registration with the Colegio de Psicólogos de Guatemala (or Colegio de Humanidades) to practice.",
        training: "No separate counselling licence; voluntary counselling-technique courses are available but not mandated.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología with optional specialisation in counselling psychology. Registration with the Colegio de Psicólogos de Guatemala is mandatory.",
        training: "Many practitioners pursue postgraduate diplomas or certificates in counselling techniques (voluntary).",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (with clinical concentration) from an approved university. Registration with the Colegio de Psicólogos de Guatemala is required.",
        training: "Supervised clinical practicum during the degree; postgraduate clinical training common but not legally mandated. Facility Requirements: Sanitary licence from the Ministry of Health for clinics.",
        renewal: "Not specified in provided data."
    },
    notes: "General: Mandatory Professional Collegiation Law (Decreto 72-2001). Practising without colegiado status is illegal.",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed with the same requirements. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if \"colegiado activo\"). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"El Salvador": {
    name: "El Salvador",
    flag: "🇸🇻",
    region: "Latin America",
    regulatory: "Junta de Vigilancia de la Profesión en Psicología (JVPP) under the Consejo Superior de Salud Pública (CSSP) (https://www.salud.gob.sv).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as practice of psychology
        requirements: "Licenciatura en Psicología (5-year degree) from an accredited Salvadoran university or a validated foreign degree. Board authorization (JVPP licensure) including juramentación (oath ceremony), annual renewal required.",
        training: "Mandatory supervised practice (servicio social) in approved health or social-service settings.",
        renewal: "Annual renewal required."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología with optional further specialization in counselling psychology. JVPP registration mandatory, annual renewal required.",
        training: "Completion of required social-service internship; optional master’s degrees or diplomas in counselling.",
        renewal: "Annual renewal required."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (5-year degree) with a clinical component. JVPP registration with license card and registry number.",
        training: "Mandatory social-service in a clinical environment; JVPP permanent authorization required.",
        renewal: "Annual renewal required."
    },
    notes: "General: \"Unlicensed practice is prohibited and actively policed.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding \"autorización permanente\"). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Honduras": {
    name: "Honduras",
    flag: "🇭🇳",
    region: "Latin America",
    regulatory: "Colegio de Psicólogos de Honduras (COPSIH) (https://www.colegiodepsicologos.hn).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // under law governing psychology
        requirements: "Licenciatura en Psicología from the National Autonomous University of Honduras (UNAH) or other recognized universities. Mandatory COPSIH membership.",
        training: "Professional development through COPSIH; no separate counsellor credential exists.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología with potential additional training in counselling. COPSIH registration mandatory.",
        training: "Optional master’s degrees or specialized courses; must maintain COPSIH membership.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (including foundational clinical coursework). COPSIH registration with matrícula number.",
        training: "Many practitioners pursue specialized clinical psychology training; COPSIH membership required.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Practicing without COPSIH affiliation (ejercicio ilícito) is prohibited.\"\nUniversity reference: UNAH (https://www.unah.edu.hn).",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if COPSIH member). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Nicaragua": {
    name: "Nicaragua",
    flag: "🇳🇮",
    region: "Latin America",
    regulatory: "Ministry of Health (MINSA) – Division of Health Professional Registry (https://www.minsa.gob.ni); National Council of Universities (CNU) (for degree registration).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as health profession
        requirements: "Licenciatura en Psicología from a recognized university, registered with the National Council of Universities (CNU). Mandatory registration with MINSA’s Division of Health Professional Registry.",
        training: "One-year servicio social in a health setting (or waiver).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as health profession
        requirements: "Licenciatura en Psicología with elective focus on counselling. MINSA registration mandatory (voluntary Colegio membership optional).",
        training: "Servicio social; optional diplomas in counselling methods.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as health profession
        requirements: "Licenciatura en Psicología with clinical practicum. Registration with MINSA’s Registro de Profesionales de Salud.",
        training: "Servicio social in a clinical setting; MINSA Registro Sanitario required.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unregistered practice is prohibited.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding Registro Sanitario). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Uruguay": {
    name: "Uruguay",
    flag: "🇺🇾",
    region: "Latin America",
    regulatory: "Ministry of Public Health (MSP) (https://www.gub.uy/ministerio-salud-publica); University of the Republic (UdelaR) (accreditation).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as psychology profession
        requirements: "Licenciado en Psicología (4–5 years) from University of the Republic (UdelaR) or accredited institution. Registration with MSP mandatory (voluntary Colegio membership).",
        training: "Mandatory practica as part of degree; no extra licence.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciado en Psicología (4 years + thesis), optional postgraduate diploma in counselling. MSP habilitación mandatory.",
        training: "No extra licence; MSP registration required.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciado en Psicología with broad clinical competency. Registration with MSP’s Department of Profesionales de la Salud.",
        training: "Many complete residency or specialized courses; MSP habilitación required.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unlicensed practice is prohibited.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if MSP registered). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Paraguay": {
    name: "Paraguay",
    flag: "🇵🇾",
    region: "Latin America",
    regulatory: "Ministry of Public Health and Social Welfare (MSPBS) (https://www.mspbs.gov.py); Sociedad Paraguaya de Psicología (https://www.spp.org.py) (professional society).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as psychology profession
        requirements: "Licenciatura en Psicología from a Paraguayan university or recognized foreign equivalent. Professional registration (Registro Profesional) with MSPBS mandatory.",
        training: "No distinct counsellor credential; specializations must be certified by MSPBS.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología; optional specialisation in counselling. MSPBS registration mandatory.",
        training: "Specialisations certified by MSPBS per Article 3.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (5 years with clinical training). Registro Profesional with MSPBS mandatory.",
        training: "Optional specialisations; MSPBS registration required.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Practising without MSPBS registration is illegal.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if MSPBS registered). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Bolivia": {
    name: "Bolivia",
    flag: "🇧🇴",
    region: "Latin America",
    regulatory: "Departmental Colegio de Psicólogos (via Federation); Ministry of Education (https://www.minedu.gob.bo) (for Título en Provisión Nacional).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as psychology profession
        requirements: "Licenciatura en Psicología from a recognised university. Registration with the departmental Colegio de Psicólogos mandatory.",
        training: "Supervised practice or optional diplomas (not legally mandated).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología plus Título en Provisión Nacional. Departmental Colegio registration required.",
        training: "Optional specialised courses; College membership mandatory.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología (5 years). Título en Provisión Nacional; College registration with matrícula number. Departmental Colegio de Psicólogos and INPREPSI affiliation.",
        training: "No specific additional training detailed beyond degree and title.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unlicensed practice is prohibited.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if holding Título and Colegio registration). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Ecuador": {
    name: "Ecuador",
    flag: "🇪🇨",
    region: "Latin America",
    regulatory: "ACESS (Agencia de Aseguramiento de la Calidad de los Servicios de Salud y Medicina Prepagada) under Ministry of Public Health (https://www.salud.gob.ec); CACES (Consejo de Aseguramiento de la Calidad de la Educación Superior) (https://www.caces.gob.ec) (for EXAMEN); SENESCYT (for degree registration).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as psychology profession
        requirements: "Licenciatura en Psicología (4 years) – “Psicólogo Clínico” degree. Pass National Licensing Exam (EXAMEN); SENESCYT registration. Registration with ACESS (Ministry of Public Health) mandatory.",
        training: "One-year rural health service.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciatura en Psicología; optional counselling focus. EXAMEN; SENESCYT registration. ACESS registration mandatory.",
        training: "Rural health service.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "“Psicólogo Clínico” degree (4 years). EXAMEN; ACESS registration.",
        training: "Rural health service; ACESS registration mandatory.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"Unlicensed practice is prohibited.\"",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if ACESS registered). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
"Venezuela": {
    name: "Venezuela",
    flag: "🇻🇪",
    region: "Latin America",
    regulatory: "Federation of Psychologists of Venezuela (FPV) (https://www.fpv.org.ve); State Colegios de Psicólogos; Ministry of Education (https://www.mppe.gob.ve) (for degree registration).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'pending',
        'clinical': 'pending',
},
    counselling: {
        regulated: true, // as psychologist
        requirements: "Licenciado en Psicología (5 years) from a recognised institution. Mandatory incorporation into state Colegio de Psicólogos and FPV membership.",
        training: "Ministry of Education degree registration required before Colegio incorporation.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, // as psychologist
        requirements: "Licenciado en Psicología; optional counselling specialisation. State Colegio membership and FPV registration mandatory.",
        training: "Ministry endorsement of degree; Colegio incorporation required.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as psychologist
        requirements: "Licenciado en Psicología (5 years). State Colegio de Psicólogos membership and FPV registration mandatory.",
        training: "Ministry degree inscription; state Colegio incorporation.",
        renewal: "Not specified in provided data."
    },
    notes: "General: The Federation of Psychologists (FPV) and state Colegios regulate and enforce.",
    crossBorder: {
        inbound: "Counselling: cross-border practice is allowed. Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status.",
        outbound: "Counselling: Implied allowed as per GREEN status (if FPV member). Counselling Psychology: Pending determination based on service zone status. Clinical Psychology: Pending determination based on service zone status."
    },
    updated: "2025-06-05"
},
// Continuing the 'countries' object with MODIFIED Middle East entries:
"Bahrain": {
    name: "Bahrain",
    flag: "🇧🇭",
    region: "Middle East",
    regulatory: "National Health Regulatory Authority (NHRA) (https://www.nhra.bh); iac-irtac-research.org",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Education: BSc in Psychology minimum. NHRA license as 'Psychologist (Counseling)' requires degree + typically 2 years experience and passing exam.",
        training: "Typically 2 years experience and passing NHRA exam.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: NHRA license as 'Psychologist' with Counseling specialty. Education: BSc Psychology + MSc (especially for non-Bahrainis). Need NHRA license (credential verification + exam). 2+ years clinical experience usually required.",
        training: "2+ years clinical experience usually required. Must pass NHRA exam.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: NHRA license as 'Clinical Psychologist'. Education: BSc Psych (+ MSc often required). NHRA license mandatory – qualifications verified, +2 years post-qual experience. Must pass NHRA exam and meet PQR (Prescribed Qualification Requirements).",
        training: "2+ years post-qualification experience. Must pass NHRA exam.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"Counselling falls under NHRA’s psychologist licensing. Licensed as Psychologist (Counseling specialty).\" Source: iac-irtac-research.org.\nCounselling Psychology: \"Licensed as 'Psychologists' (Counseling specialty listed) by NHRA.\" URL: https://www.nhra.bh.\nClinical Psychology: \"Licensed as 'Clinical Psychologist' by NHRA after exam and meeting PQR.\" URL: https://www.nhra.bh.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (Implied, but generally requires NHRA licensing as Psychologist if practicing in Bahrain). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if not claiming to be NHRA licensed psychologist). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Oman": {
    name: "Oman",
    flag: "🇴🇲",
    region: "Middle East",
    regulatory: "Ministry of Social Development (MOSD); Ministry of Health (MoH) / Oman Medical Specialty Board (OMSB). (Note: blog.decree.om is a legal blog, direct MOSD site preferred if known)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, 
        requirements: "Education: Omani/GCC national. Degree in psychology or counselling (per new regulation) + required experience (differs for psychological vs family counselling). Individual MOSD practitioner license now required; visiting foreign counsellors need approval.",
        training: "Required experience (differs for psychological vs family counselling).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: License from MOSD (for private practice) or MoH (for hospital practice). Education: Bachelor or Master in Psychology/Counseling. If MoH: Master’s + Prometric exam for psychologist.",
        training: "Supervised practice implied if part of Master's. Prometric exam for MoH psychologist license.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: MoH license. Education: Master’s or PhD in Clinical Psychology. Verification of degree, Prometric exam, and usually 2+ yrs experience. Foreigners need equivalency.",
        training: "Usually 2+ yrs experience. Prometric exam.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"MOSD licenses 'Psychological Counsellors' and 'Family Counsellors'. MoH licenses if in health sector.\" Sources: blog.decree.om.\nCounselling Psychology: \"Must hold license either from MOSD (for private practice) or MoH (for hospital practice).\"\nClinical Psychology: \"Oman’s MOSD reg doesn’t cover “clinical” separately – they’d fall under health licensing (MoH/OMSB).\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (Visiting foreign counsellors need approval from MOSD). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Qatar": {
    name: "Qatar",
    flag: "🇶🇦",
    region: "Middle East",
    regulatory: "Department of Healthcare Professions (DHP) / Qatar Council for Healthcare Practitioners (QCHP) (https://www.moph.gov.qa/english/departments/Pages/Qatar-Council-for-Healthcare-Practitioners.aspx); sehanafsia.moph.gov.qa (Mental Health Service, MoPH)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, 
        requirements: "Education: Bachelor’s in Psychology (minimum); most have Master’s in Counseling/Clinical. 2 years experience + QCHP exam needed for licensing (as Psychologist or allied mental health). Cannot practice legally without DHP registration.",
        training: "2 years experience + QCHP exam.",
        renewal: "Dependent on Psychologist/allied health license renewal (annual with CPD)."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: QCHP (DHP) license as 'Psychologist'. Education: Master’s in Counseling/Clinical Psychology with supervised experience. Must pass qualifying exam and be licensed as Psychologist by DHP.",
        training: "Supervised experience as part of Master's. Must pass DHP qualifying exam.",
        renewal: "Annual license renewal with CPD."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: DHP license as 'Clinical Psychologist'. Education: Master’s or PhD in Clinical Psychology + 2+ years experience. Must obtain license from DHP (credential verification + Prometric exam).",
        training: "2+ years experience. Prometric exam.",
        renewal: "Annual license renewal with CPD."
    },
    notes: "Counselling: \"No separate 'counselor' license; typically licensed as Psychologist or allied mental health by DHP/QCHP.\" Source: trueprofile.io, sehanafsia.moph.gov.qa.\nCounselling Psychology: \"Follows same process as other psychologists for DHP licensing.\" Source: sehanafsia.moph.gov.qa.\nClinical Psychology: \"Licensed as Clinical Psychologist by DHP/QCHP.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (but practice within Qatar requires DHP licensing). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if not claiming Qatari licensure). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Saudi Arabia": {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    region: "Middle East",
    regulatory: "Saudi Commission for Health Specialties (SCFHS)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, 
        requirements: "Education: Bachelor’s in Psychology for entry-level (psychology technician). Preferably Master’s in Counseling/Clinical Psych for independent practice. Must pass Saudi licensing exam (SPLE) and register with SCFHS (usually as psychologist).",
        training: "Must pass Saudi licensing exam (SPLE).",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: SCFHS license as 'Specialist Psychologist'. Education: Master’s in Counseling or Psychology required. SCFHS classification & exam needed for license.",
        training: "SCFHS exam. Ongoing supervision until reaching consultant level.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: SCFHS license. Education: Master’s in Clinical Psychology (or PhD for consultant level). SCFHS license mandatory: credential verification + SPLE exam + 1-2 yrs supervised practice. Classified as Specialist/Consultant Psychologist depending on degree/experience.",
        training: "1-2 yrs supervised practice. SPLE exam.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"Providing counseling requires SCFHS registration (usually as psychologist).\"\nCounselling Psychology: \"Typically licensed as Specialist Psychologist (Counseling) by SCFHS.\"\nClinical Psychology: \"Clinical Psychologist title protected. Licensed by SCFHS.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (but practice within KSA requires SCFHS registration). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if not claiming SCFHS registration). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"United Arab Emirates": {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    region: "Middle East",
    regulatory: "Dubai Health Authority (DHA); Department of Health Abu Dhabi (DOH); Ministry of Health and Prevention (MOHAP); Dubai Healthcare City (DHCC) (https://www.dhcc.ae)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, 
        requirements: "License Needed: Health authority license (DHA/DOH/MOHAP) usually as 'Psychologist' or allied health. Education: Master’s in Counseling or Psychology (required by DHA/DOH PQR). 2 years post-grad experience. Pass licensing exam (e.g., DHA CBT).",
        training: "2 years post-grad experience. Pass licensing exam (e.g., DHA CBT).",
        renewal: "Typically required for health authority licenses."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: Health authority license (DHA/DOH/MOHAP) as 'Psychologist'. Education: Master’s in Counseling/Clinical Psych plus experience (2+ yrs). Must obtain license from health authority – essentially same requirements as clinical. Often titled 'Clinical Psychologist – Counseling' on license.",
        training: "2+ yrs experience. Must pass health authority licensing exam.",
        renewal: "Typically required for health authority licenses."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: Health authority license (DHA/DOH/MOHAP) as 'Clinical Psychologist'. Education: Master’s (2-year) in Clinical Psychology (or PsyD/PhD). 2-3 yrs experience. Pass HAAD/DHA/MOH licensing exam.",
        training: "2-3 yrs experience. Pass health authority licensing exam.",
        renewal: "Requires CPD and license renewal."
    },
    notes: "Counselling: \"Some licensed as 'Counselor' in DHCC (https://www.dhcc.ae), but generally fall under psychologist category with DHA/DOH/MOHAP.\"\nCounselling Psychology: \"Licensed under Psychologist category by relevant health authority.\"\nClinical Psychology: \"Clinical Psychologist is a licensed title by DHA/DOH/MOHAP.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (but practice within UAE requires health authority licensing). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status (if not claiming UAE licensure). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Kuwait": {
    name: "Kuwait",
    flag: "🇰🇼",
    region: "Middle East",
    regulatory: "Ministry of Health (MOH)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false, 
        requirements: "Education: Bachelor’s in Psych (min); often Master’s for expats.",
        training: "Not specified for distinct 'counselor' role if not under MOH psychologist license.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false, 
        requirements: "Education: Master’s in Counseling/Applied Psychology is typical. Must get MOH license (credentials verified, exam) to work as 'psychologist' in health settings.",
        training: "MOH exam for psychologist license.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: MOH License. Education: Master’s or PhD in Clinical Psychology. Usually entails Prometric exam and min. 2 yrs experience. Often needs Ministry evaluation and local sponsor (employer).",
        training: "Min. 2 yrs experience. Prometric exam.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"No distinct 'counselor' license.\"\nCounselling Psychology: \"Title 'psychologist' protected in health settings, requiring MOH license.\"\nClinical Psychology: \"MOH License required to practice as a clinical psychologist.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed (If practicing as 'psychologist' in Kuwait, MOH license needed). Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status (if not claiming Kuwaiti MOH psychologist license). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Iraq": {
    name: "Iraq",
    flag: "🇮🇶",
    region: "Middle East",
    regulatory: "Ministry of Health (role in employment, but no formal licensing body mentioned for psychologists/counsellors)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "Education: No official requirements. Many counselors have short trainings via NGOs or basic psychology/social science degrees. Practice is based on employer’s trust.",
        training: "No formal requirements.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: Bachelor’s in Psychology (if available) common for anyone titled psychologist. No license needed to practice psychotherapy (though psychiatrists largely handle therapy).",
        training: "No formal requirements.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Master’s/PhD in Psychology (rare in Iraq) for those few practicing clinically. Generally work under psychiatrists. No formal license or registration; reliant on academic credential and Ministry of Health employment plus 1000 clinical hours under supervision.",
        training: "1000 clinical hours under supervision for MoH employment.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"Practice is based on employer’s trust.\"\nCounselling Psychology: \"Psychiatrists largely handle therapy.\"\nClinical Psychology: \"Reliant on academic credential and Ministry of Health employment.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Jordan": {
    name: "Jordan",
    flag: "🇯🇴",
    region: "Middle East",
    regulatory: "Ministry of Health (MoH); Jordanian Psychological Association (JPA) (membership often required/preferred); Ministry of Education (for school counselors)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false, 
        requirements: "Education: Bachelor’s in Psychology or Counseling typically. For private practice, need JPA membership and MoH approval of clinic. School counselors require relevant degree and Ministry of Education hiring.",
        training: "Not specified beyond degree/membership for a distinct 'counselor' role separate from psychologist.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: Bachelor’s (and often Master’s) in Psychology. Typically join Jordanian Psychological Association. To practice, need to work in MoH-approved settings or have clinic sanctioned by MoH. Essentially must be a credentialed psychologist.",
        training: "Not specified beyond degree/JPA membership.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Master’s in Clinical Psychology usually. Often require association membership and MoH recognition. Work in hospitals/clinics alongside psychiatrists. No separate exam; governed by MoH policies.",
        training: "Not specified beyond degree/MoH policies.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"Counseling services require being a recognized psychologist under MoH.\" Source: pmc.ncbi.nlm.nih.gov.\nCounselling Psychology: \"Must be a credentialed psychologist to practice (implying MoH recognition).\"\nClinical Psychology: \"Governed by MoH policies. No specific legislation.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (Practice in Jordan implies meeting psychologist criteria for MoH). Counselling Psychology: Cross-border allowed (Practice in Jordan implies meeting psychologist criteria for MoH). Clinical Psychology: Cross-border allowed (Practice in Jordan implies MoH recognition).",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Israel": {
    name: "Israel",
    flag: "🇮🇱",
    region: "Middle East",
    regulatory: "Ministry of Health (https://www.health.gov.il) (for Clinical Psychologists)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "Education: Due to the lack of formal regulation, there are no standardized educational or certification requirements to become a counselor in Israel. Practitioners may have diverse educational backgrounds and training experiences.",
        training: "No standardized requirements.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true, 
        requirements: "License Needed: (Implied) Follow general pathway for psychologists licensed by Ministry of Health. Education: Relevant academic qualifications and supervised practice (as per general psychologist requirements).",
        training: "Supervised practice (as per general psychologist requirements).",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: Ministry of Health license. Education: Completion of a master's degree in clinical psychology from a recognized institution. Residency (Hitmachut): Supervised residency program in a recognized clinical setting. Licensing Examination: Pass licensing examination administered by the Ministry of Health.",
        training: "Supervised residency (Hitmachut). Pass licensing examination.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: \"No specific license from a governmental body.\"\nCounselling Psychology: \"Operate under the broader category of psychology, which is regulated by Ministry of Health.\"\nClinical Psychology: \"License from the Ministry of Health required.\" URL: Health.gov.il.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. (as psychologist). Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Lebanon": {
    name: "Lebanon",
    flag: "🇱🇧",
    region: "Middle East",
    regulatory: "Lebanese Order of Psychologists (LOPsy); Ministry of Public Health (MoPH) (https://www.moph.gov.lb)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "License Needed: LOPsy registration and MoPH license. Education: Accredited graduate degree in psychology (Master’s/Doctorate).",
        training: "≥400 hours supervised training per Law 8/2017.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "License Needed: LOPsy registration and MoPH license. Education: Accredited graduate program in psychology with counselling emphasis.",
        training: "Supervised practicum per Law 8/2017 (≥400 hours).",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "License Needed: LOPsy registration and MoPH license. Education: Advanced degree in clinical psychology (Master’s or PhD).",
        training: "≥300 hours supervised intervention + 100 hours observation per Circular 113.",
        renewal: "Not specified in provided data."
    },
    notes: "General: \"All psychological practice requires LOPsy membership and MoPH license under Law 8/2017.\"\nRelevant Bodies: Lebanese Order of Psychologists; Ministry of Public Health (https://www.moph.gov.lb).",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services - only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Counselling Psychology: Outbound services - only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.). Clinical Psychology: Outbound services - only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide online cross border services.)"
    },
    updated: "2025-06-05"
},
"Yemen": {
    name: "Yemen",
    flag: "🇾🇪",
    region: "Middle East",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "Education: No legally mandated qualifications (degrees in psychology/social work common).",
        training: "No national licensing exam or registration.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: Psychology/social work degrees used by NGOs.",
        training: "No formal supervised hours or exam.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Psychology degree; Master’s in clinical psychology preferred.",
        training: "No official supervised requirements or exams.",
        renewal: "Not applicable."
    },
    notes: "General: \"No licensing board or law governing psychotherapeutic practice.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Cross-border practice is allowed. Clinical Psychology: Cross-border practice is allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Palestine": {
    name: "Palestine",
    flag: "🇵🇸",
    region: "Middle East",
    regulatory: "Not specified in provided data.",
    colorCode: {
        'counselling': 'pending',
        'counselling-psychology': 'pending',
        'clinical': 'pending'
},
    counselling: {
        regulated: false, 
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    notes: "Data for Palestine was not provided in the input.",
    crossBorder: {
        inbound: "Not specified in provided data.",
        outbound: "Not specified in provided data."
    },
    updated: "2025-06-05"
},
"Iran": {
    name: "Iran",
    flag: "🇮🇷",
    region: "Middle East",
    regulatory: "Not specified in provided data.",
    colorCode: {
        'counselling': 'pending',
        'counselling-psychology': 'pending',
        'clinical': 'pending'
},
    counselling: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    notes: "Data for Iran was not provided in the input.",
    crossBorder: {
        inbound: "Not specified in provided data.",
        outbound: "Not specified in provided data."
    },
    updated: "2025-06-05"
},
"Syria": {
    name: "Syria",
    flag: "🇸🇾",
    region: "Middle East",
    regulatory: "Not specified in provided data.",
    colorCode: {
        'counselling': 'pending',
        'counselling-psychology': 'pending',
        'clinical': 'pending'
},
    counselling: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: false,
        requirements: "Not specified in provided data.",
        training: "Not specified in provided data.",
        renewal: "Not specified in provided data."
    },
    notes: "Data for Syria was not provided in the input.",
    crossBorder: {
        inbound: "Not specified in provided data.",
        outbound: "Not specified in provided data."
    },
    updated: "2025-06-05"
},
// Entries for other regions like Europe/Asia (Caucasus) and South Asia continue below
"Georgia": { // Region: Europe/Asia (Caucasus) - Not Middle East, so retains original 5 keys for now
    name: "Georgia",
    flag: "🇬🇪",
    region: "Europe/Asia (Caucasus)",
    regulatory: "None specified for licensing. (psychotherapyresearch.org mentioned as a source indicating no law).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "Education: No legal requirements. Typically degree in psychology or related field if any. Many practitioners get informal or foreign training. Practice is done without license; quality varies due to no oversight.",
        training: "No formal requirements.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: University degree in Psychology is typical for calling oneself a psychologist. No official recognition of specialty. Some may have Masters, but no license required.",
        training: "No formal requirements.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Master’s/PhD in Clinical or Counseling Psych if practicing as such (often trained abroad). No licensing board; rely on employment or private practice without formal approval.",
        training: "No formal requirements.",
        renewal: "Not applicable."
    },
    notes: "General: \"No law for counsellors/psychotherapists. No licensing for psychologists.\" Source: psychotherapyresearch.org.\nClinical Psychology: \"Psychiatrists cover clinical roles.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Afghanistan": { // Region: South Asia - Not Middle East, so retains original 5 keys for now
    name: "Afghanistan",
    flag: "🇦🇫",
    region: "South Asia",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green',
},
    counselling: {
        regulated: false,
        requirements: "Education: No legally defined requirements (bachelor’s plus NGO training common).",
        training: "No standardized license or exam.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Education: Bachelor’s or Master’s in psychology typical.",
        training: "No licensing exam or registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Education: Master’s or PhD in clinical psychology (often abroad).",
        training: "No license issued; employment-based credentialing only.",
        renewal: "Not applicable."
    },
    notes: "General: \"No formal licensing system.\"",
    crossBorder: {
        inbound: "Counselling: Cross-border practice is allowed. Counselling Psychology: Cross-border practice is allowed. Clinical Psychology: Cross-border practice is allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
// Assuming the previous entries for ANZ & Oceania (up to Solomon Islands) ended,
// this continues the 'countries' object for the Africa region
"Egypt": {
    name: "Egypt",
    flag: "🇪🇬",
    region: "Africa",
    regulatory: "Ministry of Health (regulates psychotherapy under Mental Health Care Law 71 of 2009); Egyptian Psychologists Association (voluntary membership)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, // General counselling unregulated unless it's psychotherapy
        requirements: "There are no statutory requirements specifically for general counselling in Egypt. Counsellors typically hold degrees in psychology or social science. However, individuals providing psychotherapy (including therapeutic counselling) must obtain a psychotherapy license under Mental Health Care Law 71/2009 from the Ministry of Health.",
        training: "Not specified beyond degree for general counselling; psychotherapy license involves supervised training and exam.",
        renewal: "A 7-year renewable license is then issued for independent practice (for psychotherapy license)."
    },
    counsellingPsychology: {
        regulated: false, // For distinct title, but psychotherapy practice is regulated
        requirements: "Counselling psychologists must hold an advanced degree (Master’s or Ph.D.) in psychology (clinical or counselling). If providing psychotherapy, they follow the same Ministry of Health licensure route as clinical psychologists (membership in the Egyptian Psychologists Association, supervised training, and a licensing exam).",
        training: "Supervised training, and a licensing exam (for psychotherapy license).",
        renewal: "A 7-year renewable license is then issued for independent practice (for psychotherapy license)."
    },
    clinical: {
        regulated: true,
        requirements: "Must hold an advanced degree (M.A. or Ph.D.) in Clinical Psychology from a recognized university, be a member of the Egyptian Psychologists Association, complete approved supervised training, and pass an evaluation (interview/exam) by the Ministry of Health licensing committee.",
        training: "Approved supervised training, and pass an evaluation (interview/exam) by the Ministry of Health licensing committee.",
        renewal: "A 7-year renewable license is then issued for independent practice."
    },
    notes: "General: Psychotherapy is regulated under Mental Health Care Law 71 of 2009, requiring a Ministry of Health license.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Kenya": {
    name: "Kenya",
    flag: "🇰🇪",
    region: "Africa",
    regulatory: "Counsellors and Psychologists Board (CPB) (established by Counsellors and Psychologists Act, 2014)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Counsellors in Kenya must hold at least a Bachelor’s degree in counselling or psychology, complete supervised practice or internship, pass any required evaluations, and register with the Counsellors and Psychologists Board (CPB) under the Counsellors and Psychologists Act No. 14 of 2014.",
        training: "Supervised practice or internship, pass any required evaluations.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Practitioners generally need a Master’s degree in Counselling Psychology or Psychology, complete supervised internship, pass any required Board evaluation, and register with the Counsellors and Psychologists Board (CPB) under the Counsellors and Psychologists Act No. 14 of 2014.",
        training: "Supervised internship, pass any required Board evaluation.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Typically a Master’s in Clinical Psychology is required. Practitioners must complete supervised clinical placements, pass any required evaluation, and register with the Counsellors and Psychologists Board (CPB) under the Counsellors and Psychologists Act No. 14 of 2014 to practice independently.",
        training: "Supervised clinical placements, pass any required evaluation.",
        renewal: "Not specified in provided data."
    },
    notes: "General: All three professions are regulated by the Counsellors and Psychologists Board (CPB) under the Counsellors and Psychologists Act No. 14 of 2014.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Morocco": {
    name: "Morocco",
    flag: "🇲🇦",
    region: "Africa",
    regulatory: "None specified.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Morocco. Practitioners typically hold at least a Licence or Master’s degree in psychology or counselling. However, there is no legal licensing framework for counsellors, so formal registration is not mandated.",
        training: "No mandated training beyond academic qualifications.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No distinct legal licensing exists. A counselling psychologist typically holds at least a Master’s in psychology (often clinical/counselling). There is no separate licensure or professional board regulating counselling psychologists; academic credentials and informal practice standards predominate.",
        training: "No mandated training beyond academic qualifications.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Practitioners generally need at least a Master’s in Clinical Psychology. No formal supervised internship or licensing exam is mandated by law; clinical psychologists practice upon obtaining their academic qualification. There is no statutory body issuing clinical psychologist licenses.",
        training: "No formal supervised internship or licensing exam is mandated by law.",
        renewal: "Not applicable."
    },
    notes: "General: No formal licensing or statutory regulation for counsellors or psychologists. Practice is based on academic credentials.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Nigeria": {
    name: "Nigeria",
    flag: "🇳🇬",
    region: "Africa",
    regulatory: "Counselling Association of Nigeria (CASSON) (voluntary professional body)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Nigeria. Practitioners generally hold a Bachelor’s or Master’s degree in counselling or psychology. Although professional bodies (e.g., CASSON) exist, membership and certification remain voluntary rather than legally required.",
        training: "Voluntary certification through professional bodies like CASSON.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No statutory licensing path exists. Counselling psychologists typically hold a Master’s in Counselling or Clinical Psychology. They rely on academic credentials and may join professional associations (e.g., CASSON), but there is no legal route specifically for Counselling Psychologists.",
        training: "Voluntary association membership.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "There is no statutory licensing scheme. Clinical psychologists typically hold a Master’s or Doctorate in Clinical Psychology. Practice is based on academic credentials alone, with no formal registration or licensing board for clinical psychologists.",
        training: "Practice based on academic credentials.",
        renewal: "Not applicable."
    },
    notes: "General: No statutory regulation or licensing for counsellors or psychologists. Professional associations like CASSON are voluntary.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"South Africa": {
    name: "South Africa",
    flag: "🇿🇦",
    region: "Africa",
    regulatory: "Health Professions Council of South Africa (HPCSA) (regulates under Health Professions Act, Act 56 of 1974) (www.hpcsa.co.za)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Counsellors must hold an accredited qualification (e.g., a Bachelor’s or B.Psych) with supervised practice, pass the required board exam, and register as “Registered Counsellors” with the Health Professions Council of South Africa (HPCSA) under the Health Professions Act (Act 56 of 1974).",
        training: "Supervised practice, pass the required board exam.",
        renewal: "HPCSA registration typically requires renewal."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Counselling Psychologists must earn a Master’s in Counselling Psychology from an accredited university, complete a 12-month supervised internship, and pass the Board examination. They register with the Health Professions Council of South Africa (HPCSA) to use the protected title “Counselling Psychologist.”",
        training: "12-month supervised internship, pass the Board examination.",
        renewal: "HPCSA registration typically requires renewal."
    },
    clinical: {
        regulated: true,
        requirements: "Practitioners must complete a Master’s in Clinical Psychology from an accredited program, a 12-month supervised internship, and a one-year community service placement. Afterwards, they must pass the Board examination and register with the Health Professions Council of South Africa (HPCSA) to practice as clinical psychologists.",
        training: "12-month supervised internship, one-year community service placement, pass the Board examination.",
        renewal: "HPCSA registration typically requires renewal."
    },
    notes: "General: All three professions are regulated by the HPCSA under the Health Professions Act.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Algeria": {
    name: "Algeria",
    flag: "🇩🇿",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements for practising counselling in Algeria. Individuals typically possess a Bachelor’s or Master’s degree in psychology for employment in public roles, but no formal licensing or dedicated professional registration is mandated by law.",
        training: "No formal licensing or dedicated professional registration.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no separate licensing system for counselling psychologists. Typically, they hold a Master’s in psychology (clinical or counselling). No statutory body enforces a distinct route for Counselling Psychologists; they practice on the basis of academic training alone.",
        training: "Practice on the basis of academic training alone.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "There is no dedicated licensing system. A Master’s in Clinical Psychology is the usual academic requirement. Practitioners can be hired by hospitals or clinics after graduation, but no formal supervised post-degree internship or licensing exam is imposed by law.",
        training: "No formal supervised post-degree internship or licensing exam.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists; practice is based on academic qualifications.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Tunisia": {
    name: "Tunisia",
    flag: "🇹🇳",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Tunisia. Practitioners typically hold a Licence or Master’s degree in psychology. While many do pursue postgraduate training in counselling or clinical fields, there is no licensing board specifically for counsellors.",
        training: "No licensing board.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No distinct legal licensing framework exists for counselling psychologists. Most hold a Master’s in psychology (often with a counselling or clinical focus). They practice under general academic and institutional norms without a separate statutory route for Counselling Psychologists.",
        training: "Practice under general academic and institutional norms.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "Typically requires at least a Master’s in Clinical Psychology (Licence + Master’s under the LMD system). There is no official licensing or post-degree internship requirement. Clinical psychologists can begin practice upon securing employment in hospitals or private settings.",
        training: "No official licensing or post-degree internship requirement.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists; practice is based on academic credentials.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Angola": {
    name: "Angola",
    flag: "🇦🇴",
    region: "Africa",
    regulatory: "Ordem dos Psicólogos de Angola (OPsA) (exists unofficially, lacks government approval)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There is no operative regulatory system for counsellors in Angola. The Ordem dos Psicólogos de Angola (OPsA) is not officially recognized by the government, so no license is issued. Practitioners generally rely on psychology degrees and professional experience without a statutory requirement.",
        training: "No statutory requirement.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Counselling Psychologists are not recognized under a formal licensing system. The Ordem dos Psicólogos de Angola (OPsA) remains unofficial. Practitioners rely on psychology degrees (Licenciatura or Master’s) with no government-issued license.",
        training: "No government-issued license.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No recognized licensing body. Clinical psychologists usually hold a Licenciatura or Master’s in Clinical Psychology. Since the Ordem dos Psicólogos de Angola (OPsA) is not legally recognized by the government, no official exam or license is currently required to practice.",
        training: "No official exam or license.",
        renewal: "Not applicable."
    },
    notes: "General: Ordem dos Psicólogos de Angola (OPsA) is unofficial and cannot issue licenses. No statutory regulation.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Botswana": {
    name: "Botswana",
    flag: "🇧🇼",
    region: "Africa",
    regulatory: "Botswana Health Professions Council (BHPC) (www.gov.bw/ministries/health-and-wellness/botswana-health-professions-council - general gov page)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: false, // Direct title, but falls under psychology which is regulated
        requirements: "Counselling falls under psychology, which is regulated by the Botswana Health Professions Council (BHPC). Counsellors must hold a relevant psychology or counselling qualification (commonly a Master’s) and register with BHPC to practice legally.",
        training: "Registration with BHPC.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Counselling psychologists must register with the Botswana Health Professions Council (BHPC) as psychologists. Typically, they hold a Master’s in psychology (counselling/clinical), complete supervised experience, and obtain BHPC recognition to practice counselling psychology.",
        training: "Supervised experience, BHPC recognition.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Must hold at least a Master’s (or Doctorate) in Clinical Psychology, complete supervised clinical practice, and register with the Botswana Health Professions Council (BHPC). This registration confers the legal authority to practice as a clinical psychologist.",
        training: "Supervised clinical practice, registration with BHPC.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling: Falls under psychology regulation by BHPC.\nCounselling Psychology & Clinical Psychology: Regulated by BHPC.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed (but implies BHPC registration if practicing psychology in Botswana). Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Cameroon": {
    name: "Cameroon",
    flag: "🇨🇲",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements for practising counselling in Cameroon. Individuals typically hold a Bachelor’s or Master’s in psychology for employment, but there is no licensing board for counsellors. Most counsellors validate their credentials via institutional or NGO-based standards.",
        training: "Validation via institutional or NGO-based standards.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no official licensing board for counselling psychologists. They usually hold a Master’s in psychology with a counselling orientation. Practice is governed by academic credentials and any institutional or NGO standards, rather than a statutory path.",
        training: "Governed by academic credentials and institutional/NGO standards.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No statutory route or licensing board for clinical psychologists. Typically, a Master’s in Clinical Psychology is expected for hospital or NGO employment, but no formal supervised internship or licensing exam is mandated by law.",
        training: "No formal supervised internship or licensing exam mandated.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Eswatini": {
    name: "Eswatini",
    flag: "🇸🇿",
    region: "Africa",
    regulatory: "Eswatini Medical and Dental Council (voluntary registration encouraged)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There is no dedicated licensing system specifically for counsellors in Eswatini. Practitioners generally hold a Bachelor’s or Master’s in counselling or psychology. Some seek recognition through the Eswatini Medical and Dental Council, but no formal counsellor license is mandated by law.",
        training: "Voluntary recognition through Eswatini Medical and Dental Council.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No distinct licensing process for counselling psychologists. Generally, they hold a Master’s in counselling or psychology. Some may register with the Eswatini Medical and Dental Council, but there is no formal licensure specific to Counselling Psychology.",
        training: "Voluntary registration with Eswatini Medical and Dental Council.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "There is no dedicated clinical psychology licensing board. Generally, a Master’s or Doctorate in Clinical Psychology is required. Some practitioners register under the Eswatini Medical and Dental Council, though no formal clinical psychologist license is stipulated by law.",
        training: "Voluntary registration with Eswatini Medical and Dental Council.",
        renewal: "Not applicable."
    },
    notes: "General: No specific/formal licensing for counselling or psychology. Eswatini Medical and Dental Council offers a form of voluntary registration/recognition.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Gabon": {
    name: "Gabon",
    flag: "🇬🇦",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Gabon. Practitioners typically hold at least a Licence or Master’s degree in psychology, though no formal licensing or professional registration is legally required.",
        training: "No formal licensing or professional registration.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal licensing exists. Counselling psychologists typically hold a Licence or Master’s in psychology (often from Gabon or abroad). There is no dedicated board or route for registering counselling psychologists; they practice based on their academic qualifications.",
        training: "Practice based on academic qualifications.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official clinical psychology license exists. Practitioners generally hold a Master’s or Doctorate in Clinical Psychology from a recognized university. They typically work in hospital or institutional settings without a separate supervised internship or licensing exam.",
        training: "No separate supervised internship or licensing exam.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists; practice is based on academic credentials.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Gambia": {
    name: "Gambia",
    flag: "🇬🇲",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements for practising counselling in the Gambia. Counsellors generally possess relevant qualifications (a degree or diploma in counselling or psychology). No official licensing scheme exists, and validation often occurs through NGOs or healthcare employers.",
        training: "Validation often occurs through NGOs or healthcare employers.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no separate licensing route for counselling psychologists. They generally hold a relevant psychology degree (Bachelor’s or Master’s). Practice is often validated by NGO or employer standards, not by a statutory board specifically for Counselling Psychology.",
        training: "Validation by NGO or employer standards.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "There is no statutory licensing system for clinical psychologists. Most practitioners hold an advanced degree (Master’s or Ph.D.) in Clinical Psychology. Practice is typically governed by employer or NGO standards rather than a dedicated government license.",
        training: "Governed by employer or NGO standards.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists. Validation often via NGOs/employers.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Ghana": {
    name: "Ghana",
    flag: "🇬🇭",
    region: "Africa",
    regulatory: "Ghana Psychology Council (GPC) (under Act 857, Health Professions Regulatory Bodies Act, 2013) (www.ghana.gov.gh/mdas/a7f8bfe832/)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Counsellors in Ghana must have at least a Bachelor’s or Diploma in counselling or psychology, pass the licensure exam, complete a supervised internship, and register with the Ghana Psychology Council (GPC) under Act 857 to practice legally.",
        training: "Pass the licensure exam, complete a supervised internship.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Counselling Psychologists must hold at least a Master’s in psychology/counselling psychology, complete supervised practice, pass the Ghana Psychology Council licensure examination, and register with the Ghana Psychology Council (GPC) under Act 857 to legally practice.",
        training: "Complete supervised practice, pass GPC licensure examination.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "A Master’s or M.Phil in Clinical Psychology is required. Candidates must complete at least one year of supervised internship, pass the licensure exam administered by the Ghana Psychology Council (GPC), and register with GPC under Act 857 to legally practice.",
        training: "At least one year of supervised internship, pass GPC licensure exam.",
        renewal: "Not specified in provided data."
    },
    notes: "General: All three professions regulated by Ghana Psychology Council (GPC) under Act 857.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Malawi": {
    name: "Malawi",
    flag: "🇲🇼",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Malawi. Practitioners typically hold a degree or diploma in counselling or psychology. No formal licensing system is in place; rather, institutions or employers set their own requirements for hiring.",
        training: "No formal licensing system.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no separate legal licensure for counselling psychologists. Practitioners typically hold advanced academic qualifications (e.g., a Master’s in counselling or clinical psychology) and rely on institutional or NGO standards for validation rather than any statutory licensing.",
        training: "Validation through institutional or NGO standards.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No formal licensing body for clinical psychologists. Practitioners generally hold a Master’s or Doctorate in Clinical Psychology and work under broader health or mental health regulations without a separate internship or licensing examination required by law.",
        training: "No separate internship or licensing examination required by law.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing for counsellors or psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Mauritius": {
    name: "Mauritius",
    flag: "🇲🇺",
    region: "Africa",
    regulatory: "Ministry of Health (for clinical psychologists offering psychotherapy); voluntary certification bodies exist.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements specifically for counselling in Mauritius. Practitioners usually hold a Bachelor’s or Master’s in counselling or psychology and may voluntarily join professional bodies, but legal licensing as a counsellor is not mandated.",
        training: "Voluntary professional body membership.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "Counselling psychologists typically hold a Master’s in psychology with a counselling focus. There is no specific legal route or license solely for counselling psychologists; practice is integrated into broader mental health regulations, with voluntary membership in professional associations.",
        training: "Voluntary professional association membership.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // within health framework
        requirements: "Clinical psychologists must hold an advanced degree (Master’s or Ph.D.) in Clinical or Counselling Psychology, complete supervised clinical training, and obtain licensure or approval from the health authorities. Though integrated under broader mental health laws, there is no separate “Clinical Psychologist Council.”",
        training: "Supervised clinical training, licensure/approval from health authorities.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling/Counselling Psychology: Not specifically regulated, voluntary bodies exist.\nClinical Psychology: Regulated within health framework for psychotherapy.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Mozambique": {
    name: "Mozambique",
    flag: "🇲🇿",
    region: "Africa",
    regulatory: "Relevant health authority (for clinical psychology).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Mozambique. Practitioners often hold a degree in psychology or counselling, but no standalone licensing mechanism exists. Most counsellors validate their practice through NGOs or employment criteria in healthcare settings.",
        training: "Validation through NGOs or employment criteria.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal licensing path exists for counselling psychologists. They typically hold a Bachelor’s or Master’s in psychology (counselling or clinical). Practice is often conducted through NGOs or health institutions, without a distinct statutory registration for Counselling Psychology.",
        training: "No distinct statutory registration.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // as part of broader health system
        requirements: "Practitioners must hold a Master’s or Doctorate in Clinical Psychology, undergo supervised clinical training, and register with the relevant health authority. There is no standalone clinical psychology act, but clinical services are subject to Mozambique’s mental health rules and recognized qualifications.",
        training: "Supervised clinical training, registration with relevant health authority.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling/Counselling Psychology: Not independently regulated.\nClinical Psychology: Regulated under broader mental health system by relevant health authority.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Namibia": {
    name: "Namibia",
    flag: "🇳🇦",
    region: "Africa",
    regulatory: "Health Professions Council of Namibia (HPCNA) (hpcna.com)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Counsellors in Namibia are regulated under broader health laws by the Health Professions Council of Namibia (HPCNA). They must hold a recognized degree in counselling or psychology and register with HPCNA to practice legally.",
        training: "Registration with HPCNA.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Counselling psychologists must register under the Health Professions Council of Namibia (HPCNA). They normally hold a Master’s in Counselling or Clinical Psychology, complete supervised training, and apply for HPCNA recognition to practice counselling psychology independently.",
        training: "Supervised training, HPCNA recognition.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Must have at least a Master’s or Doctorate in Clinical Psychology, complete supervised clinical experience, and register with the Health Professions Council of Namibia (HPCNA). This registration is mandatory to practice independently as a clinical psychologist.",
        training: "Supervised clinical experience, registration with HPCNA.",
        renewal: "Not specified in provided data."
    },
    notes: "General: All three professions regulated by HPCNA.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Rwanda": {
    name: "Rwanda",
    flag: "🇷🇼",
    region: "Africa",
    regulatory: "Rwanda Allied Health Professions Council (RAHPC) (healthregulation.moh.gov.rw)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false, // for dedicated license
        requirements: "There are no dedicated statutory requirements for practising counselling in Rwanda. Practitioners typically hold a Bachelor’s or Master’s in psychology or counselling. Voluntary registration with the Rwanda Allied Health Professions Council (RAHPC) or professional associations is possible but not legally mandated.",
        training: "Voluntary registration with RAHPC or professional associations.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no separate legal licensing route for counselling psychologists. Typically, they hold a Master’s in psychology (counselling or clinical). Practice is guided by the general mental health framework, with no formal requirement for counselling psychologists beyond academic credentials.",
        training: "Guided by general mental health framework beyond academic credentials.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "A Master’s or Ph.D. in Clinical Psychology is required. Practitioners must complete supervised practice and obtain licensure from the relevant authority (often the Rwanda Allied Health Professions Council). They must adhere to national mental health standards to practice independently.",
        training: "Supervised practice, licensure from relevant authority (often RAHPC).",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling/Counselling Psychology: Not specifically licensed, RAHPC for broad regulation/voluntary registration.\nClinical Psychology: Strictly regulated, licensed by authority like RAHPC.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Sierra Leone": {
    name: "Sierra Leone",
    flag: "🇸🇱",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Sierra Leone. Practitioners generally hold a Bachelor’s degree in psychology or counselling. No specific licensing board exists; individuals often work under NGOs or healthcare institutions that set their own standards.",
        training: "Work under NGOs or healthcare institutions that set own standards.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No statutory licensing path exists for counselling psychologists. Individuals who offer psychological counselling typically hold higher-level degrees (often Master’s) in counselling or psychology, but there is no dedicated licensing route or professional board specifically for counselling psychology.",
        training: "No dedicated licensing route or professional board.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No statutory requirements for clinical psychologists. Practitioners typically hold an advanced degree in Clinical Psychology. There is no dedicated licensing path, so they rely on academic credentials and may work under NGO or healthcare frameworks without a formal internship or exam.",
        training: "No formal internship or exam.",
        renewal: "Not applicable."
    },
    notes: "General: No specific licensing. Practitioners operate under general mental health regulations or NGO/institutional standards.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Tanzania": {
    name: "Tanzania",
    flag: "🇹🇿",
    region: "Africa",
    regulatory: "Tanzania Psychological Association (TAPA) (voluntary professional association) (www.tapa.or.tz)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements exclusively for counselling in Tanzania. Practitioners generally hold a Bachelor’s or Master’s degree in psychology or counselling. Voluntary membership in associations like the Tanzania Psychological Association (TAPA) is common but not mandated by law.",
        training: "Voluntary membership in TAPA.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no separate licensing arrangement for counselling psychologists. Generally, they hold a Master’s in psychology or counselling and may join the Tanzania Psychological Association (TAPA), but no specific statutory route or board license exists for Counselling Psychology practice.",
        training: "Voluntary TAPA membership.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true, // governed by national health authorities
        requirements: "Generally, a Master’s or higher in Clinical Psychology is required, plus supervised practice. Clinical psychologists register with relevant Tanzanian health authorities to practice in clinical settings, but there is no separate clinical psychology board or specialized licensing act.",
        training: "Supervised practice, registration with relevant health authorities.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling/Counselling Psychology: Not specifically licensed, TAPA is voluntary.\nClinical Psychology: Governed by national health authorities.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Uganda": {
    name: "Uganda",
    flag: "🇺🇬",
    region: "Africa",
    regulatory: "Uganda Counseling Association (UCA) (voluntary professional membership) (ucaug.org); Ministry of Health (licenses clinical psychologists)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'red'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements specifically for counselling practice in Uganda. Practitioners often have a Bachelor’s or Master’s in counselling or psychology and may join the Uganda Counseling Association (UCA), but no separate government-issued counsellor license is required.",
        training: "Voluntary UCA membership.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "There is no official licensing mechanism for counselling psychologists. Practitioners usually hold a Master’s in counselling or clinical psychology, relying on academic qualifications and voluntary membership with professional associations like the Uganda Counseling Association (UCA).",
        training: "Voluntary UCA membership.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "A Master’s or Doctorate in Clinical Psychology is typically required, along with supervised clinical experience. Practitioners must be licensed by the Ministry of Health or an authorized regulatory body; no distinct psychology council exists, but they need official recognition to practice independently.",
        training: "Supervised clinical experience, license from Ministry of Health or authorized body.",
        renewal: "Not specified in provided data."
    },
    notes: "Counselling/Counselling Psychology: Not specifically licensed, UCA is voluntary.\nClinical Psychology: Regulated by Ministry of Health or authorized body.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Zambia": {
    name: "Zambia",
    flag: "🇿🇲",
    region: "Africa",
    regulatory: "None specified for dedicated licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "There are no statutory requirements to practice counselling in Zambia. Individuals typically hold a diploma or degree in counselling or psychology. No dedicated licensing system exists; most practitioners work under institutional guidelines or voluntary professional associations for standards verification.",
        training: "Work under institutional guidelines or voluntary professional associations.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No independent licensing system for counselling psychologists. Practitioners generally hold advanced degrees in psychology or counselling, and operate under general mental health or healthcare frameworks without a separate statutory route for Counselling Psychology.",
        training: "Operate under general mental health or healthcare frameworks.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No dedicated licensing route. Clinical psychologists usually hold at least a Master’s in Clinical Psychology. They operate under general mental health or healthcare guidelines, with no formal supervised internship or licensing exam required by a specific clinical psychology board.",
        training: "No formal supervised internship or licensing exam.",
        renewal: "Not applicable."
    },
    notes: "General: No specific/dedicated licensing. Practice under broader frameworks or voluntary associations.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Benin": {
    name: "Benin",
    flag: "🇧🇯",
    region: "Africa",
    regulatory: "None specified for licensing; self-regulated by professional associations.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None legally mandated. No statutory requirements – counselors usually have a psychology or related degree, but there is no license or supervised practice required by law.",
        training: "No license or supervised practice required by law.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal registration.Typically a university degree (often Master’s) in psychology, but no legal registration or certification is required to be a “counseling psychologist.”",
        training: "No legal registration or certification required.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists usually hold advanced degrees (e.g. Master’s in clinical psychology), but there is no legal internship or licensing process.",
        training: "No legal internship or licensing process.",
        renewal: "Not applicable."
    },
    notes: "General: Not legally regulated; practice self-regulated by associations.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Burkina Faso": {
    name: "Burkina Faso",
    flag: "🇧🇫",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None legally. In practice, a Master’s degree in psychology is expected for one to be considered a psychologist , but no supervised hours or certification are required by law.",
        training: "No supervised hours or certification required by law.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.Counselling psychologists are generally expected to have a Master 2 (Master’s) in psychology , but there is no official registration or special credentialing for them.",
        training: "No official registration or special credentialing.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.A Master’s in clinical psychology is typically needed to work as a clinical psychologist, but no legal internship, exam, or license is enforced.",
        training: "No legal internship, exam, or license enforced.",
        renewal: "Not applicable."
    },
    notes: "General: No licensing or regulation for counselling or psychology. Title \"psychologist\" not legally protected.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Burundi": {
    name: "Burundi",
    flag: "🇧🇮",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None formal. No legal requirements exist; counselors typically have some psychology or social science training, but no license or standardized certification is required.",
        training: "No license or standardized certification required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official criteria.A person with a psychology degree may work as a counseling psychologist, but there is no mandatory registration or supervised practice requirement yet.",
        training: "No mandatory registration or supervised practice requirement.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No formal requirements.Clinical psychologists generally hold relevant degrees (e.g. clinical psychology), but there is no licensing exam or official registry.",
        training: "No licensing exam or official registry.",
        renewal: "Not applicable."
    },
    notes: "General: Counselling and psychology are unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Cabo Verde": {
    name: "Cabo Verde",
    flag: "🇨🇻",
    region: "Africa",
    regulatory: "Ordem dos Psicólogos de Cabo Verde (OPCV) (national psychologists' regulatory body)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Degree & registration.Practitioners must hold an accredited degree in psychology (licenciatura/Master’s) and register with the Ordem. The Ordem sets ethical and training standards (currently finalizing a code of ethics) . Supervised practice may be defined by the Ordem’s regulations (in development).",
        training: "Registration with Ordem; supervised practice may be defined by Ordem's regulations.",
        renewal: "Not specified in provided data."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Ordem membership. One must meet the Ordem’s criteria (appropriate higher education in psychology and any internship requirements it stipulates) to be recognized, though specific specialization (e.g. counseling) is typically achieved through postgraduate training rather than separate licensure.",
        training: "Meet Ordem's criteria, including any internship requirements.",
        renewal: "Not specified in provided data."
    },
    clinical: {
        regulated: true,
        requirements: "Advanced degree & Ordem. A Master’s or equivalent in clinical psychology (or a general psychology degree with clinical specialization) is required, along with Ordem registration. The Ordem may develop specialty certifications, but initially all practicing psychologists need to abide by its standards.",
        training: "Ordem registration.",
        renewal: "Not specified in provided data."
    },
    notes: "General: All psychology practice, including counselling, is regulated by Ordem dos Psicólogos de Cabo Verde (OPCV). Title \"Psychologist\" is protected.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Central African Republic": {
    name: "Central African Republic",
    flag: "🇨🇫",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. There are no formal qualification or certification requirements mandated by law. In practice, only a handful of individuals in CAR have any psychology training at all , and they may practice without regulation.",
        training: "No regulation.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official status.Anyone with some psychology or counseling training can present as a “counseling psychologist” – there is no registration or protected title.",
        training: "No registration or protected title.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No formal requirements.Clinical psychologists (very few in number) operate without licensing; typically they might have received some academic or NGO training, but no legal credential is needed.",
        training: "No legal credential needed.",
        renewal: "Not applicable."
    },
    notes: "General: No legal regulation for counselling or psychology. Field is nascent.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Chad": {
    name: "Chad",
    flag: "🇹🇩",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legal educational or training requirements exist. Counselors are generally individuals with psychology or social science backgrounds, but no certification or license is needed to practice.",
        training: "No certification or license needed.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal pathway. A person can practice as a counseling psychologist if they have training, but there is no registration or legal title protection for that role.",
        training: "No registration or legal title protection.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists in Chad (few in number) typically have academic degrees (often obtained abroad) but do not need a license to practice.",
        training: "Do not need a license to practice.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Comoros": {
    name: "Comoros",
    flag: "🇰🇲",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No mandated qualifications – those providing counseling (e.g. in healthcare or social services) do so without any licensure. Typically, they might have some relevant training, but legally no license is required.",
        training: "Legally no license is required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official recognition. A “counseling psychologist” in Comoros would just be someone with psychology training; no registration or special certificationis in place.",
        training: "No registration or special certification.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No formal requirements.Clinical psychologists (if present) are few; they would have general psychology or clinical training, but no formal internship or licensure is required to practice.",
        training: "No formal internship or licensure required.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Congo (Republic of the Congo)": {
    name: "Congo (Republic of the Congo)",
    flag: "🇨🇬",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No specific legal requirements exist. Counselors usually are individuals with psychology or social work education, but no license or government certification is needed.",
        training: "No license or government certification needed.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.Counselling psychologists (e.g. in private practice or hospitals) operate based on their academic credentials, but do not have a licensing body to answer to.",
        training: "No licensing body.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists typically have a university degree (e.g. from Université Marien Ngouabi) but there is no mandatory registration or clinical license to practice.",
        training: "No mandatory registration or clinical license.",
        renewal: "Not applicable."
    },
    notes: "General: Not legally regulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Djibouti": {
    name: "Djibouti",
    flag: "🇩🇯",
    region: "Africa",
    regulatory: "Ministry of Health (general oversight, no dedicated psychology council).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legally required qualifications beyond general training. Counseling is often provided by psychologists or social workers in practice, without a distinct license.",
        training: "No distinct license.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal criteria.Those practicing psychotherapy or counseling psychology do so based on their general medical or psychology credentials; no counseling psychologist registry exists.",
        training: "No counseling psychologist registry exists.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists (usually working in medical settings) are typically required to have relevant degrees, but there is no licensing board for psychologists – any oversight falls under the general Ministry of Health.",
        training: "No licensing board for psychologists.",
        renewal: "Not applicable."
    },
    notes: "General: Not specifically regulated; general oversight by Ministry of Health if in medical settings.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Democratic Republic of the Congo": {
    name: "Democratic Republic of the Congo",
    flag: "🇨🇩",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None legally. There are no statutory education or training requirements. In practice, most counselors/psychologists in DRC have academic training, but no licenseis needed to practice.",
        training: "No license needed to practice.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.A “counselling psychologist” in DRC operates based on education (often a degree from abroad), but there is no official registration for that title.",
        training: "No official registration for title.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists in DRC typically have a university degree in psychology, but do not need to be licensed. There is no government-mandated internship or exam.",
        training: "No license, no government-mandated internship or exam.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Equatorial Guinea": {
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal requirements are imposed by the government. Counselors or therapists practice based on whatever training they have (often obtained abroad or informally); no license is required.",
        training: "No license required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal recognition. If someone works as a counseling psychologist, it is due to personal qualifications (e.g. degree from Spain); there is no local licensing or registration.",
        training: "No local licensing or registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists, usually foreign-trained, may practice without local licensure. There is no mandated internship or examinationprocess in country.",
        training: "No mandated internship or examination process.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Eritrea": {
    name: "Eritrea",
    flag: "🇪🇷",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legal credential requirements. Counseling services are typically provided by general health workers or rare trained psychologists, without a license.",
        training: "No license.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal pathway.Individuals with psychology training may offer counseling or psychotherapy, but there is no official registration or title protection.",
        training: "No official registration or title protection.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.A few clinicians may have psychology or psychiatry training, but no licensure or certificationspecific to clinical psychology is required.",
        training: "No licensure or certification specific to clinical psychology.",
        renewal: "Not applicable."
    },
    notes: "General: Not formally regulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Guinea": {
    name: "Guinea",
    flag: "🇬🇳",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal educational or training requirements are enforced by law. In reality, Guinea has extremely few trained psychologists (only about 5 in the entire country) , and anyone offering counseling does so without licensure.",
        training: "No licensure.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official status.A counseling psychologist in Guinea is simply someone with a psychology background (if available); no registration or certification exists.",
        training: "No registration or certification exists.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.With virtually no local training programs , any clinical psychologists are likely foreign-trained; no license or formal recognition is required to practice.",
        training: "No license or formal recognition required.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated. Extremely few trained psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Guinea-Bissau": {
    name: "Guinea-Bissau",
    flag: "🇬🇼",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legal requirements – with very few or no locally trained psychologists, counseling is often provided by social workers or visiting professionals without a formal license.",
        training: "No formal license.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal recognition.Anyone practicing counseling psychology does so based on personal qualifications; no official credential is needed.",
        training: "No official credential needed.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Guinea-Bissau likely has only a few clinicians with psychology training (if any); no licensure or standardgoverns clinical psychology practice.",
        training: "No licensure or standard governs practice.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated. Very few or no locally trained psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Côte d'Ivoire": { // Name adjusted for consistency with typical key naming
    name: "Côte d'Ivoire (Ivory Coast)",
    flag: "🇨🇮",
    region: "Africa",
    regulatory: "National Council of Psychologists of Côte d’Ivoire (CNPsy-CI) (self-organizing, aiming for future regulation) (www.conseildespsychologues.ci)",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false, // in transition
        requirements: "None legally. No law specifies requirements. In practice, a Master’s in Psychology is generally expected to use the title, but without a law this is not enforced. (The new council is drafting a code of ethics and advocating standards.)",
        training: "Self-regulation by CNPsy-CI, advocating standards.",
        renewal: "Not applicable (pending regulation)."
    },
    counsellingPsychology: {
        regulated: false, // in transition
        requirements: "No official registration yet.Counselling psychologists are typically those with graduate training in psychology; no state registration or license is required at present.",
        training: "No state registration or license at present.",
        renewal: "Not applicable (pending regulation)."
    },
    clinical: {
        regulated: false, // in transition
        requirements: "No formal requirements yet. Clinical psychologists usually hold a Master’s or PhD in clinical psychology, but there is no licensing board to oversee qualifications. The CNPsy-CI encourages that only those with the proper “titre et statut de psychologue” practice .",
        training: "No licensing board. CNPsy-CI encourages proper qualifications.",
        renewal: "Not applicable (pending regulation)."
    },
    notes: "General: Currently unregulated, but CNPsy-CI is working towards regulation.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Lesotho": {
    name: "Lesotho",
    flag: "🇱🇸",
    region: "Africa",
    regulatory: "None specified for licensing (psychologists often seek HPCSA registration in South Africa).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal requirements are enforced. In practice, practitioners may hold degrees (e.g. BA/MA in counseling), but no licensure or supervision is mandated. Lesotho until recently had no local credentialing – “anyone who so wishes can do this work” .",
        training: "No licensure or supervision mandated.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal credential. A counseling psychologist would typically have an MA in Counseling Psychology, but there is no local license or registration – the role is not legally distinguished from generic counseling.",
        training: "No local license or registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists generally have an advanced degree (M.A./M.Sc. in Clinical Psychology), but there is no licensing exam or board. Many seek credentials abroad due to lack of local regulation.",
        training: "No licensing exam or board.",
        renewal: "Not applicable."
    },
    notes: "General: Not legally regulated. Many seek credentials abroad (e.g., South Africa).",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Liberia": {
    name: "Liberia",
    flag: "🇱🇷",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None (license). No specific licensure. After Liberia’s civil war, a cadre of “mental health clinicians” was trained (nurses and physician-assistants given 6 months training) , but no law defines counselor qualifications. A general expectation is that practitioners have some relevant training, but no formal license is required.",
        training: "No formal license required. Some government training programs for 'mental health clinicians'.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal requirements.With only ~2 clinical psychologists in the country , most counseling psychology services are delivered by mental health nurses or social workers. No registration or specialization credential exists for counseling psychologists.",
        training: "No registration or specialization credential exists.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Liberia has only a couple of psychologists; clinical psychological care is largely provided by psychiatrists or mental health clinicianstrained under government programs. No licensure or board certificationfor clinical psychologists exists.",
        training: "No licensure or board certification.",
        renewal: "Not applicable."
    },
    notes: "General: Not separately regulated. Very few psychologists; mental health services often by other trained clinicians.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Libya": {
    name: "Libya",
    flag: "🇱🇾",
    region: "Africa",
    regulatory: "None specified due to instability.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No explicit legal requirements. Persons offering counseling may have degrees in psychology or social work, but no licensure or standard certificationis enforced by the state.",
        training: "No licensure or standard certification enforced.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal recognition.Counseling psychologists (if identified as such) operate without a licensing framework, often under general medical or educational sectors.",
        training: "No licensing framework.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists typically would be those with advanced psychology education (often obtained abroad), but Libya has no licensing board or official internship requirements in place.",
        training: "No licensing board or official internship requirements.",
        renewal: "Not applicable."
    },
    notes: "General: Not formally regulated due to instability.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Madagascar": {
    name: "Madagascar",
    flag: "🇲🇬",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legal requirements exist. Practitioners of counseling generally have academic training in psychology (the university in Antananarivo offers psychology degrees), but no license or supervised practice mandate is in place.",
        training: "No license or supervised practice mandate.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.Those with specializations (e.g. counseling, school psychology) practice based on their degree; no registration or title protection is provided by law.",
        training: "No registration or title protection.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists usually hold a maîtrise or master’s in psychology, but do not require a license to practice in Madagascar.",
        training: "No license required.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Mali": {
    name: "Mali",
    flag: "🇲🇱",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal educational or training requirements are imposed by law. Counselors/therapists practice based on whatever qualifications they have (often a psychology or social work degree) without any licensure.",
        training: "No licensure.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official pathway. A counseling psychologist in Mali would typically have academic credentials, but no registration or license is needed to practice.",
        training: "No registration or license needed.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists (a small number in Mali) have usually a Master’s degree in psychology, but there is no law requiring a license or specific internship.",
        training: "No law requiring license or specific internship.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Mauritania": {
    name: "Mauritania",
    flag: "🇲🇷",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No mandated qualifications. Any counseling or psychological support is typically provided by social workers or visiting specialists; no license is required.",
        training: "No license required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal criteria.If someone acts as a counseling psychologist, it’s based on personal education (often from abroad); no local certificationexists.",
        training: "No local certification.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Mauritania has extremely few trained psychologists; those in practice have general training and no licensure.",
        training: "No licensure.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated. Extremely few trained psychologists.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Niger": {
    name: "Niger",
    flag: "🇳🇪",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal educational or experiential requirements in law. Counseling and psychological support are often provided by NGOs or social services without a licensing system.",
        training: "No licensing system.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official pathway.Individuals with psychology training may offer counseling, but no registration or credential is required beyond their degree.",
        training: "No registration or credential required beyond degree.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists (very few in Niger) usually train abroad; no local licensure or formalized supervised practiceexists.",
        training: "No local licensure or formalized supervised practice.",
        renewal: "Not applicable."
    },
    notes: "General: Not legally regulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Sao Tome and Principe": {
    name: "Sao Tome and Principe",
    flag: "🇸🇹",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No legally mandated credentials. Given the small size of the country, counseling is often delivered by general physicians or social workers; no special license is required.",
        training: "No special license required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.If practiced, it is by personal qualification; no registration or protected titleexists.",
        training: "No registration or protected title.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.There are very few if any clinical psychologists locally; any that practice do so without a formal license (likely with general medical oversight).",
        training: "No formal license.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Senegal": {
    name: "Senegal",
    flag: "🇸🇳",
    region: "Africa",
    regulatory: "Association of Psychologists of Senegal (APSYSEN) (self-regulates members, official Order planned).",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false, // planned
        requirements: "None yet. No legal requirements exist today. In practice, most counselors/psychologists have at least a Master’s in Psychology (the UCAD university re-opened psychology training) , but no license or statutory supervised hours are enforced.",
        training: "No license or statutory supervised hours enforced currently.",
        renewal: "Not applicable (pending regulation)."
    },
    counsellingPsychology: {
        regulated: false, // planned
        requirements: "No formal licensure now. A counseling psychologist would typically need the same qualifications as any psychologist (Master’s degree), but until the Order is established there is no official registration. (Senegal’s new Order is expected to regulate all professional psychologists once operational.)",
        training: "No official registration until Order is established.",
        renewal: "Not applicable (pending regulation)."
    },
    clinical: {
        regulated: false, // planned
        requirements: "No official requirements now. Clinical psychologists generally hold a Master’s in Clinical Psychology (recently offered at UCAD) , but no license is currently required to practice. Once the Order is active, a Master’s + registration will likely be needed.",
        training: "No license currently required. Registration likely needed once Order is active.",
        renewal: "Not applicable (pending regulation)."
    },
    notes: "General: Currently unregulated, but an official \"Ordre des Psychologues\" is planned. APSYSEN provides self-regulation.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Seychelles": {
    name: "Seychelles",
    flag: "🇸🇨",
    region: "Africa",
    regulatory: "Health Professionals Council of Seychelles (HPC) (www.hpcseychelles.org)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true, // as allied health profession
        requirements: "HPC registration. A relevant degree in psychology (or counseling) is required, and one must apply for HPC registration to legally practice. The HPC mandates standards of training; practicing without registration is an offense. Counselors as a distinct category are not separately licensed, but if their work falls under “psychology,” they need HPC registration.",
        training: "HPC registration based on degree and HPC standards.",
        renewal: "Requires license renewal and CPD per HPC regulations."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "Registration + qualifications. A counseling psychologist must have an appropriate academic qualification (e.g. Bachelor’s/Master’s in psychology) and then register with HPC as a practitioner psychologist. Continued practice requires license renewal and CPD per HPC regulations.",
        training: "Register with HPC as practitioner psychologist.",
        renewal: "Requires license renewal and CPD per HPC regulations."
    },
    clinical: {
        regulated: true,
        requirements: "Degree + registration.Clinical psychologists need a recognized degree (often a Master’s in Clinical Psychology) and must be registered with HPC to practice. Typically, proof of supervised clinical experience is required for registration (HPC standards align with its Act and regulations).",
        training: "Registration with HPC, typically with proof of supervised clinical experience.",
        renewal: "Requires license renewal and CPD per HPC regulations."
    },
    notes: "General: All psychology practice, including counselling work falling under \"psychology,\" is regulated by the HPC. \"Psychologist\" is a protected title.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
},
"Somalia": {
    name: "Somalia",
    flag: "🇸🇴",
    region: "Africa",
    regulatory: "None specified due to instability.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal requirements – mental health support is usually provided by NGO counselors or social workers. There is no government-imposed training or certification.",
        training: "No government-imposed training or certification.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal pathway.Individuals may call themselves counselors or psychologists based on experience or foreign credentials; no Somali registration exists.",
        training: "No Somali registration.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.There are virtually no clinical psychologists in Somalia; any that practice are typically part of NGO programs, with no licensure.",
        training: "No licensure.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated due to prolonged instability.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"South Sudan": {
    name: "South Sudan",
    flag: "🇸🇸",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal qualifications required by law. Due to a critical shortage of professionals, counseling-related work is often done by social workers or NGO-trained personnel without licensure.",
        training: "No licensure.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal criteria.Any available counseling psychology services are delivered without a regulatory structure; practitioners have whatever training NGOs or foreign programs provide.",
        training: "No regulatory structure.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.South Sudan likely has few to zero clinical psychologists. Mental health care is mainly delivered by psychiatric nurses from humanitarian agencies; no licensing or official credential for clinical psychologists exists.",
        training: "No licensing or official credential.",
        renewal: "Not applicable."
    },
    notes: "General: Unregulated. Critical shortage of professionals.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Sudan": {
    name: "Sudan",
    flag: "🇸🇩",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No formal requirements enforced. While Sudan has trained psychiatrists and some psychologists, the latter practice without a licensing system – typically under general hospital employment criteria.",
        training: "No licensing system.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No official pathway.Counseling psychologists (often graduates of University of Khartoum or abroad) work in clinics or academia without any licensure; no regulatory bodyoversees their qualification.",
        training: "No licensure; no regulatory body oversees qualification.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists (a small community in Sudan) generally have advanced degrees, but there is no licensing exam or registry. Many work in educational settings or alongside psychiatrists in hospitals, governed only by their employer’s rules.",
        training: "No licensing exam or registry.",
        renewal: "Not applicable."
    },
    notes: "General: Not specifically regulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Togo": {
    name: "Togo",
    flag: "🇹🇬",
    region: "Africa",
    regulatory: "None specified for licensing.",
    colorCode: {
        'counselling': 'green',
        'counselling-psychology': 'green',
        'clinical': 'green'
},
    counselling: {
        regulated: false,
        requirements: "None. No law dictates qualifications. Counselors typically have degrees in psychology or related fields, but no license or supervised practice is required by the state.",
        training: "No license or supervised practice required.",
        renewal: "Not applicable."
    },
    counsellingPsychology: {
        regulated: false,
        requirements: "No formal process.A counseling psychologist practices based on academic credentials (often obtained at University of Lomé or abroad); no official certificationor exam exists.",
        training: "No official certification or exam.",
        renewal: "Not applicable."
    },
    clinical: {
        regulated: false,
        requirements: "No official requirements.Clinical psychologists usually hold a Master’s or PhD, but there is no licensing exam/board. Many work under general medical institutions without a separate license.",
        training: "No licensing exam/board.",
        renewal: "Not applicable."
    },
    notes: "General: Not legally regulated.",
    crossBorder: {
        inbound: "Counselling: Cross-border allowed. Counselling Psychology: Cross-border allowed. Clinical Psychology: Cross-border allowed.",
        outbound: "Counselling: Implied allowed as per GREEN status. Counselling Psychology: Implied allowed as per GREEN status. Clinical Psychology: Implied allowed as per GREEN status."
    },
    updated: "2025-06-05"
},
"Zimbabwe": {
    name: "Zimbabwe",
    flag: "🇿🇼",
    region: "Africa",
    regulatory: "Allied Health Practitioners Council of Zimbabwe (AHPCZ) (regulates under Health Professions Act) (www.ahpcz.co.zw / hpa.co.zw)",
    colorCode: {
        'counselling': 'red',
        'counselling-psychology': 'red',
        'clinical': 'red'
},
    counselling: {
        regulated: true,
        requirements: "Strict requirements. To be a registered counselor/psychologist, one must have at minimum an Honours degree in psychology plus a Master’s in a relevant field, and complete a one-year supervised internshipunder AHPCZ . After internship, candidates must pass board examinations to fully register. Continuing professional development is also mandated for license renewal.",
        training: "One-year supervised internship under AHPCZ, pass board examinations.",
        renewal: "Requires ongoing CPD and practicing certificate renewal."
    },
    counsellingPsychology: {
        regulated: true,
        requirements: "High standards. A counselling psychologist must have a Master’s in Counseling Psychology , the required one-year supervised practice (post-Masters) under AHPCZ supervision , and then obtain AHPCZ registration as a psychologist. Only individuals meeting these criteria and holding a current practicing certificate may use the title.",
        training: "Master’s in Counseling Psychology, one-year supervised practice (post-Masters) under AHPCZ supervision, AHPCZ registration.",
        renewal: "Requires ongoing CPD and practicing certificate renewal."
    },
    clinical: {
        regulated: true,
        requirements: "High standards. A clinical psychologist must hold a Master’s in Clinical Psychology, complete the AHPCZ-supervised internship, and pass the board’s evaluation . Additional tiers exist (e.g. “Senior Psychologist” after 3 years, “Chartered Psychologist” after 5+ years of practice) as per 2021 regulations .",
        training: "Master’s in Clinical Psychology, AHPCZ-supervised internship, pass board’s evaluation.",
        renewal: "Requires ongoing CPD and practicing certificate renewal."
    },
    notes: "General: Counselling, Counselling Psychology, and Clinical Psychology are regulated by AHPCZ. \"Psychologist\" title is protected.",
    crossBorder: {
        inbound: "Counselling: Inbound Services - License / specific qualification required. Counselling Psychology: Inbound Services - License / specific qualification required. Clinical Psychology: Inbound Services - License / specific qualification required.",
        outbound: "Counselling: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Counselling Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.). Clinical Psychology: Outbound services- only for those who have the specific license / specific qualification required. (Eg a resident who migrates internationally can still provide onlice cross border services.)"
    },
    updated: "2025-06-05"
}
    }
}; // close the complianceData object
