// --- TRANSLATION DATA ---
const translations = {
    en: {
        appName: 'Symptomate',
        signInToJournal: 'Sign in to your health journal',
        emailAddress: 'Email address',
        password: 'Password',
        signIn: 'Sign In',
        dashboard: 'Dashboard',
        logSymptoms: 'Log Symptoms',
        trends: 'Trends',
        triageAction: 'Triage/Action to Take',
        export: 'Export',
        profile: 'Profile',
        welcomeBack: "Welcome back, Alex. Here's your health summary for today.",
        aiTriageAssistant: 'AI Triage Assistant',
        noSymptomsToday: 'No symptoms logged for today. Go to the "Log Symptoms" page to add your first entry.',
        quickActions: 'Quick Actions',
        logTodaySymptoms: "Log Today's Symptoms",
        goToExport: 'Go to Export',
        todayLoggedSymptoms: "Today's Logged Symptoms",
        noSymptomsLoggedYet: 'No symptoms logged yet.',
        addFeelingDetails: "Add details about how you're feeling today.",
        symptomDescription: 'Symptom Description',
        symptomPlaceholder: 'e.g., Sharp headache behind eyes',
        severity: 'Severity',
        date: 'Date',
        additionalNotes: 'Additional Notes (Optional)',
        notesPlaceholder: 'e.g., Worsens with bright light, started after lunch.',
        addSymptom: 'Add Symptom',
        healthTrends: 'Health Trends',
        visualizeHistory: 'Visualize your symptom history over time.',
        triageActionTitle: 'Triage/Action to Take',
        triageActionSubtitle: 'Use the AI to analyze symptoms and suggest next steps.',
        exportYourData: 'Export Your Data',
        exportSubtitle: 'Download your health information in various formats.',
        fullHealthLog: 'Full Health Log',
        exportJsonDesc: 'Export all your data, including profile and symptom history, in JSON format. Best for backups or migrating.',
        exportAsJson: 'Export as JSON',
        symptomHistory: 'Symptom History',
        exportCsvDesc: 'Download a CSV file of your symptom logs. Ideal for spreadsheets or sharing with a doctor.',
        exportAsCsv: 'Export as CSV',
        printableSummary: 'Printable Summary',
        exportTxtDesc: 'Generate a simple text summary of your profile and recent symptoms. Easy to print or copy.',
        exportAsTxt: 'Export as Text',
        healthProfile: 'Health Profile',
        manageProfileInfo: 'Manage your personal and health information.',
        fullName: 'Full Name',
        dob: 'Date of Birth',
        knownConditions: 'Known Conditions',
        conditionsPlaceholder: 'e.g., Asthma, Pollen Allergy',
        currentMedications: 'Current Medications',
        medicationsPlaceholder: 'e.g., Albuterol Inhaler',
        dataManagement: 'Data Management',
        clearAllData: 'Clear All Data',
        saveChanges: 'Save Changes',
    },
    te: {
        appName: 'సిమ్ప్టొమేట్',
        signInToJournal: 'మీ ఆరోగ్య జర్నల్‌కు సైన్ ఇన్ చేయండి',
        emailAddress: 'ఇమెయిల్ చిరునామా',
        password: 'పాస్వర్డ్',
        signIn: 'సైన్ ఇన్',
        dashboard: 'డాష్‌బోర్డ్',
        logSymptoms: 'లక్షణాలను నమోదు చేయండి',
        trends: 'ట్రెండ్స్',
        triageAction: 'తీసుకోవాల్సిన చర్యలు',
        export: 'ఎగుమతి చేయండి',
        profile: 'ప్రొఫైల్',
        welcomeBack: "అలెక్స్, తిరిగి స్వాగతం. ఈ రోజు మీ ఆరోగ్య సారాంశం ఇక్కడ ఉంది.",
        aiTriageAssistant: 'AI సహాయకుడు',
        noSymptomsToday: 'ఈ రోజు ఏ లక్షణాలు నమోదు కాలేదు. మొదటి ఎంట్రీని జోడించడానికి "లక్షణాలను నమోదు చేయండి" పేజీకి వెళ్లండి.',
        quickActions: 'త్వరిత చర్యలు',
        logTodaySymptoms: 'ఈ రోజు లక్షణాలను నమోదు చేయండి',
        goToExport: 'ఎగుమతికి వెళ్లండి',
        todayLoggedSymptoms: 'ఈ రోజు నమోదు చేసిన లక్షణాలు',
        noSymptomsLoggedYet: 'ఇంకా ఏ లక్షణాలు నమోదు కాలేదు.',
        addFeelingDetails: "ఈ రోజు మీరు ఎలా ఉన్నారో వివరాలను జోడించండి.",
        symptomDescription: 'లక్షణాల వివరణ',
        symptomPlaceholder: 'ఉదా., కళ్ళ వెనుక తీవ్రమైన తలనొప్పి',
        severity: 'తీవ్రత',
        date: 'తేదీ',
        additionalNotes: 'అదనపు గమనికలు (ఐచ్ఛికం)',
        notesPlaceholder: 'ఉదా., ప్రకాశవంతమైన కాంతితో తీవ్రమవుతుంది, భోజనం తర్వాత మొదలైంది.',
        addSymptom: 'లక్షణాన్ని జోడించండి',
        healthTrends: 'ఆరోగ్య ట్రెండ్స్',
        visualizeHistory: 'మీ లక్షణాల చరిత్రను కాలక్రమేణా చూడండి.',
        triageActionTitle: 'తీసుకోవాల్సిన చర్యలు',
        triageActionSubtitle: 'లక్షణాలను విశ్లేషించడానికి మరియు తదుపరి దశలను సూచించడానికి AIని ఉపయోగించండి.',
        exportYourData: 'మీ డేటాను ఎగుమతి చేయండి',
        exportSubtitle: 'మీ ఆరోగ్య సమాచారాన్ని వివిధ ఫార్మాట్లలో డౌన్‌లోడ్ చేసుకోండి.',
        fullHealthLog: 'పూర్తి ఆరోగ్య లాగ్',
        exportJsonDesc: 'ప్రొఫైల్ మరియు లక్షణాల చరిత్రతో సహా మీ మొత్తం డేటాను JSON ఫార్మాట్‌లో ఎగుమతి చేయండి. బ్యాకప్‌లు లేదా మైగ్రేట్ చేయడానికి ఉత్తమమైనది.',
        exportAsJson: 'JSONగా ఎగుమతి చేయండి',
        symptomHistory: 'లక్షణాల చరిత్ర',
        exportCsvDesc: 'మీ లక్షణాల లాగ్‌ల CSV ఫైల్‌ను డౌన్‌లోడ్ చేసుకోండి. స్ప్రెడ్‌షీట్‌ల కోసం లేదా వైద్యుడితో పంచుకోవడానికి అనువైనది.',
        exportAsCsv: 'CSVగా ఎగుమతి చేయండి',
        printableSummary: 'ముద్రించదగిన సారాంశం',
        exportTxtDesc: 'మీ ప్రొఫైల్ మరియు ఇటీవలి లక్షణాల యొక్క సాధారణ టెక్స్ట్ సారాంశాన్ని రూపొందించండి. ముద్రించడం లేదా కాపీ చేయడం సులభం.',
        exportAsTxt: 'టెక్స్ట్‌గా ఎగుమతి చేయండి',
        healthProfile: 'ఆరోగ్య ప్రొఫైల్',
        manageProfileInfo: 'మీ వ్యక్తిగత మరియు ఆరోగ్య సమాచారాన్ని నిర్వహించండి.',
        fullName: 'పూర్తి పేరు',
        dob: 'పుట్టిన తేది',
        knownConditions: 'తెలిసిన ఆరోగ్య సమస్యలు',
        conditionsPlaceholder: 'ఉదా., ఆస్తమా, పుప్పొడి అలెర్జీ',
        currentMedications: 'ప్రస్తుత మందులు',
        medicationsPlaceholder: 'ఉదా., ఆల్బుటెరోల్ ఇన్‌హేలర్',
        dataManagement: 'డేటా నిర్వహణ',
        clearAllData: 'మొత్తం డేటాను క్లియర్ చేయండి',
        saveChanges: 'మార్పులను సేవ్ చేయండి',
    }
};

