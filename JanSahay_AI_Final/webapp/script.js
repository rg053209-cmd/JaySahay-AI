// ─── SCHEMES DATA (with real URLs + state schemes) ───
const schemes = [
  { id:1, name:'PM-KISAN Samman Nidhi', category:'agriculture', icon:'🌾', iconBg:'#E8F5E9', catColor:'#2E7D32', catBg:'#E8F5E9', eligibility:'Small & marginal farmers with arable land', documents:'Aadhaar, Bank Account, Land Records', benefits:'₹6,000/year in 3 installments of ₹2,000', howToApply:'Visit CSC or apply online at pmkisan.gov.in', applyUrl:'https://pmkisan.gov.in', tag:'Central' },
  { id:2, name:'Ayushman Bharat PM-JAY', category:'health', icon:'🏥', iconBg:'#E3F2FD', catColor:'#1565C0', catBg:'#E3F2FD', eligibility:'SECC database families · Bottom 40% income', documents:'Aadhaar, Ration Card, SECC letter', benefits:'₹5 lakh/year health insurance per family', howToApply:'Visit empanelled hospital or check eligibility online', applyUrl:'https://pmjay.gov.in', tag:'Central' },
  { id:3, name:'PM Scholarship Scheme', category:'education', icon:'🎓', iconBg:'#FFF3E0', catColor:'#E65100', catBg:'#FFF3E0', eligibility:'Wards of Ex-Servicemen, meritorious students', documents:'Mark sheets, Aadhaar, Bank account, ESM Certificate', benefits:'₹2,500–₹3,000/month for UG/PG courses', howToApply:'Apply on KSB portal before September deadline', applyUrl:'https://ksb.gov.in/PM-scholarship.htm', tag:'Central' },
  { id:4, name:'Beti Bachao Beti Padhao', category:'women', icon:'👧', iconBg:'#FCE4EC', catColor:'#C62828', catBg:'#FCE4EC', eligibility:'Girl child under 10 years · All families', documents:'Birth certificate, Parents Aadhaar, Bank account', benefits:'Sukanya Samriddhi Account · 8.2% interest · tax-free', howToApply:'Open SSY account at Post Office or bank branch', applyUrl:'https://wcd.nic.in/bbbp-schemes', tag:'Central' },
  { id:5, name:'Startup India Seed Fund', category:'startup', icon:'🚀', iconBg:'#E8EAF6', catColor:'#283593', catBg:'#E8EAF6', eligibility:'DPIIT recognized startups, less than 2 years old', documents:'DPIIT certificate, Business plan, KYC docs', benefits:'Up to ₹50 lakh as seed funding via incubators', howToApply:'Apply through recognized incubators on portal', applyUrl:'https://seedfund.startupindia.gov.in', tag:'Central' },
  { id:6, name:'Mahatma Gandhi NREGA', category:'employment', icon:'🔨', iconBg:'#F3E5F5', catColor:'#6A1B9A', catBg:'#F3E5F5', eligibility:'Rural household adults willing to do manual work', documents:'Job Card, Aadhaar, Bank account', benefits:'100 days guaranteed work · ₹250–340/day wage', howToApply:'Register at Gram Panchayat and apply for Job Card', applyUrl:'https://nrega.nic.in', tag:'Central' },
  { id:7, name:'PM Fasal Bima Yojana', category:'agriculture', icon:'🌿', iconBg:'#E8F5E9', catColor:'#2E7D32', catBg:'#E8F5E9', eligibility:'All farmers — tenant and owner farmers', documents:'Land record, Bank account, Aadhaar, Crop sowing certificate', benefits:'Crop insurance against natural calamities at low premium', howToApply:'Apply at nearest bank or CSC before crop season', applyUrl:'https://pmfby.gov.in', tag:'Central' },
  { id:8, name:'Pradhan Mantri Mudra Yojana', category:'startup', icon:'💼', iconBg:'#E8EAF6', catColor:'#283593', catBg:'#E8EAF6', eligibility:'Non-farm small & micro enterprises', documents:'Business plan, KYC, Bank statement', benefits:'Loans up to ₹10 lakh (Shishu/Kishore/Tarun)', howToApply:'Apply at any bank, NBFC, or MFI branch', applyUrl:'https://www.mudra.org.in', tag:'Central' },
  { id:9, name:'Janani Suraksha Yojana', category:'health', icon:'🤱', iconBg:'#E3F2FD', catColor:'#1565C0', catBg:'#E3F2FD', eligibility:'Pregnant women from BPL families', documents:'Aadhaar, MCH card, Bank account, BPL certificate', benefits:'₹1,400 (rural) / ₹1,000 (urban) cash assistance', howToApply:'Register at nearest government health centre or ANM', applyUrl:'https://nhm.gov.in/index1.php?lang=1&level=3&sublinkid=841&lid=309', tag:'Central' },
  { id:10, name:'National Scholarship Portal', category:'education', icon:'📚', iconBg:'#FFF3E0', catColor:'#E65100', catBg:'#FFF3E0', eligibility:'SC/ST/OBC/Minority students at pre/post-matric', documents:'Marks certificate, Caste certificate, Aadhaar, Bank account', benefits:'₹10,000–₹25,000/year based on course and category', howToApply:'Register on NSP portal before application deadline', applyUrl:'https://scholarships.gov.in', tag:'Central' },
  { id:11, name:'PM Ujjwala Yojana', category:'women', icon:'🔥', iconBg:'#FCE4EC', catColor:'#C62828', catBg:'#FCE4EC', eligibility:'Women from BPL households, no existing LPG', documents:'BPL card, Aadhaar, Bank account, Ration card', benefits:'Free LPG connection + first refill subsidy', howToApply:'Visit nearest LPG distributor with documents', applyUrl:'https://www.pmuy.gov.in', tag:'Central' },
  { id:12, name:'Skill India PMKVY 4.0', category:'employment', icon:'🎯', iconBg:'#F3E5F5', catColor:'#6A1B9A', catBg:'#F3E5F5', eligibility:'10th pass youth, 15–45 years age', documents:'Educational certificates, Aadhaar, Bank account', benefits:'Free skill training + certification + ₹8,000 reward', howToApply:'Register on Skill India portal or visit nearest PMKVY centre', applyUrl:'https://www.skillindia.gov.in', tag:'Central' },
  { id:13, name:'PM Awas Yojana (Urban)', category:'housing', icon:'🏠', iconBg:'#E8EAF6', catColor:'#283593', catBg:'#E8EAF6', eligibility:'EWS/LIG/MIG families without pucca house in urban area', documents:'Aadhaar, Income proof, Land documents, Bank passbook', benefits:'₹1.5–2.67 lakh interest subsidy for housing', howToApply:'Apply through city municipality or Common Service Centre', applyUrl:'https://pmaymis.gov.in', tag:'Central' },
  { id:14, name:'PM Awas Yojana (Gramin)', category:'housing', icon:'🏡', iconBg:'#E8F5E9', catColor:'#2E7D32', catBg:'#E8F5E9', eligibility:'Rural BPL/SECC listed families without pucca house', documents:'Aadhaar, SECC list copy, Bank passbook, Land certificate', benefits:'₹1.20 lakh (plain) / ₹1.30 lakh (hilly/NE) per unit', howToApply:'Apply through Gram Panchayat; shortlisting via SECC data', applyUrl:'https://pmayg.nic.in', tag:'Central' },
  { id:15, name:'Sukanya Samriddhi Yojana', category:'women', icon:'👩‍👧', iconBg:'#FCE4EC', catColor:'#C62828', catBg:'#FCE4EC', eligibility:'Girl child below 10 years of age', documents:'Girl birth certificate, Parent Aadhaar and PAN, Address proof', benefits:'8.2% annual interest · Tax-free maturity at age 21', howToApply:'Open account at Post Office or authorised bank branch', applyUrl:'https://www.indiapost.gov.in/Financial/pages/content/sukanya.aspx', tag:'Central' },
  // STATE GOVERNMENT SCHEMES
  { id:16, name:'Ladki Bahin Yojana (MH)', category:'women', icon:'👩', iconBg:'#FCE4EC', catColor:'#C62828', catBg:'#FCE4EC', eligibility:'Married women 21–60 yrs, Maharashtra resident, income below ₹2.5L/yr', documents:'Aadhaar, Ration card, Bank passbook, Domicile certificate', benefits:'₹1,500/month direct bank transfer', howToApply:'Apply via Nari Shakti Doot app or nearest Aaple Sarkar Seva Kendra', applyUrl:'https://ladakibahin.maharashtra.gov.in', tag:'Maharashtra' },
  { id:17, name:'Rythu Bharosa (Andhra Pradesh)', category:'agriculture', icon:'🌾', iconBg:'#E8F5E9', catColor:'#2E7D32', catBg:'#E8F5E9', eligibility:'All farmers and agricultural labourers in Andhra Pradesh', documents:'Aadhaar, Passbook, Land records / Labour card', benefits:'₹13,500/year to farmers + ₹7,500 to landless farm labourers', howToApply:'Registered automatically via Aadhaar-linked farmer database', applyUrl:'https://apagrisnet.gov.in', tag:'Andhra Pradesh' },
  { id:18, name:'Yuva Nidhi Scheme (Karnataka)', category:'employment', icon:'🎓', iconBg:'#F3E5F5', catColor:'#6A1B9A', catBg:'#F3E5F5', eligibility:'Unemployed graduates/diploma holders in Karnataka, age below 25', documents:'Degree/Diploma certificate, Aadhaar, Bank account, Ration card', benefits:'₹3,000/month (graduates) or ₹1,500/month (diploma) for 2 years', howToApply:'Apply on Seva Sindhu portal with required certificates', applyUrl:'https://sevasindhu.karnataka.gov.in', tag:'Karnataka' },
  { id:19, name:'Kalia Yojana (Odisha)', category:'agriculture', icon:'🌿', iconBg:'#E8F5E9', catColor:'#2E7D32', catBg:'#E8F5E9', eligibility:'Small/marginal farmers and landless agricultural labourers in Odisha', documents:'Aadhaar, Bank passbook, Land records', benefits:'₹10,000/year to farmers + ₹12,500 to landless labourers', howToApply:'Register on Kalia portal or visit nearest e-Seva centre', applyUrl:'https://kalia.odisha.gov.in', tag:'Odisha' },
  { id:20, name:'CMCHIS Health Scheme (Tamil Nadu)', category:'health', icon:'🏥', iconBg:'#E3F2FD', catColor:'#1565C0', catBg:'#E3F2FD', eligibility:'TN residents, especially families with annual income below ₹72,000', documents:'Ration card, Aadhaar, Income certificate', benefits:'Free treatment up to ₹5 lakh at empanelled hospitals', howToApply:'Enrol at nearest government hospital in Tamil Nadu', applyUrl:'https://www.tnhealth.tn.gov.in', tag:'Tamil Nadu' },
  { id:21, name:'Kanyashree Prakalpa (West Bengal)', category:'women', icon:'👧', iconBg:'#FCE4EC', catColor:'#C62828', catBg:'#FCE4EC', eligibility:'Unmarried girls aged 13–18 studying in WB schools', documents:'School enrollment, Aadhaar, Bank account, Age proof', benefits:'₹1,000/year (K1) and ₹25,000 one-time grant (K2 at 18)', howToApply:'Apply through school or local Kanyashree office', applyUrl:'https://wbkanyashree.gov.in', tag:'West Bengal' },
  { id:22, name:'Jai Bhim Mukhyamantri Pratibha Vikas (Delhi)', category:'education', icon:'📚', iconBg:'#FFF3E0', catColor:'#E65100', catBg:'#FFF3E0', eligibility:'SC/ST students passing 10th or 12th from Delhi schools', documents:'Mark sheet, Caste certificate, Aadhaar, Income certificate', benefits:'Free coaching for IIT/Medical/Civil Services entrance exams', howToApply:'Apply through Delhi SC/ST welfare department or coaching institute', applyUrl:'https://scstwelfare.delhi.gov.in', tag:'Delhi' },
];

let currentFilter = 'all';
const langs = ['हिंदी', 'मराठी', 'தமிழ்', 'বাংলা', 'తెలుగు', 'English'];
let langIdx = 5; // Start with English
let voiceActive = false;

// ─── RENDER SCHEMES ───
function renderSchemes(filter) {
  const grid = document.getElementById('schemesGrid');
  if (!grid) return;
  let filtered;
  if (filter === 'all') filtered = schemes;
  else if (filter === 'central') filtered = schemes.filter(s => s.tag === 'Central');
  else if (filter === 'state') filtered = schemes.filter(s => s.tag !== 'Central');
  else filtered = schemes.filter(s => s.category === filter);

  grid.innerHTML = filtered.map(s => `
    <div class="scheme-card">
      <div class="scheme-header">
        <div class="scheme-icon" style="background:${s.iconBg};">${s.icon}</div>
        <div class="scheme-info">
          <div class="scheme-name">${s.name}</div>
          <span class="scheme-category" style="background:${s.iconBg};color:${s.catColor};">${s.category.charAt(0).toUpperCase()+s.category.slice(1)}</span>
          <span style="font-size:0.65rem;font-weight:700;padding:2px 7px;border-radius:100px;margin-left:4px;background:${s.tag==='Central'?'#E3F2FD':'#FFF3E0'};color:${s.tag==='Central'?'#1565C0':'#E65100'};">${s.tag}</span>
        </div>
      </div>
      <div class="scheme-body">
        <div class="scheme-item"><span class="scheme-item-label">Eligible</span><span class="scheme-item-val">${s.eligibility}</span></div>
        <div class="scheme-item"><span class="scheme-item-label">Benefits</span><span class="scheme-item-val">${s.benefits}</span></div>
        <div class="scheme-item"><span class="scheme-item-label">Documents</span><span class="scheme-item-val">${s.documents}</span></div>
        <div class="scheme-item"><span class="scheme-item-label">How to Apply</span><span class="scheme-item-val">${s.howToApply}</span></div>
      </div>
      <a class="scheme-apply-btn" href="${s.applyUrl}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:6px;">🔗 Apply on Official Website ↗</a>
    </div>
  `).join('');
}

function filterSchemes(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.scheme-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderSchemes(cat);
}




// ─── CYCLE LANGUAGE (navbar button) ───
function setLanguage(lang) {
  const langMap = { en: 'English', hi: 'हिंदी', mr: 'मराठी', ta: 'தமிழ்', bn: 'বাংলা', te: 'తెలుగు' };
  document.getElementById('navLang').textContent = langMap[lang];
  changeLanguage(lang);
  // Close the dropdown
  document.getElementById('navLangMenu').classList.remove('show');
}


