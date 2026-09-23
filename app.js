/**
 * NER Landslide Early Warning System - Interactive Engine
 * Multi-language dictionary, GIS Map controller, Telemetry Modals, Field Incident submission.
 */

// 1. Multi-language Dictionary (English, Hindi, Assamese)
const i18nData = {
  en: {
    gov_initiative: "Government of India | Disaster Management Initiative — North Eastern Region",
    helpline_label: "24/7 Helpline:",
    tagline: "Predict. Prepare. Protect.",
    nav_home: "Home",
    nav_map: "Risk Map",
    nav_alerts: "Live Alerts",
    nav_field: "Field Reports",
    nav_response: "Response Network",
    nav_about: "About",
    btn_dashboard: "View Live Dashboard",
    btn_report_incident: "Report an Incident",
    ticker_badge: "URGENT ADVISORY",
    ticker_msg: "NH-13 (Bhalukpong–Tawang Corridor): Red Alert active due to continuous 186mm rainfall. Slope movement detected at km 42. Traffic diverted.",
    ticker_view: "View Bulletin →",
    hero_eyebrow: "AI-POWERED DISASTER INTELLIGENCE",
    hero_headline: "See the risk before the slope gives way.",
    hero_copy: "Real-time rainfall, terrain, sensor, satellite, and community intelligence for safer roads and resilient villages across North East India.",
    hero_btn_map: "Explore Live Risk Map",
    hero_btn_report: "Report an Incident",
    hero_status_states: "States",
    hero_status_monitoring: "Monitored 24/7",
    hero_status_active: "Zones",
    hero_status_highrisk: "Active High-Risk",
    hero_status_sync: "Telemetry Sync",
    metric_states: "North Eastern States",
    metric_corridors: "Monitored Corridors",
    metric_ai: "AI Risk Analysis",
    metric_alerts: "Localized Alerts",
    about_label: "CIVIC SCIENCE & LAST-MILE WARNING",
    about_heading: "Intelligence that reaches the last mile",
    about_desc: "The North Eastern Region experiences some of the highest rainfall gradients in the world. Our platform unifies IMD Doppler precipitation grids, automated in-situ soil moisture piezometers, Sentinel-1 InSAR surface deformation, 40-year historical landslide atlases, and verified citizen reports into one live predictive engine.",
    step1_title: "Detect",
    step1_desc: "In-situ geotechnical sensors, IMD Doppler radars, and Sentinel-1 InSAR satellites monitor ground saturation and millimeter slope creep.",
    step2_title: "Predict",
    step2_desc: "Multivariate physics-informed AI algorithms cross-reference 40-year geological models with live rainfall thresholds to forecast collapse probability.",
    step3_title: "Alert",
    step3_desc: "Automated Common Alerting Protocol (CAP) relays localized siren triggers, SMS broadcasts, and district emergency dispatches within seconds.",
    risk_badge: "REAL-TIME THREAT ASSESSMENT",
    risk_heading: "Live risk at a glance",
    risk_subheading: "A clear, actionable picture for district administrations, border road organizations, and response teams.",
    filter_all: "All Active Alerts (3)",
    filter_critical: "Critical (1)",
    filter_high: "High Risk (1)",
    filter_moderate: "Moderate (1)",
    badge_critical: "CRITICAL RISK",
    badge_high: "HIGH RISK",
    badge_moderate: "MODERATE RISK",
    map_badge: "GEOSPATIAL INTELLIGENCE GRID",
    map_heading: "North Eastern Geospatial Risk Map",
    map_layers_title: "Active GIS Layers",
    map_legend_title: "Risk Index",
    feat_badge: "SYSTEM CAPABILITIES",
    feat_heading: "Built for response, not just reporting",
    feat_subheading: "Engineered specifically for the steep topography, heavy monsoon deluge, and remote terrain of North East India.",
    feat1_title: "AI Risk Prediction",
    feat1_desc: "Physics-informed deep learning models trained on 40 years of Geological Survey of India records forecast slope shear 6 to 24 hours in advance.",
    feat2_title: "GIS Monitoring",
    feat2_desc: "Real-time synchronization with Sentinel-1 Synthetic Aperture Radar (SAR), ISRO Bhuvan 3D elevation maps, and high-precision contour tracking.",
    feat3_title: "Community Reporting",
    feat3_desc: "Offline-first mobile crowd telemetry empowering village headmen, local truck drivers, and patrol wardens to log early fissures instantly.",
    feat4_title: "Offline & Multilingual Alerts",
    feat4_desc: "CAP-compliant automated warning broadcasts sent through low-bandwidth SMS, WhatsApp, and localized acoustic sirens across 8 regional languages.",
    feat_learn: "Learn methodology",
    report_badge: "COMMUNITY INTELLIGENCE",
    report_heading: "Every local observation can save a road, a village, or a life.",
    report_lead: "When ground cracks first appear or culverts choke during a storm, the earliest eyes on the mountain are village residents, border patrol troops, and transport drivers.",
    report_desc: "Reports submitted via our lightweight mobile portal automatically attach satellite coordinates, compress photos for 2G network transmission, and queue locally if cellular signals fail.",
    report_btn_incident: "Report an Incident",
    report_btn_download: "Download Field App (Android / iOS)",
    resp_badge: "ACTIVE DISPATCHES",
    resp_heading: "Emergency Response Network",
    resp_subheading: "Coordinated field deployment across SDRF, BRO (Border Roads Organisation), NDMA, and District Disaster Management Authorities."
  },
  hi: {
    gov_initiative: "भारत सरकार | आपदा प्रबंधन पहल — पूर्वोत्तर क्षेत्र",
    helpline_label: "24/7 हेल्पलाइन:",
    tagline: "पूर्वानुमान। तैयारी। सुरक्षा।",
    nav_home: "मुख्य पृष्ठ",
    nav_map: "जोखिम मानचित्र",
    nav_alerts: "लाइव अलर्ट",
    nav_field: "क्षेत्र रिपोर्ट",
    nav_response: "प्रतिक्रिया नेटवर्क",
    nav_about: "परिचय",
    btn_dashboard: "लाइव डैशबोर्ड देखें",
    btn_report_incident: "घटना दर्ज करें",
    ticker_badge: "अति आवश्यक सूचना",
    ticker_msg: "NH-13 (भालुकपोंग–तवांग कॉरिडोर): 186 मिमी वर्षा के कारण रेड अलर्ट। किमी 42 पर भूस्खलन। यातायात डायवर्ट।",
    ticker_view: "बुलेटिन देखें →",
    hero_eyebrow: "एआई-संचालित आपदा आसूचना",
    hero_headline: "ढलान खिसकने से पहले जोखिम को पहचानें।",
    hero_copy: "पूर्वोत्तर भारत में सुरक्षित सड़कों और लचीले गांवों के लिए वास्तविक समय वर्षा, उपग्रह, भू-संवेदक और नागरिक आसूचना।",
    hero_btn_map: "लाइव रिस्क मैप देखें",
    hero_btn_report: "घटना की सूचना दें",
    hero_status_states: "राज्य",
    hero_status_monitoring: "24/7 निगरानी",
    hero_status_active: "क्षेत्र",
    hero_status_highrisk: "सक्रिय उच्च जोखिम",
    hero_status_sync: "डेटा सिंक",
    metric_states: "पूर्वोत्तर राज्य",
    metric_corridors: "निगरानी गलियारे",
    metric_ai: "एआई जोखिम विश्लेषण",
    metric_alerts: "स्थानीय भाषा अलर्ट",
    about_label: "नागरिक विज्ञान एवं पूर्व चेतावनी",
    about_heading: "अंतिम मील तक पहुँचने वाली आसूचना",
    about_desc: "हमारा प्लेटफॉर्म आईएमडी वर्षा रडार, मिट्टी नमी सेंसर, उपग्रह डेटा और नागरिक रिपोर्टों को एक एकीकृत पूर्वानुमान इंजन में जोड़ता है।",
    step1_title: "पहचानें",
    step1_desc: "भू-तकनीकी सेंसर और इनसार उपग्रह जमीन की नमी और मिलीमीटर ढलान गति की निगरानी करते हैं।",
    step2_title: "पूर्वानुमान",
    step2_desc: "एआई मॉडल 40 साल के भूवैज्ञानिक रिकॉर्ड के साथ ढलान ढहने के जोखिम का सटीक विश्लेषण करते हैं।",
    step3_title: "अलर्ट",
    step3_desc: "सीएपी प्रोटोकॉल द्वारा सायरन, एसएमएस और आपातकालीन प्रसारण तुरंत जारी होते हैं।",
    risk_badge: "वास्तविक समय जोखिम मूल्यांकन",
    risk_heading: "एक नज़र में लाइव जोखिम",
    risk_subheading: "जिला प्रशासन, बीआरओ और आपदा प्रतिक्रिया टीमों के लिए स्पष्ट और त्वरित जानकारी।",
    filter_all: "सभी सक्रिय अलर्ट (3)",
    filter_critical: "गंभीर (1)",
    filter_high: "उच्च जोखिम (1)",
    filter_moderate: "मध्यम (1)",
    badge_critical: "अति गंभीर जोखिम",
    badge_high: "उच्च जोखिम",
    badge_moderate: "मध्यम जोखिम",
    map_badge: "भू-स्थानिक सूचना ग्रिड",
    map_heading: "पूर्वोत्तर भू-स्थानिक जोखिम मानचित्र",
    map_layers_title: "सक्रिय जीआईएस परतें",
    map_legend_title: "जोखिम सूचकांक",
    feat_badge: "प्रणाली क्षमताएं",
    feat_heading: "कार्रवाई के लिए निर्मित, केवल रिपोर्टिंग नहीं",
    feat_subheading: "पूर्वोत्तर भारत की कठिन पहाड़ियों और भारी मानसूनी वर्षा के लिए विशेष रूप से विकसित।",
    feat1_title: "एआई जोखिम पूर्वानुमान",
    feat1_desc: "40 वर्षों के डेटा पर प्रशिक्षित मॉडल 6 से 24 घंटे पहले चेतावनी देते हैं।",
    feat2_title: "जीआईएस निगरानी",
    feat2_desc: "सेंटिनल-1 और इसरो भुवन 3D उपग्रह मानचित्रों के साथ निरंतर समकालन।",
    feat3_title: "समुदाय रिपोर्टिंग",
    feat3_desc: "ऑफ़लाइन मोबाइल ऐप जो स्थानीय ग्रामीणों और चालकों को दरारें दर्ज करने में सक्षम बनाता है।",
    feat4_title: "ऑफ़लाइन व बहुभाषी अलर्ट",
    feat4_desc: "कम-बैंडविड्थ एसएमएस और क्षेत्रीय सायरन द्वारा 8 भाषाओं में तत्काल चेतावनी।",
    feat_learn: "कार्यप्रणाली जानें",
    report_badge: "सामुदायिक आसूचना",
    report_heading: "हर स्थानीय अवलोकन एक सड़क, एक गांव या एक जीवन बचा सकता है।",
    report_lead: "पहाड़ों में सबसे पहले दरारें स्थानीय निवासी और गश्ती दल देखते हैं।",
    report_desc: "हमारे हल्के मोबाइल पोर्टल से बिना इंटरनेट भी सैटेलाइट निर्देशांक के साथ रिपोर्ट दर्ज की जा सकती है।",
    report_btn_incident: "घटना की सूचना दें",
    report_btn_download: "फील्ड ऐप डाउनलोड करें",
    resp_badge: "सक्रिय तैनाती",
    resp_heading: "आपातकालीन प्रतिक्रिया नेटवर्क",
    resp_subheading: "एसडीआरएफ, बीआरओ और जिला आपदा प्रबंधन प्राधिकरण का समन्वित कार्य।"
  },
  as: {
    gov_initiative: "ভাৰত চৰকাৰ | দুৰ্যোগ ব্যৱস্থাপনা পদক্ষেপ — উত্তৰ-পূৰ্বাঞ্চল",
    helpline_label: "২৪/৭ হেল্পলাইন:",
    tagline: "পূৰ্বানুমান। প্ৰস্তুতি। সুৰক্ষা।",
    nav_home: "মূল পৃষ্ঠা",
    nav_map: "বিপদ মানচিত্ৰ",
    nav_alerts: "লাইভ সতৰ্কবাৰ্তা",
    nav_field: "ক্ষেত্ৰ প্ৰতিবেদন",
    nav_response: "সহায়তা নেটৱৰ্ক",
    nav_about: "পৰিচয়",
    btn_dashboard: "লাইভ ডেশ্বব’ৰ্ড চাওক",
    btn_report_incident: "ঘটনাৰ খবৰ দিয়ক",
    ticker_badge: "জৰুৰী জাননী",
    ticker_msg: "NH-13 (ভালুকপুং–টাৱাং কৰিড’ৰ): ১৮৬ মিমি বৰষুণৰ বাবে ৰেড এলাৰ্ট। কিমি ৪২ত ভূমিস্খলন। যান-বাহন চলাচল বন্ধ।",
    ticker_view: "বুলেটিন চাওক →",
    hero_eyebrow: "এআই চালিত দুৰ্যোগ তথ্য ব্যৱস্থা",
    hero_headline: "পাহাৰ খহি পৰাৰ পূৰ্বেই বিপদ চিনাক্ত কৰক।",
    hero_copy: "উত্তৰ-পূৰ্বাঞ্চলৰ সুৰক্ষিত পথ আৰু গাঁৱৰ বাবে লাইভ বৰষুণ, উপগ্ৰহ আৰু ভূ-সংবেদক ব্যৱস্থা।",
    hero_btn_map: "লাইভ ৰিস্ক মেপ চাওক",
    hero_btn_report: "ঘটনাৰ খবৰ দিয়ক",
    hero_status_states: "ৰাজ্য",
    hero_status_monitoring: "২৪/৭ নিৰীক্ষণ",
    hero_status_active: "অঞ্চল",
    hero_status_highrisk: "সক্ৰিয় উচ্চ বিপদ",
    hero_status_sync: "তথ্য সংমিশ্ৰণ",
    metric_states: "উত্তৰ-পূবৰ ৮ খন ৰাজ্য",
    metric_corridors: "নিৰীক্ষিত পথ কৰিড’ৰ",
    metric_ai: "এআই দ্বাৰা বিশ্লেষণ",
    metric_alerts: "আঞ্চলিক ভাষাত সতৰ্কবাৰ্তা",
    about_label: "নাগৰিক বিজ্ঞান আৰু সতৰ্কবাৰ্তা",
    about_heading: "প্ৰতিটো কোণলৈকে প্ৰেৰিত তথ্য",
    about_desc: "বতৰ বিজ্ঞান কেন্দ্ৰৰ ৰাডাৰ, মাটিৰ আৰ্দ্ৰতা নিৰীক্ষক আৰু উপগ্ৰহ চিত্ৰক একত্ৰিত কৰি সঠিক পূৰ্বানুমান প্ৰদান কৰা হয়।",
    step1_title: "চিনাক্তকৰণ",
    step1_desc: "ইন-ছিটু চেন্সৰ আৰু উপগ্ৰহে পাহাৰৰ সামান্যতম লৰচৰ নিৰীক্ষণ কৰে।",
    step2_title: "পূৰ্বানুমান",
    step2_desc: "এআই প্ৰযুক্তিয়ে ৪০ বছৰৰ তথ্যৰ আধাৰত ভূমিস্খলনৰ সম্ভাৱনা গণনা কৰে।",
    step3_title: "সতৰ্কবাৰ্তা",
    step3_desc: "চাইৰেন, এছএমএছ আৰু প্ৰশাসনৰ জৰিয়তে লগে লগে সতৰ্কবাৰ্তা প্ৰচাৰ হয়।",
    risk_badge: "প্ৰকৃত সময়ৰ বিপদ নিৰূপণ",
    risk_heading: "এক দৃষ্টিত লাইভ বিপদ",
    risk_subheading: "জিলা প্ৰশাসন আৰু বিআৰঅ’ৰ বাবে তাৎক্ষণিক কাৰ্যকৰী তথ্য।",
    filter_all: "সকলো সতৰ্কবাৰ্তা (৩)",
    filter_critical: "চৰম সংকটজনক (১)",
    filter_high: "উচ্চ বিপদ (১)",
    filter_moderate: "মধ্যমীয়া (১)",
    badge_critical: "চৰম বিপদ",
    badge_high: "উচ্চ বিপদ",
    badge_moderate: "মধ্যমীয়া বিপদ",
    map_badge: "ভৌগোলিক তথ্য গ্ৰিড",
    map_heading: "উত্তৰ-পূৰ্বাঞ্চলৰ বিপদ মানচিত্ৰ",
    map_layers_title: "সক্ৰিয় জিআইএছ স্তৰ",
    map_legend_title: "বিপদ সূচক",
    feat_badge: "পদ্ধতিগত সামৰ্থ্য",
    feat_heading: "কেৱল প্ৰতিবেদন নহয়, তাৎক্ষণিক সঁহাৰিৰ বাবে",
    feat_subheading: "উত্তৰ-পূবৰ খৰস্ৰোতা বৰষুণ আৰু জটিল পাহাৰীয়া ভূখণ্ডৰ বাবে বিশেষভাৱে নিৰ্মিত।",
    feat1_title: "এআই বিপদ পূৰ্বানুমান",
    feat1_desc: "৪০ বছৰৰ তথ্যৰ আধাৰত ৬ ৰ পৰা ২৪ ঘণ্টা আগতেই সতৰ্কবাৰ্তা।",
    feat2_title: "জিআইএছ নিৰীক্ষণ",
    feat2_desc: "চেণ্টিনেল-১ আৰু ইছৰো ভূৱন উপগ্ৰহৰ সৈতে অবিৰত যোগাযোগ।",
    feat3_title: "জনসাধাৰণৰ প্ৰতিবেদন",
    feat3_desc: "ইণ্টাৰনেট নোহোৱাকৈও স্থানীয় চালক আৰু ৰাইজে ফাট মেলাৰ তথ্য পঠিয়াব পাৰে।",
    feat4_title: "অফলাইন আৰু বহুভাষিক",
    feat4_desc: "৮টা আঞ্চলিক ভাষাত বাৰ্তা আৰু চাইৰেন ব্যৱস্থা।",
    feat_learn: "পদ্ধতি জানক",
    report_badge: "সামূহিক তথ্য",
    report_heading: "প্ৰতিটো স্থানীয় পৰ্যবেক্ষণে জীৱন আৰু গাঁও ৰক্ষা কৰিব পাৰে।",
    report_lead: "পাহাৰত ফাট মেলাৰ প্ৰথম খবৰ স্থানীয় লোক আৰু গাড়ী চালকৰ চকুত পৰে।",
    report_desc: "অফলাইনত সংৰক্ষণ কৰি নেটৱৰ্ক পালেই নিজে নিজে তথ্য জমা হৈ যায়।",
    report_btn_incident: "ঘটনাৰ খবৰ দিয়ক",
    report_btn_download: "ফিল্ড এপ ডাউনলোড কৰক",
    resp_badge: "সক্ৰিয় সঁহাৰি",
    resp_heading: "জৰুৰীকালীন সাহায্য নেটৱৰ্ক",
    resp_subheading: "এছডিআৰএফ আৰু জিলা প্ৰশাসনৰ তৎপৰ সাহায্য।"
  }
};