// --- NLP and ML Simulation Engine ---
class SymptomNLPEngine {
    constructor() {
        this.model = null;
        this.vocabulary = new Map();
        this.isModelLoaded = false;
        this.modelCreationInProgress = false;
        this.urgentSymptoms = ['chest pain', 'difficulty breathing', 'shortness of breath', 'severe headache', 'loss of consciousness', 'fainting', 'severe bleeding', 'stroke symptoms', 'heart attack', 'severe allergic reaction', 'anaphylaxis', 'severe burns', 'poisoning', 'overdose', 'severe trauma', 'sudden vision loss', 'severe abdominal pain', 'vomiting blood', 'severe dehydration', 'high fever', 'seizure', 'paralysis', 'severe mental health crisis'];
        this.consultSymptoms = ['persistent fever', 'worsening condition', 'new medication side effects', 'chronic pain', 'mental health concerns', 'persistent cough', 'unusual fatigue', 'weight loss', 'skin changes', 'persistent headaches', 'joint pain', 'muscle weakness', 'difficulty sleeping', 'anxiety', 'depression', 'digestive issues', 'urinary problems', 'reproductive health'];
        this.severityKeywords = {
            mild: ['slight', 'minor', 'little', 'mild', 'barely', 'hardly'],
            moderate: ['moderate', 'noticeable', 'bothering', 'uncomfortable', 'annoying'],
            severe: ['severe', 'intense', 'excruciating', 'unbearable', 'terrible', 'awful'],
            emergency: ['emergency', 'critical', 'life-threatening', 'urgent', 'immediate']
        };
        this.emotionalIndicators = {
            calm: ['fine', 'okay', 'manageable', 'slight', 'minor'],
            concerned: ['worried', 'concerned', 'bothered', 'uncomfortable', 'strange'],
            distressed: ['terrible', 'awful', 'unbearable', 'desperate', 'scared', 'frightened']
        };
        this.initializeVocabulary();
    }