// ══════════════════════════════════════════════════════════
// FULL SITE i18n TRANSLATIONS
// ══════════════════════════════════════════════════════════
const siteTranslations = {
  en: {
    announcebar:"Now Supporting 22 Indian Languages",
    announcecta:"Try AI Demo →",
    nav_home:"Home", nav_ai:"AI Assistant", nav_schemes:"Schemes",
    nav_how:"How It Works", nav_docs:"Documents", nav_about:"About",
    nav_contact:"Contact", nav_cta:"Try AI →",
    nav_find:"Find My Schemes", nav_form:"Form Assistant", nav_dashboard:"Dashboard", nav_logout:"Logout", nav_more:"More",
    hero_badge:"AI-Powered · Government Services · India",
    hero_title1:"Your Smart Guide to",
    hero_title2:"Government Schemes",
    hero_deva:"सरकारी योजनाओं का आपका साथी",
    hero_desc:"JanSahay AI helps every Indian citizen — in any language, from any village or city — instantly understand, apply for, and track government welfare schemes and services. No more confusing portals.",
    hero_btn1:"Ask the AI Assistant", hero_btn2:"Explore Schemes",
    stat_lang:"Indian Languages", stat_schemes:"Govt Schemes", stat_citizens:"Citizens Helped",
    chat_name:"JanSahay AI Assistant", chat_status:"Online · Responding instantly",
    strip_label:"🌐 Available in:",
    feat_badge:"✨ Platform Features",
    feat_title:"Everything You Need, In Your Language",
    feat_sub:"Designed for Bharat — from kisan to entrepreneur, from student to senior citizen.",
    f1_title:"AI Chat Assistant", f1_desc:"Ask any question about government schemes in plain language. Get clear, step-by-step guidance instantly — no confusing jargon.",
    f2_title:"22+ Indian Languages", f2_desc:"Full support for Hindi, Marathi, Tamil, Bengali, Telugu, Kannada, Gujarati, Punjabi, and 14 more regional languages.",
    f3_title:"Voice Assistance", f3_desc:"Can't type? Just speak! Microphone button accepts voice queries in your dialect. AI replies back with audio too.",
    f4_title:"Scheme Explorer", f4_desc:"Browse 500+ central and state government schemes by category. See eligibility, documents, benefits at a glance.",
    f5_title:"Document Guidance", f5_desc:"Know exactly which documents you need before visiting any office. Download personalized checklists.",
    f6_title:"Citizen Dashboard", f6_desc:"Save favourite schemes, track your application status, and get personalized recommendations based on your profile.",
    f7_title:"IVR Phone Support", f7_desc:"No smartphone? No problem. Call our toll-free number and talk to the AI assistant over a basic phone. Truly inclusive.",
    f8_title:"Accessible Design", f8_desc:"Large buttons, high contrast, screen reader support, and voice navigation. Built for everyone, including elderly users.",
    ai_badge:"💬 Live Demo",
    ai_sub:'Ask anything — "What schemes are there for women entrepreneurs?" or "How to apply for Ayushman Bharat?"',
    sch_badge:"📋 Schemes Explorer", sch_title:"Find Your Government Scheme",
    sch_sub:"Browse 500+ central and state government schemes. Filter by category to find what you're eligible for.",
    tab_all:"All Schemes", tab_central:"🇮🇳 Central Govt", tab_state:"🏛️ State Govt",
    tab_agri:"🌾 Agriculture", tab_health:"🏥 Healthcare", tab_edu:"🎓 Education",
    tab_women:"👩 Women", tab_startup:"🚀 Startup", tab_employ:"💼 Employment",
    tab_housing:"🏠 Housing", tab_mh:"🏛️ Maharashtra",
    how_badge:"⚙️ How It Works", how_title:"Simple as Saying Hello",
    how_sub:"No technical knowledge needed. Three steps and you're guided.",
    step1_title:"Ask in Your Language", step1_desc:"Type or speak your question in Hindi, Tamil, Bengali, or any Indian language. Even simple words work.",
    step2_title:"AI Understands You", step2_desc:"Our NLP engine powered by large language models understands your question and searches the government knowledge base.",
    step3_title:"Get Clear Guidance", step3_desc:"Receive step-by-step answers: which scheme, documents needed, how to apply, and direct links to official portals.",
    step4_title:"Track Your Application", step4_desc:"Save your favourites. Track your application status. Get reminders for deadlines — all in your citizen dashboard.",
    doc_badge:"📁 Document Guide", doc_title:"Know Your Documents",
    doc_sub:"No more going to the office twice. Check which documents you need — for Central and Maharashtra State schemes.",
    checklist_title:"📋 Universal Document Checklist",
    cat_identity:"Identity Documents", cat_residence:"Residence & Bank",
    cat_income:"Income, Caste & Category", cat_agri:"Agriculture / Land",
    dl_btn:"⬇️ Download My Checklist PDF",
    st_done:"✅ Done", st_submit:"📤 Submitted", st_pending:"⏳ Pending",
    dash_badge:"👤 Citizen Dashboard", dash_title:"Your Personal Portal",
    dash_sub:"Your profile, saved schemes, application tracker, and AI recommendations — all in one place.",
    ivr_badge:"📞 IVR Integration", ivr_title:"AI on a Simple Phone Call",
    ivr1_title:"Dial the Toll-Free Number", ivr1_desc:"Call 1800-JAN-AI from any phone — basic or smartphone. No data required.",
    ivr2_title:"Choose Your Language", ivr2_desc:"Press 1 for Hindi, 2 for Tamil, 3 for Bengali, or simply say your language name.",
    ivr3_title:"Speak Your Question", ivr4_title:"AI Answers in Your Language",
    about_badge:"ℹ️ About JanSahay AI", about_title:"Built for Bharat, Powered by AI",
    about_sub:"JanSahay AI is a GovTech startup with the mission to make every government scheme accessible to every Indian citizen, regardless of literacy, connectivity, or language.",
    contact_title:"Get in Touch",
    contact_sub:"Partner with us, report issues, or request a scheme to be added.",
    form_name:"Your Name", form_email:"Email Address", form_query:"Query Type",
    form_msg:"Message", form_send:"Send Message",
    contact_info_title:"Let's Build a More<br>Accessible India",
    contact_info_text:"We work with NGOs, gram panchayats, state governments, and development organizations to bring JanSahay AI to the last mile.",
    footer_tag:"जन सेवा · AI की शक्ति से",
    footer_copy:"Made with 🇮🇳 for every Indian citizen · © 2024 JanSahay AI Technologies Pvt Ltd · Not an official Government of India portal",
    fab_ask:"💬 Ask AI Assistant",
    greeting:'🙏 <strong>Namaste!</strong> I am JanSahay AI — your personal guide to Indian government schemes.<br><br>Ask me about: <strong>PM-KISAN, Ayushman Bharat, PM Awas Yojana, Startup India</strong>, and 500+ more schemes.<br><br>How may I help you today?',
    placeholder:"Type your question here...", heroPH:"Ask about any government scheme...",
    sectionTitle:"Try the AI Assistant", voiceBtn:"🎤 Enable Voice", popularQ:"🔥 Popular Questions",
    q1:"🌾 Schemes for farmers?", q2:"🏠 Apply for PM Awas Yojana?", q3:"🏥 Ayushman Bharat documents?",
    q4:"🚀 Startup schemes for youth?", q5:"👩 Women empowerment schemes?", q6:"🎓 Scholarships for students?"
  },

  hi: {
    announcebar:"अब 22 भारतीय भाषाओं में उपलब्ध",
    announcecta:"AI डेमो आज़माएं →",
    nav_home:"होम", nav_ai:"AI सहायक", nav_schemes:"योजनाएं",
    nav_how:"कैसे", nav_docs:"दस्तावेज", nav_about:"हमारे बारे में",
    nav_contact:"संपर्क", nav_cta:"AI आज़माएं →",
    nav_find:"अपनी योजना खोजें", nav_form:"फॉर्म सहायक", nav_dashboard:"डैशबोर्ड", nav_logout:"लॉगआउट", nav_more:"अधिक",
    hero_badge:"AI-संचालित · सरकारी सेवाएं · भारत",
    hero_title1:"सरकारी योजनाओं का",
    hero_title2:"आपका स्मार्ट गाइड",
    hero_deva:"हर नागरिक का डिजिटल सहायक",
    hero_desc:"जनसहाय AI हर भारतीय नागरिक की मदद करता है — किसी भी भाषा में, किसी भी गाँव या शहर से — सरकारी योजनाओं को तुरंत समझने, आवेदन करने और ट्रैक करने के लिए।",
    hero_btn1:"AI सहायक से पूछें", hero_btn2:"योजनाएं देखें",
    stat_lang:"भारतीय भाषाएं", stat_schemes:"सरकारी योजनाएं", stat_citizens:"नागरिक लाभान्वित",
    chat_name:"जनसहाय AI सहायक", chat_status:"ऑनलाइन · तुरंत जवाब",
    strip_label:"🌐 उपलब्ध भाषाएं:",
    feat_badge:"✨ प्लेटफ़ॉर्म विशेषताएं",
    feat_title:"आपकी भाषा में, जो चाहिए वो सब",
    feat_sub:"भारत के लिए बनाया गया — किसान से उद्यमी तक, छात्र से वरिष्ठ नागरिक तक।",
    f1_title:"AI चैट सहायक", f1_desc:"सरकारी योजनाओं के बारे में सरल भाषा में कोई भी सवाल पूछें। तुरंत स्पष्ट, चरण-दर-चरण मार्गदर्शन पाएं।",
    f2_title:"22+ भारतीय भाषाएं", f2_desc:"हिंदी, मराठी, तमिल, बंगाली, तेलुगु, कन्नड़, गुजराती, पंजाबी और 14 और क्षेत्रीय भाषाओं में पूर्ण समर्थन।",
    f3_title:"वॉयस सहायता", f3_desc:"टाइप नहीं कर सकते? बस बोलें! माइक्रोफोन बटन आपकी बोली में वॉयस सवाल स्वीकार करता है।",
    f4_title:"योजना एक्सप्लोरर", f4_desc:"500+ केंद्र और राज्य सरकार की योजनाएं श्रेणी के अनुसार ब्राउज़ करें। पात्रता, दस्तावेज़, लाभ एक नज़र में।",
    f5_title:"दस्तावेज़ मार्गदर्शन", f5_desc:"किसी भी कार्यालय जाने से पहले जानें आपको कौन से दस्तावेज़ चाहिए। व्यक्तिगत चेकलिस्ट डाउनलोड करें।",
    f6_title:"नागरिक डैशबोर्ड", f6_desc:"पसंदीदा योजनाएं सेव करें, आवेदन की स्थिति ट्रैक करें और अपनी प्रोफ़ाइल के अनुसार सुझाव पाएं।",
    f7_title:"IVR फ़ोन सपोर्ट", f7_desc:"स्मार्टफोन नहीं है? कोई बात नहीं। हमारे टोल-फ्री नंबर पर कॉल करें और साधारण फोन से AI से बात करें।",
    f8_title:"सुलभ डिज़ाइन", f8_desc:"बड़े बटन, उच्च कंट्रास्ट, स्क्रीन रीडर और वॉयस नेविगेशन। बुजुर्गों सहित सभी के लिए।",
    ai_badge:"💬 लाइव डेमो",
    ai_sub:'कुछ भी पूछें — "महिला उद्यमियों के लिए कौन सी योजनाएं हैं?" या "आयुष्मान भारत के लिए कैसे आवेदन करें?"',
    sch_badge:"📋 योजना एक्सप्लोरर", sch_title:"अपनी सरकारी योजना खोजें",
    sch_sub:"500+ केंद्र और राज्य सरकार की योजनाएं। अपने लिए पात्र योजना खोजने के लिए फ़िल्टर करें।",
    tab_all:"सभी योजनाएं", tab_central:"🇮🇳 केंद्र सरकार", tab_state:"🏛️ राज्य सरकार",
    tab_agri:"🌾 कृषि", tab_health:"🏥 स्वास्थ्य", tab_edu:"🎓 शिक्षा",
    tab_women:"👩 महिला", tab_startup:"🚀 स्टार्टअप", tab_employ:"💼 रोजगार",
    tab_housing:"🏠 आवास", tab_mh:"🏛️ महाराष्ट्र",
    how_badge:"⚙️ कैसे काम करता है", how_title:"बस नमस्ते कहना है",
    how_sub:"कोई तकनीकी ज्ञान नहीं चाहिए। तीन कदम और आपको मार्गदर्शन मिल जाएगा।",
    step1_title:"अपनी भाषा में पूछें", step1_desc:"हिंदी, तमिल, बंगाली या किसी भी भारतीय भाषा में टाइप करें या बोलें। सरल शब्द भी काम करते हैं।",
    step2_title:"AI आपको समझता है", step2_desc:"बड़े भाषा मॉडल द्वारा संचालित हमारा NLP इंजन आपके सवाल को समझता है और सरकारी नॉलेज बेस में खोज करता है।",
    step3_title:"स्पष्ट मार्गदर्शन पाएं", step3_desc:"चरण-दर-चरण जवाब पाएं: कौन सी योजना, कौन से दस्तावेज़, कैसे आवेदन करें और सरकारी पोर्टल के लिंक।",
    step4_title:"आवेदन ट्रैक करें", step4_desc:"पसंदीदा सेव करें। आवेदन की स्थिति ट्रैक करें। डेडलाइन की याद दिलाएं — सब आपके नागरिक डैशबोर्ड में।",
    doc_badge:"📁 दस्तावेज़ गाइड", doc_title:"अपने दस्तावेज़ जानें",
    doc_sub:"अब दो बार दफ्तर जाने की जरूरत नहीं। जानें केंद्र और महाराष्ट्र राज्य योजनाओं के लिए कौन से दस्तावेज़ चाहिए।",
    checklist_title:"📋 सार्वभौमिक दस्तावेज़ चेकलिस्ट",
    cat_identity:"पहचान दस्तावेज़", cat_residence:"निवास और बैंक",
    cat_income:"आय, जाति और श्रेणी", cat_agri:"कृषि / भूमि",
    dl_btn:"⬇️ मेरी चेकलिस्ट PDF डाउनलोड करें",
    st_done:"✅ हो गया", st_submit:"📤 जमा किया", st_pending:"⏳ प्रतीक्षारत",
    dash_badge:"👤 नागरिक डैशबोर्ड", dash_title:"आपका व्यक्तिगत पोर्टल",
    dash_sub:"आपकी प्रोफ़ाइल, सेव की गई योजनाएं, आवेदन ट्रैकर और AI सुझाव — सब एक जगह।",
    ivr_badge:"📞 IVR एकीकरण", ivr_title:"साधारण फोन कॉल पर AI",
    ivr1_title:"टोल-फ्री नंबर डायल करें", ivr1_desc:"किसी भी फोन से 1800-JAN-AI पर कॉल करें — साधारण या स्मार्टफोन। कोई डेटा नहीं चाहिए।",
    ivr2_title:"अपनी भाषा चुनें", ivr2_desc:"हिंदी के लिए 1 दबाएं, तमिल के लिए 2, बंगाली के लिए 3, या बस अपनी भाषा का नाम बोलें।",
    ivr3_title:"अपना सवाल बोलें", ivr4_title:"AI आपकी भाषा में जवाब देता है",
    about_badge:"ℹ️ जनसहाय AI के बारे में", about_title:"भारत के लिए बना, AI से संचालित",
    about_sub:"जनसहाय AI एक GovTech स्टार्टअप है जिसका मिशन है हर सरकारी योजना को हर भारतीय नागरिक तक पहुंचाना, चाहे साक्षरता, कनेक्टिविटी या भाषा कोई भी हो।",
    contact_title:"संपर्क करें",
    contact_sub:"हमारे साथ भागीदारी करें, समस्याएं रिपोर्ट करें, या कोई योजना जोड़ने का अनुरोध करें।",
    form_name:"आपका नाम", form_email:"ईमेल पता", form_query:"प्रश्न का प्रकार",
    form_msg:"संदेश", form_send:"संदेश भेजें",
    contact_info_title:"आइए एक अधिक<br>सुलभ भारत बनाएं",
    contact_info_text:"हम NGOs, ग्राम पंचायतों, राज्य सरकारों और विकास संगठनों के साथ मिलकर जनसहाय AI को अंतिम पायदान तक पहुंचाते हैं।",
    footer_tag:"जन सेवा · AI की शक्ति से",
    footer_copy:"🇮🇳 हर भारतीय नागरिक के लिए बनाया गया · © 2024 JanSahay AI Technologies Pvt Ltd · यह भारत सरकार का आधिकारिक पोर्टल नहीं है",
    fab_ask:"💬 AI सहायक से पूछें",
    greeting:'🙏 <strong>नमस्ते!</strong> मैं जनसहाय AI हूँ — सरकारी योजनाओं का आपका मार्गदर्शक।<br><br>पूछें: <strong>पीएम-किसान, आयुष्मान भारत, पीएम आवास योजना, स्टार्टअप इंडिया</strong> और 500+ योजनाएं।<br><br>आज मैं आपकी कैसे मदद करूँ?',
    placeholder:"यहाँ अपना सवाल लिखें...", heroPH:"कोई भी सरकारी योजना के बारे में पूछें...",
    sectionTitle:"AI असिस्टेंट आज़माएं", voiceBtn:"🎤 आवाज़ चालू करें", popularQ:"🔥 लोकप्रिय सवाल",
    q1:"🌾 किसानों के लिए योजनाएं?", q2:"🏠 पीएम आवास योजना आवेदन?", q3:"🏥 आयुष्मान भारत दस्तावेज़?",
    q4:"🚀 युवाओं के लिए स्टार्टअप?", q5:"👩 महिला सशक्तिकरण योजनाएं?", q6:"🎓 छात्रवृत्ति योजनाएं?"
  },

  mr: {
    announcebar:"आता 22 भारतीय भाषांमध्ये उपलब्ध",
    announcecta:"AI डेमो वापरा →",
    nav_home:"मुख्यपृष्ठ", nav_ai:"AI सहाय्यक", nav_schemes:"योजना",
    nav_how:"कसे काम करते", nav_docs:"कागदपत्रे", nav_about:"आमच्याबद्दल",
    nav_contact:"संपर्क", nav_cta:"AI वापरा →",
    hero_badge:"AI-चालित · सरकारी सेवा · भारत",
    hero_title1:"सरकारी योजनांचा",
    hero_title2:"तुमचा स्मार्ट मार्गदर्शक",
    hero_deva:"प्रत्येक नागरिकाचा डिजिटल सहाय्यक",
    hero_desc:"जनसहाय AI प्रत्येक भारतीय नागरिकाला मदत करते — कोणत्याही भाषेत, कोणत्याही गावातून — सरकारी योजना समजण्यासाठी, अर्ज करण्यासाठी आणि ट्रॅक करण्यासाठी।",
    hero_btn1:"AI सहाय्यकाला विचारा", hero_btn2:"योजना पाहा",
    stat_lang:"भारतीय भाषा", stat_schemes:"सरकारी योजना", stat_citizens:"नागरिकांना मदत",
    chat_name:"जनसहाय AI सहाय्यक", chat_status:"ऑनलाइन · त्वरित उत्तर",
    strip_label:"🌐 उपलब्ध भाषा:",
    feat_badge:"✨ प्लॅटफॉर्म वैशिष्ट्ये",
    feat_title:"तुमच्या भाषेत, जे हवे ते सर्व",
    feat_sub:"भारतासाठी बनवले — शेतकऱ्यापासून उद्योजकापर्यंत, विद्यार्थ्यापासून ज्येष्ठ नागरिकापर्यंत।",
    f1_title:"AI चॅट सहाय्यक", f1_desc:"सरकारी योजनांबद्दल सोप्या भाषेत कोणताही प्रश्न विचारा. त्वरित स्पष्ट, टप्प्याटप्प्याने मार्गदर्शन मिळवा.",
    f2_title:"22+ भारतीय भाषा", f2_desc:"हिंदी, मराठी, तमिळ, बंगाली, तेलुगू, कन्नड, गुजराती, पंजाबी आणि 14 आणखी प्रादेशिक भाषांचा पूर्ण आधार.",
    f3_title:"व्हॉइस सहाय्य", f3_desc:"टाइप करता येत नाही? फक्त बोला! मायक्रोफोन बटण तुमच्या बोलीत व्हॉइस प्रश्न स्वीकारते.",
    f4_title:"योजना एक्सप्लोरर", f4_desc:"श्रेणीनुसार 500+ केंद्र आणि राज्य सरकारच्या योजना पाहा. पात्रता, कागदपत्रे, फायदे एका दृष्टिक्षेपात.",
    f5_title:"कागदपत्र मार्गदर्शन", f5_desc:"कोणत्याही कार्यालयात जाण्यापूर्वी कोणती कागदपत्रे लागतात ते जाणून घ्या.",
    f6_title:"नागरिक डॅशबोर्ड", f6_desc:"आवडत्या योजना सेव्ह करा, अर्जाची स्थिती ट्रॅक करा आणि तुमच्या प्रोफाइलनुसार शिफारसी मिळवा.",
    f7_title:"IVR फोन आधार", f7_desc:"स्मार्टफोन नाही? काळजी नको. टोल-फ्री नंबरवर कॉल करा आणि साध्या फोनवर AI शी बोला.",
    f8_title:"सुलभ डिझाइन", f8_desc:"मोठी बटणे, उच्च कॉन्ट्रास्ट, स्क्रीन रीडर आधार. ज्येष्ठांसह सर्वांसाठी बनवले.",
    ai_badge:"💬 लाइव्ह डेमो",
    ai_sub:'काहीही विचारा — "महिला उद्योजकांसाठी कोणत्या योजना आहेत?" किंवा "आयुष्मान भारतसाठी अर्ज कसा करायचा?"',
    sch_badge:"📋 योजना एक्सप्लोरर", sch_title:"तुमची सरकारी योजना शोधा",
    sch_sub:"500+ केंद्र आणि राज्य सरकारच्या योजना. तुम्ही पात्र असलेली योजना शोधण्यासाठी फिल्टर करा.",
    tab_all:"सर्व योजना", tab_central:"🇮🇳 केंद्र सरकार", tab_state:"🏛️ राज्य सरकार",
    tab_agri:"🌾 शेती", tab_health:"🏥 आरोग्य", tab_edu:"🎓 शिक्षण",
    tab_women:"👩 महिला", tab_startup:"🚀 स्टार्टअप", tab_employ:"💼 रोजगार",
    tab_housing:"🏠 घर", tab_mh:"🏛️ महाराष्ट्र",
    how_badge:"⚙️ कसे काम करते", how_title:"फक्त नमस्कार म्हणा",
    how_sub:"कोणतेही तांत्रिक ज्ञान नको. तीन पायऱ्या आणि तुम्हाला मार्गदर्शन मिळेल.",
    step1_title:"तुमच्या भाषेत विचारा", step1_desc:"हिंदी, तमिळ, बंगाली किंवा कोणत्याही भारतीय भाषेत टाइप करा किंवा बोला.",
    step2_title:"AI तुम्हाला समजते", step2_desc:"आमचे NLP इंजिन तुमचा प्रश्न समजते आणि सरकारी ज्ञानकोशात शोध घेते.",
    step3_title:"स्पष्ट मार्गदर्शन मिळवा", step3_desc:"टप्प्याटप्प्याने उत्तरे मिळवा: कोणती योजना, कोणती कागदपत्रे, कसा अर्ज करायचा.",
    step4_title:"अर्ज ट्रॅक करा", step4_desc:"आवडते सेव्ह करा. अर्जाची स्थिती ट्रॅक करा. मुदतीची आठवण मिळवा.",
    doc_badge:"📁 कागदपत्र मार्गदर्शिका", doc_title:"तुमची कागदपत्रे जाणून घ्या",
    doc_sub:"आता दोनदा कार्यालयात जाण्याची गरज नाही. केंद्र आणि महाराष्ट्र राज्य योजनांसाठी कोणती कागदपत्रे लागतात ते तपासा.",
    checklist_title:"📋 सार्वत्रिक कागदपत्र चेकलिस्ट",
    cat_identity:"ओळख कागदपत्रे", cat_residence:"निवास आणि बँक",
    cat_income:"उत्पन्न, जात आणि वर्ग", cat_agri:"शेती / जमीन",
    dl_btn:"⬇️ माझी चेकलिस्ट PDF डाउनलोड करा",
    st_done:"✅ झाले", st_submit:"📤 सादर केले", st_pending:"⏳ प्रलंबित",
    dash_badge:"👤 नागरिक डॅशबोर्ड", dash_title:"तुमचे वैयक्तिक पोर्टल",
    dash_sub:"तुमची प्रोफाइल, सेव्ह केलेल्या योजना, अर्ज ट्रॅकर आणि AI शिफारसी — सर्व एकाच ठिकाणी.",
    ivr_badge:"📞 IVR एकीकरण", ivr_title:"साध्या फोन कॉलवर AI",
    ivr1_title:"टोल-फ्री नंबर डायल करा", ivr1_desc:"कोणत्याही फोनवरून 1800-JAN-AI वर कॉल करा. कोणताही डेटा लागत नाही.",
    ivr2_title:"तुमची भाषा निवडा", ivr2_desc:"हिंदीसाठी 1 दाबा, तमिळसाठी 2, बंगालीसाठी 3, किंवा फक्त तुमच्या भाषेचे नाव सांगा.",
    ivr3_title:"तुमचा प्रश्न बोला", ivr4_title:"AI तुमच्या भाषेत उत्तर देते",
    about_badge:"ℹ️ जनसहाय AI बद्दल", about_title:"भारतासाठी बनवले, AI ने चालवले",
    about_sub:"जनसहाय AI एक GovTech स्टार्टअप आहे ज्याचे ध्येय आहे प्रत्येक सरकारी योजना प्रत्येक भारतीय नागरिकापर्यंत पोहोचवणे.",
    contact_title:"संपर्क साधा",
    contact_sub:"आमच्याशी भागीदारी करा, समस्या नोंदवा किंवा योजना जोडण्याची विनंती करा.",
    form_name:"तुमचे नाव", form_email:"ईमेल पत्ता", form_query:"प्रश्नाचा प्रकार",
    form_msg:"संदेश", form_send:"संदेश पाठवा",
    contact_info_title:"आपण एक अधिक<br>सुलभ भारत बनवूया",
    contact_info_text:"आम्ही NGOs, ग्रामपंचायती, राज्य सरकारे आणि विकास संस्थांसोबत काम करतो.",
    footer_tag:"जन सेवा · AI च्या शक्तीने",
    footer_copy:"🇮🇳 प्रत्येक भारतीय नागरिकासाठी बनवले · © 2024 JanSahay AI Technologies Pvt Ltd · हे भारत सरकारचे अधिकृत पोर्टल नाही",
    fab_ask:"💬 AI सहाय्यकाला विचारा",
    greeting:'🙏 <strong>नमस्कार!</strong> मी जनसहाय AI — सरकारी योजनांचा तुमचा मार्गदर्शक।<br><br>विचारा: <strong>पीएम-किसान, आयुष्मान भारत, पीएम आवास योजना</strong> आणि ५००+ योजना।<br><br>आज मी कशी मदत करू?',
    placeholder:"येथे प्रश्न लिहा...", heroPH:"कोणत्याही योजनेबद्दल विचारा...",
    sectionTitle:"AI सहाय्यक वापरा", voiceBtn:"🎤 आवाज सुरू करा", popularQ:"🔥 लोकप्रिय प्रश्न",
    q1:"🌾 शेतकऱ्यांसाठी योजना?", q2:"🏠 पीएम आवास अर्ज?", q3:"🏥 आयुष्मान कागदपत्रे?",
    q4:"🚀 स्टार्टअप योजना?", q5:"👩 महिला योजना?", q6:"🎓 शिष्यवृत्ती?"
  },

  ta: {
    announcebar:"இப்போது 22 இந்திய மொழிகளில் கிடைக்கிறது",
    announcecta:"AI டெமோவை முயற்சிக்கவும் →",
    nav_home:"முகப்பு", nav_ai:"AI உதவியாளர்", nav_schemes:"திட்டங்கள்",
    nav_how:"எப்படி செயல்படுகிறது", nav_docs:"ஆவணங்கள்", nav_about:"எங்களைப் பற்றி",
    nav_contact:"தொடர்பு", nav_cta:"AI முயற்சி →",
    hero_badge:"AI-இயங்கும் · அரசு சேவைகள் · இந்தியா",
    hero_title1:"அரசு திட்டங்களுக்கான",
    hero_title2:"உங்கள் ஸ்மார்ட் வழிகாட்டி",
    hero_deva:"ஒவ்வொரு குடிமகனின் டிஜிட்டல் உதவியாளர்",
    hero_desc:"ஜன்சஹாய் AI ஒவ்வொரு இந்திய குடிமகனுக்கும் உதவுகிறது — எந்த மொழியிலும், எந்த கிராமத்திலிருந்தும் — அரசு திட்டங்களை உடனடியாக புரிந்துகொண்டு, விண்ணப்பிக்க.",
    hero_btn1:"AI உதவியாளரிடம் கேளுங்கள்", hero_btn2:"திட்டங்களை ஆராயுங்கள்",
    stat_lang:"இந்திய மொழிகள்", stat_schemes:"அரசு திட்டங்கள்", stat_citizens:"உதவிய குடிமக்கள்",
    chat_name:"ஜன்சஹாய் AI உதவியாளர்", chat_status:"ஆன்லைன் · உடனடி பதில்",
    strip_label:"🌐 கிடைக்கும் மொழிகள்:",
    feat_badge:"✨ தளம் அம்சங்கள்",
    feat_title:"உங்கள் மொழியில், தேவையான அனைத்தும்",
    feat_sub:"பாரதத்திற்காக வடிவமைக்கப்பட்டது — விவசாயி முதல் தொழிலதிபர் வரை, மாணவர் முதல் மூத்த குடிமகன் வரை.",
    f1_title:"AI அரட்டை உதவியாளர்", f1_desc:"அரசு திட்டங்களைப் பற்றி எளிய மொழியில் கேளுங்கள். உடனடி தெளிவான வழிகாட்டுதல் பெறுங்கள்.",
    f2_title:"22+ இந்திய மொழிகள்", f2_desc:"இந்தி, மராத்தி, தமிழ், வங்காளம், தெலுங்கு, கன்னடம், குஜராத்தி, பஞ்சாபி மற்றும் 14 மேலும் மொழிகள்.",
    f3_title:"குரல் உதவி", f3_desc:"தட்டச்சு செய்ய முடியவில்லையா? பேசுங்கள்! மைக்ரோஃபோன் பட்டன் உங்கள் திட்டத்தில் குரல் கேள்விகளை ஏற்கும்.",
    f4_title:"திட்ட ஆய்வாளர்", f4_desc:"500+ மத்திய மற்றும் மாநில திட்டங்களை வகைப்படுத்தி உலாவுங்கள். தகுதி, ஆவணங்கள், நன்மைகள் ஒரே பார்வையில்.",
    f5_title:"ஆவண வழிகாட்டி", f5_desc:"எந்த அலுவலகத்திற்கும் செல்வதற்கு முன் என்ன ஆவணங்கள் தேவை என்று அறியுங்கள்.",
    f6_title:"குடிமகன் டாஷ்போர்டு", f6_desc:"விருப்பமான திட்டங்களை சேமியுங்கள், விண்ணப்ப நிலையை கண்காணியுங்கள்.",
    f7_title:"IVR தொலைபேசி ஆதரவு", f7_desc:"ஸ்மார்ட்போன் இல்லையா? பரவாயில்லை. டோல்-ஃப்ரீ எண்ணை அழைத்து AI உடன் பேசுங்கள்.",
    f8_title:"அணுகக்கூடிய வடிவமைப்பு", f8_desc:"பெரிய பொத்தான்கள், உயர் மாறுபாடு, திரை வாசிப்பாளர் ஆதரவு. முதியவர்கள் உட்பட அனைவருக்கும்.",
    ai_badge:"💬 நேரடி டெமோ",
    ai_sub:'"பெண் தொழிலதிபர்களுக்கு என்ன திட்டங்கள் உள்ளன?" அல்லது "ஆயுஷ்மான் பாரத்திற்கு எவ்வாறு விண்ணப்பிப்பது?" என்று எதையும் கேளுங்கள்.',
    sch_badge:"📋 திட்ட ஆய்வாளர்", sch_title:"உங்கள் அரசு திட்டத்தை கண்டுபிடியுங்கள்",
    sch_sub:"500+ மத்திய மற்றும் மாநில திட்டங்கள். தகுதியான திட்டங்களை கண்டறிய வகைப்படுத்துங்கள்.",
    tab_all:"அனைத்து திட்டங்கள்", tab_central:"🇮🇳 மத்திய அரசு", tab_state:"🏛️ மாநில அரசு",
    tab_agri:"🌾 விவசாயம்", tab_health:"🏥 சுகாதாரம்", tab_edu:"🎓 கல்வி",
    tab_women:"👩 பெண்கள்", tab_startup:"🚀 தொடக்கம்", tab_employ:"💼 வேலைவாய்ப்பு",
    tab_housing:"🏠 வீட்டுவசதி", tab_mh:"🏛️ மகாராஷ்டிரா",
    how_badge:"⚙️ எப்படி செயல்படுகிறது", how_title:"வணக்கம் சொல்வதுபோல் எளிது",
    how_sub:"தொழில்நுட்ப அறிவு தேவையில்லை. மூன்று படிகளில் வழிகாட்டுதல் கிடைக்கும்.",
    step1_title:"உங்கள் மொழியில் கேளுங்கள்", step1_desc:"தமிழ், இந்தி, வங்காளம் அல்லது எந்த இந்திய மொழியிலும் தட்டச்சு செய்யுங்கள் அல்லது பேசுங்கள்.",
    step2_title:"AI உங்களை புரிந்துகொள்கிறது", step2_desc:"எங்கள் NLP என்ஜின் உங்கள் கேள்வியை புரிந்துகொண்டு அரசு அறிவுத்தளத்தில் தேடுகிறது.",
    step3_title:"தெளிவான வழிகாட்டுதல் பெறுங்கள்", step3_desc:"படிப்படியான பதில்கள் பெறுங்கள்: எந்த திட்டம், என்ன ஆவணங்கள், எவ்வாறு விண்ணப்பிப்பது.",
    step4_title:"விண்ணப்பத்தை கண்காணியுங்கள்", step4_desc:"விருப்பங்களை சேமியுங்கள். விண்ணப்ப நிலையை கண்காணியுங்கள். காலக்கெடு நினைவூட்டல்கள் பெறுங்கள்.",
    doc_badge:"📁 ஆவண வழிகாட்டி", doc_title:"உங்கள் ஆவணங்களை அறியுங்கள்",
    doc_sub:"இனி இரண்டு முறை அலுவலகம் செல்ல வேண்டாம். மத்திய மற்றும் மாநில திட்டங்களுக்கு என்ன ஆவணங்கள் தேவை என்று சரிபாருங்கள்.",
    checklist_title:"📋 பொது ஆவண சரிபார்ப்பு பட்டியல்",
    cat_identity:"அடையாள ஆவணங்கள்", cat_residence:"வசிப்பிடம் மற்றும் வங்கி",
    cat_income:"வருமானம், சாதி மற்றும் வகை", cat_agri:"விவசாயம் / நிலம்",
    dl_btn:"⬇️ என் சரிபார்ப்பு பட்டியல் PDF பதிவிறக்கவும்",
    st_done:"✅ முடிந்தது", st_submit:"📤 சமர்ப்பிக்கப்பட்டது", st_pending:"⏳ நிலுவையில்",
    dash_badge:"👤 குடிமகன் டாஷ்போர்டு", dash_title:"உங்கள் தனிப்பட்ட போர்ட்டல்",
    dash_sub:"உங்கள் சுயவிவரம், சேமித்த திட்டங்கள், விண்ணப்ப கண்காணிப்பு மற்றும் AI பரிந்துரைகள் — அனைத்தும் ஒரே இடத்தில்.",
    ivr_badge:"📞 IVR ஒருங்கிணைப்பு", ivr_title:"எளிய தொலைபேசி அழைப்பில் AI",
    ivr1_title:"டோல்-ஃப்ரீ எண்ணை அழையுங்கள்", ivr1_desc:"எந்த தொலைபேசியிலிருந்தும் 1800-JAN-AI ஐ அழையுங்கள். தரவு தேவையில்லை.",
    ivr2_title:"உங்கள் மொழியை தேர்ந்தெடுங்கள்", ivr2_desc:"இந்திக்கு 1, தமிழுக்கு 2, வங்காளத்திற்கு 3 அழுத்துங்கள், அல்லது உங்கள் மொழி பெயரை சொல்லுங்கள்.",
    ivr3_title:"உங்கள் கேள்வியை பேசுங்கள்", ivr4_title:"AI உங்கள் மொழியில் பதில் சொல்கிறது",
    about_badge:"ℹ️ ஜன்சஹாய் AI பற்றி", about_title:"பாரதத்திற்காக கட்டப்பட்டது, AI ஆல் இயக்கப்படுகிறது",
    about_sub:"ஜன்சஹாய் AI ஒரு GovTech ஸ்டார்ட்அப், இதன் நோக்கம் ஒவ்வொரு அரசு திட்டத்தையும் ஒவ்வொரு இந்திய குடிமகனுக்கும் அணுகக்கூடியதாக ஆக்குவது.",
    contact_title:"தொடர்பு கொள்ளுங்கள்",
    contact_sub:"எங்களுடன் கூட்டாண்மை கொள்ளுங்கள், சிக்கல்களை புகாரளியுங்கள் அல்லது திட்டம் சேர்க்க கோரிக்கை வையுங்கள்.",
    form_name:"உங்கள் பெயர்", form_email:"மின்னஞ்சல் முகவரி", form_query:"கேள்வி வகை",
    form_msg:"செய்தி", form_send:"செய்தி அனுப்பு",
    contact_info_title:"இன்னும் அதிக<br>அணுகக்கூடிய இந்தியாவை கட்டுவோம்",
    contact_info_text:"நாங்கள் NGOs, கிராம பஞ்சாயத்துகள், மாநில அரசுகள் மற்றும் வளர்ச்சி நிறுவனங்களுடன் இணைந்து பணியாற்றுகிறோம்.",
    footer_tag:"மக்கள் சேவை · AI இன் வலிமையால்",
    footer_copy:"🇮🇳 ஒவ்வொரு இந்திய குடிமகனுக்காக · © 2024 JanSahay AI Technologies Pvt Ltd · இது இந்திய அரசின் அதிகாரப்பூர்வ போர்ட்டல் அல்ல",
    fab_ask:"💬 AI உதவியாளரிடம் கேளுங்கள்",
    greeting:'🙏 <strong>வணக்கம்!</strong> நான் ஜன்சஹாய் AI — அரசு திட்டங்களுக்கான உங்கள் வழிகாட்டி।<br><br>கேளுங்கள்: <strong>PM-KISAN, ஆயுஷ்மான் பாரத், PM ஆவாஸ் யோஜனா</strong> மற்றும் 500+ திட்டங்கள்।<br><br>இன்று எப்படி உதவட்டும்?',
    placeholder:"உங்கள் கேள்வியை இங்கே தட்டச்சு செய்யுங்கள்...", heroPH:"எந்த திட்டத்தைப் பற்றியும் கேளுங்கள்...",
    sectionTitle:"AI உதவியாளரை முயற்சி செய்யுங்கள்", voiceBtn:"🎤 குரல் இயக்கு", popularQ:"🔥 பிரபலமான கேள்விகள்",
    q1:"🌾 விவசாயிகளுக்கான திட்டங்கள்?", q2:"🏠 PM ஆவாஸ் விண்ணப்பம்?", q3:"🏥 ஆயுஷ்மான் ஆவணங்கள்?",
    q4:"🚀 தொழில்முனைவு திட்டங்கள்?", q5:"👩 பெண்கள் திட்டங்கள்?", q6:"🎓 உதவித்தொகை?"
  },

  bn: {
    announcebar:"এখন ২২টি ভারতীয় ভাষায় উপলব্ধ",
    announcecta:"AI ডেমো চেষ্টা করুন →",
    nav_home:"হোম", nav_ai:"AI সহকারী", nav_schemes:"প্রকল্প",
    nav_how:"কীভাবে কাজ করে", nav_docs:"নথিপত্র", nav_about:"আমাদের সম্পর্কে",
    nav_contact:"যোগাযোগ", nav_cta:"AI চেষ্টা করুন →",
    hero_badge:"AI-চালিত · সরকারি সেবা · ভারত",
    hero_title1:"সরকারি প্রকল্পে আপনার",
    hero_title2:"স্মার্ট গাইড",
    hero_deva:"প্রতিটি নাগরিকের ডিজিটাল সহায়ক",
    hero_desc:"জনসহায় AI প্রতিটি ভারতীয় নাগরিককে সাহায্য করে — যেকোনো ভাষায়, যেকোনো গ্রাম বা শহর থেকে — সরকারি প্রকল্প বুঝতে, আবেদন করতে এবং ট্র্যাক করতে।",
    hero_btn1:"AI সহকারীকে জিজ্ঞেস করুন", hero_btn2:"প্রকল্প অন্বেষণ করুন",
    stat_lang:"ভারতীয় ভাষা", stat_schemes:"সরকারি প্রকল্প", stat_citizens:"সহায়তা পেয়েছেন",
    chat_name:"জনসহায় AI সহকারী", chat_status:"অনলাইন · তাৎক্ষণিক সাড়া",
    strip_label:"🌐 পাওয়া যাচ্ছে:",
    feat_badge:"✨ প্ল্যাটফর্ম বৈশিষ্ট্য",
    feat_title:"আপনার ভাষায়, যা দরকার সব",
    feat_sub:"ভারতের জন্য তৈরি — কৃষক থেকে উদ্যোক্তা, ছাত্র থেকে বয়স্ক নাগরিক পর্যন্ত।",
    f1_title:"AI চ্যাট সহকারী", f1_desc:"সহজ ভাষায় সরকারি প্রকল্প সম্পর্কে যেকোনো প্রশ্ন করুন। তাৎক্ষণিক স্পষ্ট, ধাপে ধাপে নির্দেশনা পান।",
    f2_title:"২২+ ভারতীয় ভাষা", f2_desc:"হিন্দি, মারাঠি, তামিল, বাংলা, তেলুগু, কন্নড়, গুজরাটি, পাঞ্জাবি এবং আরও ১৪টি আঞ্চলিক ভাষার সম্পূর্ণ সহায়তা।",
    f3_title:"ভয়েস সহায়তা", f3_desc:"টাইপ করতে পারছেন না? শুধু বলুন! মাইক্রোফোন বোতাম আপনার উপভাষায় ভয়েস প্রশ্ন গ্রহণ করে।",
    f4_title:"প্রকল্প এক্সপ্লোরার", f4_desc:"বিভাগ অনুযায়ী ৫০০+ কেন্দ্র ও রাজ্য সরকারি প্রকল্প ব্রাউজ করুন।",
    f5_title:"নথিপত্র নির্দেশনা", f5_desc:"যেকোনো অফিসে যাওয়ার আগে কোন নথিপত্র দরকার তা জানুন।",
    f6_title:"নাগরিক ড্যাশবোর্ড", f6_desc:"প্রিয় প্রকল্প সংরক্ষণ করুন, আবেদনের অবস্থা ট্র্যাক করুন।",
    f7_title:"IVR ফোন সহায়তা", f7_desc:"স্মার্টফোন নেই? সমস্যা নেই। টোল-ফ্রি নম্বরে ফোন করে AI-এর সাথে কথা বলুন।",
    f8_title:"অ্যাক্সেসযোগ্য ডিজাইন", f8_desc:"বড় বোতাম, উচ্চ কনট্রাস্ট, স্ক্রিন রিডার সহায়তা। বয়স্কদের সহ সকলের জন্য।",
    ai_badge:"💬 লাইভ ডেমো",
    ai_sub:'"মহিলা উদ্যোক্তাদের জন্য কী কী প্রকল্প আছে?" বা "আয়ুষ্মান ভারতের জন্য কীভাবে আবেদন করবেন?" যেকোনো কিছু জিজ্ঞেস করুন।',
    sch_badge:"📋 প্রকল্প এক্সপ্লোরার", sch_title:"আপনার সরকারি প্রকল্প খুঁজুন",
    sch_sub:"৫০০+ কেন্দ্র ও রাজ্য সরকারি প্রকল্প। আপনার জন্য যোগ্য প্রকল্প খুঁজতে ফিল্টার করুন।",
    tab_all:"সব প্রকল্প", tab_central:"🇮🇳 কেন্দ্রীয় সরকার", tab_state:"🏛️ রাজ্য সরকার",
    tab_agri:"🌾 কৃষি", tab_health:"🏥 স্বাস্থ্য", tab_edu:"🎓 শিক্ষা",
    tab_women:"👩 মহিলা", tab_startup:"🚀 স্টার্টআপ", tab_employ:"💼 কর্মসংস্থান",
    tab_housing:"🏠 আবাসন", tab_mh:"🏛️ মহারাষ্ট্র",
    how_badge:"⚙️ কীভাবে কাজ করে", how_title:"হ্যালো বলার মতো সহজ",
    how_sub:"কোনো প্রযুক্তিগত জ্ঞান দরকার নেই। তিনটি ধাপে আপনি নির্দেশিত হবেন।",
    step1_title:"আপনার ভাষায় জিজ্ঞেস করুন", step1_desc:"বাংলা, হিন্দি, তামিল বা যেকোনো ভারতীয় ভাষায় টাইপ করুন বা বলুন।",
    step2_title:"AI আপনাকে বোঝে", step2_desc:"আমাদের NLP ইঞ্জিন আপনার প্রশ্ন বুঝে সরকারি নলেজ বেসে খোঁজ করে।",
    step3_title:"স্পষ্ট নির্দেশনা পান", step3_desc:"ধাপে ধাপে উত্তর পান: কোন প্রকল্প, কোন নথি, কীভাবে আবেদন করবেন।",
    step4_title:"আবেদন ট্র্যাক করুন", step4_desc:"প্রিয়গুলি সংরক্ষণ করুন। আবেদনের অবস্থা ট্র্যাক করুন। সময়সীমার অনুস্মারক পান।",
    doc_badge:"📁 নথিপত্র গাইড", doc_title:"আপনার নথিপত্র জানুন",
    doc_sub:"আর দুইবার অফিসে যেতে হবে না। কেন্দ্র ও মহারাষ্ট্র রাজ্য প্রকল্পের জন্য কোন নথি দরকার তা দেখুন।",
    checklist_title:"📋 সার্বজনীন নথিপত্র চেকলিস্ট",
    cat_identity:"পরিচয় নথিপত্র", cat_residence:"বাসস্থান ও ব্যাংক",
    cat_income:"আয়, জাতি ও বিভাগ", cat_agri:"কৃষি / ভূমি",
    dl_btn:"⬇️ আমার চেকলিস্ট PDF ডাউনলোড করুন",
    st_done:"✅ সম্পন্ন", st_submit:"📤 জমা দেওয়া হয়েছে", st_pending:"⏳ অপেক্ষমান",
    dash_badge:"👤 নাগরিক ড্যাশবোর্ড", dash_title:"আপনার ব্যক্তিগত পোর্টাল",
    dash_sub:"আপনার প্রোফাইল, সংরক্ষিত প্রকল্প, আবেদন ট্র্যাকার এবং AI সুপারিশ — সব এক জায়গায়।",
    ivr_badge:"📞 IVR ইন্টিগ্রেশন", ivr_title:"সাধারণ ফোন কলে AI",
    ivr1_title:"টোল-ফ্রি নম্বরে ডায়াল করুন", ivr1_desc:"যেকোনো ফোন থেকে 1800-JAN-AI তে ফোন করুন। কোনো ডেটা লাগবে না।",
    ivr2_title:"আপনার ভাষা বেছে নিন", ivr2_desc:"হিন্দির জন্য 1, তামিলের জন্য 2, বাংলার জন্য 3 চাপুন, বা আপনার ভাষার নাম বলুন।",
    ivr3_title:"আপনার প্রশ্ন বলুন", ivr4_title:"AI আপনার ভাষায় উত্তর দেয়",
    about_badge:"ℹ️ জনসহায় AI সম্পর্কে", about_title:"ভারতের জন্য তৈরি, AI দ্বারা চালিত",
    about_sub:"জনসহায় AI একটি GovTech স্টার্টআপ যার লক্ষ্য প্রতিটি সরকারি প্রকল্প প্রতিটি ভারতীয় নাগরিকের কাছে পৌঁছে দেওয়া।",
    contact_title:"যোগাযোগ করুন",
    contact_sub:"আমাদের সাথে অংশীদারিত্ব করুন, সমস্যা রিপোর্ট করুন বা প্রকল্প যোগ করার অনুরোধ করুন।",
    form_name:"আপনার নাম", form_email:"ইমেইল ঠিকানা", form_query:"প্রশ্নের ধরন",
    form_msg:"বার্তা", form_send:"বার্তা পাঠান",
    contact_info_title:"আসুন আরও<br>সহজলভ্য ভারত গড়ি",
    contact_info_text:"আমরা NGO, গ্রাম পঞ্চায়েত, রাজ্য সরকার এবং উন্নয়ন সংস্থাগুলির সাথে কাজ করি।",
    footer_tag:"জন সেবা · AI এর শক্তিতে",
    footer_copy:"🇮🇳 প্রতিটি ভারতীয় নাগরিকের জন্য · © 2024 JanSahay AI Technologies Pvt Ltd · এটি ভারত সরকারের অফিসিয়াল পোর্টাল নয়",
    fab_ask:"💬 AI সহকারীকে জিজ্ঞেস করুন",
    greeting:'🙏 <strong>নমস্কার!</strong> আমি জনসহায় AI — সরকারি প্রকল্পের আপনার গাইড।<br><br>জিজ্ঞেস করুন: <strong>PM-কিষাণ, আয়ুষ্মান ভারত, PM আবাস যোজনা</strong> এবং ৫০০+ প্রকল্প।<br><br>আজ কীভাবে সাহায্য করতে পারি?',
    placeholder:"এখানে প্রশ্ন লিখুন...", heroPH:"যেকোনো প্রকল্প সম্পর্কে জিজ্ঞেস করুন...",
    sectionTitle:"AI সহকারী ব্যবহার করুন", voiceBtn:"🎤 ভয়েস চালু করুন", popularQ:"🔥 জনপ্রিয় প্রশ্ন",
    q1:"🌾 কৃষকদের প্রকল্প?", q2:"🏠 PM আবাস যোজনা আবেদন?", q3:"🏥 আয়ুষ্মান ভারত নথি?",
    q4:"🚀 স্টার্টআপ প্রকল্প?", q5:"👩 মহিলা প্রকল্প?", q6:"🎓 বৃত্তি?"
  },

  te: {
    announcebar:"ఇప్పుడు 22 భారతీయ భాషలలో అందుబాటులో",
    announcecta:"AI డెమో ప్రయత్నించండి →",
    nav_home:"హోమ్", nav_ai:"AI సహాయకుడు", nav_schemes:"పథకాలు",
    nav_how:"ఎలా పని చేస్తుంది", nav_docs:"పత్రాలు", nav_about:"మా గురించి",
    nav_contact:"సంప్రదించండి", nav_cta:"AI ప్రయత్నించండి →",
    hero_badge:"AI-ఆధారిత · ప్రభుత్వ సేవలు · భారతదేశం",
    hero_title1:"ప్రభుత్వ పథకాలకు",
    hero_title2:"మీ స్మార్ట్ మార్గదర్శి",
    hero_deva:"ప్రతి పౌరుని డిజిటల్ సహాయకుడు",
    hero_desc:"జనసహాయ్ AI ప్రతి భారతీయ పౌరుడికి సహాయం చేస్తుంది — ఏ భాషలోనైనా, ఏ గ్రామం నుండైనా — ప్రభుత్వ పథకాలను అర్థం చేసుకోవడానికి, దరఖాస్తు చేయడానికి.",
    hero_btn1:"AI సహాయకుడిని అడగండి", hero_btn2:"పథకాలు అన్వేషించండి",
    stat_lang:"భారతీయ భాషలు", stat_schemes:"ప్రభుత్వ పథకాలు", stat_citizens:"సహాయం పొందిన పౌరులు",
    chat_name:"జనసహాయ్ AI సహాయకుడు", chat_status:"ఆన్‌లైన్ · తక్షణ ప్రతిస్పందన",
    strip_label:"🌐 అందుబాటులో ఉన్న భాషలు:",
    feat_badge:"✨ వేదిక లక్షణాలు",
    feat_title:"మీ భాషలో, మీకు కావలసినది అన్నీ",
    feat_sub:"భారత్ కోసం రూపొందించబడింది — రైతు నుండి వ్యాపారి వరకు, విద్యార్థి నుండి వృద్ధ పౌరుడి వరకు.",
    f1_title:"AI చాట్ సహాయకుడు", f1_desc:"సాధారణ భాషలో ప్రభుత్వ పథకాల గురించి ఏ ప్రశ్నైనా అడగండి. వెంటనే స్పష్టమైన, దశలవారీ మార్గదర్శకత్వం పొందండి.",
    f2_title:"22+ భారతీయ భాషలు", f2_desc:"హిందీ, మరాఠీ, తమిళం, బెంగాలీ, తెలుగు, కన్నడ, గుజరాతీ, పంజాబీ మరియు 14 మరిన్ని ప్రాంతీయ భాషల పూర్తి మద్దతు.",
    f3_title:"వాయిస్ సహాయం", f3_desc:"టైప్ చేయలేరా? కేవలం మాట్లాడండి! మైక్రోఫోన్ బటన్ మీ మాండలికంలో వాయిస్ ప్రశ్నలను అంగీకరిస్తుంది.",
    f4_title:"పథకం అన్వేషకుడు", f4_desc:"వర్గం వారీగా 500+ కేంద్ర మరియు రాష్ట్ర పథకాలను చూడండి. అర్హత, పత్రాలు, ప్రయోజనాలు ఒక్క చూపులో.",
    f5_title:"పత్రాల మార్గదర్శకత్వం", f5_desc:"ఏ కార్యాలయానికైనా వెళ్ళే ముందు ఏ పత్రాలు అవసరమో తెలుసుకోండి.",
    f6_title:"పౌర డాష్‌బోర్డ్", f6_desc:"ఇష్టమైన పథకాలను సేవ్ చేయండి, దరఖాస్తు స్థితిని ట్రాక్ చేయండి.",
    f7_title:"IVR ఫోన్ మద్దతు", f7_desc:"స్మార్ట్‌ఫోన్ లేదా? సమస్య లేదు. టోల్-ఫ్రీ నంబర్‌కు కాల్ చేసి AI తో మాట్లాడండి.",
    f8_title:"అందుబాటులో ఉండే రూపకల్పన", f8_desc:"పెద్ద బటన్‌లు, అధిక కాంట్రాస్ట్, స్క్రీన్ రీడర్ మద్దతు. వృద్ధులతో సహా అందరికీ.",
    ai_badge:"💬 లైవ్ డెమో",
    ai_sub:'"మహిళా వ్యాపారులకు ఏ పథకాలున్నాయి?" లేదా "ఆయుష్మాన్ భారత్ కోసం ఎలా దరఖాస్తు చేయాలి?" అని ఏదైనా అడగండి.',
    sch_badge:"📋 పథకాల అన్వేషకుడు", sch_title:"మీ ప్రభుత్వ పథకం కనుగొనండి",
    sch_sub:"500+ కేంద్ర మరియు రాష్ట్ర పథకాలు. మీకు అర్హత ఉన్న పథకాలను కనుగొనడానికి ఫిల్టర్ చేయండి.",
    tab_all:"అన్ని పథకాలు", tab_central:"🇮🇳 కేంద్ర ప్రభుత్వం", tab_state:"🏛️ రాష్ట్ర ప్రభుత్వం",
    tab_agri:"🌾 వ్యవసాయం", tab_health:"🏥 ఆరోగ్యం", tab_edu:"🎓 విద్య",
    tab_women:"👩 మహిళలు", tab_startup:"🚀 స్టార్టప్", tab_employ:"💼 ఉపాధి",
    tab_housing:"🏠 గృహనిర్మాణం", tab_mh:"🏛️ మహారాష్ట్ర",
    how_badge:"⚙️ ఎలా పని చేస్తుంది", how_title:"హలో చెప్పినంత సులభం",
    how_sub:"సాంకేతిక జ్ఞానం అవసరం లేదు. మూడు దశలలో మీకు మార్గదర్శకత్వం లభిస్తుంది.",
    step1_title:"మీ భాషలో అడగండి", step1_desc:"తెలుగు, హిందీ, తమిళం లేదా ఏ భారతీయ భాషలోనైనా టైప్ చేయండి లేదా మాట్లాడండి.",
    step2_title:"AI మీకు అర్థమవుతుంది", step2_desc:"మా NLP ఇంజిన్ మీ ప్రశ్నను అర్థం చేసుకుని ప్రభుత్వ జ్ఞాన బేస్‌లో శోధిస్తుంది.",
    step3_title:"స్పష్టమైన మార్గదర్శకత్వం పొందండి", step3_desc:"దశలవారీ సమాధానాలు పొందండి: ఏ పథకం, ఏ పత్రాలు, ఎలా దరఖాస్తు చేయాలి.",
    step4_title:"దరఖాస్తు ట్రాక్ చేయండి", step4_desc:"ఇష్టమైనవి సేవ్ చేయండి. దరఖాస్తు స్థితిని ట్రాక్ చేయండి. గడువు రిమైండర్‌లు పొందండి.",
    doc_badge:"📁 పత్రాల మార్గదర్శి", doc_title:"మీ పత్రాలు తెలుసుకోండి",
    doc_sub:"ఇక రెండుసార్లు కార్యాలయానికి వెళ్ళాల్సిన అవసరం లేదు. కేంద్ర మరియు మహారాష్ట్ర పథకాలకు ఏ పత్రాలు అవసరమో చూడండి.",
    checklist_title:"📋 సార్వత్రిక పత్రాల చెక్‌లిస్ట్",
    cat_identity:"గుర్తింపు పత్రాలు", cat_residence:"నివాసం మరియు బ్యాంకు",
    cat_income:"ఆదాయం, కులం మరియు వర్గం", cat_agri:"వ్యవసాయం / భూమి",
    dl_btn:"⬇️ నా చెక్‌లిస్ట్ PDF డౌన్‌లోడ్ చేయండి",
    st_done:"✅ పూర్తయింది", st_submit:"📤 సమర్పించబడింది", st_pending:"⏳ పెండింగ్",
    dash_badge:"👤 పౌర డాష్‌బోర్డ్", dash_title:"మీ వ్యక్తిగత పోర్టల్",
    dash_sub:"మీ ప్రొఫైల్, సేవ్ చేసిన పథకాలు, దరఖాస్తు ట్రాకర్ మరియు AI సిఫారసులు — అన్నీ ఒకే చోట.",
    ivr_badge:"📞 IVR ఏకీకరణ", ivr_title:"సాధారణ ఫోన్ కాల్‌లో AI",
    ivr1_title:"టోల్-ఫ్రీ నంబర్ డయల్ చేయండి", ivr1_desc:"ఏ ఫోన్ నుండైనా 1800-JAN-AI కి కాల్ చేయండి. డేటా అవసరం లేదు.",
    ivr2_title:"మీ భాష ఎంచుకోండి", ivr2_desc:"హిందీకి 1, తమిళానికి 2, బెంగాలీకి 3 నొక్కండి, లేదా మీ భాషపేరు చెప్పండి.",
    ivr3_title:"మీ ప్రశ్న మాట్లాడండి", ivr4_title:"AI మీ భాషలో సమాధానం ఇస్తుంది",
    about_badge:"ℹ️ జనసహాయ్ AI గురించి", about_title:"భారత్ కోసం నిర్మించబడింది, AI చే నడపబడుతుంది",
    about_sub:"జనసహాయ్ AI ఒక GovTech స్టార్టప్, దాని లక్ష్యం ప్రతి ప్రభుత్వ పథకాన్ని ప్రతి భారతీయ పౌరుడికి అందుబాటులో ఉంచడం.",
    contact_title:"సంప్రదించండి",
    contact_sub:"మాతో భాగస్వామ్యం ఏర్పరచుకోండి, సమస్యలు రిపోర్ట్ చేయండి లేదా పథకం జోడించమని అభ్యర్థించండి.",
    form_name:"మీ పేరు", form_email:"ఇమెయిల్ చిరునామా", form_query:"ప్రశ్న రకం",
    form_msg:"సందేశం", form_send:"సందేశం పంపండి",
    contact_info_title:"మరింత అందుబాటులో ఉండే<br>భారతాన్ని నిర్మించదాం",
    contact_info_text:"మేము NGOలు, గ్రామ పంచాయతీలు, రాష్ట్ర ప్రభుత్వాలు మరియు అభివృద్ధి సంస్థలతో కలిసి పని చేస్తాము.",
    footer_tag:"జన సేవ · AI శక్తితో",
    footer_copy:"🇮🇳 ప్రతి భారతీయ పౌరుడి కోసం · © 2024 JanSahay AI Technologies Pvt Ltd · ఇది భారత ప్రభుత్వ అధికారిక పోర్టల్ కాదు",
    fab_ask:"💬 AI సహాయకుడిని అడగండి",
    greeting:'🙏 <strong>నమస్కారం!</strong> నేను జనసహాయ్ AI — ప్రభుత్వ పథకాలకు మీ మార్గదర్శకుడు।<br><br>అడగండి: <strong>PM-కిసాన్, ఆయుష్మాన్ భారత్, PM ఆవాస్ యోజన</strong> మరియు 500+ పథకాలు।<br><br>ఈరోజు ఎలా సహాయం చేయాలి?',
    placeholder:"ఇక్కడ ప్రశ్న టైప్ చేయండి...", heroPH:"ఏదైనా పథకం గురించి అడగండి...",
    sectionTitle:"AI అసిస్టెంట్ ప్రయత్నించండి", voiceBtn:"🎤 వాయిస్ ఆన్ చేయండి", popularQ:"🔥 ప్రాచుర్యమైన ప్రశ్నలు",
    q1:"🌾 రైతులకు పథకాలు?", q2:"🏠 PM ఆవాస్ దరఖాస్తు?", q3:"🏥 ఆయుష్మాన్ పత్రాలు?",
    q4:"🚀 స్టార్టప్ పథకాలు?", q5:"👩 మహిళా పథకాలు?", q6:"🎓 స్కాలర్‌షిప్లు?"
  }
};