// 2. Geographic Locations Database for Map Showcase
const locationData = {
  bhalukpong: {
    title: "Bhalukpong–Tawang Road",
    corridor: "NH-13 Corridor (km 42), West Kameng, Arunachal Pradesh",
    risk: "Critical",
    badgeClass: "badge-critical",
    rain: "186 mm",
    moisture: "91%",
    road: "Restricted / Blocked",
    roadClass: "text-critical",
    slope: "Shear Imminent (94% conf)",
    action: "Pre-position SDRF Team 4 at Bhalukpong; halt heavy civilian transit beyond Sessa check-gate."
  },
  haflong: {
    title: "Haflong–Jatinga Hill",
    corridor: "Lumding–Badarpur Hill Section & NH-27, Dima Hasao, Assam",
    risk: "High",
    badgeClass: "badge-high",
    rain: "132 mm",
    moisture: "84%",
    road: "Caution Active",
    roadClass: "text-amber",
    slope: "Creep Rate: 2.4 mm/hr",
    action: "NF Railway speed restriction (20 km/h) enforced. Deploy PWD geotechnical extensometer crew."
  },
  cherrapunji: {
    title: "Cherrapunji–Shella Pass",
    corridor: "SH-5 Corridor & Sohra Escarpment, East Khasi Hills, Meghalaya",
    risk: "Moderate",
    badgeClass: "badge-moderate",
    rain: "95 mm",
    moisture: "68%",
    road: "Passable with Caution",
    roadClass: "text-emerald",
    slope: "Moderate Saturation",
    action: "Issue localized warning to hillside settlements; activate Sohra community shelter."
  },
  kohima: {
    title: "Kohima Bypass Corridor",
    corridor: "NH-29 Zubza Section, Kohima District, Nagaland",
    risk: "Normal",
    badgeClass: "badge-moderate",
    rain: "42 mm",
    moisture: "45%",
    road: "Normal Flow",
    roadClass: "text-emerald",
    slope: "Stable (InSAR Green)",
    action: "Routine continuous optical drone surveillance active."
  },
  sairang: {
    title: "Sairang–Aizawl Link",
    corridor: "Bairabi–Sairang Railway Approach & NH-54, Aizawl, Mizoram",
    risk: "Moderate",
    badgeClass: "badge-moderate",
    rain: "78 mm",
    moisture: "62%",
    road: "One-way Controlled",
    roadClass: "text-amber",
    slope: "Superficial Rill Erosion",
    action: "Maintain road patrol wardens along cutting slopes."
  }
};