    static getInstance() {
        if (!SymptomNLPEngine.instance) {
            SymptomNLPEngine.instance = new SymptomNLPEngine();
        }
        return SymptomNLPEngine.instance;
    }

    initializeVocabulary() {
        const medicalTerms = [...this.urgentSymptoms, ...this.consultSymptoms, 'headache', 'fever', 'cough', 'fatigue', 'nausea', 'dizziness', 'sore throat', 'muscle aches', 'runny nose', 'congestion', 'stomach pain', 'back pain', 'joint pain', 'rash', 'swelling', 'vomiting', 'diarrhea', 'constipation', 'insomnia', 'stress'];
        medicalTerms.forEach((term, index) => {
            this.vocabulary.set(term.toLowerCase(), index);
        });
    }

    async ensureModelLoaded() {
        if (this.isModelLoaded || this.modelCreationInProgress) return;
        this.modelCreationInProgress = true;
        try {
            if (!window.tf) throw new Error('TensorFlow.js not available');
            if (this.model) { this.model.dispose(); this.model = null; }

            const modelId = symptom_model_${Date.now()};
            this.model = tf.sequential({
                name: modelId,
                layers: [
                    tf.layers.dense({ inputShape: [100], units: 64, activation: 'relu' }),
                    tf.layers.dropout({ rate: 0.3 }),
                    tf.layers.dense({ units: 32, activation: 'relu' }),
                    tf.layers.dropout({ rate: 0.2 }),
                    tf.layers.dense({ units: 3, activation: 'softmax' })
                ]
            });
            this.model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
            this.isModelLoaded = true;
            console.log('ML Model loaded successfully');
        } catch (error) {
            console.error('Failed to load ML model:', error);
            this.isModelLoaded = false;
        } finally {
            this.modelCreationInProgress = false;
        }
    }
    
    preprocessText(text) {
        const cleaned = text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim();
        const tokens = cleaned.split(' ').filter(token => token.length > 2);
        const stopWords = new Set(['the', 'and', 'but', 'for', 'with', 'have', 'been', 'that', 'this']);
        return tokens.filter(token => !stopWords.has(token));
    }

    extractSymptoms(text) {
        const tokens = this.preprocessText(text);
        const extractedSymptoms = [];
        const multiWordSymptoms = ['chest pain', 'sore throat', 'muscle aches', 'back pain', 'joint pain', 'stomach pain', 'difficulty breathing', 'shortness of breath'];
        multiWordSymptoms.forEach(symptom => {
            if (text.toLowerCase().includes(symptom)) extractedSymptoms.push(symptom);
        });
        tokens.forEach(token => {
            if (this.vocabulary.has(token)) extractedSymptoms.push(token);
        });
        return [...new Set(extractedSymptoms)];
    }

    analyzeText(text) {
        const tokens = this.preprocessText(text);
        const normalizedSymptoms = this.extractSymptoms(text);
        let severity = 5;
        Object.entries(this.severityKeywords).forEach(([level, keywords]) => {
            if (keywords.some(keyword => tokens.some(token => token.includes(keyword)))) {
                if (level === 'mild') severity = Math.min(severity, 3);
                if (level === 'moderate') severity = 5;
                if (level === 'severe') severity = Math.max(severity, 8);
                if (level === 'emergency') severity = 10;
            }
        });
        const urgencyIndicators = this.urgentSymptoms.filter(symptom => text.toLowerCase().includes(symptom));
        let emotionalState = 'concerned';
        Object.entries(this.emotionalIndicators).forEach(([emotion, keywords]) => {
            if (keywords.some(keyword => tokens.some(token => token.includes(keyword)))) {
                emotionalState = emotion;
            }
        });
        return { normalizedSymptoms, severity, urgencyIndicators, emotionalState, textComplexity: Math.min(tokens.length / 10, 1) };
    }