// ─── FULL-SITE LANGUAGE CHANGE ───
function changeLanguage(lang) {
  const lc = siteTranslations[lang] || siteTranslations['en'];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (lc[key] !== undefined) {
      // Use innerHTML for keys that may contain HTML (like <br>)
      var htmlKeys = ['contact_info_title','footer_copy','greeting'];
      if (htmlKeys.indexOf(key) !== -1) {
        el.innerHTML = lc[key];
      } else {
        el.textContent = lc[key];
      }
    }
  });

  // Chat greeting (existing logic)
  var mainMsgs = document.getElementById('mainChatMessages');
  if (mainMsgs) {
    var firstBubble = mainMsgs.querySelector('.msg.bot .msg-bubble');
    if (firstBubble) firstBubble.innerHTML = lc.greeting;
  }
  var mainInput = document.getElementById('mainChatInput');
  if (mainInput) mainInput.placeholder = lc.placeholder;
  var heroInput = document.getElementById('heroChatInput');
  if (heroInput) heroInput.placeholder = lc.heroPH;
  var sTitle = document.getElementById('assistantTitle');
  if (sTitle) sTitle.textContent = lc.sectionTitle;
  var vBtn = document.getElementById('voiceModeBtn');
  if (vBtn && !voiceActive) vBtn.textContent = lc.voiceBtn;
  var pqLabel = document.getElementById('popularQLabel');
  if (pqLabel) pqLabel.textContent = lc.popularQ;
  var sqs = document.querySelectorAll('.sample-q-text');
  var qtexts = [lc.q1, lc.q2, lc.q3, lc.q4, lc.q5, lc.q6];
  sqs.forEach(function(el, i) { if (qtexts[i]) el.textContent = qtexts[i]; });
  var ls = document.getElementById('langSelect');
  if (ls) ls.value = lang;

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' :
    lang === 'hi' ? 'hi' : lang === 'mr' ? 'mr' :
    lang === 'ta' ? 'ta' : lang === 'bn' ? 'bn' : 'te';
}
// ─── AI RESPONSES ───
const aiResponses = {
  farmer: { text: '🌾 <strong>Top Schemes for Farmers:</strong><br><br>1. <strong>PM-KISAN</strong> — ₹6,000/year direct benefit → <a href="https://pmkisan.gov.in" target="_blank" style="color:var(--blue);">pmkisan.gov.in</a><br>2. <strong>PM Fasal Bima</strong> — Crop insurance → <a href="https://pmfby.gov.in" target="_blank" style="color:var(--blue);">pmfby.gov.in</a><br>3. <strong>Kisan Credit Card</strong> — ₹3 lakh credit at 4% interest<br>4. <strong>Rythu Bharosa (AP)</strong> — ₹13,500/year → <a href="https://apagrisnet.gov.in" target="_blank" style="color:var(--blue);">apagrisnet.gov.in</a><br><br>Which scheme would you like details about?' },
  awas: { text: '🏠 <strong>PM Awas Yojana — How to Apply:</strong><br><br><strong>Urban:</strong> Visit <a href="https://pmaymis.gov.in" target="_blank" style="color:var(--blue);">pmaymis.gov.in</a><br><strong>Rural:</strong> Visit <a href="https://pmayg.nic.in" target="_blank" style="color:var(--blue);">pmayg.nic.in</a><br><br><strong>Documents needed:</strong> Aadhaar, income proof, bank passbook, land documents<br><br>✅ Subsidy of <strong>₹1.2 to 2.67 lakh</strong> directly to your account.' },
  ayushman: { text: '🏥 <strong>Ayushman Bharat Documents Required:</strong><br><br>✅ Aadhaar Card (mandatory)<br>✅ Ration Card (SECC listed)<br>✅ Any government-issued photo ID<br><br><strong>Check eligibility & download card:</strong> <a href="https://pmjay.gov.in" target="_blank" style="color:var(--blue);">pmjay.gov.in</a><br><br><strong>No pre-registration needed!</strong> Walk into any empanelled hospital. Free ₹5 lakh health coverage per year.' },
  startup: { text: '🚀 <strong>Startup Schemes:</strong><br><br>1. <strong>Startup India Seed Fund</strong> — ₹50 lakh → <a href="https://seedfund.startupindia.gov.in" target="_blank" style="color:var(--blue);">seedfund.startupindia.gov.in</a><br>2. <strong>MUDRA Loan</strong> — ₹10 lakh, no collateral → <a href="https://www.mudra.org.in" target="_blank" style="color:var(--blue);">mudra.org.in</a><br>3. <strong>Stand-Up India</strong> — ₹10L–₹1Cr for SC/ST/Women<br><br>Register on <a href="https://startupindia.gov.in" target="_blank" style="color:var(--blue);">startupindia.gov.in</a> for DPIIT recognition first.' },
  women: { text: '👩 <strong>Women Empowerment Schemes:</strong><br><br>1. <strong>PM Ujjwala Yojana</strong> — Free LPG → <a href="https://www.pmuy.gov.in" target="_blank" style="color:var(--blue);">pmuy.gov.in</a><br>2. <strong>Sukanya Samriddhi</strong> — 8.2% interest savings → Post Office<br>3. <strong>Ladki Bahin Yojana (MH)</strong> — ₹1,500/month → <a href="https://ladakibahin.maharashtra.gov.in" target="_blank" style="color:var(--blue);">ladakibahin.maharashtra.gov.in</a><br>4. <strong>Kanyashree (WB)</strong> — ₹25,000 grant → <a href="https://wbkanyashree.gov.in" target="_blank" style="color:var(--blue);">wbkanyashree.gov.in</a><br><br>Want details about any specific scheme?' },
  scholarship: { text: '🎓 <strong>Scholarship Schemes:</strong><br><br>1. <strong>National Scholarship Portal</strong> — SC/ST/OBC/Minority → <a href="https://scholarships.gov.in" target="_blank" style="color:var(--blue);">scholarships.gov.in</a><br>2. <strong>PM Scholarship</strong> — Ex-Servicemen wards · ₹3,000/month → <a href="https://ksb.gov.in/PM-scholarship.htm" target="_blank" style="color:var(--blue);">ksb.gov.in</a><br>3. <strong>Central Sector Scholarship</strong> — Top 20% students · ₹12,000/year<br><br>Apply before the annual deadline on the NSP portal.' },
  default: { text: 'I can help you with government schemes! Ask me about:<br><br>🌾 Agriculture (PM-KISAN, Fasal Bima)<br>🏥 Healthcare (Ayushman Bharat)<br>🎓 Education (NSP, PM Scholarship)<br>🏠 Housing (PM Awas Yojana)<br>👩 Women (Ujjwala, Kanyashree)<br>🚀 Startup/Business (Mudra, Startup India)<br>🏛️ State Schemes (Ladki Bahin, Rythu Bharosa, Kalia)<br><br>What would you like to know?' }
};