// 3. Telemetry Detailed Datasets for Modal
const telemetryData = {
  'arunachal-nh13': {
    title: "NH-13 Bhalukpong–Tawang Geotechnical Telemetry",
    stationId: "AR-13-KAMENG-04",
    statusBadge: "CRITICAL ALERT",
    statusClass: "badge-critical",
    rainfall24: "186.4 mm",
    rainfallPeakRate: "34 mm/hr (14:30 IST)",
    porePressure: "48.2 kPa (Threshold: 35 kPa)",
    soilMoisture: "91.2% Volumetric",
    inclinometerShift: "14.8 mm cumulative shear",
    geology: "Weathered Tertiary Shale & Sandstone Overburden",
    districtCollector: "Shri K. Dorjee, DC West Kameng (03782-222221)",
    assignedBRO: "BRO 14 Border Road Task Force (HQ Rupa)"
  },
  'assam-dimahasao': {
    title: "Dima Hasao (Haflong Ridge) Sensor Stream",
    stationId: "AS-DH-HAF-01",
    statusBadge: "HIGH RISK",
    statusClass: "badge-high",
    rainfall24: "132.0 mm",
    rainfallPeakRate: "22 mm/hr (12:15 IST)",
    porePressure: "39.1 kPa (Threshold: 32 kPa)",
    soilMoisture: "84.5% Volumetric",
    inclinometerShift: "6.2 mm lateral displacement",
    geology: "Disang Series Clayey Shale with active fault slip",
    districtCollector: "Smti. S. Thaosen, DC Dima Hasao (03673-236222)",
    assignedBRO: "NF Railway Geotechnical Emergency Cell"
  },
  'meghalaya-khasi': {
    title: "East Khasi Hills (Cherrapunji–Shella) Telemetry",
    stationId: "ML-EKH-SOH-09",
    statusBadge: "MODERATE RISK",
    statusClass: "badge-moderate",
    rainfall24: "95.2 mm",
    rainfallPeakRate: "18 mm/hr (15:00 IST)",
    porePressure: "26.4 kPa (Threshold: 30 kPa)",
    soilMoisture: "68.0% Volumetric",
    inclinometerShift: "1.4 mm baseline vibration",
    geology: "Sylhet Limestone with karst drainage overburden",
    districtCollector: "Smti. R. Lyngdoh, DC East Khasi Hills (0364-2224010)",
    assignedBRO: "Meghalaya PWD (Roads) Division 3"
  }
};

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initAccessibilityControls();
  initStickyNavbar();
  initFilterPills();
  initMapLayers();
  initTelemetryClock();
  initIntersectionReveal();
  initAppMockClock();
});