    createFeatureVector(analysis, text) {
        const features = new Array(100).fill(0);
        analysis.normalizedSymptoms.forEach(symptom => {
            const index = this.vocabulary.get(symptom.toLowerCase());
            if (index !== undefined && index < 50) features[index] = 1;
        });
        features[50] = analysis.severity / 10;
        features[51] = analysis.urgencyIndicators.length / 5;
        features[52] = analysis.emotionalState === 'calm' ? 1 : 0;
        features[53] = analysis.emotionalState === 'concerned' ? 1 : 0;
        features[54] = analysis.emotionalState === 'distressed' ? 1 : 0;
        return features;
    }

    async performMLTriage(text) {
        try {
            const analysis = this.analyzeText(text);
            const features = this.createFeatureVector(analysis, text);
            let recommendation = 'self-monitor';
            let confidence = 0.85;
            let urgencyLevel = analysis.severity;

            try {
                await this.ensureModelLoaded();
                if (this.isModelLoaded && this.model) {
                    const tensorInput = tf.tensor2d([features]);
                    const prediction = this.model.predict(tensorInput);
                    const probabilities = await prediction.data();
                    const maxProbIndex = probabilities.indexOf(Math.max(...Array.from(probabilities)));
                    confidence = probabilities[maxProbIndex];
                    recommendation = ['self-monitor', 'consult-doctor', 'urgent-care'][maxProbIndex];
                    tensorInput.dispose();
                    prediction.dispose();
                } else {
                    throw new Error('Model not loaded');
                }
            } catch (mlError) {
                console.log('ML prediction failed, using rule-based fallback:', mlError);
                const urgentCount = analysis.urgencyIndicators.length;
                if (urgentCount > 0 || analysis.severity >= 9 || analysis.emotionalState === 'distressed') {
                    recommendation = 'urgent-care';
                } else if (analysis.severity >= 6 || analysis.normalizedSymptoms.length >= 4) {
                    recommendation = 'consult-doctor';
                }
            }
            
            const explanation = Based on the analysis of symptoms like "${analysis.normalizedSymptoms.join(', ')}", a recommendation was generated with a confidence score.;
            return { recommendation, explanation, urgencyLevel, confidence, riskFactors: analysis.urgencyIndicators, symptoms: analysis.normalizedSymptoms };
        } catch (error) {
            console.error('ML Triage failed:', error);
            return { recommendation: 'self-monitor', explanation: 'Basic analysis completed. ML system temporarily unavailable.', urgencyLevel: 5, confidence: 0.6, riskFactors: [], symptoms: [] };
        }
    }

    getModelStatus() {
        return { loaded: this.isModelLoaded, vocabulary: this.vocabulary.size };
    }
}

const symptomNLP = SymptomNLPEngine.getInstance();