function getAIResponse(q) {
  const ql = q.toLowerCase();
  if (ql.match(/farm|kisan|agri|crop|किसान|खेती|rythu|fasal/)) return aiResponses.farmer;
  if (ql.match(/awas|house|home|ghar|आवास|घर|housing|pmay/)) return aiResponses.awas;
  if (ql.match(/ayushman|health|hospital|medical|आयुष्मान|स्वास्थ्य/)) return aiResponses.ayushman;
  if (ql.match(/startup|business|entrepreneur|mudra|उद्यम|व्यापार/)) return aiResponses.startup;
  if (ql.match(/women|mahila|girl|beti|महिला|बेटी|ujjwala|ladki|kanyashree/)) return aiResponses.women;
  if (ql.match(/scholar|student|education|study|छात्र|शिक्षा|scholarship|nsp/)) return aiResponses.scholarship;
  return aiResponses.default;
}

function addMsg(containerId, text, role) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const isBot = role === 'bot';
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  div.style.cssText = 'display:flex;gap:10px;align-items:flex-end;max-width:88%;' + (isBot ? '' : 'flex-direction:row-reverse;align-self:flex-end;');
  div.innerHTML =
    '<div style="width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,' + (isBot ? '#1565C0,#1976D2' : '#2E7D32,#43A047') + ');">' + (isBot ? '🤖' : '👤') + '</div>' +
    '<div style="padding:12px 16px;border-radius:16px;' + (isBot ? 'border-bottom-left-radius' : 'border-bottom-right-radius') + ':4px;font-size:0.85rem;line-height:1.6;' + (isBot ? 'background:white;color:#1E293B;box-shadow:0 1px 3px rgba(0,0,0,0.1);border:1px solid #E2E8F0;' : 'background:linear-gradient(135deg,#1565C0,#1976D2);color:white;') + '">' + text + '</div>';
  c.appendChild(div);
  c.scrollTop = c.scrollHeight;
}