// 1. Language Switcher
function initLanguageSwitcher() {
  const langSelect = document.getElementById('langSelect');
  if (!langSelect) return;

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    applyLanguage(lang);
    showToast(`Language switched to ${langSelect.options[langSelect.selectedIndex].text}`);
  });
}

function applyLanguage(lang) {
  const dict = i18nData[lang] || i18nData.en;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

// 2. Accessibility Controls
function initAccessibilityControls() {
  let fontScale = 1;
  const btnFontDec = document.getElementById('btnFontDec');
  const btnFontReset = document.getElementById('btnFontReset');
  const btnFontInc = document.getElementById('btnFontInc');
  const btnContrast = document.getElementById('btnContrastToggle');

  if (btnFontDec) {
    btnFontDec.addEventListener('click', () => {
      fontScale = Math.max(0.85, fontScale - 0.08);
      document.documentElement.style.setProperty('--font-scale', fontScale);
    });
  }

  if (btnFontReset) {
    btnFontReset.addEventListener('click', () => {
      fontScale = 1;
      document.documentElement.style.setProperty('--font-scale', fontScale);
    });
  }

  if (btnFontInc) {
    btnFontInc.addEventListener('click', () => {
      fontScale = Math.min(1.25, fontScale + 0.08);
      document.documentElement.style.setProperty('--font-scale', fontScale);
    });
  }

  if (btnContrast) {
    btnContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      showToast(document.body.classList.contains('high-contrast') ? 'High contrast enabled' : 'Normal contrast restored');
    });
  }
}