document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    let healthData = {
        profile: {
            name: 'Alex Doe',
            dob: '1990-05-15',
            conditions: 'Pollen Allergy',
            medications: 'Loratadine 10mg'
        },
        symptoms: [
            { date: '2025-09-05', description: 'Runny nose and sneezing', severity: 2, notes: 'Started in the morning.' },
            { date: '2025-09-06', description: 'Sore throat', severity: 4, notes: 'Feels scratchy, hurts to swallow.' },
            { date: '2025-09-07', description: 'Dry cough and mild fatigue', severity: 5, notes: 'Coughing spells every few hours.' },
            { date: '2025-09-08', description: 'Mild fatigue', severity: 3, notes: 'Felt tired in the afternoon.' },
            { date: '2025-09-09', description: 'Throat irritation', severity: 4, notes: 'Slightly scratchy.' },
            { date: '2025-09-10', description: 'Headache', severity: 6, notes: 'Dull ache all day.' },
            { date: '2025-09-11', description: 'Feeling much better', severity: 1, notes: 'Almost back to normal.' }
        ]
    };

    // --- UI ELEMENTS ---
    const loginPage = document.getElementById('login-page');
    const appPage = document.getElementById('app');
    const loginForm = document.getElementById('login-form');
    const langBtnEn = document.getElementById('lang-en');
    const langBtnTe = document.getElementById('lang-te');
    const navLinks = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const symptomForm = document.getElementById('symptom-form');
    const severitySlider = document.getElementById('symptom-severity');
    const severityValue = document.getElementById('severity-value');
    const symptomDateInput = document.getElementById('symptom-date');
    const triageOutput = document.getElementById('triage-output');
    const dashboardSymptomList = document.getElementById('dashboard-symptom-list');
    const trendsChartCanvas = document.getElementById('trends-chart');
    const quickLogBtn = document.getElementById('quick-log-btn');
    const quickExportBtn = document.getElementById('quick-export-btn');
    const exportJsonBtn = document.getElementById('export-json-btn');
    const exportCsvBtn = document.getElementById('export-csv-btn');
    const exportTxtBtn = document.getElementById('export-txt-btn');
    const clearDataBtn = document.getElementById('clear-data-btn');
    const profileForm = document.getElementById('profile-form');
    const toast = document.getElementById('toast');
    let trendsChart = null;

    // --- LANGUAGE FUNCTION ---
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.dataset.translateKey;
            const translation = translations[lang][key];
            if(translation) {
                 if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translation;
                } else {
                    // Handle nested elements like buttons with icons
                    const icon = el.querySelector('svg');
                    if (icon) {
                        el.innerHTML = icon.outerHTML + ` <span data-translate-key="${key}">${translation}</span>`;
                    } else {
                        el.textContent = translation;
                    }
                }
            }
        });
        
        document.body.style.fontFamily = lang === 'te' ? "'Noto Sans Telugu', sans-serif" : "'Inter', sans-serif";
        
        // Update active button
        langBtnEn.classList.toggle('active', lang === 'en');
        langBtnTe.classList.toggle('active', lang === 'te');

        localStorage.setItem('symptomateLang', lang);
    }


    // --- INITIALIZATION ---
    function init() {
        loadState();
        const savedLang = localStorage.getItem('symptomateLang') || 'en';
        setLanguage(savedLang);
        setupEventListeners();
        navigateTo(window.location.hash || '#dashboard');
        updateDashboard();
        renderTrendsChart();
        updateProfileForm();
        renderMLDemo();
        
        symptomDateInput.value = new Date().toISOString().split('T')[0];
    }

    // --- NAVIGATION ---
    function navigateTo(hash) {
        pages.forEach(page => page.classList.add('hidden'));
        const targetPage = document.querySelector(hash);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        } else {
            document.querySelector('#dashboard').classList.remove('hidden');
        }
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
         window.location.hash = hash;
    }
    
    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // Login form
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const errorDiv = document.getElementById('login-error');
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            // Example credentials
            const validEmail = 'alex.doe@example.com';
            const validPassword = 'password';
            if (email === validEmail && password === validPassword) {
                errorDiv.textContent = '';
                loginPage.classList.add('hidden');
                appPage.classList.remove('hidden');
                appPage.classList.add('flex'); // Ensure flex is applied after showing
            } else {
                errorDiv.textContent = 'Invalid email or password.';
            }
        });

        // Language buttons
        [langBtnEn, langBtnTe].forEach(btn => {
            btn.addEventListener('click', (e) => {
                setLanguage(e.target.dataset.lang);
            });
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(link.getAttribute('href'));
            });
        });
        
        quickLogBtn.addEventListener('click', () => navigateTo('#log'));
        quickExportBtn.addEventListener('click', () => navigateTo('#export'));
        exportJsonBtn.addEventListener('click', exportDataAsJSON);
        exportCsvBtn.addEventListener('click', exportDataAsCSV);
        exportTxtBtn.addEventListener('click', exportDataAsTXT);

        clearDataBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all your health data? This cannot be undone.')) {
                healthData = { profile: {}, symptoms: [] };
                saveState();
                updateDashboard();
                renderTrendsChart();
                updateProfileForm();
                showToast('All data has been cleared.');
            }
        });

        symptomForm.addEventListener('submit', handleSymptomSubmit);
        severitySlider.addEventListener('input', (e) => {
            severityValue.textContent = e.target.value;
        });
        
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            healthData.profile.name = document.getElementById('profile-name').value;
            healthData.profile.dob = document.getElementById('profile-dob').value;
            healthData.profile.conditions = document.getElementById('profile-conditions').value;
            healthData.profile.medications = document.getElementById('profile-medications').value;
            saveState();
            showToast('Profile updated successfully!');
        });
    }

    // --- DATA HANDLING & LOGIC ---
    function handleSymptomSubmit(e) {
        e.preventDefault();
        const newSymptom = {
            date: document.getElementById('symptom-date').value,
            description: document.getElementById('symptom-description').value,
            severity: parseInt(document.getElementById('symptom-severity').value),
            notes: document.getElementById('symptom-notes').value
        };

        healthData.symptoms.push(newSymptom);
        healthData.symptoms.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        saveState();
        symptomForm.reset();
        symptomDateInput.value = new Date().toISOString().split('T')[0];
        severityValue.textContent = '5';
        showToast('Symptom logged successfully!');
        
        updateDashboard();
        renderTrendsChart();
        navigateTo('#dashboard');
    }
    
    function getTriageSuggestion(symptoms) {
        if (symptoms.length === 0) {
             return { level: 'info', title: 'No Symptoms Logged for Today', message: 'Add an entry on the "Log Symptoms" page.' };
        }
        let highestSeverity = 0;
        let combinedDescription = '';
        symptoms.forEach(s => {
            if (s.severity > highestSeverity) highestSeverity = s.severity;
            combinedDescription += s.description.toLowerCase() + ' ' + s.notes.toLowerCase() + ' ';
        });

        const emergencyWords = ['chest pain', 'breathing difficulty', 'shortness of breath', 'severe pain', 'unconscious', 'seizure', 'numbness face', 'slurred speech'];
        if (emergencyWords.some(word => combinedDescription.includes(word)) || highestSeverity >= 9) {
            return { level: 'danger', title: 'Urgent Care Recommended', message: 'Your symptoms may require immediate medical attention. Please contact emergency services.' };
        }

        const doctorWords = ['high fever', 'persistent cough', 'dizzy', 'rash', 'swollen', 'vomiting', 'ear pain'];
        if (doctorWords.some(word => combinedDescription.includes(word)) || highestSeverity >= 7) {
            return { level: 'accent', title: 'Consult a Doctor', message: 'It is advisable to schedule an appointment with your doctor. Monitor your condition.' };
        }
        
        return { level: 'primary', title: 'Self-Monitor at Home', message: 'Your symptoms appear mild. Continue to monitor them, get rest, and stay hydrated.' };
    }

    function updateDashboard() {
        const today = new Date().toISOString().split('T')[0];
        const todaySymptoms = healthData.symptoms.filter(s => s.date === today);
        
        const suggestion = getTriageSuggestion(todaySymptoms);
        const triageColors = {
            danger: { bg: 'bg-danger/10', border: 'border-danger', text: 'text-danger', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-siren w-6 h-6 mr-3"><path d="M7 18a4 4 0 0 1-4-4 4 4 0 0 1 4-4h10a4 4 0 0 1 4 4 4 4 0 0 1-4 4Z"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 6.34 1.41-1.41"/><path d="M12 10a2 2 0 0 0-2 2v2a2 2 0 0 0 4 0v-2a2 2 0 0 0-2-2Z"/></svg>' },
            accent: { bg: 'bg-accent/10', border: 'border-accent', text: 'text-accent-700', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-triangle w-6 h-6 mr-3"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>' },
            primary: { bg: 'bg-primary/10', border: 'border-primary', text: 'text-primary-700', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-6 h-6 mr-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>' },
            info: { bg: 'bg-slate-100', border: 'border-slate-200', text: 'text-slate-600', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info w-6 h-6 mr-3"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>' }
        };
        const colors = triageColors[suggestion.level];
        triageOutput.innerHTML = <div class="flex items-start p-4 rounded-lg ${colors.bg} border-l-4 ${colors.border}"><div class="${colors.text}">${colors.icon}</div><div><h4 class="font-bold ${colors.text}">${suggestion.title}</h4><p class="text-sm ${colors.text} mt-1">${suggestion.message}</p></div></div>;
        
        if (todaySymptoms.length > 0) {
            dashboardSymptomList.innerHTML = todaySymptoms.map(s => <div class="p-4 border border-slate-200 rounded-lg flex justify-between items-center"><div><p class="font-semibold text-text-primary">${s.description}</p><p class="text-sm text-text-secondary">${s.notes || 'No additional notes.'}</p></div><div class="text-right"><p class="text-lg font-bold text-primary">${s.severity}/10</p><p class="text-xs text-text-secondary">Severity</p></div></div>).join('');
        } else {
            dashboardSymptomList.innerHTML = <p class="text-text-secondary text-center py-4" data-translate-key="noSymptomsLoggedYet">No symptoms logged yet.</p>;
        }
    }
    
    function renderTrendsChart() {
        if (trendsChart) trendsChart.destroy();
        const chartData = healthData.symptoms.reduce((acc, symptom) => {
            if (!acc[symptom.date] || symptom.severity > acc[symptom.date]) acc[symptom.date] = symptom.severity;
            return acc;
        }, {});
        const labels = Object.keys(chartData).sort();
        const dataPoints = labels.map(label => chartData[label]);
        trendsChart = new Chart(trendsChartCanvas.getContext('2d'), { type: 'line', data: { labels, datasets: [{ label: 'Max Daily Symptom Severity', data: dataPoints, borderColor: '#0D9488', backgroundColor: 'rgba(13, 148, 136, 0.1)', fill: true, tension: 0.3 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 10 } } } });
    }
    
    function updateProfileForm() {
        document.getElementById('profile-name').value = healthData.profile.name || '';
        document.getElementById('profile-dob').value = healthData.profile.dob || '';
        document.getElementById('profile-conditions').value = healthData.profile.conditions || '';
        document.getElementById('profile-medications').value = healthData.profile.medications || '';
    }

    // --- EXPORT FUNCTIONS ---
    function downloadFile(filename, content, contentType) {
        const blob = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function exportDataAsJSON() {
        downloadFile('symptomate_health_log.json', JSON.stringify(healthData, null, 2), 'application/json');
        showToast('Full log exported as JSON!');
    }

    function exportDataAsCSV() {
        let csvContent = "Date,Description,Severity,Notes\n";
        healthData.symptoms.forEach(s => {
            csvContent += ${s.date},"${s.description.replace(/"/g, '""')}","${s.severity}","${(s.notes || '').replace(/"/g, '""')}"\n;
        });
        downloadFile('symptom_history.csv', csvContent, 'text/csv;charset=utf-8;');
        showToast('Symptom history exported as CSV!');
    }
    
    function exportDataAsTXT() {
        let txtContent = Symptomate Health Summary\n=========================\n\n;
        txtContent += PROFILE\n-------\n;
        txtContent += Name: ${healthData.profile.name}\n;
        txtContent += DOB: ${healthData.profile.dob}\n;
        txtContent += Conditions: ${healthData.profile.conditions}\n;
        txtContent += Medications: ${healthData.profile.medications}\n\n;
        txtContent += SYMPTOM LOG (Last 10 entries)\n--------------------------------\n;
        [...healthData.symptoms].reverse().slice(0, 10).forEach(s => {
            txtContent += ${s.date} | Severity: ${s.severity}/10 | ${s.description}\n;
        });
        downloadFile('health_summary.txt', txtContent, 'text/plain;charset=utf-8;');
        showToast('Health summary exported as TXT!');
    }


    // --- LOCAL STORAGE ---
    function saveState() {
        localStorage.setItem('symptomateData', JSON.stringify(healthData));
    }

    function loadState() {
        const savedData = localStorage.getItem('symptomateData');
        if (savedData) healthData = JSON.parse(savedData);
    }
    
    // --- UI UTILITIES ---
    function showToast(message) {
        toast.textContent = message;
        toast.classList.remove('translate-x-[150%]');
        toast.classList.add('translate-x-0');
        setTimeout(() => {
            toast.classList.remove('translate-x-0');
            toast.classList.add('translate-x-[150%]');
        }, 3000);
    }
    
    // --- ML DEMO RENDER AND LOGIC ---
    function renderMLDemo() {
        const container = document.getElementById('ml-demo-container');
        container.innerHTML = `
            <div class="bg-surface rounded-xl shadow-sm p-6 border border-slate-200">
                <div class="flex items-center gap-2 mb-4"><h3 class="font-semibold text-lg text-text-primary">AI Symptom Analysis</h3></div>
                <div class="mb-6 p-4 bg-slate-100 rounded-lg">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium">AI Engine Status</span>
                        <div id="ml-status-indicator" class="flex items-center gap-2"></div>
                    </div>
                    <div id="ml-status-details" class="grid grid-cols-2 gap-4 text-xs text-text-secondary"></div>
                    <div id="ml-status-warning" class="mt-2 text-xs text-amber-600"></div>
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="text-sm font-medium mb-2 block">Symptom Description</label>
                        <textarea id="ml-demo-text" rows="3" class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Describe your symptoms...">I have a severe headache, chest pain, and difficulty breathing that started suddenly</textarea>
                    </div>
                    <div id="ml-example-buttons" class="flex flex-wrap gap-2"></div>
                    <button id="ml-analyze-btn" class="w-full flex items-center justify-center bg-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-primary-focus transition-colors duration-200 shadow"></button>
                </div>
            </div>
            <div id="ml-results-container"></div>
        `;
        setupMLDemoListeners();
        updateMLStatus();
    }
    
    function setupMLDemoListeners(){
        const analyzeBtn = document.getElementById('ml-analyze-btn');
        const demoTextarea = document.getElementById('ml-demo-text');
        analyzeBtn.addEventListener('click', runMLDemo);
        
        const exampleTexts = [ 'I have a mild headache and feel a bit tired', 'Severe chest pain, shortness of breath, feeling dizzy', 'Persistent cough for 3 days, low fever, muscle aches', 'Sudden onset of severe abdominal pain, nausea, vomiting' ];
        const exampleContainer = document.getElementById('ml-example-buttons');
        exampleContainer.innerHTML = exampleTexts.map((text, i) => <button class="text-xs border border-slate-300 px-2 py-1 rounded-md hover:bg-slate-100" data-text="${text}">Example ${i+1}</button>).join('');
        exampleContainer.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                demoTextarea.value = btn.dataset.text;
            });
        });
    }

    function updateMLStatus() {
        const status = symptomNLP.getModelStatus();
        const indicatorEl = document.getElementById('ml-status-indicator');
        const detailsEl = document.getElementById('ml-status-details');
        const warningEl = document.getElementById('ml-status-warning');
        
        indicatorEl.innerHTML = <div class="w-2 h-2 rounded-full ${status.loaded ? 'bg-green-500' : 'bg-yellow-500'}"></div><span class="text-sm">${status.loaded ? 'Ready' : 'Loading'}</span>;
        detailsEl.innerHTML = <div>Vocabulary: ${status.vocabulary} medical terms</div><div>Framework: TensorFlow.js ${status.loaded ? '✓' : '⏳'}</div>;
        warningEl.textContent = status.loaded ? '' : 'AI model loading in background. Rule-based analysis available.';
        
        document.getElementById('ml-analyze-btn').innerHTML = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap mr-2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Analyze with AI;
    }

    async function runMLDemo() {
        const demoText = document.getElementById('ml-demo-text').value;
        if (!demoText.trim()) return;

        const analyzeBtn = document.getElementById('ml-analyze-btn');
        const resultsContainer = document.getElementById('ml-results-container');
        
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-2 mr-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Processing with AI...;
        resultsContainer.innerHTML = '';
        
        await new Promise(r => setTimeout(r, 300));
        
        try {
            const result = await symptomNLP.performMLTriage(demoText);
            const analysis = symptomNLP.analyzeText(demoText);

            // Display results
            const recColor = result.recommendation === 'urgent-care' ? 'bg-danger/10 text-danger' : result.recommendation === 'consult-doctor' ? 'bg-accent/10 text-accent-700' : 'bg-primary/10 text-primary';
            const emoColor = analysis.emotionalState === 'distressed' ? 'bg-danger/10 text-danger' : 'bg-slate-200 text-text-secondary';
            
            resultsContainer.innerHTML = `
                <div class="mt-6 bg-surface rounded-xl shadow-sm p-6 border border-slate-200">
                     <h4 class="font-semibold text-lg text-text-primary mb-4">AI Triage Results</h4>
                     <p class="text-sm mb-2 font-medium text-text-secondary">RECOMMENDED ACTION</p>
                     <div class="text-base font-bold p-2 rounded-md inline-block ${recColor}">${result.recommendation.replace('-', ' ').toUpperCase()}</div>
                     <p class="text-sm text-text-secondary mt-3">${result.explanation}</p>
                </div>
                 <div class="mt-6 bg-surface rounded-xl shadow-sm p-6 border border-slate-200">
                     <h4 class="font-semibold text-lg text-text-primary mb-4">NLP Processing Details</h4>
                     <p class="text-sm mb-2 font-medium text-text-secondary">EXTRACTED SYMPTOMS</p>
                     <div class="flex flex-wrap gap-2">${result.symptoms.map(s => <span class="bg-secondary/10 text-secondary text-xs font-medium px-2 py-1 rounded-md">${s}</span>).join('') || 'None'}</div>
                     <p class="text-sm mt-4 mb-2 font-medium text-text-secondary">SEVERITY SCORE</p>
                     <div class="font-bold text-lg text-primary">${analysis.severity}/10</div>
                     <p class="text-sm mt-4 mb-2 font-medium text-text-secondary">EMOTIONAL STATE</p>
                     <div class="text-sm font-medium p-2 rounded-md inline-block ${emoColor}">${analysis.emotionalState}</div>
                </div>
            `;
        } catch (error) {
            resultsContainer.innerHTML = <div class="mt-6 bg-danger/10 text-danger p-4 rounded-lg">Analysis failed: ${error.message}</div>;
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtn.innerHTML = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap mr-2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Analyze with AI;
        }
    }
    
    // --- START THE APP ---
    init();
});