function addBotResponse(containerId, q) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const typing = document.createElement('div');
  typing.className = 'msg bot';
  typing.style.cssText = 'display:flex;gap:10px;align-items:flex-end;max-width:88%;';
  typing.innerHTML = '<div style="width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,#1565C0,#1976D2);">🤖</div><div style="display:flex;gap:4px;align-items:center;padding:12px 16px;background:white;border-radius:16px;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.1);"><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out infinite;"></div><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out 0.2s infinite;"></div><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out 0.4s infinite;"></div></div>';
  c.appendChild(typing);
  c.scrollTop = c.scrollHeight;
  setTimeout(function() {
    typing.remove();
    addMsg(containerId, getAIResponse(q).text, 'bot');
  }, 1500);
}

function sendHeroMessage() {
  const input = document.getElementById('heroChatInput');
  const q = input.value.trim();
  if (!q) return;
  input.value = '';
  addMsg('heroChatMessages', q, 'user');
  setTimeout(function() { addBotResponse('heroChatMessages', q); }, 1200);
}

function sendMainMessage() {
  const input = document.getElementById('mainChatInput');
  const q = input.value.trim();
  if (!q) return;
  input.value = '';
  addMsg('mainChatMessages', q, 'user');
  setTimeout(function() { addBotResponse('mainChatMessages', q); }, 800);
}

function askQuestion(q) {
  const input = document.getElementById('mainChatInput');
  if (input) input.value = q;
  const section = document.getElementById('assistant');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
  setTimeout(sendMainMessage, 600);
}

// ─── HERO CHAT INIT ───
setTimeout(function() {
  const msg = document.getElementById('typingMsg');
  if (msg) {
    msg.innerHTML =
      '<div class="msg-avatar" style="background:linear-gradient(135deg,var(--blue),var(--blue-mid));width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;">🤖</div>' +
      '<div class="msg-bubble" style="background:white;color:var(--gray-800);padding:12px 16px;border-radius:16px;border-bottom-left-radius:4px;box-shadow:var(--shadow-sm);border:1px solid var(--gray-100);font-size:0.85rem;line-height:1.6;">' +
      '<strong>To apply for PM-KISAN:</strong><br>1️⃣ Visit your nearest <strong>Common Service Centre (CSC)</strong><br>2️⃣ Carry: <strong>Aadhaar card, land records, bank passbook</strong><br>3️⃣ Or apply online at <a href="https://pmkisan.gov.in" target="_blank" style="color:var(--blue);font-weight:600;">pmkisan.gov.in</a><br>4️⃣ First installment in <strong>60-90 days</strong> after verification ✅' +
      '</div>';
  }
}, 3000);

// ─── KEY LISTENERS ───
document.addEventListener('DOMContentLoaded', function() {
  const heroInput = document.getElementById('heroChatInput');
  if (heroInput) heroInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendHeroMessage(); });
  const mainInput = document.getElementById('mainChatInput');
  if (mainInput) mainInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMainMessage(); });




});

// ─── DOC TOGGLE ───
function toggleDocCategory(header) {
  const list = header.nextElementSibling;
  const toggle = header.querySelector('.doc-cat-toggle');
  if (list) list.classList.toggle('open');
  if (toggle) toggle.classList.toggle('open');
}

function toggleCheck(el) {
  el.classList.toggle('checked');
  el.textContent = el.classList.contains('checked') ? '✓' : '';
}

// ─── VOICE ───
function toggleVoice() {
  voiceActive = !voiceActive;
  const fab = document.getElementById('floatingVoiceBtn');
  const mainBtn = document.getElementById('mainVoiceBtn');
  const modeBtn = document.getElementById('voiceModeBtn');
  if (voiceActive) {
    if (fab) fab.classList.add('active');
    if (mainBtn) mainBtn.style.background = 'var(--green)';
    if (modeBtn) modeBtn.textContent = '🔴 Listening... (Click to stop)';
    setTimeout(function() {
      if (voiceActive) {
        addMsg('mainChatMessages', '🎙️ <em>Voice query: "What schemes are available for farmers in Maharashtra?"</em>', 'user');
        setTimeout(function() { addBotResponse('mainChatMessages', 'farmer schemes maharashtra'); }, 1000);
        toggleVoice();
      }
    }, 2500);
  } else {
    if (fab) fab.classList.remove('active');
    if (mainBtn) mainBtn.style.background = '';
    if (modeBtn) modeBtn.textContent = '🎤 Enable Voice';
  }
}

// ─── MOBILE MENU ───
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.reload();
}

// ─── SCROLL ANIMATION ───
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(function(el) { observer.observe(el); });

// ─── LANG CHIPS ───
const chipLangMap = { 'English':'en', 'हिंदी':'hi', 'मराठी':'mr', 'தமிழ்':'ta', 'বাংলা':'bn', 'తెలుగు':'te' };
const navLangMap = { en:'English', hi:'हिंदी', mr:'मराठी', ta:'தமிழ்', bn:'বাংলা', te:'తెలుగు' };
document.querySelectorAll('.lang-chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    document.querySelectorAll('.lang-chip').forEach(function(c) { c.classList.remove('active'); });
    chip.classList.add('active');
    const lang = chipLangMap[chip.textContent.trim()] || 'en';
    changeLanguage(lang);
    const navEl = document.getElementById('navLang');
    if (navEl) navEl.textContent = navLangMap[lang] || chip.textContent;
  });
});

// ─── LANG PILLS (hero chat) ───
document.querySelectorAll('.lang-pill').forEach(function(pill) {
  pill.addEventListener('click', function() {
    document.querySelectorAll('.lang-pill').forEach(function(p) { p.classList.remove('active'); });
    pill.classList.add('active');
    const lang = chipLangMap[pill.textContent.trim()] || 'en';
    changeLanguage(lang);
  });
});

// ─── SAMPLE Q HOVER ───
document.querySelectorAll('.sample-q').forEach(function(q) {
  q.addEventListener('mouseenter', function() { q.style.borderColor = 'var(--blue-light)'; q.style.transform = 'translateX(4px)'; });
  q.addEventListener('mouseleave', function() { q.style.borderColor = 'var(--gray-100)'; q.style.transform = ''; });
});