// 3. Sticky Navbar & Mobile Drawer
function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active Navigation Highlighting
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach((sec) => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        current = sec.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// 4. Live Risk Filter Pills
function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.risk-card');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');
      cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. Interactive Map Selection & Layer Toggles
function selectLocation(locKey) {
  const loc = locationData[locKey];
  if (!loc) return;

  // Update insight card
  document.getElementById('insTitle').textContent = loc.title;
  document.getElementById('insCorridor').textContent = loc.corridor;
  
  const badge = document.getElementById('insBadge');
  badge.textContent = loc.risk.toUpperCase();
  badge.className = `insight-badge ${loc.badgeClass}`;

  document.getElementById('insRain').textContent = loc.rain;
  document.getElementById('insMoisture').textContent = loc.moisture;
  
  const roadEl = document.getElementById('insRoad');
  roadEl.textContent = loc.road;
  roadEl.className = `ins-metric-val ${loc.roadClass}`;

  const slopeEl = document.getElementById('insSlope');
  slopeEl.textContent = loc.slope;

  document.getElementById('insAction').textContent = loc.action;

  // Active pin visual highlight
  document.querySelectorAll('.map-pin-group').forEach((p) => p.classList.remove('active-pin'));
  const activePin = document.getElementById(`pin-${locKey}`);
  if (activePin) activePin.classList.add('active-pin');
}