// ─── SCHEME DOC CARDS DATA ───
const schemeDocData = [
  // CENTRAL
  { name:'PM-KISAN Samman Nidhi', tag:'Central', cat:'agriculture', icon:'🌾', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['Aadhaar Card (mandatory)', 'Bank passbook / account details', 'Land records (Khasra/Khatauni or 7/12)', 'Self-declaration if land is joint'],
    url:'https://pmkisan.gov.in', helpline:'155261' },
  { name:'Ayushman Bharat PM-JAY', tag:'Central', cat:'health', icon:'🏥', iconBg:'#E3F2FD', catColor:'#1565C0',
    docs:['Aadhaar Card', 'Ration Card (SECC listed)', 'Any Govt photo ID', 'PMJAY beneficiary letter (if received)'],
    url:'https://pmjay.gov.in', helpline:'14555' },
  { name:'PM Awas Yojana (Urban)', tag:'Central', cat:'housing', icon:'🏠', iconBg:'#E8EAF6', catColor:'#283593',
    docs:['Aadhaar Card', 'Income proof (below ₹3/6/12 lakh)', 'Property/land documents', 'Bank passbook', 'Caste certificate (if SC/ST/OBC)'],
    url:'https://pmaymis.gov.in', helpline:'1800-11-6163' },
  { name:'PM Awas Yojana (Gramin)', tag:'Central', cat:'housing', icon:'🏡', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['Aadhaar Card + consent form', 'SECC list inclusion proof', 'Bank passbook', 'BPL / job card'],
    url:'https://pmayg.nic.in', helpline:'1800-11-6446' },
  { name:'National Scholarship Portal', tag:'Central', cat:'education', icon:'📚', iconBg:'#FFF3E0', catColor:'#E65100',
    docs:['Previous year mark sheet', 'Caste / minority certificate', 'Aadhaar Card', 'Bank passbook', 'Institution verification'],
    url:'https://scholarships.gov.in', helpline:'0120-6619540' },
  { name:'PM Fasal Bima Yojana', tag:'Central', cat:'agriculture', icon:'🌿', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['Aadhaar Card', 'Land ownership / tenancy docs', 'Bank passbook', 'Sowing certificate / crop details', 'Ration card'],
    url:'https://pmfby.gov.in', helpline:'1800-200-7710' },
  { name:'PM Mudra Yojana', tag:'Central', cat:'startup', icon:'💼', iconBg:'#E8EAF6', catColor:'#283593',
    docs:['Business plan / project report', 'KYC (Aadhaar + PAN)', 'Bank statements (6 months)', 'Quotation / machinery details', 'Address proof of business'],
    url:'https://www.mudra.org.in', helpline:'1800-180-1111' },
  { name:'PM Ujjwala Yojana', tag:'Central', cat:'women', icon:'🔥', iconBg:'#FCE4EC', catColor:'#C62828',
    docs:['Aadhaar Card (woman applicant)', 'BPL / Ration Card (yellow)', 'Bank passbook', 'No existing LPG connection declaration'],
    url:'https://www.pmuy.gov.in', helpline:'1906' },
  // MAHARASHTRA
  { name:'Ladki Bahin Yojana', tag:'Maharashtra', cat:'women', icon:'👩', iconBg:'#FCE4EC', catColor:'#C62828',
    docs:['Aadhaar Card (linked to mobile)', 'Ration Card (same family)', 'Bank passbook (own account)', 'Income certificate (below ₹2.5L)', 'Domicile certificate (15 yrs MH resident)', 'Marriage certificate / age proof'],
    url:'https://ladakibahin.maharashtra.gov.in', helpline:'Aaple Sarkar: 1800-120-8040' },
  { name:'MahaDBT Scholarship', tag:'Maharashtra', cat:'education', icon:'🎓', iconBg:'#FFF3E0', catColor:'#E65100',
    docs:['Aadhaar Card', 'Mark sheet (previous year)', 'Caste certificate (SC/ST/OBC/NT/SBC)', 'Non-Creamy Layer certificate (OBC)', 'Income certificate', 'Bank passbook (nationalised bank)', 'Hostel certificate (if applicable)', 'Gap certificate (if applicable)'],
    url:'https://mahadbt.maharashtra.gov.in', helpline:'1800-120-8040' },
  { name:'Magel Tyala Shettale (MH)', tag:'Maharashtra', cat:'agriculture', icon:'🚜', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['7/12 Satbara Utara', '8-A Khate Utara', 'Aadhaar Card', 'Bank passbook', 'Land measurement docs (if needed)'],
    url:'https://krishi.maharashtra.gov.in', helpline:'020-26122222' },
  { name:'Nanaji Deshmukh Krishi Sanjivani (MH)', tag:'Maharashtra', cat:'agriculture', icon:'🌱', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['7/12 & 8-A Utara', 'Aadhaar Card', 'Bank passbook', 'Soil health card (if available)', 'Village selection certificate'],
    url:'https://mahapocra.gov.in', helpline:'020-25503300' },
  { name:'Mukhyamantri Saur Krushi Pump (MH)', tag:'Maharashtra', cat:'agriculture', icon:'☀️', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['7/12 showing agricultural land', 'Aadhaar Card', 'Bank passbook', 'Caste certificate (for priority)', 'No electricity connection declaration'],
    url:'https://www.mahadiscom.in/solar', helpline:'1800-200-3435' },
  { name:'Shubh Vivah Yojana (MH)', tag:'Maharashtra', cat:'women', icon:'💍', iconBg:'#FCE4EC', catColor:'#C62828',
    docs:['Bride and Groom Aadhaar Cards', 'Marriage registration certificate', 'Domicile certificate', 'Income certificate (below ₹1L)', 'Caste certificate (SC/ST/VJ/NT/OBC/SBC)', 'Bank passbook (bride)', 'Age proof (18+ bride, 21+ groom)'],
    url:'https://aaplesarkar.mahaonline.gov.in', helpline:'1800-120-8040' },
  { name:'Balasaheb Thackeray Smruti Matoshri Gram Panchayat (MH)', tag:'Maharashtra', cat:'housing', icon:'🏘️', iconBg:'#E8EAF6', catColor:'#283593',
    docs:['Aadhaar Card', 'Ration Card', 'Gram Panchayat residency proof', 'BPL certificate', 'Bank passbook'],
    url:'https://aaplesarkar.mahaonline.gov.in', helpline:'1800-120-8040' },
  { name:'Rajiv Gandhi Jeevandayee Arogya Yojana (MH)', tag:'Maharashtra', cat:'health', icon:'🏥', iconBg:'#E3F2FD', catColor:'#1565C0',
    docs:['Yellow / Orange Ration Card (or income below ₹1L)', 'Aadhaar Card (all family members)', 'Ration Card with family details'],
    url:'https://www.jeevandayee.gov.in', helpline:'1800-233-0200' },
  { name:'Atal Saur Krushi Pump Yojana (MH)', tag:'Maharashtra', cat:'agriculture', icon:'⚡', iconBg:'#E8F5E9', catColor:'#2E7D32',
    docs:['7/12 extract', 'Aadhaar Card', 'Bank passbook', 'Declaration of no electricity connection at farm'],
    url:'https://www.mahadiscom.in', helpline:'1800-200-3435' },
  { name:'CM Helpline Majhi Ladki Bahin (MH)', tag:'Maharashtra', cat:'women', icon:'📞', iconBg:'#FCE4EC', catColor:'#C62828',
    docs:['Aadhaar Card', 'Bank passbook (DBT-linked)', 'Ration card', 'Income/domicile proof'],
    url:'https://ladakibahin.maharashtra.gov.in', helpline:'1800-120-8040' },
];