function initMapLayers() {
  const layerBtns = document.querySelectorAll('.layer-btn');
  layerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const layerName = btn.getAttribute('data-layer');
      const svgLayer = document.getElementById(`layer-${layerName}`);
      if (svgLayer) {
        if (btn.classList.contains('active')) {
          svgLayer.style.display = 'inline';
        } else {
          svgLayer.style.display = 'none';
        }
      }
      showToast(`${btn.querySelector('span').textContent} layer ${btn.classList.contains('active') ? 'enabled' : 'disabled'}`);
    });
  });
}

// 6. Telemetry Last-Sync Counter
function initTelemetryClock() {
  let seconds = 120;
  const syncEl = document.getElementById('lastSyncTime');
  if (!syncEl) return;

  setInterval(() => {
    seconds += 5;
    if (seconds < 60) {
      syncEl.textContent = `${seconds}s ago`;
    } else {
      const mins = Math.floor(seconds / 60);
      syncEl.textContent = `${mins} min ago`;
    }
  }, 5000);
}

function initAppMockClock() {
  const clockEl = document.getElementById('appMockClock');
  if (!clockEl) return;
  const updateClock = () => {
    const now = new Date();
    clockEl.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };
  updateClock();
  setInterval(updateClock, 30000);
}

// 7. Intersection Observer for Subtle Fade-up Reveal
function initIntersectionReveal() {
  const elements = document.querySelectorAll('.reveal-fade');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// 8. Modals & Forms
function openIncidentModal() {
  const modal = document.getElementById('incidentModal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeIncidentModal() {
  const modal = document.getElementById('incidentModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function previewIncidentPhoto(input) {
  const previewText = document.getElementById('photoPreviewText');
  if (input.files && input.files[0]) {
    previewText.innerHTML = `✓ Attached: <strong>${input.files[0].name}</strong> (${(input.files[0].size / 1024).toFixed(1)} KB)`;
    showToast("Photo verified & compressed for 2G sync");
  }
}

function refreshMockGps() {
  const gpsInput = document.getElementById('fieldGps');
  if (gpsInput) {
    const lats = [27.5861, 27.5924, 25.6741, 25.2986];
    const lons = [92.4219, 92.4350, 91.8933, 91.5822];
    const idx = Math.floor(Math.random() * lats.length);
    gpsInput.value = `${lats[idx].toFixed(4)}° N, ${lons[idx].toFixed(4)}° E (GPS Lock: High Precision ±2m)`;
    showToast("GPS coordinates recalibrated via IRNSS NavIC");
  }
}

function handleIncidentSubmit(e) {
  e.preventDefault();
  closeIncidentModal();
  showToast("Observation logged! Queued for real-time verification by District Disaster Cell.");
  const appPhoto = document.getElementById('appMockPhoto');
  if (appPhoto) {
    appPhoto.innerHTML = `<span class="photo-text">✓ Report Dispatched: <strong>Ref #NER-${Math.floor(1000 + Math.random() * 9000)}</strong></span>`;
  }
}

function openZoneDetails(zoneKey) {
  const data = telemetryData[zoneKey];
  if (!data) return;

  const modal = document.getElementById('telemetryModal');
  const title = document.getElementById('teleZoneTitle');
  const sub = document.getElementById('teleZoneSub');
  const body = document.getElementById('telemetryModalBody');

  if (title) title.textContent = data.title;
  if (sub) sub.textContent = `Station ID: ${data.stationId} • Real-time Array Stream`;

  if (body) {
    body.innerHTML = `
      <div class="tele-grid">
        <div class="tele-box">
          <div class="tele-label">24h Cumulative Rain</div>
          <div class="tele-val text-critical">${data.rainfall24}</div>
        </div>
        <div class="tele-box">
          <div class="tele-label">Peak Rain Intensity</div>
          <div class="tele-val">${data.rainfallPeakRate}</div>
        </div>
        <div class="tele-box">
          <div class="tele-label">Pore-Water Pressure</div>
          <div class="tele-val text-critical">${data.porePressure}</div>
        </div>
        <div class="tele-box">
          <div class="tele-label">Soil Saturation</div>
          <div class="tele-val">${data.soilMoisture}</div>
        </div>
        <div class="tele-box">
          <div class="tele-label">Cumulative InSAR Shear</div>
          <div class="tele-val text-critical">${data.inclinometerShift}</div>
        </div>
        <div class="tele-box">
          <div class="tele-label">Geological Strata</div>
          <div class="tele-val" style="font-size: 0.95rem;">${data.geology}</div>
        </div>
      </div>

      <div style="background: var(--color-slate-100); padding: 16px; border-radius: var(--radius-md); margin-bottom: 16px;">
        <h4 style="font-size: 0.9rem; font-weight: 700; color: var(--color-navy); margin-bottom: 8px;">District Command Contacts</h4>
        <p style="font-size: 0.84rem; color: var(--color-slate-700); margin-bottom: 4px;"><strong>Nodal Officer:</strong> ${data.districtCollector}</p>
        <p style="font-size: 0.84rem; color: var(--color-slate-700);"><strong>Response Task Force:</strong> ${data.assignedBRO}</p>
      </div>

      <div style="display: flex; justify-content: flex-end; gap: 10px;">
        <button class="btn btn-navy" onclick="closeTelemetryModal()">Close Telemetry Panel</button>
      </div>
    `;
  }

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeTelemetryModal() {
  const modal = document.getElementById('telemetryModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function triggerDistrictAlert() {
  showToast("High-priority SMS & siren alert triggered to West Kameng District HQ.");
}

function triggerAppDownload() {
  showToast("Downloading NER Disaster Citizen Field APK (v2.4.1 - 8.4 MB)...");
}

// 9. Toast Notification Popup
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMsg');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Close modals with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeIncidentModal();
    closeTelemetryModal();
  }
});