function renderSchemeDocCards(filter) {
  const container = document.getElementById('schemeDocCards');
  if (!container) return;
  let data;
  if (filter === 'all') data = schemeDocData;
  else if (filter === 'central') data = schemeDocData.filter(s => s.tag === 'Central');
  else if (filter === 'maharashtra') data = schemeDocData.filter(s => s.tag === 'Maharashtra');
  else data = schemeDocData.filter(s => s.cat === filter);

  container.innerHTML = data.map(s => `
    <div class="scheme-card">
      <div class="scheme-header">
        <div class="scheme-icon" style="background:${s.iconBg};">${s.icon}</div>
        <div class="scheme-info">
          <div class="scheme-name">${s.name}</div>
          <span class="scheme-category" style="background:${s.iconBg};color:${s.catColor};">${s.cat.charAt(0).toUpperCase()+s.cat.slice(1)}</span>
          <span style="font-size:0.65rem;font-weight:700;padding:2px 7px;border-radius:100px;margin-left:4px;background:${s.tag==='Central'?'#E3F2FD':'#FFF3E0'};color:${s.tag==='Central'?'#1565C0':'#E65100'};">${s.tag}</span>
        </div>
      </div>
      <div class="scheme-body" style="padding:14px 20px;">
        <div style="font-size:0.72rem;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:10px;">📋 Documents Required</div>
        ${s.docs.map(d => `<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:7px;font-size:0.82rem;color:var(--gray-800);"><span style="color:var(--green);flex-shrink:0;margin-top:1px;">✓</span>${d}</div>`).join('')}
        ${s.helpline ? `<div style="margin-top:12px;padding:8px 12px;background:var(--sky);border-radius:8px;font-size:0.75rem;color:var(--blue);font-weight:600;">📞 Helpline: ${s.helpline}</div>` : ''}
      </div>
      <a class="scheme-apply-btn" href="${s.url}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:center;gap:6px;">🔗 Apply on Official Website ↗</a>
    </div>
  `).join('');
}

function filterDocs(filter, btn) {
  document.querySelectorAll('.doc-filter-btn').forEach(function(b) {
    b.style.background = 'white';
    b.style.color = 'var(--gray-600)';
    b.style.borderColor = 'var(--gray-200,#e2e8f0)';
  });
  if (btn) {
    btn.style.background = 'var(--blue)';
    btn.style.color = 'white';
    btn.style.borderColor = 'var(--blue)';
  }
  renderSchemeDocCards(filter);
}

// ─── PROFILE UPDATER ───
function updateProfile() {
  const state = document.getElementById('profileState');
  const occ = document.getElementById('profileOccupation');
  const cat = document.getElementById('profileCategory');
  if (!state) return;
  const filled = [state.value, occ.value, cat.value].filter(Boolean).length;
  const pct = Math.round((filled / 3) * 100);
  const bar = document.getElementById('profileProgressBar');
  const txt = document.getElementById('profileProgressText');
  const tagline = document.getElementById('profileTagline');
  if (bar) bar.style.width = pct + '%';
  if (txt) txt.textContent = pct + '% complete';
  const stateLabels = {maharashtra:'Maharashtra',up:'Uttar Pradesh',mp:'Madhya Pradesh',rajasthan:'Rajasthan',karnataka:'Karnataka',andhra:'Andhra Pradesh',telangana:'Telangana',tamilnadu:'Tamil Nadu',westbengal:'West Bengal',odisha:'Odisha',other:'India'};
  const occLabels = {farmer:'Farmer',student:'Student',woman:'Homemaker',business:'Entrepreneur',labour:'Worker',government:'Govt Employee',other:'Citizen'};
  const parts = [];
  if (state.value) parts.push(stateLabels[state.value] || state.value);
  if (occ.value) parts.push(occLabels[occ.value] || occ.value);
  if (cat.value) parts.push(cat.value.toUpperCase());
  if (tagline) tagline.textContent = parts.length ? parts.join(' · ') : 'Fill details above';

  // Update recommendations if Maharashtra farmer selected
  updateRecommendations(state.value, occ.value, cat.value);
}

function updateRecommendations(state, occ, cat) {
  const list = document.getElementById('recommendationsList');
  if (!list || !state) return;
  const recs = [];
  if (occ === 'farmer') {
    recs.push({ icon:'🌾', name:'PM-KISAN Samman Nidhi', match:'98% · Farmer · Central', url:'https://pmkisan.gov.in' });
    recs.push({ icon:'🌿', name:'PM Fasal Bima Yojana', match:'96% · Farmer · Central', url:'https://pmfby.gov.in' });
    if (state === 'maharashtra') {
      recs.push({ icon:'🚜', name:'Magel Tyala Shettale (MH)', match:'95% · MH Farmer', url:'https://krishi.maharashtra.gov.in' });
      recs.push({ icon:'☀️', name:'Saur Krushi Pump Yojana (MH)', match:'90% · MH Farmer', url:'https://www.mahadiscom.in/solar' });
      recs.push({ icon:'🌱', name:'Nanaji Deshmukh Krishi Sanjivani (MH)', match:'88% · MH Farmer', url:'https://mahapocra.gov.in' });
    }
  } else if (occ === 'student') {
    recs.push({ icon:'📚', name:'National Scholarship Portal', match:'98% · Student · Central', url:'https://scholarships.gov.in' });
    if (state === 'maharashtra') recs.push({ icon:'🎓', name:'MahaDBT Scholarship', match:'96% · MH Student', url:'https://mahadbt.maharashtra.gov.in' });
    recs.push({ icon:'💡', name:'PM Scholarship Scheme', match:'90% · Student', url:'https://ksb.gov.in/PM-scholarship.htm' });
  } else if (occ === 'woman') {
    recs.push({ icon:'🔥', name:'PM Ujjwala Yojana', match:'97% · Women · BPL', url:'https://www.pmuy.gov.in' });
    if (state === 'maharashtra') {
      recs.push({ icon:'👩', name:'Ladki Bahin Yojana (MH)', match:'96% · MH Women', url:'https://ladakibahin.maharashtra.gov.in' });
      recs.push({ icon:'💍', name:'Shubh Vivah Yojana (MH)', match:'88% · MH Women', url:'https://aaplesarkar.mahaonline.gov.in' });
    }
    recs.push({ icon:'👧', name:'Sukanya Samriddhi Yojana', match:'93% · Girl Child', url:'https://www.indiapost.gov.in/Financial/pages/content/sukanya.aspx' });
  } else if (occ === 'business') {
    recs.push({ icon:'💼', name:'PM Mudra Yojana', match:'97% · Business', url:'https://www.mudra.org.in' });
    recs.push({ icon:'🚀', name:'Startup India Seed Fund', match:'92% · Startup', url:'https://seedfund.startupindia.gov.in' });
  } else if (occ === 'labour') {
    recs.push({ icon:'🔨', name:'Mahatma Gandhi NREGA', match:'98% · Rural Labour', url:'https://nrega.nic.in' });
    recs.push({ icon:'🎯', name:'Skill India PMKVY', match:'94% · Youth', url:'https://www.skillindia.gov.in' });
  } else {
    recs.push({ icon:'🏥', name:'Ayushman Bharat PM-JAY', match:'95% · All Families', url:'https://pmjay.gov.in' });
    recs.push({ icon:'🌾', name:'PM-KISAN Samman Nidhi', match:'90% · Farmers', url:'https://pmkisan.gov.in' });
    if (state === 'maharashtra') recs.push({ icon:'👩', name:'Ladki Bahin Yojana (MH)', match:'88% · MH Women', url:'https://ladakibahin.maharashtra.gov.in' });
  }
  list.innerHTML = recs.slice(0, 5).map((r, i) => `
    <div class="recommendation-item" ${i === recs.slice(0,5).length-1 ? 'style="border:none;margin-bottom:0;"' : ''}>
      <div class="rec-icon" style="background:#E8F5E9;">${r.icon}</div>
      <div class="rec-info">
        <div class="rec-name">${r.name}</div>
        <div class="rec-match">✅ ${r.match}</div>
      </div>
      <a href="${r.url}" target="_blank" style="padding:6px 14px;background:var(--blue);color:white;border-radius:8px;font-size:0.75rem;font-weight:700;font-family:var(--font-display);text-decoration:none;white-space:nowrap;">Apply ↗</a>
    </div>
  `).join('');
}

// ─── SAVED SCHEMES ───
function removeSaved(el) {
  const item = el.closest('.saved-scheme');
  if (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(20px)';
    item.style.transition = 'all 0.3s';
    setTimeout(function() { item.remove(); }, 300);
  }
}

function addSchemePrompt() {
  const name = prompt('Enter scheme name to save (e.g. PM Mudra Loan):');
  if (!name) return;
  const list = document.getElementById('savedSchemesList');
  if (!list) return;
  const div = document.createElement('div');
  div.className = 'saved-scheme';
  div.innerHTML = '<span class="saved-scheme-icon">📋</span><span class="saved-scheme-name">' + name + '</span><span class="saved-scheme-remove" onclick="removeSaved(this)" title="Remove">✕</span>';
  list.appendChild(div);
}

function downloadChecklist() {
  const items = document.querySelectorAll('.doc-item');
  let text = 'JanSahay AI - My Document Checklist\n';
  text += '=====================================\n\n';
  items.forEach(function(item) {
    const checked = item.querySelector('.doc-check.checked') ? '✓' : '☐';
    const name = item.querySelector('.doc-name');
    const req = item.querySelector('.doc-required');
    if (name) text += checked + ' ' + name.textContent + (req ? ' [' + req.textContent + ']' : '') + '\n';
  });
  const blob = new Blob([text], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'JanSahay-Document-Checklist.txt';
  a.click();
}

// Init doc cards
renderSchemeDocCards('all');

// ─── INIT ───
renderSchemes('all');
document.querySelectorAll('.feature-card').forEach(function(card, i) {
  card.style.transitionDelay = (i * 0.08) + 's';
});

// ══════════════════════════════════════════════════════════
// ─── NEW FEATURES ADDED BY UPGRADE ───────────────────────
// ══════════════════════════════════════════════════════════

// ─── OFFLINE SUPPORT: Cache schemes[] in localStorage ───
(function cacheSchemes() {
  try {
    localStorage.setItem('jansahay_schemes_cache', JSON.stringify(schemes));
    localStorage.setItem('jansahay_cache_ts', Date.now());
  } catch(e) {}
})();

// ─── TOAST NOTIFICATION ───
function showToast(msg, type) {
  type = type || 'info';
  let t = document.getElementById('jsGlobalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'jsGlobalToast';
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);padding:12px 24px;border-radius:12px;font-family:var(--font-display);font-size:0.9rem;font-weight:600;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,0.3);transition:all 0.3s;pointer-events:none;max-width:90vw;text-align:center;';
    document.body.appendChild(t);
  }
  const colors = { success:'#2E7D32', error:'#C62828', info:'#0A2342', warn:'#E65100' };
  t.style.background = colors[type] || colors.info;
  t.style.color = 'white';
  t.textContent = msg;
  t.style.opacity = '1';
  t.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
  }, 3000);
}

// ─── SMART SEARCH SCHEMES ───
function smartSearchSchemes(query) {
  const grid = document.getElementById('schemesGrid');
  const infoEl = document.getElementById('searchResultInfo');
  if (!grid) return;
  if (!query || !query.trim()) {
    renderSchemes(currentFilter);
    if (infoEl) infoEl.style.display = 'none';
    return;
  }
  const q = query.toLowerCase();
  const keywords = q.split(/\s+/);
  const filtered = schemes.filter(s => {
    const text = (s.name + ' ' + s.category + ' ' + s.eligibility + ' ' + s.tag + ' ' + s.benefits).toLowerCase();
    return keywords.every(k => text.includes(k));
  });
  if (infoEl) {
    infoEl.textContent = filtered.length > 0
      ? `Found ${filtered.length} scheme${filtered.length !== 1 ? 's' : ''} for "${query}"`
      : `No schemes found for "${query}". Try: farmer, health, women, housing, startup...`;
    infoEl.style.display = 'block';
    infoEl.style.color = filtered.length > 0 ? 'var(--green)' : '#C62828';
  }
  grid.innerHTML = filtered.length === 0
    ? '<div style="grid-column:1/-1;text-align:center;padding:48px;color:var(--gray-400);"><div style="font-size:3rem;margin-bottom:12px;">🔍</div><div style="font-family:var(--font-display);font-size:1.1rem;font-weight:700;color:var(--navy);margin-bottom:8px;">No Results</div><p>Try keywords like: farmer, health, women, housing, startup, education</p></div>'
    : filtered.map(s => buildSchemeCardHTML(s)).join('');
}

// ─── VISUAL GUIDE FLOWCHART STEPS ───
function buildVisualGuide(s) {
  // Generic application flow steps
  const flowSteps = [
    { icon: '📋', label: 'Check Eligibility' },
    { icon: '🗂️', label: 'Gather Documents' },
    { icon: '🌐', label: 'Register Online' },
    { icon: '📤', label: 'Submit Form' },
    { icon: '✅', label: 'Approval' }
  ];
  return `
    <div class="visual-guide" id="vg${s.id}">
      <div class="vg-title">📊 Application Flowchart</div>
      <div class="vg-flowchart">
        ${flowSteps.map((step, i) => `
          <div class="vg-node">
            <div class="vg-node-box" title="${step.label}">
              <span class="vg-node-icon">${step.icon}</span>
              <div class="vg-node-label">${step.label}</div>
            </div>
          </div>
          ${i < flowSteps.length - 1 ? '<div class="vg-arrow">→</div>' : ''}
        `).join('')}
      </div>
      <div style="margin-top:12px;font-size:0.75rem;color:var(--gray-600);text-align:center;line-height:1.6;">
        <strong>Apply at:</strong> <a href="${s.applyUrl}" target="_blank" style="color:var(--blue);font-weight:700;">${s.applyUrl}</a>
      </div>
    </div>
  `;
}

// ─── ENHANCED SCHEME CARD with Save + Compare + Steps + Visual Guide + Form Assistant ───
function buildSchemeCardHTML(s) {
  const saved = isSchemeSaved(s.id);
  const inCompare = getCompareList().includes(s.id);
  const steps = parseApplySteps(s.howToApply);
  const vgHtml = buildVisualGuide(s);
  return `
    <div class="scheme-card" id="schemeCard${s.id}">
      <div class="scheme-header">
        <div class="scheme-icon" style="background:${s.iconBg};">${s.icon}</div>
        <div class="scheme-info">
          <div class="scheme-name">${s.name}</div>
          <span class="scheme-category" style="background:${s.iconBg};color:${s.catColor};">${s.category.charAt(0).toUpperCase()+s.category.slice(1)}</span>
          <span style="font-size:0.65rem;font-weight:700;padding:2px 7px;border-radius:100px;margin-left:4px;background:${s.tag==='Central'?'#E3F2FD':'#FFF3E0'};color:${s.tag==='Central'?'#1565C0':'#E65100'};">${s.tag}</span>
        </div>
      </div>
      <div class="scheme-body">
        <div class="scheme-item"><span class="scheme-item-label">Eligible</span><span class="scheme-item-val">${s.eligibility}</span></div>
        <div class="scheme-item"><span class="scheme-item-label">Benefits</span><span class="scheme-item-val">${s.benefits}</span></div>
        <div class="scheme-item"><span class="scheme-item-label">Documents</span><span class="scheme-item-val">${s.documents}</span></div>
        <details style="margin-top:6px;">
          <summary style="cursor:pointer;font-size:0.78rem;font-weight:700;color:var(--blue);padding:6px 0;outline:none;">📋 How to Apply (Step by Step)</summary>
          <ol style="margin:8px 0 0 16px;font-size:0.8rem;color:var(--gray-600);line-height:1.8;">${steps}</ol>
        </details>
      </div>
      <div style="padding:0 20px 12px;display:flex;gap:8px;flex-wrap:wrap;align-items:center;">
        <a class="scheme-apply-btn" href="${s.applyUrl}" target="_blank" rel="noopener noreferrer" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;min-width:100px;font-size:0.8rem;padding:9px 12px;">🔗 Apply Now ↗</a>
        <button onclick="toggleSaveScheme(${s.id},'${escapeStr(s.name)}','${s.icon}','${s.applyUrl}')"
          id="saveBtn${s.id}"
          style="padding:8px 12px;border-radius:10px;border:1.5px solid ${saved?'var(--green)':'var(--gray-200,#e2e8f0)'};background:${saved?'var(--mint)':'white'};color:${saved?'var(--green)':'var(--gray-600)'};font-size:0.75rem;font-weight:700;cursor:pointer;transition:all 0.2s;">${saved?'⭐ Saved':'☆ Save'}</button>
        <button onclick="toggleCompareScheme(${s.id})"
          id="cmpBtn${s.id}"
          style="padding:8px 12px;border-radius:10px;border:1.5px solid ${inCompare?'var(--blue)':'var(--gray-200,#e2e8f0)'};background:${inCompare?'var(--sky)':'white'};color:${inCompare?'var(--blue)':'var(--gray-600)'};font-size:0.75rem;font-weight:700;cursor:pointer;transition:all 0.2s;">${inCompare?'⚖️ Added':'⚖️ Compare'}</button>
        <a href="form-assistant.html?scheme=${s.id}" class="fa-open-btn" title="Auto-fill application form">📝 Fill Form</a>
        <button class="vg-toggle-btn" onclick="toggleVisualGuide(${s.id})" title="View application flowchart">📊 Guide</button>
      </div>
      ${vgHtml}
    </div>
  `;
}

// ─── TOGGLE VISUAL GUIDE ───
function toggleVisualGuide(id) {
  const vg = document.getElementById('vg' + id);
  if (!vg) return;
  vg.classList.toggle('open');
  // Find the toggle button
  const btn = vg.previousElementSibling ? vg.previousElementSibling.querySelector('.vg-toggle-btn') : null;
  if (btn) {
    btn.textContent = vg.classList.contains('open') ? '🔼 Guide' : '📊 Guide';
  }
}

function escapeStr(s) {
  return (s || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function parseApplySteps(howToApply) {
  if (!howToApply) return '<li>Visit official portal or nearest CSC</li>';
  const parts = howToApply.split(/\.|,|;|\bor\b|\band\b/).filter(p => p.trim().length > 4);
  if (parts.length <= 1) return `<li>${howToApply}</li>`;
  return parts.map(p => `<li>${p.trim()}</li>`).join('');
}

// Override renderSchemes to use enhanced cards
function renderSchemes(filter) {
  const grid = document.getElementById('schemesGrid');
  if (!grid) return;
  let filtered;
  if (filter === 'all') filtered = schemes;
  else if (filter === 'central') filtered = schemes.filter(s => s.tag === 'Central');
  else if (filter === 'state') filtered = schemes.filter(s => s.tag !== 'Central');
  else filtered = schemes.filter(s => s.category === filter);
  grid.innerHTML = filtered.map(s => buildSchemeCardHTML(s)).join('');
}

// ─── SAVE SCHEME to localStorage ───
function isSchemeSaved(id) {
  const saved = JSON.parse(localStorage.getItem('jansahay_saved') || '[]');
  return saved.some(s => s.id === id);
}

function toggleSaveScheme(id, name, icon, url) {
  let saved = JSON.parse(localStorage.getItem('jansahay_saved') || '[]');
  const idx = saved.findIndex(s => s.id === id);
  const btn = document.getElementById('saveBtn' + id);
  if (idx === -1) {
    saved.push({ id, name, icon, url, status: 'pending', savedAt: Date.now() });
    if (btn) {
      btn.style.background = 'var(--mint)';
      btn.style.borderColor = 'var(--green)';
      btn.style.color = 'var(--green)';
      btn.textContent = '⭐ Saved';
    }
    showToast('✅ "' + name + '" saved to your Dashboard!', 'success');
  } else {
    saved.splice(idx, 1);
    if (btn) {
      btn.style.background = 'white';
      btn.style.borderColor = 'var(--gray-200,#e2e8f0)';
      btn.style.color = 'var(--gray-600)';
      btn.textContent = '☆ Save';
    }
    showToast('🗑️ Removed from saved schemes.', 'info');
  }
  localStorage.setItem('jansahay_saved', JSON.stringify(saved));
  renderSavedSchemes();
}

// Override old addSchemePrompt - keep it but also render from localStorage
function addSchemePrompt() {
  const name = prompt('Enter scheme name to save (e.g. PM Mudra Loan):');
  if (!name) return;
  let saved = JSON.parse(localStorage.getItem('jansahay_saved') || '[]');
  const id = Date.now();
  saved.push({ id, name, icon: '📋', url: '#', status: 'pending', savedAt: Date.now() });
  localStorage.setItem('jansahay_saved', JSON.stringify(saved));
  renderSavedSchemes();
  showToast('✅ Scheme saved!', 'success');
}

function removeSaved(el) {
  const item = el.closest('.saved-scheme');
  if (!item) return;
  const id = parseInt(item.dataset.id);
  let saved = JSON.parse(localStorage.getItem('jansahay_saved') || '[]');
  saved = saved.filter(s => s.id !== id);
  localStorage.setItem('jansahay_saved', JSON.stringify(saved));
  item.style.opacity = '0';
  item.style.transform = 'translateX(20px)';
  item.style.transition = 'all 0.3s';
  setTimeout(() => renderSavedSchemes(), 300);
}

function renderSavedSchemes() {
  const list = document.getElementById('savedSchemesList');
  if (!list) return;
  const saved = JSON.parse(localStorage.getItem('jansahay_saved') || '[]');
  if (saved.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--gray-400);font-size:0.85rem;">No saved schemes yet. Browse schemes and click ☆ Save!</div>';
    return;
  }
  list.innerHTML = saved.map(s => `
    <div class="saved-scheme" data-id="${s.id}">
      <span class="saved-scheme-icon">${s.icon||'📋'}</span>
      <span class="saved-scheme-name">${s.name}</span>
      <a href="${s.url||'#'}" target="_blank" style="font-size:0.72rem;color:var(--blue);text-decoration:none;font-weight:600;margin-left:auto;margin-right:8px;">Apply ↗</a>
      <span class="saved-scheme-remove" onclick="removeSaved(this)" title="Remove">✕</span>
    </div>
  `).join('');
}

// ─── APPLICATION TRACKER ───
function renderApplicationTracker() {
  const container = document.getElementById('applicationTracker');
  if (!container) return;
  const apps = JSON.parse(localStorage.getItem('jansahay_applications') || '[]');
  if (apps.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:16px;color:var(--gray-400);font-size:0.82rem;">No applications tracked yet. Click "+ Track New Application" to start.</div>';
    return;
  }
  container.innerHTML = apps.map((a, i) => {
    const colors = { pending: '#FFB300', submitted: '#1565C0', approved: '#2E7D32' };
    const labels = { pending: '⏳ Pending', submitted: '📤 Submitted', approved: '✅ Approved' };
    const col = colors[a.status] || colors.pending;
    return `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100);" id="appItem${i}">
      <span style="font-size:18px;">${a.icon||'📋'}</span>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:600;color:var(--navy);">${a.name}</div>
        ${a.deadline ? `<div style="font-size:0.72rem;color:var(--gray-400);">Deadline: ${a.deadline}</div>` : ''}
      </div>
      <select onchange="updateAppStatus(${i},this.value)"
        style="padding:4px 8px;border-radius:8px;border:1.5px solid ${col};font-size:0.72rem;font-weight:700;color:${col};background:white;cursor:pointer;outline:none;">
        <option value="pending" ${a.status==='pending'?'selected':''}>⏳ Pending</option>
        <option value="submitted" ${a.status==='submitted'?'selected':''}>📤 Submitted</option>
        <option value="approved" ${a.status==='approved'?'selected':''}>✅ Approved</option>
      </select>
      <button onclick="removeApplication(${i})" style="background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:14px;" title="Remove">✕</button>
    </div>
    `;
  }).join('');
}

function addApplicationTracker() {
  const name = prompt('Which scheme did you apply for?');
  if (!name) return;
  const deadline = prompt('Application deadline date? (e.g. 31 Dec 2024) — Leave blank to skip:');
  let apps = JSON.parse(localStorage.getItem('jansahay_applications') || '[]');
  apps.push({ name, icon: '📋', status: 'pending', deadline: deadline || '', createdAt: Date.now() });
  localStorage.setItem('jansahay_applications', JSON.stringify(apps));
  renderApplicationTracker();
  showToast('✅ Application added to tracker!', 'success');
}

function updateAppStatus(idx, status) {
  let apps = JSON.parse(localStorage.getItem('jansahay_applications') || '[]');
  if (apps[idx]) {
    apps[idx].status = status;
    localStorage.setItem('jansahay_applications', JSON.stringify(apps));
    renderApplicationTracker();
    showToast('✅ Status updated: ' + status, 'success');
  }
}

function removeApplication(idx) {
  let apps = JSON.parse(localStorage.getItem('jansahay_applications') || '[]');
  apps.splice(idx, 1);
  localStorage.setItem('jansahay_applications', JSON.stringify(apps));
  renderApplicationTracker();
}

// ─── REMINDERS / DEADLINES ───
function renderReminders() {
  const container = document.getElementById('remindersList');
  if (!container) return;
  const reminders = JSON.parse(localStorage.getItem('jansahay_reminders') || '[]');

  if (reminders.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:16px;color:var(--gray-400);font-size:0.82rem;">No reminders set. Add deadline reminders for schemes!</div>';
    return;
  }

  const now = new Date();
  container.innerHTML = reminders.map((r, i) => {
    const deadlineDate = new Date(r.deadline);
    const daysLeft = Math.ceil((deadlineDate - now) / (1000 * 60 * 60 * 24));
    let urgencyColor = '#2E7D32';
    let urgencyLabel = '✅ ' + daysLeft + ' days left';
    if (daysLeft < 0) { urgencyColor = '#C62828'; urgencyLabel = '❌ Deadline passed'; }
    else if (daysLeft <= 7) { urgencyColor = '#E65100'; urgencyLabel = '⚠️ ' + daysLeft + ' days left!'; }
    else if (daysLeft <= 30) { urgencyColor = '#F57F17'; urgencyLabel = '🔔 ' + daysLeft + ' days left'; }

    return `
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--gray-100);">
      <div style="width:8px;height:8px;border-radius:50%;background:${urgencyColor};flex-shrink:0;margin-top:5px;"></div>
      <div style="flex:1;">
        <div style="font-size:0.85rem;font-weight:600;color:var(--navy);">${r.name}</div>
        <div style="font-size:0.72rem;color:${urgencyColor};font-weight:700;margin-top:2px;">${urgencyLabel}</div>
        <div style="font-size:0.72rem;color:var(--gray-400);">Deadline: ${r.deadline}</div>
      </div>
      <button onclick="removeReminder(${i})" style="background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:14px;" title="Remove">✕</button>
    </div>
    `;
  }).join('');
}

function addReminder() {
  const name = prompt('Scheme name:');
  if (!name) return;
  const deadline = prompt('Apply before (date, e.g. 2024-12-31):');
  if (!deadline) return;
  let reminders = JSON.parse(localStorage.getItem('jansahay_reminders') || '[]');
  reminders.push({ name, deadline, createdAt: Date.now() });
  localStorage.setItem('jansahay_reminders', JSON.stringify(reminders));
  renderReminders();
  checkDeadlineAlerts();
  showToast('⏰ Reminder set for ' + name, 'success');
}

function removeReminder(idx) {
  let reminders = JSON.parse(localStorage.getItem('jansahay_reminders') || '[]');
  reminders.splice(idx, 1);
  localStorage.setItem('jansahay_reminders', JSON.stringify(reminders));
  renderReminders();
}

function checkDeadlineAlerts() {
  const reminders = JSON.parse(localStorage.getItem('jansahay_reminders') || '[]');
  const now = new Date();
  reminders.forEach(r => {
    const deadlineDate = new Date(r.deadline);
    const daysLeft = Math.ceil((deadlineDate - now) / (1000 * 60 * 60 * 24));
    if (daysLeft >= 0 && daysLeft <= 7) {
      setTimeout(() => {
        showToast('⚠️ Deadline Alert: "' + r.name + '" — only ' + daysLeft + ' days left!', 'warn');
      }, 2000);
    }
  });
}

// ─── SCHEME COMPARISON ───
function getCompareList() {
  return JSON.parse(localStorage.getItem('jansahay_compare') || '[]');
}

function toggleCompareScheme(id) {
  let list = getCompareList();
  const btn = document.getElementById('cmpBtn' + id);
  const idx = list.indexOf(id);
  if (idx !== -1) {
    list.splice(idx, 1);
    if (btn) { btn.style.background='white'; btn.style.borderColor='var(--gray-200)'; btn.style.color='var(--gray-600)'; btn.textContent='⚖️ Compare'; }
    showToast('Removed from compare list.', 'info');
  } else {
    if (list.length >= 3) {
      showToast('⚠️ Max 3 schemes. Click Compare or Clear.', 'warn');
      return;
    }
    list.push(id);
    if (btn) { btn.style.background='var(--sky)'; btn.style.borderColor='var(--blue)'; btn.style.color='var(--blue)'; btn.textContent='⚖️ Added'; }
    showToast('✅ Added to compare (' + list.length + '/3)', 'success');
  }
  localStorage.setItem('jansahay_compare', JSON.stringify(list));
  updateCompareNotice();
}

function updateCompareNotice() {
  const list = getCompareList();
  const notice = document.getElementById('compareNotice');
  const countEl = document.getElementById('compareCount');
  if (!notice) return;
  if (list.length > 0) {
    notice.style.display = 'flex';
    if (countEl) countEl.textContent = list.length;
  } else {
    notice.style.display = 'none';
  }
}

function clearCompare() {
  localStorage.setItem('jansahay_compare', '[]');
  // Reset all compare buttons
  document.querySelectorAll('[id^="cmpBtn"]').forEach(btn => {
    btn.style.background = 'white';
    btn.style.borderColor = 'var(--gray-200)';
    btn.style.color = 'var(--gray-600)';
    btn.textContent = '⚖️ Compare';
  });
  updateCompareNotice();
  showToast('Compare list cleared.', 'info');
}

function showCompareModal() {
  const list = getCompareList();
  if (list.length < 2) {
    showToast('⚠️ Select at least 2 schemes to compare.', 'warn');
    return;
  }
  const selected = schemes.filter(s => list.includes(s.id));
  const modal = document.getElementById('compareModal');
  const container = document.getElementById('compareTableContainer');
  if (!modal || !container) return;

  const rows = [
    { label: '📋 Scheme', key: 'name' },
    { label: '🏷️ Category', key: 'category' },
    { label: '🏛️ Government', key: 'tag' },
    { label: '✅ Benefits', key: 'benefits' },
    { label: '👥 Eligibility', key: 'eligibility' },
    { label: '📁 Documents', key: 'documents' },
    { label: '📝 How to Apply', key: 'howToApply' }
  ];

  let html = `<table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
    <thead><tr>
      <th style="padding:12px;background:var(--navy);color:white;text-align:left;border-radius:8px 0 0 0;width:120px;">Feature</th>
      ${selected.map(s => `<th style="padding:12px;background:var(--navy);color:white;text-align:left;">${s.icon} ${s.name}</th>`).join('')}
    </tr></thead>
    <tbody>
    ${rows.map((r, ri) => `
      <tr style="background:${ri%2===0?'var(--gray-50)':'white'};">
        <td style="padding:12px;font-weight:700;color:var(--navy);border:1px solid var(--gray-100);font-size:0.78rem;">${r.label}</td>
        ${selected.map(s => `<td style="padding:12px;color:var(--gray-800);border:1px solid var(--gray-100);line-height:1.5;">${s[r.key]||'—'}</td>`).join('')}
      </tr>
    `).join('')}
    <tr style="background:var(--sky);">
      <td style="padding:12px;font-weight:700;color:var(--navy);border:1px solid var(--gray-100);font-size:0.78rem;">🔗 Apply</td>
      ${selected.map(s => `<td style="padding:12px;border:1px solid var(--gray-100);"><a href="${s.applyUrl}" target="_blank" style="padding:6px 14px;background:var(--blue);color:white;border-radius:8px;font-size:0.75rem;font-weight:700;text-decoration:none;">Apply ↗</a></td>`).join('')}
    </tr>
    </tbody>
  </table>`;
  container.innerHTML = html;
  modal.style.display = 'block';
}

// ─── REAL VOICE ASSISTANT (Web Speech API) ───
let recognition = null;
let isListening = false;

function startVoiceInput(inputId) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('⚠️ Voice not supported in this browser. Try Chrome.', 'warn');
    // Fallback: simulate voice
    simulateVoiceFallback(inputId);
    return;
  }
  if (isListening) {
    if (recognition) recognition.stop();
    isListening = false;
    updateVoiceBtnState(false);
    return;
  }
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'hi-IN'; // Default Hindi for Indian users

  recognition.onstart = function() {
    isListening = true;
    updateVoiceBtnState(true);
    showToast('🎤 Listening... Speak now!', 'info');
  };

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById(inputId);
    if (input) {
      input.value = transcript;
      showToast('✅ Heard: "' + transcript + '"', 'success');
      // Auto-send
      setTimeout(() => {
        if (inputId === 'mainChatInput') sendMainMessage();
        else if (inputId === 'heroChatInput') sendHeroMessage();
      }, 500);
    }
  };

  recognition.onerror = function(event) {
    isListening = false;
    updateVoiceBtnState(false);
    if (event.error === 'not-allowed') {
      showToast('🚫 Microphone permission denied. Please allow microphone access.', 'error');
    } else {
      showToast('🎤 Voice error: ' + event.error, 'warn');
    }
  };

  recognition.onend = function() {
    isListening = false;
    updateVoiceBtnState(false);
  };

  recognition.start();
}

function updateVoiceBtnState(active) {
  const btns = ['mainVoiceBtn', 'heroVoiceBtn', 'floatingVoiceBtn'];
  btns.forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    if (active) {
      btn.style.background = 'var(--green)';
      btn.style.color = 'white';
      btn.textContent = '🔴';
      btn.title = 'Click to stop';
    } else {
      btn.style.background = '';
      btn.style.color = '';
      btn.textContent = '🎤';
      btn.title = 'Voice Input';
    }
  });
  const fabBtn = document.getElementById('floatingVoiceBtn');
  if (fabBtn) {
    if (active) fabBtn.classList.add('active');
    else fabBtn.classList.remove('active');
  }
}

function simulateVoiceFallback(inputId) {
  const samples = [
    'What schemes are available for farmers?',
    'How to apply for Ayushman Bharat?',
    'Scholarship for students in India'
  ];
  const sample = samples[Math.floor(Math.random() * samples.length)];
  const input = document.getElementById(inputId);
  if (input) {
    input.value = sample;
    showToast('🎙️ Demo voice: "' + sample + '"', 'info');
    setTimeout(() => {
      if (inputId === 'mainChatInput') sendMainMessage();
      else if (inputId === 'heroChatInput') sendHeroMessage();
    }, 800);
  }
}

// Keep old toggleVoice working
function toggleVoice() {
  startVoiceInput('mainChatInput');
}

// ─── TEXT TO SPEECH (AI speaks response) ───
function speakText(text) {
  if (!window.speechSynthesis) return;
  // Strip HTML
  const plain = text.replace(/<[^>]+>/g, '');
  const utterance = new SpeechSynthesisUtterance(plain);
  utterance.lang = 'en-IN';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

// ─── ENHANCED AI CHAT with dynamic responses + TTS ───
async function getAIDynamicResponse(q) {
  // First try AI API (placeholder — uses keyword fallback)
  try {
    // Placeholder: In production, replace with real API call:
    // const res = await fetch('https://api.openai.com/v1/chat/completions', {...})
    // For now, always use smart keyword-based fallback
    throw new Error('Using smart fallback');
  } catch(e) {
    // Smart keyword fallback
    return getAIResponse(q).text;
  }
}

// Override addBotResponse to use async + TTS
function addBotResponse(containerId, q) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const typing = document.createElement('div');
  typing.className = 'msg bot';
  typing.style.cssText = 'display:flex;gap:10px;align-items:flex-end;max-width:88%;';
  typing.innerHTML = '<div style="width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;background:linear-gradient(135deg,#1565C0,#1976D2);">🤖</div><div style="display:flex;gap:4px;align-items:center;padding:12px 16px;background:white;border-radius:16px;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.1);"><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out infinite;"></div><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out 0.2s infinite;"></div><div style="width:7px;height:7px;border-radius:50%;background:#42A5F5;animation:typing-bounce 1.4s ease-in-out 0.4s infinite;"></div></div>';
  c.appendChild(typing);
  c.scrollTop = c.scrollHeight;

  getAIDynamicResponse(q).then(function(responseText) {
    setTimeout(function() {
      typing.remove();
      addMsg(containerId, responseText, 'bot');
      // Speak the response if voice was used recently
      if (isListening || window._lastInputWasVoice) {
        speakText(responseText);
        window._lastInputWasVoice = false;
      }
    }, 1500);
  });
}

// ─── NEARBY HELP CENTER ───
function findNearbyHelp() {
  const container = document.getElementById('nearbyMapContainer');
  const mapFrame = document.getElementById('nearbyMap');
  if (!container || !mapFrame) return;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(pos) {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const query = 'Common Service Centre CSC government office near me';
        mapFrame.src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&ll=${lat},${lng}&z=13&output=embed`;
        container.style.display = 'block';
        showToast('📍 Showing CSC centres near you!', 'success');
      },
      function() {
        // Fallback: show India-wide CSC map
        mapFrame.src = 'https://maps.google.com/maps?q=Common+Service+Centre+India&z=5&output=embed';
        container.style.display = 'block';
        showToast('📍 Showing CSC centres in India. Allow location for better results.', 'info');
      }
    );
  } else {
    mapFrame.src = 'https://maps.google.com/maps?q=Common+Service+Centre+India&z=5&output=embed';
    container.style.display = 'block';
  }
}

// ─── INIT ALL NEW DASHBOARD FEATURES ───
document.addEventListener('DOMContentLoaded', function() {
  // Init saved schemes
  renderSavedSchemes();
  // Init application tracker
  renderApplicationTracker();
  // Init reminders
  renderReminders();
  // Check deadline alerts
  checkDeadlineAlerts();
  // Update compare notice
  updateCompareNotice();

  // Auth button logic (enhanced - store full user object)
  const authBtn = document.getElementById('authBtn');
  const authDropdown = document.getElementById('authDropdown');
  const logoutBtn = document.getElementById('logoutBtn');
  const rawUser = localStorage.getItem('loggedInUser');

  if (authBtn && rawUser) {
    let displayName = rawUser;
    try {
      const parsed = JSON.parse(rawUser);
      displayName = parsed.displayName || parsed.name || rawUser;
    } catch(e) {}
    authBtn.textContent = (displayName.split(' ')[0] || 'User') + ' ▼';
    authBtn.href = '#';
    authBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (authDropdown) authDropdown.classList.toggle('hidden');
    });
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
      });
    }
    // Show mobile logout
    const mobileLogout = document.getElementById('mobileLogout');
    if (mobileLogout) mobileLogout.style.display = 'block';
  }

  // Navbar dropdown toggle
  const navDropdownToggle = document.getElementById('navDropdownToggle');
  const navDropdownMenu = document.getElementById('navDropdownMenu');
  if (navDropdownToggle && navDropdownMenu) {
    navDropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navDropdownMenu.classList.toggle('show');
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!navDropdownToggle.contains(e.target) && !navDropdownMenu.contains(e.target)) {
        navDropdownMenu.classList.remove('show');
      }
    });
  }

  // Language dropdown toggle
  const navLangToggle = document.getElementById('navLangToggle');
  const navLangMenu = document.getElementById('navLangMenu');
  if (navLangToggle && navLangMenu) {
    navLangToggle.addEventListener('click', function(e) {
      e.preventDefault();
      navLangMenu.classList.toggle('show');
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!navLangToggle.contains(e.target) && !navLangMenu.contains(e.target)) {
        navLangMenu.classList.remove('show');
      }
    });
  }

  // Initialize default language
  changeLanguage('en');
  document.getElementById('navLang').textContent = 'English';

  // Hero chat Enter key
  const heroInput = document.getElementById('heroChatInput');
  if (heroInput) heroInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendHeroMessage(); });
  const mainInput = document.getElementById('mainChatInput');
  if (mainInput) mainInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendMainMessage(); });
});

// Re-init schemes grid with enhanced cards
renderSchemes('all');
renderSchemeDocCards('all');


// ══════════════════════════════════════════════════════════
// ─── PHASE 2 FEATURES ─────────────────────────────────────
// ══════════════════════════════════════════════════════════

// ─── SUCCESS STORIES (rendered from JS) ───
function renderSuccessStories() {
  const container = document.getElementById('successStoriesGrid');
  if (!container) return;
  const stories = [
    {
      avatar: '👩‍🌾',
      avatarBg: '#E8F5E9',
      name: 'Sunita Devi',
      location: '📍 Nashik, Maharashtra',
      scheme: '🌾 PM-KISAN + Ladki Bahin',
      text: '"Before JanSahay AI, I did not know I was eligible for both PM-KISAN and the Ladki Bahin Yojana. The AI told me in Marathi, step by step. I got Rs.7,500 in my account in 3 weeks!"',
      benefit: '✅ Received ₹7,500 in first month'
    },
    {
      avatar: '🧑‍🎓',
      avatarBg: '#E3F2FD',
      name: 'Arjun Sharma',
      location: '📍 Varanasi, Uttar Pradesh',
      scheme: '🎓 National Scholarship Portal',
      text: '"I was struggling to pay my engineering college fees. JanSahay AI helped me find the NSP scholarship and guided me through every step of the application. I got ₹25,000 yearly!"',
      benefit: '✅ Scholarship of ₹25,000/year secured'
    },
    {
      avatar: '👨‍🏭',
      avatarBg: '#F3E5F5',
      name: 'Ramesh Babu',
      location: '📍 Hyderabad, Telangana',
      scheme: '💼 PM Mudra Yojana',
      text: '"I wanted to expand my small welding shop but had no money. JanSahay AI voice assistant helped me apply for the Mudra Kishore loan of Rs.5 lakh through my bank. My business doubled!"',
      benefit: '✅ ₹5 lakh loan approved in 2 weeks'
    }
  ];

  container.innerHTML = stories.map(s => `
    <div class="story-card">
      <div class="story-avatar" style="background:${s.avatarBg};">${s.avatar}</div>
      <div class="story-name">${s.name}</div>
      <div class="story-location">${s.location}</div>
      <div class="story-scheme-badge">${s.scheme}</div>
      <div class="story-text">${s.text}</div>
      <div class="story-benefit">${s.benefit}</div>
    </div>
  `).join('');
}

// ─── FINDER PROFILE SAVE FOR FORM ASSISTANT ───
// Called from finder.html when findSchemes() is triggered
function savefinderProfileForAssistant(profileData) {
  try {
    localStorage.setItem('jansahay_finder_profile', JSON.stringify(profileData));
  } catch(e) {}
}

// ─── SMART SEARCH UPDATE (also runs in finder context) ───
function initSmartSearch() {
  const searchInput = document.getElementById('schemeSearch');
  const searchInfoEl = document.getElementById('searchResultInfo');
  if (!searchInput) return;
  let debounceTimer;
  searchInput.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      smartSearchSchemes(this.value);
    }, 300);
  });
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      renderSchemes(currentFilter);
      if (searchInfoEl) searchInfoEl.style.display = 'none';
    }
  });
}

// ─── EXTENDED DOMContentLoaded ───
document.addEventListener('DOMContentLoaded', function() {
  // Render success stories
  renderSuccessStories();
  // Init smart search
  initSmartSearch();
});


// ══════════════════════════════════════════════════════════
// ─── CRITICAL FIXES & MISSING FUNCTIONS ──────────────────
// ══════════════════════════════════════════════════════════

// ─── MOBILE MENU TOGGLE ───
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburgerBtn');
  if (!menu) return;
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.classList.remove('open');
    if (btn) btn.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    menu.classList.add('open');
    if (btn) btn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// ─── CYCLE LANGUAGE (used in mobile menu) ───
function cycleLanguage() {
  const order = ['en', 'hi', 'mr', 'ta', 'bn', 'te'];
  const cur = document.documentElement.lang || 'en';
  const idx = order.indexOf(cur);
  const next = order[(idx + 1) % order.length];
  setLanguage(next);
  const labels = { en: 'English', hi: 'हिंदी', mr: 'मराठी', ta: 'தமிழ்', bn: 'বাংলা', te: 'తెలుగు' };
  showToast('🌐 Language: ' + labels[next], 'info');
}

// ─── LOGOUT ───
function logout() {
  localStorage.removeItem('loggedInUser');
  const btn = document.getElementById('authBtn');
  if (btn) { btn.textContent = 'Login / Signup'; btn.href = 'login.html'; }
  const mobileLogout = document.getElementById('mobileLogout');
  if (mobileLogout) mobileLogout.style.display = 'none';
  const dropdown = document.getElementById('authDropdown');
  if (dropdown) dropdown.classList.add('hidden');
  showToast('👋 Logged out successfully.', 'info');
  setTimeout(() => window.location.href = 'login.html', 800);
}

// ─── NAVBAR SCROLL EFFECT ───
window.addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.style.boxShadow = '0 4px 24px rgba(10,35,66,0.15)';
  } else {
    nav.style.boxShadow = '0 2px 16px rgba(10,35,66,0.08)';
  }
  // Update active nav link based on scroll position
  const sections = ['home','features','assistant','schemes','how-it-works','documents','dashboard','success-stories','ivr','about','contact'];
  const scrollPos = window.scrollY + 120;
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        const href = a.getAttribute('href');
        if (href && href.includes('#' + id)) a.classList.add('active');
      });
    }
  });
});

// ─── ANNOUNCE BAR OFFSET ───
(function fixAnnounceBarOffset() {
  const announceBar = document.querySelector('.announce-bar');
  const nav = document.getElementById('navbar');
  const home = document.getElementById('home');
  if (announceBar) {
    const announceH = announceBar.offsetHeight || 36;
    if (nav) nav.style.top = announceH + 'px';
    if (home) home.style.paddingTop = (68 + announceH) + 'px';
  }
})();

// ─── PROFILE NAME in NAV from localStorage ───
(function initNavAuth() {
  const rawUser = localStorage.getItem('loggedInUser');
  const authBtn = document.getElementById('authBtn');
  const authDropdown = document.getElementById('authDropdown');
  const logoutBtn = document.getElementById('logoutBtn');
  const mobileLogout = document.getElementById('mobileLogout');

  if (authBtn && rawUser) {
    let displayName = rawUser;
    try {
      const u = JSON.parse(rawUser);
      displayName = u.displayName || u.name || rawUser;
    } catch(e) {}
    const firstName = (displayName || '').split(' ')[0] || 'User';
    authBtn.textContent = firstName + ' ▼';
    authBtn.href = '#';
    authBtn.style.background = 'linear-gradient(135deg,#2E7D32,#1565C0)';
    authBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (authDropdown) authDropdown.classList.toggle('hidden');
    });
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    if (mobileLogout) mobileLogout.style.display = 'block';
  }

  // Close auth dropdown on outside click
  document.addEventListener('click', function(e) {
    if (authDropdown && !authDropdown.closest('#authWrapper').contains(e.target)) {
      authDropdown.classList.add('hidden');
    }
  });
})();

// ─── ANNOUNCE BAR TOP ADJUSTMENT (wait for DOM) ───
document.addEventListener('DOMContentLoaded', function() {
  const announceBar = document.querySelector('.announce-bar');
  const nav = document.getElementById('navbar');
  if (announceBar && nav) {
    const h = announceBar.offsetHeight;
    nav.style.top = h + 'px';
    const homeSection = document.getElementById('home');
    if (homeSection) homeSection.style.paddingTop = (h + 68) + 'px';
  }
});

