/* ==========================================================================
   Dodla's Tours & Travels - Centralized Bilingual Translation Engine (i18n)
   Supports: English (Default) & Telugu (తెలుగు)
   Zero reload instant switching with localStorage memory and font switching
   Embedded Dictionary: Offline & file:/// compatible (No CORS dependency)
   ========================================================================== */

(function() {
  'use strict';

  var TRANSLATIONS_TE = {
  "Kaleswara Rao Market, Besant Road, Vijayawada, AP": "కాళేశ్వరరావు మార్కెట్, బెసెంట్ రోడ్, విజయవాడ, ఆంధ్రప్రదేశ్",
  "EST. 1962 • 64 YEARS OF SACRED SERVICE": "స్థాపన 1962 • 64 ఏళ్ల పవిత్ర సేవ",
  "EST. 1962 &bull; 64 YEARS OF SACRED SERVICE": "స్థాపన 1962 • 64 ఏళ్ల పవిత్ర సేవ",
  "Est. 1962 • 64 Years Sacred Service": "స్థాపన 1962 • 64 ఏళ్ల పవిత్ర సేవ",
  "Est. 1962 &bull; 64 Years Sacred Service": "స్థాపన 1962 • 64 ఏళ్ల పవిత్ర సేవ",
  "Since 1962 • Sacred Journeys": "1962 నుండి • పవిత్ర యాత్రలు",
  "Since 1962 &bull; Sacred Journeys": "1962 నుండి • పవిత్ర యాత్రలు",
  "SINCE 1962 • SACRED JOURNEYS": "1962 నుండి • పవిత్ర యాత్రలు",
  "PILGRIMAGES FOR A HIGHER LIFE": "ఉన్నత ఆధ్యాత్మిక జీవనానికి పవిత్ర తీర్థయాత్రలు",
  "Pilgrimages • Heritage • People • A Better You": "తీర్థయాత్రలు • వారసత్వం • సేవ • ఆధ్యాత్మిక ప్రశాంతత",
  "Pilgrimages &bull; Heritage &bull; People &bull; A Better You": "తీర్థయాత్రలు • వారసత్వం • సేవ • ఆధ్యాత్మిక ప్రశాంతత",
  "Fixed Departure Yatra • Est. 1962": "ఫిక్స్‌డ్ డిపార్చర్ యాత్ర • స్థాపన 1962",
  "Fixed Departure Yatra &bull; Est. 1962": "ఫిక్స్‌డ్ డిపార్చర్ యాత్ర • స్థాపన 1962",
  "Sacred Pilgrimage Fixed Departure • Est. 1962": "పవిత్ర తీర్థయాత్ర ఫిక్స్‌డ్ డిపార్చర్ • స్థాపన 1962",
  "Sacred Pilgrimage Fixed Departure &bull; Est. 1962": "పవిత్ర తీర్థయాత్ర ఫిక్స్‌డ్ డిపార్చర్ • స్థాపన 1962",
  "Himalayan Pilgrimage Fixed Departure • Est. 1962": "హిమాలయ తీర్థయాత్ర ఫిక్స్‌డ్ డిపార్చర్ • స్థాపన 1962",
  "Sacred Himalayan Cave Fixed Departure • Est. 1962": "హిమాలయ పవిత్ర గుహాలయ యాత్ర • స్థాపన 1962",
  "Sacred Confluence Fixed Departure • Est. 1962": "పవిత్ర సంగమ తీర్థయాత్ర • స్థాపన 1962",
  "Temple Heritage Fixed Departure • Est. 1962": "ఆలయ వారసత్వ యాత్ర • స్థాపన 1962",
  "Luxury International Fixed Departure • Est. 1962": "లగ్జరీ అంతర్జాతీయ పర్యటన • స్థాపన 1962",
  "Himalayan Nature Fixed Departure • Est. 1962": "హిమాలయ ప్రకృతి విహార యాత్ర • స్థాపన 1962",
  "Luxury Cruise Fixed Departure • Est. 1962": "లగ్జరీ క్రూజ్ టూర్ • స్థాపన 1962",
  "God's Own Country Fixed Departure • Est. 1962": "కేరళ దివ్య దర్శన యాత్ర • స్థాపన 1962",
  "Holy Cave Pilgrimage Fixed Departure • Est. 1962": "పవిత్ర గుహాలయ యాత్ర • స్థాపన 1962",
  "International Pilgrimage Fixed Departure • Est. 1962": "అంతర్జాతీయ పుణ్యక్షేత్ర యాత్ర • స్థాపన 1962",
  "Home": "హోమ్",
  "About Us": "మా గురించి",
  "Our Heritage": "మా వారసత్వం",
  "Fixed Departures": "ఫిక్స్‌డ్ డిపార్చర్స్",
  "Fixed Departures (11 Tours)": "ఫిక్స్‌డ్ డిపార్చర్స్ (11 యాత్రలు)",
  "★ All Fixed Departures (11 Tours)": "★ అన్ని ఫిక్స్‌డ్ డిపార్చర్స్ (11 యాత్రలు)",
  "Pilgrimages": "తీర్థయాత్రలు",
  "Pilgrimages ▾": "తీర్థయాత్రలు ▾",
  "Pilgrimages &#9662;": "తీర్థయాత్రలు ▾",
  "All Pilgrimage Yatras": "అన్ని పుణ్యక్షేత్ర యాత్రలు",
  "Holidays": "హాలిడేస్",
  "Holidays ▾": "హాలిడేస్ ▾",
  "Holidays &#9662;": "హాలిడేస్ ▾",
  "All Holiday Tours": "అన్ని హాలిడే టూర్స్",
  "Domestic Holiday Tours": "స్వదేశీ హాలిడే టూర్స్",
  "International Tours": "అంతర్జాతీయ పర్యటనలు",
  "Complete Tour Packages": "సంపూర్ణ టూర్ ప్యాకేజీలు",
  "Destinations": "గమ్యస్థానాలు",
  "Services": "సేవలు",
  "Our Services": "మా సేవలు",
  "Gallery": "గ్యాలరీ",
  "Photo Gallery": "చిత్రమాలిక",
  "Photo Gallery (12 Photos)": "ఫోటో గ్యాలరీ (12 చిత్రాలు)",
  "Contact": "సంప్రదించండి",
  "Contact Us": "సంప్రదించండి",
  "Enquire Now": "ఇప్పుడే సంప్రదించండి",
  "Plan Your Sacred Journey": "మీ పవిత్ర యాత్రను ప్లాన్ చేయండి",
  "Uttarakhand Chardham Yatra": "ఉత్తరాఖండ్ చార్‌ధామ్ యాత్ర",
  "Amarnath & Kashmir Yatra": "అమర్‌నాథ్ & కాశ్మీర్ యాత్ర",
  "Amarnath &amp; Kashmir Yatra": "అమర్‌నాథ్ & కాశ్మీర్ యాత్ర",
  "Kailash Manasarovar Yatra": "కైలాస మానససరోవర యాత్ర",
  "Nepal & Muktinath Yatra": "నేపాల్ & ముక్తినాథ్ యాత్ర",
  "Nepal &amp; Muktinath Yatra": "నేపాల్ & ముక్తినాథ్ యాత్ర",
  "Nepal Muktinath Flight Package": "నేపాల్ ముక్తినాథ్ ఫ్లైట్ ప్యాకేజీ",
  "Sri Lanka Ramayana Trail": "శ్రీలంక రామాయణ యాత్ర",
  "South India Temple Circuit": "దక్షిణ భారత దేవాలయాల యాత్ర",
  "North India Temple Circuit": "ఉత్తర భారత తీర్థయాత్రలు",
  "64 Years of Sacred Journeys": "64 ఏళ్ల <span style=\"color: #D4AF37;\">పవిత్ర సేవా ప్రస్థానం</span>",
  "Journey with Faith": "విశ్వాసంతో సాగే ఆధ్యాత్మిక యాత్ర",
  "Explore Pilgrimages": "తీర్థయాత్రలను వీక్షించండి",
  "Plan Your Journey": "మీ యాత్రను ప్లాన్ చేయండి",
  "Watch Our Story": "మా చరిత్రను వీక్షించండి",
  "A Legacy of Faith & Service": "విశ్వాసం & సేవా వారసత్వం",
  "Watch Our Story • A Legacy of Faith & Service": "మా చరిత్రను వీక్షించండి • విశ్వాసం & సేవా వారసత్వం",
  "Since 1962": "1962 నుండి",
  "Trusted Travel Service": "నమ్మకమైన యాత్రా సేవలు",
  "All-India Bus Fleet": "ఆల్ ఇండియా బస్సుల సమూహం",
  "AC Luxury Bus Fleet": "AC లగ్జరీ బస్సుల సమూహం",
  "Comfortable & Safe": "సౌకర్యవంతమైన & సురక్షితమైన",
  "Comfortable &amp; Safe": "సౌకర్యవంతమైన & సురక్షితమైన",
  "Pilgrimage Specialists": "పుణ్యక్షేత్ర యాత్రా నిపుణులు",
  "Sacred Destinations": "పవిత్ర పుణ్యక్షేత్రాలు",
  "Dedicated Assistance": "నిరంతర యాత్రా సహాయం",
  "Before, During & After Travel": "ప్రయాణానికి ముందు, ప్రయాణంలో & ప్రయాణానంతరం",
  "Before, During &amp; After Travel": "ప్రయాణానికి ముందు, ప్రయాణంలో & ప్రయాణానంతరం",
  "Explore With Dodla's": "దొడ్ల టూర్స్‌తో ప్రయాణించండి",
  "Popular Pilgrimage Destinations": "ప్రసిద్ధ పుణ్యక్షేత్రాలు",
  "View All Destinations": "అన్ని గమ్యస్థానాలను చూడండి",
  "A Journey of Service Since 1962": "1962 నుండి నిరంతర సేవా ప్రస్థానం",
  "Our Full Story": "మా పూర్తి చరిత్ర",
  "Years of Service": "సంవత్సరాల సేవ",
  "64+": "64+",
  "10,000+": "10,000+",
  "50+": "50+",
  "24/7": "24/7",
  "Happy Pilgrims": "సంతృప్త భక్తులు",
  "Travel Support": "యాత్రా సహకారం",
  "Service to pilgrims is service to God.": "యాత్రికుల సేవే మాధవ సేవ.",
  "Late Sri Dodla Hemanth Kumar": "స్వర్గీయ శ్రీ దొడ్ల హేమంత్ కుమార్",
  "Founder": "వ్యవస్థాపకులు",
  "Sacred Moments": "పవిత్ర క్షణాలు",
  "A Glimpse into Our Journeys": "మా యాత్రల చిత్రమాలిక",
  "View Gallery": "గ్యాలరీని వీక్షించండి",
  "Ready to Begin Your Divine Journey?": "మీ పవిత్ర యాత్రను ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?",
  "Let us help you plan a meaningful and memorable yatra.": "మీకు అత్యంత గుర్తుండిపోయే, ఆధ్యాత్మిక సంతృప్తినిచ్చే పవిత్ర యాత్రను ప్లాన్ చేయడంలో మేము సహకరిస్తాము.",
  "Chat on WhatsApp": "వాట్సాప్‌లో చాట్ చేయండి",
  "More than Travel, A Divine Experience": "కేవలం ప్రయాణం కాదు, ఒక దివ్య అనుభూతి",
  "Kedarnath Dham": "కేదార్‌నాథ్ ధామ్",
  "Badrinath": "బద్రీనాథ్",
  "Kedarnath": "కేదార్‌నాథ్",
  "Tirumala": "తిరుమల",
  "Srisailam": "శ్రీశైలం",
  "Jyotirlingas": "ద్వాదశ జ్యోతిర్లింగాలు",
  "Uttarakhand": "ఉత్తరాఖండ్",
  "Andhra Pradesh": "ఆంధ్రప్రదేశ్",
  "Across India": "భారతదేశవ్యాప్తంగా",
  "Tour Type": "టూర్ రకం",
  "All Pilgrimages": "అన్ని పుణ్యక్షేత్రాలు",
  "Travel Month": "ప్రయాణ నెల",
  "Select Month": "నెలను ఎంచుకోండి",
  "Travellers": "ప్రయాణికులు",
  "Select": "ఎంచుకోండి",
  "Search Tours": "యాత్రలను వెతకండి",
  "ABOUT US": "మా గురించి",
  "About Us Content": "మా గురించిన వివరాలు",
  "ESTABLISHMENT – 1962": "సంస్థ స్థాపన – 1962",
  "ESTABLISHMENT &mdash; 1962": "సంస్థ స్థాపన — 1962",
  "Established in 1962": "1962లో స్థాపించబడింది",
  "ACCREDITATIONS": "అధికారిక గుర్తింపులు",
  "Accreditations": "ప్రభుత్వ గుర్తింపు",
  "Approved by Department of Tourism, Government of India.": "భారత ప్రభుత్వ పర్యాటక శాఖ (Department of Tourism) ద్వారా అధికారికంగా ఆమోదించబడింది.",
  "TRAIN TOURS": "ప్రత్యేక రైలు యాత్రలు",
  "Train Tours": "రైలు యాత్రలు",
  "BUS TOURS": "అఖిల భారత బస్సు యాత్రలు",
  "Bus Tours": "బస్సు యాత్రలు",
  "AIRLINES TICKETING": "అధికారిక విమాన టికెటింగ్",
  "Airlines Ticketing": "విమాన టిక్కెట్లు",
  "TRANSPORT FLEET": "విశాలమైన రవాణా వాహన శ్రేణి",
  "Transport Fleet": "రవాణా వాహనాల సమూహం",
  "LANGUAGE GUIDES": "భాషా గైడులు",
  "Language Guides": "భాషా గైడులు",
  "Languages: English, Hindi, Tamil, Telugu.": "భాషలు: ఇంగ్లీష్, హిందీ, తమిళం, తెలుగు.",
  "Original Travel Archive": "మా చారిత్రక యాత్రా చిత్రాలు",
  "Leadership Since 1962": "1962 నుండి నాయకత్వ పరంపర",
  "Pillars of Our Dedicated Service": "మా అంకితభావ సేవా మూలస్తంభాలు",
  "Enquire for Custom Tour": "ప్రత్యేక టూర్ కోసం విచారించండి",
  "Custom Yatra Enquiry": "ప్రత్యేక యాత్రా విచారణ",
  "Sacred Experiences": "పవిత్ర అనుభవాలు",
  "Our Journey Since 1962": "1962 నుండి మా సేవా ప్రస్థానం",
  "Head Office & Booking": "ప్రధాన కార్యాలయం & బుకింగ్",
  "108 Vaishnava Divya Desala Yatra": "108 వైష్ణవ దివ్యదేశాల యాత్ర",
  "108 VAISHANAVA DIVYA DESALA  YATRA": "108 వైష్ణవ దివ్య దేశాల యాత్ర",
  "108 VAISHANAVA DIVYA DESALA YATRA": "108 వైష్ణవ దివ్యదేశాల యాత్ర",
  "108 VAISHNAVA DIVYA DESALA YATRA": "108 వైష్ణవ దివ్యదేశాల యాత్ర",
  "108 Vaishnava Divya Desams": "108 వైష్ణవ దివ్య దేశాలు",
  "Muktinath Flight Package & Nepal Yatra": "ముక్తినాథ్ విమాన ప్యాకేజీ & నేపాల్ యాత్ర",
  "Muktinath Flight Package": "ముక్తినాథ్ విమాన ప్యాకేజీ",
  "MUKTHINADH FLIGHT PACKAGE": "ముక్తినాథ్ ఫ్లైట్ ప్యాకేజీ",
  "Patala Bhubaneswar Cave Temple & Kumaon Tour": "పాతాళ భువనేశ్వర్ గుహాలయ & కుమావున్ యాత్ర",
  "PATALA BHUBANESWAR  TOUR": "పాతాళ భువనేశ్వర్ టూర్",
  "Patala Bhubaneswar Tour": "పాతాళ భువనేశ్వర్ టూర్",
  "Ganga Sagar Yatra & Eastern India Circuit": "గంగా సాగర్ యాత్ర & తూర్పు భారత పుణ్యక్షేత్రాలు",
  "GANGA SAGAR YATRA": "గంగా సాగర్ యాత్ర",
  "Ganga Sagar Yatra": "గంగా సాగర్ యాత్ర",
  "Odisha Andhra Heritage Tour Ex-Bhubaneswar": "ఒడిశా ఆంధ్ర హెరిటేజ్ యాత్ర (భువనేశ్వర్ నుండి)",
  "ODISHA ANDHRA TOUR EX.BHUBANESWAR": "ఒడిశా ఆంధ్ర టూర్ (భువనేశ్వర్ నుండి)",
  "Odisha Andhra Tour Ex-Bhubaneswar": "ఒడిశా ఆంధ్ర టూర్ (భువనేశ్వర్ నుండి)",
  "Dubai International Spectacular Tour": "దుబాయ్ ఇంటర్నేషనల్ టూర్",
  "DUBAI TOUR": "దుబాయ్ టూర్",
  "Dubai Tour": "దుబాయ్ టూర్",
  "Gangtok Pelling Darjeeling Himalayan Tour": "గ్యాంగ్‌టక్ పెల్లింగ్ డార్జిలింగ్ హిమాలయన్ టూర్",
  "GANGTOK-PELLING-DARJEELING": "గ్యాంగ్‌టక్-పెల్లింగ్-డార్జిలింగ్",
  "Gangtok Pelling Darjeeling Tour": "గ్యాంగ్‌టక్ పెల్లింగ్ డార్జిలింగ్ టూర్",
  "Singapore, Malaysia & Luxury Cruise Tour": "సింగపూర్, మలేషియా & లగ్జరీ క్రూజ్ టూర్",
  "SINGAPORE, MALESYA, WITH CRUISE": "సింగపూర్, మలేషియా విత్ లగ్జరీ క్రూజ్",
  "Singapore & Malaysia with Luxury Cruise": "సింగపూర్, మలేషియా విత్ లగ్జరీ క్రూజ్",
  "Kerala Divine & Leisure Tour": "కేరళ దివ్య దర్శనాలు & విహార యాత్ర",
  "KERALA TOUR": "కేరళ టూర్",
  "Kerala Tour": "కేరళ టూర్",
  "Sacred Amarnath Yatra with Vaishno Devi": "పవిత్ర అమర్‌నాథ్ యాత్ర & వైష్ణో దేవి దర్శనం",
  "AMARNATH YATRA": "అమర్‌నాథ్ యాత్ర",
  "Amarnath Yatra": "అమర్‌నాథ్ యాత్ర",
  "Sri Lanka Ramayana Trail & Shankari Devi Yatra": "శ్రీలంక రామాయణ యాత్ర & శంకరీ దేవి దర్శనం",
  "SRILanka RAMAYANA YATRA": "శ్రీలంక రామాయణ యాత్ర",
  "Sri Lanka Ramayana Yatra": "శ్రీలంక రామాయణ యాత్ర",
  "17 Days / 16 Nights": "17 రోజులు / 16 రాత్రులు",
  "8 Days / 7 Nights": "8 రోజులు / 7 రాత్రులు",
  "9 Days / 8 Nights": "9 రోజులు / 8 రాత్రులు",
  "16 Days / 15 Nights": "16 రోజులు / 15 రాత్రులు",
  "11 Days / 10 Nights": "11 రోజులు / 10 రాత్రులు",
  "6 Days / 5 Nights": "6 రోజులు / 5 రాత్రులు",
  "7 Days / 6 Nights": "7 రోజులు / 6 రాత్రులు",
  "14 Days / 13 Nights": "14 రోజులు / 13 రాత్రులు",
  "Vijayawada, AP": "విజయవాడ, ఆంధ్రప్రదేశ్",
  "Vijayawada, Andhra Pradesh": "విజయవాడ, ఆంధ్రప్రదేశ్",
  "Gorakhpur / Vijayawada": "గోరఖ్‌పూర్ / విజయవాడ",
  "Haridwar / Vijayawada": "హరిద్వార్ / విజయవాడ",
  "Bhubaneswar / Vijayawada": "భువనేశ్వర్ / విజయవాడ",
  "Vijayawada / Hyderabad / International": "విజయవాడ / హైదరాబాద్ / అంతర్జాతీయ విమానాశ్రయం",
  "Bagdogra / NJP / Vijayawada": "బాగ్‌డోగ్రా / NJP / విజయవాడ",
  "Chennai / Vijayawada / Singapore": "చెన్నై / విజయవాడ / సింగపూర్",
  "Cochin / Vijayawada": "కొచ్చిన్ / విజయవాడ",
  "Chennai / Vijayawada": "చెన్నై / విజయవాడ",
  "Tour Overview": "యాత్రా విశేషాలు",
  "Sacred Yatra Overview": "పవిత్ర యాత్రా ముఖ్యాంశాలు",
  "Day-Wise Sacred Itinerary": "రోజువారీ పవిత్ర యాత్రా ప్రణాళిక",
  "Date & Pricing Information": "తేదీలు & ప్యాకేజీ ధర వివరాలు",
  "Official fixed departure schedules and comprehensive tariff breakdown": "అధికారిక ప్రయాణ షెడ్యూల్ మరియు పూర్తి ప్యాకేజీ ధరల వివరాలు",
  "Tour Photo Gallery": "టూర్ ఫోటో గ్యాలరీ",
  "Sacred Yatra Photo Gallery": "పవిత్ర యాత్రా ఫోటో గ్యాలరీ",
  "Important Travel Guidelines & Devotee Care": "ముఖ్యమైన ప్రయాణ మార్గదర్శకాలు & భక్తుల సంరక్షణ",
  "Important Travel Guidelines &amp; Devotee Care": "ముఖ్యమైన ప్రయాణ మార్గదర్శకాలు & భక్తుల సంరక్షణ",
  "Essential preparation tips for a comfortable and meaningful spiritual journey": "మీ పవిత్ర ఆధ్యాత్మిక యాత్ర సుఖవంతంగా మరియు సాఫీగా సాగడానికి ముఖ్యమైన సూచనలు",
  "Package Inclusions": "ప్యాకేజీలో చేర్చబడిన సదుపాయాలు",
  "Package Exclusions": "ప్యాకేజీలో చేర్చబడనివి",
  "Click any photo to enlarge": "పెద్దదిగా చూడటానికి ఫోటోపై క్లిక్ చేయండి",
  "Tour Duration": "టూర్ వ్యవధి",
  "Boarding Hub": "బోర్డింగ్ కేంద్రం",
  "Departure Schedule": "ప్రయాణ తేదీలు",
  "Departure Date": "బయలుదేరే తేదీ",
  "Departure": "బయలుదేరడం",
  "Next Departure": "తదుపరి ప్రయాణ తేదీ",
  "All Dates": "అన్ని తేదీలు",
  "Fare Per Person": "వ్యక్తికి ప్రయాణ రుసుము",
  "Price Per Person": "ఒక్కొక్కరికి ప్యాకేజీ ధర",
  "Package Fare": "ప్యాకేజీ రుసుము",
  "per person": "వ్యక్తికి",
  "Per Person": "ఒక్కొక్కరికి",
  "Official Tour Package": "అధికారిక టూర్ ప్యాకేజీ",
  "Meals": "భోజన సదుపాయం",
  "100% Satvik Brahmin": "100% సాత్విక బ్రాహ్మణ భోజనం",
  "100% Satvik Wholesome Meals": "100% పరిశుభ్రమైన సాత్విక భోజనం",
  "Senior Citizen Priority Care": "సీనియర్ సిటిజన్లకు ప్రాధాన్యత",
  "Approved by Dept of Tourism, Govt of India": "భారత ప్రభుత్వ పర్యాటక శాఖ ఆమోదితం",
  "Direct Office & Booking Contact": "ఆఫీస్ & బుకింగ్ సంప్రదింపు నంబర్లు",
  "Send Enquiry for this Tour": "ఈ టూర్ కోసం విచారించండి",
  "Instant WhatsApp Enquiry": "తక్షణ వాట్సాప్ విచారణ",
  "WhatsApp Enquiry": "వాట్సాప్ విచారణ",
  "Send Enquiry": "విచారణ పంపండి",
  "Submit Sacred Yatra Enquiry": "పవిత్ర యాత్రా విచారణను పంపండి",
  "Submit Enquiry": "విచారణ సమర్పించండి",
  "Send Enquiry via WhatsApp": "వాట్సాప్ ద్వారా విచారణ పంపండి",
  "Selected Tour": "ఎంపిక చేసిన టూర్",
  "Number of Travellers": "యాత్రికుల సంఖ్య",
  "1 Person": "1 వ్యక్తి",
  "2 Persons": "2 వ్యక్తులు",
  "3 Persons": "3 వ్యక్తులు",
  "4 Persons": "4 వ్యక్తులు",
  "5+ Persons (Family/Group)": "5+ వ్యక్తులు (కుటుంబం/గ్రూప్)",
  "Full Name *": "పూర్తి పేరు *",
  "Mobile Number (10 Digits) *": "మొబైల్ నంబర్ (10 అంకెలు) *",
  "Email Address (Optional)": "ఈమెయిల్ చిరునామా (ఐచ్ఛికం)",
  "Special Requirements / Message": "ప్రత్యేక అవసరాలు / సందేశం",
  "Enquiry Sent Successfully ✓": "విచారణ విజయవంతంగా పంపబడింది ✓",
  "Other Custom Date": "ఇతర అనుకూల తేదీ",
  "Vijayawada Headquarters • Est. 1962": "విజయవాడ ప్రధాన కార్యాలయం • స్థాపన 1962",
  "Vijayawada Headquarters &bull; Est. 1962": "విజయవాడ ప్రధాన కార్యాలయం • స్థాపన 1962",
  "Looking for specific tour dates & pricing?": "నిర్దిష్ట ప్రయాణ తేదీలు & ధరల కోసం చూస్తున్నారా?",
  "Looking for specific tour dates &amp; pricing?": "నిర్దిష్ట ప్రయాణ తేదీలు & ధరల కోసం చూస్తున్నారా?",
  "Speak directly with our senior yatra managers.": "మా సీనియర్ యాత్రా మేనేజర్లతో నేరుగా మాట్లాడండి.",
  "Office Timings": "కార్యాలయ పనివేళలు",
  "Monday – Sunday: 9:00 AM – 9:00 PM": "సోమవారం – ఆదివారం: ఉదయం 9:00 నుండి రాత్రి 9:00 వరకు",
  "Ganga Sagar & Puri": "గంగా సాగర్ & పూరీ జగన్నాథ్",
  "Ganga Sagar &amp; Puri": "గంగా సాగర్ & పూరీ జగన్నాథ్",
  "United Arab Emirates": "యునైటెడ్ అరబ్ ఎమిరేట్స్ (యూఏఈ)",
  "Northern Himalayas": "ఉత్తర హిమాలయాలు",
  "Quick Links": "ముఖ్యమైన లింకులు",
  "Head Office:": "ప్రధాన కార్యాలయం:",
  "Booking Helplines:": "బుకింగ్ హెల్ప్‌లైన్లు:",
  "Email:": "ఈమెయిల్:",
  "Terms & Conditions": "నిబంధనలు & షరతులు",
  "Terms &amp; Conditions": "నిబంధనలు & షరతులు",
  "Privacy Policy": "గోప్యతా విధానం",
  "FAQ": "తరచూ అడిగే ప్రశ్నలు",
  "All Rights Reserved.": "సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
  "In the Service of Faith Since 1962": "1962 నుండి పవిత్ర సేవా ప్రస్థానం",
  "In the Service of Faith • Since 1962": "1962 నుండి భక్తి ప్రపత్తులతో నిరంతర సేవలో",
  "In the Service of Faith &bull; Since 1962": "1962 నుండి భక్తి ప్రపత్తులతో నిరంతర సేవలో",
  "Powered by SAB IT SERVICES": "Powered by SAB IT SERVICES",
  "Head Office &amp; Booking": "ప్రధాన కార్యాలయం & బుకింగ్",
  "Photo Gallery (72 Photos)": "ఫోటో గ్యాలరీ (72 చిత్రాలు)",
  "Photo Gallery (/2 Photos)": "ఫోటో గ్యాలరీ",
  "Custom Tour Enquiry": "ప్రత్యేక టూర్ విచారణ",
  "Vijayawada Head Office": "విజయవాడ ప్రధాన కార్యాలయం",
  "Registered Office": "రిజిస్టర్డ్ కార్యాలయం",
  "Company has a very great financial base.": "సంస్థ అత్యంత పటిష్టమైన మరియు విశ్వసనీయమైన ఆర్థిక పునాదిని కలిగి ఉంది.",
  "Mukthinadh Flight Package": "ముక్తినాథ్ ఫ్లైట్ ప్యాకేజీ",
  "Pilgrimage Yatras": "పుణ్యక్షేత్ర యాత్రలు",
  "Open Tour Booking Enquiry Desk →": "టూర్ బుకింగ్ విచారణను ప్రారంభించండి →",
  "Open Tour Booking Enquiry Desk &rarr;": "టూర్ బుకింగ్ విచారణను ప్రారంభించండి →",
  "God's Own Country": "కేరళ (దైవభూమి)",
  "Sacred & Scenic Horizons": "పవిత్ర పుణ్యక్షేత్రాలు & సుందర ప్రకృతి దృశ్యాలు",
  "Sacred &amp; Scenic Horizons": "పవిత్ర పుణ్యక్షేత్రాలు & సుందర ప్రకృతి దృశ్యాలు",
  "Destinations of Wonder & Devotion": "భక్తిప్రపత్తులు & అద్భుతాల గమ్యస్థానాలు",
  "Destinations of Wonder &amp; Devotion": "భక్తిప్రపత్తులు & అద్భుతాల గమ్యస్థానాలు",
  "Dubai & Abu Dhabi": "దుబాయ్ & అబుదాబి",
  "Dubai &amp; Abu Dhabi": "దుబాయ్ & అబుదాబి",
  "✉ Send Enquiry for this Tour": "✉ ఈ టూర్ కోసం విచారించండి",
  "&#9993; Send Enquiry for this Tour": "✉ ఈ టూర్ కోసం విచారించండి",
  "WhatsApp: +91 98481 24759": "వాట్సాప్: +91 98481 24759",
  "Feb 06, 2026": "ఫిబ్రవరి 06, 2026",
  "Mar 14, 2026": "మార్చి 14, 2026",
  "Aug 03, 2026": "ఆగస్టు 03, 2026",
  "Nov 15, 2026": "నవంబర్ 15, 2026",
  "Dodla's Tours & Travels": "దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Dodla's Tours and Travels": "దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Dodla's": "దొడ్ల టూర్స్",
  "Dodla Hemanth Kumar Tour & Travels": "దొడ్ల హేమంత్ కుమార్ టూర్ & ట్రావెల్స్",
  "About us": "మా గురించి",
  "Pilgrimage Tours": "తీర్థయాత్రల ప్యాకేజీలు",
  "Fixed Departure Tours": "ఫిక్స్‌డ్ డిపార్చర్ యాత్రలు",
  "Holiday Tours": "హాలిడే టూర్స్",
  "Enquiry": "విచారణ",
  "Bespoke Enquiry": "ప్రత్యేక యాత్రా విచారణ",
  "Sitemap": "సైట్‌మ్యాప్",
  "FAQs": "తరచూ అడిగే ప్రశ్నలు",
  "Terms and Conditions": "నిబంధనలు & షరతులు",
  "View Details": "వివరాలు చూడండి",
  "View Tour Details": "యాత్రా వివరాలు చూడండి",
  "Explore Tour": "యాత్ర వివరాలు చూడండి",
  "Book Now": "ఇప్పుడే బుక్ చేసుకోండి",
  "Call Us": "మాకు కాల్ చేయండి",
  "Email Us": "మాకు ఈమెయిల్ చేయండి",
  "Back to Top": "పైకి వెళ్లండి",
  "© 1962–2026 Dodla's Tours & Travels. All Rights Reserved.": "© 1962–2026 దొడ్ల టూర్స్ & ట్రావెల్స్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
  "© 1962-2026 Dodla's Tours & Travels. All Rights Reserved.": "© 1962–2026 దొడ్ల టూర్స్ & ట్రావెల్స్. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
  "Besant Road / Bandar Road, Governorpet, Vijayawada 520002, Andhra Pradesh": "బెసెంట్ రోడ్ / బందరు రోడ్, గవర్నర్‌పేట, విజయవాడ 520002, ఆంధ్రప్రదేశ్",
  "Governorpet, Vijayawada 520002, Andhra Pradesh": "గవర్నర్‌పేట, విజయవాడ 520002, ఆంధ్రప్రదేశ్",
  "QUICK LINKS": "ముఖ్య లింకులు",
  "OUR HERITAGE": "మా వారసత్వం",
  "CONTACT US": "మమ్మల్ని సంప్రదించండి",
  "HEAD OFFICE & BOOKING": "ప్రధాన కార్యాలయం & బుకింగ్స్",
  "FOLLOW US": "మమ్మల్ని ఫాలో అవ్వండి",
  "64 Years": "64 ఏళ్లు",
  "Sacred Journeys": "పవిత్ర యాత్రలు",
  "of": "",
  "Founded in 1962 by Yatra Tapasvi Dodla Ramarao, we have been serving pilgrims and travellers for over 64 years with dedicated, reliable and comfortable tour services across India.": "1962లో యాత్ర తపస్వి దొడ్ల రామారావు గారిచే స్థాపించబడి, గత 64 సంవత్సరాలుగా భక్తులకు మరియు యాత్రికులకు అత్యంత నిబద్ధతతో, విశ్వసనీయమైన మరియు సౌకర్యవంతమైన యాత్రా సేవలను అందిస్తున్నాము.",
  "Curated Pilgrimages Since 1962": "1962 నుండి విశిష్ట పుణ్యక్షేత్ర యాత్రలు",
  "Departure Month": "ప్రయాణ నెల",
  "Search Sacred Tours": "యాత్రలను వెతకండి",
  "Trusted Travel Service for 64 Years": "64 ఏళ్లుగా నిరంతర భక్తజన సేవ",
  "Govt Approved": "ప్రభుత్వ గుర్తింపు",
  "Ministry of Tourism Recognized": "భారత పర్యాటక శాఖ ఆమోదం",
  "Senior Care Priority": "సీనియర్ సిటిజన్ ప్రాధాన్యత",
  "Satvik Meals & Medical Care": "సాత్విక భోజనం & అత్యవసర వైద్య సంరక్షణ",
  "AC Luxury Fleet": "ఎయిర్ కండీషన్డ్ లగ్జరీ బస్సులు",
  "Comfortable Volvo & Coaches": "విశాలమైన వోల్వో & కోచ్‌లు",
  "24/7 Dedicated Assistance": "నిరంతర యాత్రా సహాయం",
  "Late Sri Dodla Ramarao / Dodla Hemanth Kumar": "స్వర్గీయ శ్రీ దొడ్ల రామారావు / దొడ్ల హేమంత్ కుమార్",
  "Founder • Managing Director": "వ్యవస్థాపకులు • మేనేజింగ్ డైరెక్టర్",
  "Let us help you plan a meaningful and memorable yatra with senior citizen priority, pure satvik food, and comfortable AC transport.": "సీనియర్ సిటిజన్లకు ప్రత్యేక సౌకర్యాలు, స్వచ్ఛమైన సాత్విక భోజనం మరియు సౌకర్యవంతమైన ఎయిర్ కండీషన్డ్ ప్రయాణంతో మీకు మరపురాని పవిత్ర యాత్రను ప్లాన్ చేయడంలో మేము సహకరిస్తాము.",
  "Kedarnath Dham, Uttarakhand": "కేదార్‌నాథ్ ధామ్, ఉత్తరాఖండ్",
  "Badrinath Dham, Uttarakhand": "బద్రీనాథ్ ధామ్, ఉత్తరాఖండ్",
  "Tirumala Tirupati, Andhra Pradesh": "తిరుమల తిరుపతి, ఆంధ్రప్రదేశ్",
  "Leadership & Heritage • Since 1962": "నాయకత్వం & వారసత్వం • 1962 నుండి",
  "Leadership & Heritage &bull; Since 1962": "నాయకత్వం & వారసత్వం • 1962 నుండి",
  "Six Decades of Devotional Leadership & Sacred Service": "ఆరు దశాబ్దాల భక్తిపూర్వక నాయకత్వం & పవిత్ర సేవా ప్రస్థానం",
  "Six Decades of Devotional Leadership &amp; Sacred Service": "ఆరు దశాబ్దాల భక్తిపూర్వక నాయకత్వం & పవిత్ర సేవా ప్రస్థానం",
  "Dodla's Tours & Travels has been conducting pilgrimage tours under the leadership of Yatra Tapasvi Dodla Ramarao, with the successful management of his elder son Dodla Hemanth Kumar.": "యాత్ర తపస్వి దొడ్ల రామారావు గారి మార్గదర్శకత్వంలో మరియు వారి పెద్ద కుమారుడు దొడ్ల హేమంత్ కుమార్ సమర్థవంతమైన నిర్వహణలో దొడ్ల టూర్స్ & ట్రావెల్స్ సుదీర్ఘకాలంగా భక్తిశ్రద్ధలతో తీర్థయాత్రలను నిర్వహిస్తోంది.",
  "Dodla's Tours &amp; Travels has been conducting pilgrimage tours under the leadership of Yatra Tapasvi Dodla Ramarao, with the successful management of his elder son Dodla Hemanth Kumar.": "యాత్ర తపస్వి దొడ్ల రామారావు గారి మార్గదర్శకత్వంలో మరియు వారి పెద్ద కుమారుడు దొడ్ల హేమంత్ కుమార్ సమర్థవంతమైన నిర్వహణలో దొడ్ల టూర్స్ & ట్రావెల్స్ సుదీర్ఘకాలంగా భక్తిశ్రద్ధలతో తీర్థయాత్రలను నిర్వహిస్తోంది.",
  "Dodla's Tours & Travels has been conducting pilgrimage tours under the leadership of <strong>Yatra Tapasvi Dodla Ramarao</strong>, with the successful management of his elder son <strong>Dodla Hemanth Kumar</strong>.": "యాత్ర తపస్వి <strong>దొడ్ల రామారావు</strong> గారి మార్గదర్శకత్వంలో మరియు వారి పెద్ద కుమారుడు <strong>దొడ్ల హేమంత్ కుమార్</strong> సమర్థవంతమైన నిర్వహణలో దొడ్ల టూర్స్ & ట్రావెల్స్ సుదీర్ఘకాలంగా భక్తిశ్రద్ధలతో తీర్థయాత్రలను నిర్వహిస్తోంది.",
  "Pilgrims participate in our tours not only from Andhra Pradesh but also from many other places across India. We are grateful for their continued support.": "ఆంధ్రప్రదేశ్‌ నుండే కాకుండా భారతదేశంలోని అనేక ఇతర ప్రాంతాల నుండి కూడా భక్తులు మా యాత్రలలో విశేషంగా పాల్గొంటున్నారు. వారి నిరంతర ఆదరాభిమానాలకు మేము హృదయపూర్వక కృతజ్ఞతలు తెలియజేస్తున్నాము.",
  "ESTABLISHMENT — 1962": "సంస్థ స్థాపన — 1962",
  "Dodla Hemanth Kumar Tour & Travels was formed in the year 1962.": "దొడ్ల హేమంత్ కుమార్ టూర్ & ట్రావెల్స్ సంస్థ 1962వ సంవత్సరంలో స్థాపించబడింది.",
  "Dodla Hemanth Kumar Tour & Travels was formed in the year 1962. With dedicated guidance, ethical operations, and sacred devotion, we continue serving pilgrims and travellers with care, satvik dining, and comfortable transport across India.": "దొడ్ల హేమంత్ కుమార్ టూర్ & ట్రావెల్స్ సంస్థ 1962వ సంవత్సరంలో స్థాపించబడింది. అంకితభావంతో కూడిన మార్గదర్శకత్వం, నైతిక విలువలు మరియు పవిత్ర భక్తితో, మేము భారతదేశం అంతటా భక్తులకు మరియు యాత్రికులకు స్వచ్ఛమైన సాత్విక ఆహారం మరియు సౌకర్యవంతమైన రవాణా సేవలను అందిస్తున్నాము.",
  "1962 నుండి": "1962 నుండి",
  "Established": "స్థాపన",
  "All-India Bus Tours": "అఖిల భారత బస్సు యాత్రలు",
  "Govt. of India": "భారత ప్రభుత్వం",
  "Approved Tourism": "ఆమోదిత పర్యాటక సంస్థ",
  "PSA": "అధికారిక PSA",
  "Indian Airlines": "ఇండియన్ ఎయిర్‌లైన్స్",
  "Official Accreditations & Capabilities": "అధికారిక గుర్తింపులు & రవాణా సదుపాయాలు",
  "Official Accreditations &amp; Capabilities": "అధికారిక గుర్తింపులు & రవాణా సదుపాయాలు",
  "Verified government recognition, transportation infrastructure, and travel capabilities preserved from our founding documentation.": "మా ప్రారంభ పత్రాల నుండి భద్రపరచబడిన ప్రభుత్వ గుర్తింపులు, ఆధునిక రవాణా సదుపాయాలు మరియు విశిష్ట యాత్రా సామర్థ్యం.",
  "GOVERNMENT OF INDIA ACCREDITATION": "భారత ప్రభుత్వ అధికారిక గుర్తింపు",
  "SPECIALIZED TRAIN TOURS": "ప్రత్యేక రైలు యాత్రలు",
  "Handling FIT and Groups of Cultural Interest Tours, Special Interest Tours, Incentive Tours, Business Travellers Tours, Conference and Convention from around the globe.": "ప్రపంచవ్యాప్తంగా సాంస్కృతిక యాత్రలు, ప్రత్యేక ఆసక్తి టూర్లు, కార్పొరేట్ ఇన్సెంటివ్ యాత్రలు, బిజినెస్ ప్రయాణాలు, మరియు అంతర్జాతీయ సదస్సుల గ్రూపులు మరియు వ్యక్తిగత యాత్రికులను సమర్థవంతంగా నిర్వహిస్తున్నాము.",
  "PIONEERING ALL-INDIA BUS TOURS": "అఖిల భారత బస్సు యాత్రలు",
  "Tours Bus was launched in 1975 to all over India. AC Volvo buses are also available in our company.": "1975లో భారతదేశం అంతటా టూర్స్ బస్సు సేవలు ప్రారంభించబడ్డాయి. మా సంస్థలో అత్యాధునిక ఎయిర్ కండీషన్డ్ వోల్వో బస్సులు కూడా అందుబాటులో ఉన్నాయి.",
  "AUTHORISED AIRLINES TICKETING": "అధికారిక విమాన టికెటింగ్",
  "Company is Passenger Sales Agent for Indian Airlines and several other private airlines operating internationally.": "మా సంస్థ ఇండియన్ ఎయిర్‌లైన్స్ మరియు అంతర్జాతీయంగా సేవలందించే ప్రముఖ ప్రైవేట్ ఎయిర్‌లైన్స్‌కు అధికారిక ప్యాసింజర్ సేల్స్ ఏజెంట్ (PSA)గా గుర్తింపు పొందింది.",
  "EXTENSIVE TRANSPORT FLEET": "విశాలమైన రవాణా వాహన శ్రేణి",
  "We have a large fleet of vehicles which include large and mini coaches, Tempo Traveller, Toyota Innova and Chevrolet Tavera cars. We also work with transport providers to arrange vehicles for conferences and charter movements. Transport on water is also available.": "మా వద్ద పెద్ద మరియు మినీ కోచ్‌లు, టెంపో ట్రావెలర్స్, టయోటా ఇన్నోవా మరియు చెవ్రోలెట్ తవేరా కార్లతో కూడిన భారీ వాహన శ్రేణి ఉంది. సదస్సులు మరియు ప్రత్యేక చార్టర్ ప్రయాణాలకు కూడా వాహనాలను సమకూరుస్తాము. జల రవాణా (బోటింగ్) సదుపాయం కూడా అందుబాటులో ఉంది.",
  "LANGUAGE SPEAKING GUIDES / ESCORTS": "బహుభాషా యాత్రా గైడ్లు & సహాయకులు",
  "MULTILINGUAL GUIDES & ESCORTS": "బహుభాషా యాత్రా గైడ్లు & సహాయకులు",
  "MULTILINGUAL GUIDES &amp; ESCORTS": "బహుభాషా యాత్రా గైడ్లు & సహాయకులు",
  "We have highly qualified and experienced guides and escorts for various languages like Italian, French, German, Spanish, Japanese, Russian and Chinese, providing personalized services to customers.": "ఇటాలియన్, ఫ్రెంచ్, జర్మన్, స్పానిష్, జపనీస్, రష్యన్ మరియు చైనీస్ వంటి వివిధ భాషలలో అత్యంత నైపుణ్యం మరియు అనుభవం కలిగిన గైడ్లు మరియు ఎస్కార్ట్స్ మా వద్ద ఉన్నారు, వీరు భక్తులకు మరియు యాత్రికులకు వ్యక్తిగత సేవలను అందిస్తారు.",
  "FINANCIALS": "ఆర్థిక స్థిరత్వం",
  "FINANCIAL STABILITY": "ఆర్థిక స్థిరత్వం",
  "AUTHENTIC ARCHIVE PHOTOGRAPHS • AUTO-SLIDING EVERY 4 SECONDS": "అసలైన ఆర్కైవ్ ఛాయాచిత్రాలు • ప్రతి 4 సెకన్లకు ఆటో-స్లైడ్",
  "AUTHENTIC ARCHIVE PHOTOGRAPHS &bull; AUTO-SLIDING EVERY 4 SECONDS": "అసలైన ఆర్కైవ్ ఛాయాచిత్రాలు • ప్రతి 4 సెకన్లకు ఆటో-స్లైడ్",
  "Original Dodla's 1975 All-India Tourist Coach & Staff": "1975 నాటి దొడ్ల తొలి ఆల్-ఇండియా టూరిస్ట్ బస్సు & యాత్ర సిబ్బంది",
  "Original Dodla's 1975 All-India Tourist Coach &amp; Staff": "1975 నాటి దొడ్ల తొలి ఆల్-ఇండియా టూరిస్ట్ బస్సు & యాత్ర సిబ్బంది",
  "Founder Yatra Tapasvi Dodla Ramarao & Management Since 1962": "1962 నుండి పవిత్ర సేవా వారసత్వం — వ్యవస్థాపకులు యాత్ర తపస్వి దొడ్ల రామారావు",
  "Founder Yatra Tapasvi Dodla Ramarao &amp; Management Since 1962": "1962 నుండి పవిత్ర సేవా వారసత్వం — వ్యవస్థాపకులు యాత్ర తపస్వి దొడ్ల రామారావు",
  "108 Vaishnava Divya Desam Yatra": "108 వైష్ణవ దివ్యదేశాల యాత్ర",
  "Kasi Varanasi Rameswaram Special Train Tour": "కాశీ వారణాసి రామేశ్వరం ప్రత్యేక రైలు యాత్ర",
  "Kasi Allahabad Gaya Yatra": "కాశీ అలహాబాద్ గయ పవిత్ర యాత్ర",
  "Kasi - Allahabad - Gaya Yatra": "కాశీ - అలహాబాద్ - గయ యాత్ర",
  "Char Dham Yatra - Uttarakhand": "చార్‌ధామ్ పవిత్ర యాత్ర - ఉత్తరాఖండ్",
  "Chardham Yatra": "చార్‌ధామ్ యాత్ర",
  "Amarnath Yatra & Kashmir Paradise": "అమర్‌నాథ్ యాత్ర & కాశ్మీర్ దర్శనం",
  "12 Jyotirlinga Darshan All-India Tour": "ద్వాదశ జ్యోతిర్లింగ దర్శనం అఖిల భారత యాత్ర",
  "12 Jyotirlinga Darshan": "ద్వాదశ జ్యోతిర్లింగ దర్శనం",
  "Kailash Mansarovar Yatra": "కైలాస మానససరోవర పవిత్ర యాత్ర",
  "Sri Lanka Ramayana Trail & Shankari Devi": "శ్రీలంక రామాయణ యాత్ర & శంకరీ దేవి దర్శనం",
  "Shirdi Pandharpur Mahabaleshwar Yatra": "షిర్డీ పండరీపురం మహాబలేశ్వర్ యాత్ర",
  "Shirdi - Pandharpur - Mahabaleshwar": "షిర్డీ - పండరీపురం - మహాబలేశ్వర్",
  "Tirupati Balaji & South Temple Tour": "తిరుపతి బాలాజీ & దక్షిణ భారత ఆలయాల యాత్ర",
  "Golden Triangle with Varanasi": "గోల్డెన్ ట్రయాంగిల్ & కాశీ వారణాసి టూర్",
  "Puri Jagannath & Konark Sun Temple": "పూరీ జగన్నాథ్ & కోణార్క్ సూర్య దేవాలయం",
  "Detailed day-by-day sequence of temple darshans and destinations": "రోజువారీ ఆలయ దర్శనాలు, ప్రయాణ వివరాలు మరియు విశేషాల పూర్తి సమాచారం",
  "Dates & Pricing Information": "తేదీలు & ధరల వివరాలు",
  "Fixed departure schedules, package tariff options, and inclusions": "ఫిక్స్‌డ్ డిపార్చర్ ప్రయాణ తేదీలు, ప్యాకేజీ ధరలు మరియు సౌకర్యాల వివరాలు",
  "Sacred Photo Gallery": "పవిత్ర చిత్రమాలిక",
  "Photographs from this sacred pilgrimage route and temple destinations": "ఈ పవిత్ర పుణ్యక్షేత్ర మార్గం మరియు ఆలయ దర్శనాల వాస్తవ ఛాయాచిత్రాలు",
  "Pilgrimage Guidelines & Inclusions": "యాత్రా నిబంధనలు & సౌకర్యాలు",
  "What Is Included": "యాత్రలో చేర్చబడినవి",
  "What Is Not Included": "చేర్చబడని అంశాలు",
  "Starting From": "ప్రారంభ ధర",
  "Duration": "వ్యవధి",
  "Upcoming Departures": "రాబోయే ప్రయాణ తేదీలు",
  "Travel Style": "ప్రయాణ విధానం",
  "Group Pilgrimage": "సమూహ తీర్థయాత్ర (గ్రూప్ యాత్ర)",
  "Guided Group Tour": "గైడెడ్ గ్రూప్ యాత్ర",
  "Accommodation": "వసతి సదుపాయం",
  "Deluxe Hotels & Yatri Niwas": "డీలక్స్ హోటళ్ళు & యాత్రి నివాస్",
  "Deluxe Hotel Accommodation": "డీలక్స్ హోటల్ వసతి",
  "Food & Dining": "భోజన సదుపాయం",
  "Pure Satvik Vegetarian (South Indian)": "స్వచ్ఛమైన సాత్విక శాకాహార భోజనం (దక్షిణ భారత శైలి)",
  "Pure Satvik South Indian Food": "స్వచ్ఛమైన సాత్విక దక్షిణ భారత భోజనం",
  "Transportation": "రవాణా సదుపాయం",
  "AC Deluxe Pushback Coach / Flight": "ఎయిర్ కండీషన్డ్ డీలక్స్ పుష్‌బ్యాక్ కోచ్ / విమానం",
  "AC Deluxe Luxury Bus": "ఎయిర్ కండీషన్డ్ లగ్జరీ బస్సు",
  "AC Pushback Coach": "ఎయిర్ కండీషన్డ్ పుష్‌బ్యాక్ కోచ్",
  "Return Date": "తిరుగు ప్రయాణ తేదీ",
  "Occupancy / Room Type": "గది రకం / పంపకం",
  "Tariff Per Person": "ఒక్కొక్కరికి ధర",
  "Booking Status": "బుకింగ్ స్థితి",
  "Available": "అందుబాటులో ఉంది",
  "Filling Fast": "త్వరగా భర్తీ అవుతున్నాయి",
  "Guaranteed Departure": "ఖచ్చితమైన ప్రయాణం",
  "Twin Sharing": "ఇద్దరికి ఒక గది (Twin Sharing)",
  "Triple Sharing": "ముగ్గురికి ఒక గది (Triple Sharing)",
  "Single Occupancy": "ఒక్కరికే ప్రత్యేక గది (Single)",
  "PLANNING DATE": "ప్రయాణ తేదీ",
  "Planning Date": "ప్రయాణ తేదీ",
  "Travel Date": "ప్రయాణ తేదీ",
  "Arrival Date": "చేరుకునే తేదీ",
  "NAME": "పూర్తి పేరు",
  "Name": "పేరు",
  "Your Name": "మీ పేరు",
  "Enter Your Name": "మీ పూర్తి పేరును నమోదు చేయండి",
  "PHONE NUMBER": "ఫోన్ నంబర్",
  "Phone Number": "ఫోన్ నంబర్",
  "Mobile Number": "మొబైల్ నంబర్",
  "Enter Your Phone Number": "మీ మొబైల్ నంబర్ నమోదు చేయండి",
  "Enter Your Mobile Number": "మీ మొబైల్ నంబర్ నమోదు చేయండి",
  "EMAIL-ID": "ఈమెయిల్ చిరునామా",
  "Email-Id": "ఈమెయిల్ చిరునామా",
  "Email Address": "ఈమెయిల్ చిరునామా",
  "Enter Your Email-id": "మీ ఈమెయిల్ చిరునామా నమోదు చేయండి",
  "Enter Your Email Address": "మీ ఈమెయిల్ చిరునామా నమోదు చేయండి",
  "NUMBER OF TRAVELLERS": "యాత్రికుల సంఖ్య",
  "Number of Persons": "వ్యక్తుల సంఖ్య",
  "Select Persons": "యాత్రికుల సంఖ్యను ఎంచుకోండి",
  "MESSAGE": "సందేశం",
  "Message": "సందేశం",
  "ENTER YOUR MESSAGE": "మీ సందేశం / ప్రత్యేక అవసరాలు నమోదు చేయండి",
  "Enter Message Here": "మీ సందేశం లేదా సందేహాలను ఇక్కడ రాయండి",
  "Special Requirements": "ప్రత్యేక అవసరాలు",
  "Send Tour Enquiry": "యాత్రా విచారణ పంపండి",
  "Fill in the form below to receive detailed itinerary, pricing, and availability.": "వివరణాత్మక యాత్రా ప్రణాళిక, ధరల వివరాలు మరియు సీట్ల లభ్యత కోసం క్రింది ఫారమ్‌ను పూరించండి.",
  "Send Message": "సందేశం పంపండి",
  "Close": "మూసివేయి",
  "Call for Instant Booking": "తక్షణ బుకింగ్ కోసం కాల్ చేయండి",
  "Complete Travel Services": "సంపూర్ణ ప్రయాణ సేవలు",
  "Pioneering Pilgrimage & Travel Infrastructure Since 1962": "1962 నుండి నిరంతర తీర్థయాత్రలు & ఆధునిక ప్రయాణ సదుపాయాలు",
  "Our Comprehensive Services": "మా సమగ్ర సేవలు",
  "Delivering trust, comfort, and reverence across every journey with end-to-end travel logistics.": "ప్రతి ప్రయాణంలోనూ విశ్వసనీయత, సంపూర్ణ సౌకర్యం మరియు భక్తిభావాన్ని అందిస్తున్నాము.",
  "All-India Luxury Bus Fleet": "అఖిల భారత లగ్జరీ బస్సు సేవలు",
  "Launched in 1975, our fleet features modern AC Volvo buses, deluxe pushback coaches, and comfortable Tempo Travellers with experienced drivers.": "1975లో ప్రారంభమైన మా రవాణా వ్యవస్థలో ఆధునిక ఎయిర్ కండీషన్డ్ వోల్వో బస్సులు, డీలక్స్ కోచ్‌లు మరియు అనుభవజ్ఞులైన డ్రైవర్లతో కూడిన టెంపో ట్రావెలర్స్ ఉన్నాయి.",
  "Authorized Airline Passenger Sales Agent": "అధికారిక విమాన టికెటింగ్ సేవలు (PSA)",
  "Recognized Passenger Sales Agent (PSA) for Indian Airlines and leading domestic & international carriers for seamless ticketing and group reservations.": "ఇండియన్ ఎయిర్‌లైన్స్ మరియు ప్రముఖ దేశీయ, అంతర్జాతీయ విమానయాన సంస్థలకు అధికారిక ప్యాసింజర్ సేల్స్ ఏజెంట్ (PSA)గా విమాన టికెటింగ్ మరియు గ్రూప్ రిజర్వేషన్లను సమకూరుస్తున్నాము.",
  "Special Interest & Cultural Train Tours": "ప్రత్యేక సాంస్కృతిక రైలు యాత్రలు",
  "Customized group rail itineraries, special tourist trains, and conference movements across heritage circuits of India with dedicated managers.": "భారతదేశంలోని ప్రముఖ పుణ్యక్షేత్రాలు మరియు చారిత్రక నగరాలకు ప్రత్యేక పర్యాటక రైలు యాత్రలు మరియు గ్రూప్ ప్రయాణాల నిర్వహణ.",
  "Multilingual Tour Guides & Escorts": "బహుభాషా యాత్రా గైడ్లు & సహాయకులు",
  "Highly trained, courteous escorts fluent in Italian, French, German, Spanish, Japanese, Russian, Chinese, Hindi, Telugu and Tamil.": "తెలుగు, హిందీ, తమిళంతో పాటు ఇటాలియన్, ఫ్రెంచ్, జర్మన్, స్పానిష్, జపనీస్, రష్యన్ మరియు చైనీస్ భాషలలో ప్రావీణ్యం ఉన్న అనుభవజ్ఞులైన గైడ్లు మరియు సహాయకులు.",
  "Water & River Transport Arrangements": "నదీ & జల రవాణా ఏర్పాట్లు",
  "Sacred river boat cruises and holy sangam crossings at Triveni Sangam Prayagraj, Varanasi Ganga ghats, and coastal pilgrimage shrines.": "కాశీ గంగా ఘాట్లు, ప్రయాగ్‌రాజ్ త్రివేణి సంగమం మరియు తీరప్రాంత పుణ్యక్షేత్రాలలో భక్తుల కోసం సురక్షితమైన పవిత్ర నదీ బోటింగ్ సదుపాయాలు.",
  "Strong Financial Foundation": "పటిష్టమైన ఆర్థిక స్థిరత్వం",
  "Over six decades of ethical operations, sound financial grounding, and long-standing supplier relationships ensuring worry-free travel.": "ఆరు దశాబ్దాల సుదీర్ఘ నైతిక నిర్వహణ, పటిష్టమైన ఆర్థిక పునాది మరియు విశ్వసనీయతతో నిశ్చింతైన యాత్రా అనుభవం.",
  "Get in Touch with Dodla's": "దొడ్ల టూర్స్‌ను సంప్రదించండి",
  "Visit Our Office or Connect with Our Pilgrimage Experts": "మా కార్యాలయాన్ని సందర్శించండి లేదా మా యాత్రా నిపుణులను సంప్రదించండి",
  "Head Office & Booking Center": "ప్రధాన కార్యాలయం & బుకింగ్ కేంద్రం",
  "Besant Road, Governorpet, Vijayawada": "బెసెంట్ రోడ్, గవర్నర్‌పేట, విజయవాడ",
  "Direct Phone Assistance": "ప్రత్యక్ష ఫోన్ సహాయం",
  "Call anytime between 9:00 AM to 9:00 PM": "ఉదయం 9:00 నుండి రాత్రి 9:00 గంటల వరకు సంప్రదించండి",
  "Email Inquiries": "ఈమెయిల్ విచారణలు",
  "Send us your requirements anytime": "మీ సందేహాలను ఎప్పుడైనా మాకు ఈమెయిల్ చేయవచ్చు",
  "Working Hours": "పనివేళలు",
  "Monday to Sunday: 9:00 AM – 9:00 PM": "సోమవారం నుండి ఆదివారం వరకు: ఉదయం 9:00 – రాత్రి 9:00",
  "Open 365 Days a Year": "సంవత్సరంలో 365 రోజులూ అందుబాటులో ఉంటాము",
  "Frequently Asked Questions": "తరచూ అడిగే ప్రశ్నలు (FAQ)",
  "Everything You Need to Know About Our Pilgrimage & Holiday Tours": "మా తీర్థయాత్రలు మరియు హాలిడే టూర్ల గురించి సంపూర్ణ సమాచారం",
  "How do I book a tour with Dodla's Tours & Travels?": "దొడ్ల టూర్స్ & ట్రావెల్స్‌లో యాత్రను ఎలా బుక్ చేసుకోవాలి?",
  "You can book by visiting our head office in Governorpet, Vijayawada, calling our helpline numbers (+91 98481 24759 / +91 94945 31001), or sending an enquiry through our website or WhatsApp.": "విజయవాడ గవర్నర్‌పేటలోని మా ప్రధాన కార్యాలయాన్ని నేరుగా సందర్శించడం ద్వారా లేదా మా హెల్ప్‌లైన్ నంబర్లకు (+91 98481 24759 / +91 94945 31001) కాల్ చేయడం ద్వారా లేదా మా వెబ్‌సైట్ మరియు వాట్సాప్ ద్వారా సులభంగా బుక్ చేసుకోవచ్చు.",
  "What kind of food is provided during the pilgrimage tours?": "తీర్థయాత్రలలో ఎలాంటి భోజన సదుపాయం కల్పిస్తారు?",
  "We provide fresh, pure Satvik vegetarian South Indian food prepared by our dedicated cooks who travel with the group.": "మా గ్రూప్‌తో పాటు వచ్చే ప్రత్యేక దక్షిణ భారత వంటగాళ్లచే స్వచ్ఛమైన, వేడివేడి సాత్విక శాకాహార భోజనాన్ని ప్రతి మజిలీ వద్ద శుచిగా వండి వడ్డిస్తాము.",
  "Is special care provided for senior citizens?": "సీనియర్ సిటిజన్లకు ప్రత్యేక సౌకర్యాలు ఉంటాయా?",
  "Yes, our tour managers provide special assistance, priority seat allocations, comfortable paced itineraries, and temple darshan support for elderly pilgrims.": "అవును, మా టూర్ మేనేజర్లు వృద్ధులకు ప్రత్యేక సహకారం, బస్సులో ముందు సీట్లు, నిదానమైన ప్రయాణ ప్రణాళిక మరియు దర్శన సమయాల్లో తగిన సహాయాన్ని అందిస్తారు.",
  "Are flight tickets and railway reservations included?": "రైలు మరియు విమాన టికెట్లు ప్యాకేజీలో భాగమేనా?",
  "Train and flight reservations can be arranged as part of the package or separately based on the specific tour itinerary chosen.": "ఎంచుకున్న ప్యాకేజీని బట్టి రైలు మరియు విమాన టికెట్లు ప్యాకేజీలోనే లేదా ప్రత్యేకంగా బుక్ చేసి అందించబడతాయి.",
  "AC Coach / Flight transportation as per tour itinerary": "టూర్ ప్లాన్ ప్రకారం ఎయిర్ కండీషన్డ్ కోచ్ / విమాన ప్రయాణ సదుపాయం",
  "Wholesome Satvik vegetarian meals (Breakfast, Lunch & Dinner)": "స్వచ్ఛమైన సాత్విక శాకాహార భోజనం (ఉదయం అల్పాహారం, మధ్యాహ్నం & రాత్రి భోజనం)",
  "Quality deluxe hotel accommodations on twin/triple sharing": "ట్విన్ / ట్రిపుల్ షేరింగ్ ప్రాతిపదికన నాణ్యమైన డీలక్స్ హోటల్ వసతి",
  "Experienced pilgrimage tour escort throughout the journey": "యాత్ర ప్రారంభం నుండి ముగింపు వరకు అనుభవజ్ఞులైన టూర్ మేనేజర్ మార్గదర్శకత్వం",
  "All toll taxes, parking fees, driver allowance, and road permits": "అన్ని టోల్ టాక్స్‌లు, పార్కింగ్ ఫీజులు, డ్రైవర్ భత్యం మరియు రాష్ట్ర రోడ్ పర్మిట్లు",
  "Temple special entry / VIP darshan tickets (unless specified)": "ప్రత్యేక ఆలయ ప్రవేశ / VIP దర్శన టికెట్లు (నిర్దేశించినవి మినహా)",
  "Personal expenses such as laundry, phone calls, camera fees": "లాండ్రీ, వ్యక్తిగత ఫోన్ కాల్స్, కెమెరా రుసుములు వంటి వ్యక్తిగత ఖర్చులు",
  "Any expenses caused by unforeseen natural calamities or flight delays": "ప్రకృతి వైపరీత్యాలు, విమాన ఆలస్యాలు లేదా ఆకస్మిక పరిస్థితుల వల్ల అయ్యే అదనపు ఖర్చులు",
  "Travel and medical insurance": "ప్రయాణ మరియు వ్యక్తిగత వైద్య బీమా",
  "Anything not mentioned in the inclusions section": "సౌకర్యాల జాబితాలో పేర్కొనని ఏ ఇతర వ్యక్తిగత ఖర్చులైనా",
  "+91 94944 78234": "+91 94944 78234",
  "+91 94945 31001": "+91 94945 31001",
  "+91 98481 24759": "+91 98481 24759",
  "+91 98481 24759, 94945 31001, 94944 78234": "+91 98481 24759, 94945 31001, 94944 78234",
  "/ +91 94945 31001": "/ +91 94945 31001",
  "0866-242227, 2424145": "0866-242227, 2424145",
  "10 Days": "10 రోజులు",
  "10 Days / 9 Nights": "10 రోజులు / 9 రాత్రులు",
  "10,006/-": "10,006/-",
  "11 DAYS": "11 రోజులు",
  "11 Days": "11 రోజులు",
  "12 Days": "12 రోజులు",
  "14 Days": "14 రోజులు",
  "14 days": "14 రోజులు",
  "15 Days": "15 రోజులు",
  "16 Days": "16 రోజులు",
  "17 Days": "17 రోజులు",
  "2 Days": "2 రోజులు",
  "4 Days": "4 రోజులు",
  "4 Days / 3 Nights": "4 రోజులు / 3 రాత్రులు",
  "40,092//-": "40,092//-",
  "5 Days": "5 రోజులు",
  "5 Days / 4 Nights": "5 రోజులు / 4 రాత్రులు",
  "6 Days": "6 రోజులు",
  "7 Days": "7 రోజులు",
  "8 Days": "8 రోజులు",
  "9 Days": "9 రోజులు",
  "Enquire for 108 Vaishnava Divya Desala Yatra": "108 వైష్ణవ దివ్యదేశాల యాత్ర విచారణ",
  "Enquire for Dubai International Spectacular Tour": "దుబాయ్ ఇంటర్నేషనల్ టూర్ విచారణ",
  "Enquire for Ganga Sagar Yatra & Eastern India Circuit": "గంగా సాగర్ యాత్ర & తూర్పు భారత పుణ్యక్షేత్రాలు విచారణ",
  "Enquire for Gangtok Pelling Darjeeling Himalayan Tour": "గ్యాంగ్‌టక్ పెల్లింగ్ డార్జిలింగ్ హిమాలయన్ టూర్ విచారణ",
  "Enquire for Kerala Divine & Leisure Tour": "కేరళ దివ్య దర్శనాలు & విహార యాత్ర విచారణ",
  "Enquire for Muktinath Flight Package & Nepal Yatra": "ముక్తినాథ్ విమాన ప్యాకేజీ & నేపాల్ యాత్ర విచారణ",
  "Enquire for Odisha Andhra Heritage Tour Ex-Bhubaneswar": "ఒడిశా ఆంధ్ర హెరిటేజ్ యాత్ర (భువనేశ్వర్ నుండి) విచారణ",
  "Enquire for Patala Bhubaneswar Cave Temple & Kumaon Tour": "పాతాళ భువనేశ్వర్ గుహాలయ & కుమావున్ యాత్ర విచారణ",
  "Enquire for Sacred Amarnath Yatra with Vaishno Devi": "పవిత్ర అమర్‌నాథ్ యాత్ర & వైష్ణో దేవి దర్శనం విచారణ",
  "Enquire for Singapore, Malaysia & Luxury Cruise Tour": "సింగపూర్, మలేషియా & లగ్జరీ క్రూజ్ టూర్ విచారణ",
  "Enquire for Sri Lanka Ramayana Trail & Shankari Devi Yatra": "శ్రీలంక రామాయణ యాత్ర & శంకరీ దేవి దర్శనం విచారణ",
  "Rs. 15000": "₹15000 ఒక్కొక్కరికి",
  "Rs. 41,999": "₹41,999 ఒక్కొక్కరికి",
  "Rs. 54,999": "₹54,999 ఒక్కొక్కరికి",
  "dodlahemanth@gmail.com": "dodlahemanth@gmail.com",
  "₹1,24,999": "₹1,24,999 ఒక్కొక్కరికి",
  "₹18,999": "₹18,999 ఒక్కొక్కరికి",
  "₹29,999": "₹29,999 ఒక్కొక్కరికి",
  "₹32,996": "₹32,996 ఒక్కొక్కరికి",
  "₹36,009": "₹36,009 ఒక్కొక్కరికి",
  "₹38,500": "₹38,500 ఒక్కొక్కరికి",
  "₹39,999": "₹39,999 ఒక్కొక్కరికి",
  "₹41,999": "₹41,999 ఒక్కొక్కరికి",
  "₹43,995": "₹43,995 ఒక్కొక్కరికి",
  "₹46,998": "₹46,998 ఒక్కొక్కరికి",
  "₹49,995": "₹49,995 ఒక్కొక్కరికి",
  "₹51,998": "₹51,998 ఒక్కొక్కరికి",
  "₹54,999": "₹54,999 ఒక్కొక్కరికి",
  "₹66,996": "₹66,996 ఒక్కొక్కరికి",
  "₹74,999": "₹74,999 ఒక్కొక్కరికి",
  "₹99,999": "₹99,999 ఒక్కొక్కరికి",
  "Arrival": "చేరుకోవడం",
  "Darshan": "దర్శనం",
  "Temple Darshan": "ఆలయ దర్శనం",
  "Holy Dip": "పవిత్ర స్నానం",
  "Sightseeing": "సందర్శన",
  "Leisure": "విశ్రాంతి",
  "Return": "తిరుగు ప్రయాణం",
  "Transfer": "బదిలీ ప్రయాణం",
  "Drive to": "ప్రయాణం",
  "Proceed to": "బయలుదేరడం",
  "Breakfast": "అల్పాహారం",
  "Lunch": "మధ్యాహ్న భోజనం",
  "Dinner": "రాత్రి భోజనం",
  "Overnight stay": "రాత్రి బస",
  "Night stay": "రాత్రి బస",
  "Stay at": "బస",
  "Hotel": "హోటల్",
  "Deluxe Hotel": "డీలక్స్ హోటల్",
  "Pushback Coach": "పుష్‌బ్యాక్ కోచ్",
  "AC Coach": "ఎయిర్ కండీషన్డ్ కోచ్",
  "Volvo Bus": "వోల్వో బస్సు",
  "Flight": "విమాన ప్రయాణం",
  "Train": "రైలు ప్రయాణం",
  "VIP Darshan": "ప్రత్యేక దర్శనం",
  "Satvik Meals": "సాత్విక భోజనం",
  "Pure Vegetarian": "స్వచ్ఛమైన శాకాహారం",
  "South Indian Food": "దక్షిణ భారత భోజనం",
  "Tour Escort": "టూర్ గైడ్ & ఎస్కార్ట్",
  "Tour Manager": "టూర్ మేనేజర్",
  "Senior Citizen Priority": "సీనియర్ సిటిజన్ ప్రాధాన్యత",
  "24/7 Assistance": "24/7 యాత్రా సహాయం",
  "Guaranteed Departures": "ఖచ్చితమైన ప్రయాణాలు",
  "All-Inclusive": "అన్నీ కలిపిన ప్యాకేజీ",
  "All Inclusive": "అన్నీ కలిపిన ప్యాకేజీ",
  "All": "అన్నీ",
  "All Tours": "అన్ని యాత్రలు",
  "Filter by": "ఫిల్టర్ చేయండి",
  "Price": "ధర",
  "Tariff": "ధరల పట్టిక",
  "Date": "తేదీ",
  "Dates": "తేదీలు",
  "Month": "నెల",
  "Year": "సంవత్సరం",
  "Search": "వెతకండి",
  "Reset": "రీసెట్",
  "Apply": "వర్తింపజేయి",
  "Read More": "మరిన్ని వివరాలు",
  "Show More": "మరింత చూడండి",
  "Show Less": "తక్కువ చూడండి",
  "Highlights": "ముఖ్య విశేషాలు",
  "Itinerary": "యాత్రా ప్రణాళిక",
  "Overview": "సమీక్ష",
  "Guidelines": "నిబంధనలు & సూచనలు",
  "Important Info": "ముఖ్య సమాచారం",
  "Contact Info": "సంప్రదింపు వివరాలు",
  "Location": "ప్రదేశం",
  "Destinations Covered": "కవర్ చేయబడే పుణ్యక్షేత్రాలు",
  "Route": "యాత్రా మార్గం",
  "Starting Point": "ప్రారంభ స్థానం",
  "Ending Point": "ముగింపు స్థానం",
  "Days": "రోజులు",
  "Nights": "రాత్రులు",
  "Single": "ఒక్కరికి",
  "Double": "ఇద్దరికి",
  "Triple": "ముగ్గురికి",
  "Booked": "పూర్తయింది",
  "Upcoming": "రాబోయే యాత్రలు",
  "Completed": "ముగిసినవి",
  "& Luggage Handling Assistance": "& లగేజ్ సహాయం",
  "& Temple Darshan Coordinator": "& ఆలయ దర్శన సమన్వయకర్త",
  "(AC)": "(ఎయిర్ కండీషన్డ్)",
  "(Air suspension)": "(ఎయిర్ సస్పెన్షన్)",
  "(Primary Desk)": "(ప్రధాన డెస్క్)",
  "(Wholesome hygienic meals)": "(పరిశుభ్రమైన సాత్విక భోజనం)",
  "1 DAY": "1 రోజు",
  "1-2 Persons": "1-2 వ్యక్తులు",
  "1. Information We Collect": "1. మేము సేకరించే సమాచారం",
  "10 DAYS 9 NIGHTS": "10 రోజులు 9 రాత్రులు",
  "100% Satvik Hot Meals": "100% వేడివేడి సాత్విక భోజనం",
  "108 Divya Desam": "108 దివ్యదేశాలు",
  "108 Muktidhara Holy Bath": "108 ముక్తిధారల పవిత్ర స్నానం",
  "108 Shiva Temples": "108 శివాలయాలు",
  "11 Scheduled Departures": "11 షెడ్యూల్డ్ యాత్రలు",
  "16DAYS": "16 రోజులు",
  "2 DAY": "2వ రోజు",
  "24x7 Customer Support": "24x7 కస్టమర్ సపోర్ట్",
  "AC Pushback Seating": "ఎయిర్ కండీషన్డ్ పుష్‌బ్యాక్ సీటింగ్",
  "Age Requirement": "వయోపరిమితి నిబంధనలు",
  "All Entry Tickets": "అన్ని ప్రవేశ టికెట్లు",
  "All India Tourist Permit": "అఖిల భారత టూరిస్ట్ పర్మిట్",
  "Authentic Pilgrim Heritage": "విశ్వసనీయమైన యాత్రా వారసత్వం",
  "Bag Packing Guidelines": "లగేజ్ ప్యాకింగ్ సూచనలు",
  "Best Season to Travel": "ప్రయాణానికి అనుకూల సమయం",
  "Cancellation Policy": "రద్దు నిబంధనలు",
  "Comfortable Hotel Rooms": "సౌకర్యవంతమైన హోటల్ గదులు",
  "Custom Yatra Packages": "ప్రత్యేక యాత్రా ప్యాకేజీలు",
  "Customer Testimonials": "యాత్రికుల అనుభవాలు",
  "Devotional Pilgrimage Experience": "భక్తిపూర్వక తీర్థయాత్రా అనుభూతి",
  "Direct Flight Connectivity": "ప్రత్యక్ష విమాన సౌకర్యం",
  "Emergency Medical Support": "అత్యవసర వైద్య సహాయం",
  "Experienced Tour Escort": "అనుభవజ్ఞులైన టూర్ ఎస్కార్ట్",
  "Family Pilgrimage Packages": "కుటుంబ తీర్థయాత్రా ప్యాకేజీలు",
  "Government ID Required": "ప్రభుత్వ గుర్తింపు కార్డు తప్పనిసరి",
  "Group Booking Discounts": "గ్రూప్ బుకింగ్‌లకు ప్రత్యేక రాయితీలు",
  "Hassle-Free Darshan": "సులభతరమైన ఆలయ దర్శనం",
  "Hot Satvik Food on Tour": "యాత్రలో వేడివేడి సాత్విక భోజనం",
  "Inclusive Package Cost": "సకల సదుపాయాలతో కూడిన ప్యాకేజీ",
  "Instant WhatsApp Assistance": "తక్షణ వాట్సాప్ సహాయం",
  "Luggage Safety": "లగేజ్ భద్రత",
  "Medical Fitness Certificate": "వైద్య ధ్రువీకరణ పత్రం",
  "Morning Tea & Breakfast": "ఉదయం టీ & అల్పాహారం",
  "Need Help Planning Your Tour?": "మీ యాత్రను ప్లాన్ చేయడంలో సహాయం కావాలా?",
  "Online Booking Available": "ఆన్‌లైన్ బుకింగ్ అందుబాటులో ఉంది",
  "Our Office Location": "మా కార్యాలయ చిరునామా",
  "Passenger Details": "యాత్రికుల వివరాలు",
  "Payment Options": "చెల్లింపు విధానాలు",
  "Pioneering Pilgrimage Since 1962": "1962 నుండి నిరంతర భక్తజన సేవ",
  "Pure Vegetarian Food": "స్వచ్ఛమైన శాకాహార భోజనం",
  "Railway Station Pickup & Drop": "రైల్వే స్టేషన్ పికప్ & డ్రాప్",
  "Safe & Sanitized Vehicles": "సురక్షితమైన & పరిశుభ్రమైన వాహనాలు",
  "Senior Citizen Priority Support": "సీనియర్ సిటిజన్లకు ప్రత్యేక మద్దతు",
  "Special Pooja Arrangements": "ప్రత్యేక పూజా ఏర్పాట్లు",
  "Terms of Service": "సేవా నిబంధనలు",
  "Toll, Parking & State Taxes Included": "టోల్, పార్కింగ్ & రాష్ట్ర పన్నులు చేర్చబడ్డాయి",
  "Tour Guidelines": "యాత్రా మార్గదర్శకాలు",
  "Traditional South Indian Cooking": "దక్షిణ భారత సాంప్రదాయ వంటకాలు",
  "Travel Safe with Dodla's": "దొడ్ల టూర్స్‌తో సురక్షిత ప్రయాణం",
  "VIP Darshan Assistance": "ప్రత్యేక దర్శన సహాయం",
  "What to Carry": "యాత్రకు వెంట తీసుకురావలసిన వస్తువులు",
  "Year-Round Departures": "ఏడాది పొడవునా పవిత్ర యాత్రలు",
  "0866-242227 • 0866-2424145": "0866-242227 • 0866-2424145",
  "3 DAY": "3 రోజులు",
  "4 DAY": "4 రోజులు",
  "5 DAY": "5 రోజులు",
  "6 DAY": "6 రోజులు",
  "DAY 1 – DAY 3": "రోజు 1: DAY 3",
  "DAY 1-HARIDWAR": "రోజు 1: HARIDWAR",
  "DAY 11 – DAY 15": "రోజు 11: DAY 15",
  "DAY 16 – DAY 17": "రోజు 16: DAY 17",
  "DAY 3-YAMUNOTRI": "రోజు 3: YAMUNOTRI",
  "DAY 4 – DAY 7": "రోజు 4: DAY 7",
  "DAY 4-UTTARKASHI": "రోజు 4: UTTARKASHI",
  "DAY 5-GANGOTRI": "రోజు 5: GANGOTRI",
  "DAY 6-GAURI KUND": "రోజు 6: GAURI KUND",
  "DAY 7-KEDARNATH TEMPLE": "రోజు 7: KEDARNATH TEMPLE",
  "DAY 8 – DAY 10": "రోజు 8: DAY 10",
  "DAY 8- BADRINATH TEMPLE": "రోజు 8: BADRINATH TEMPLE",
  "DAY 9- DELHI": "రోజు 9: DELHI",
  "Fixed Departure Tours & Prices": "ప్రయాణ తేదీలు: Tours & Prices",
  "Fixed Departure Tours & Prices — Dodla's Tours & Travels": "ప్రయాణ తేదీలు: Tours & Prices — Dodla's Tours & Travels",
  "10-day sacred circuit covering Muktinath 108 Dhara bath, Kathmandu Pashupatinath, Ayodhya Ram Mandir, and Naimisharanya with Satvik meals.": "ముక్తినాథ్ 108 ధారల పవిత్ర స్నానం, ఖాట్మండు పశుపతినాథ్, అయోధ్య రామాలయం, మరియు నైమిశారణ్యం దర్శనాలతో కూడిన 10 రోజుల దివ్య తీర్థయాత్ర.",
  "14-day teertha yatra covering Kashi Vishwanath, Ayodhya Ram Mandir, Prayagraj Sangam, Gaya Pindadaan, Baidyanath, and Haridwar with Satvik meals.": "కాశీ విశ్వనాథ్, అయోధ్య రామాలయం, ప్రయాగ్‌రాజ్ సంగమం, గయ పిండప్రదానం, బైద్యనాథ్, మరియు హరిద్వార్ దర్శనాలతో కూడిన 14 రోజుల పవిత్ర తీర్థయాత్ర.",
  "15 days exploring Rameswaram, Madurai Meenakshi, Thanjavur Brihadeeswara, Srirangam, Kanyakumari, and Trivandrum with pure Satvik food.": "రామేశ్వరం, మదురై మీనాక్షి, తంజావూరు బృహదీశ్వర, శ్రీరంగం, కన్యాకుమారి, మరియు త్రివేండ్రం పుణ్యక్షేత్రాల దర్శనాలతో కూడిన 15 రోజుల దివ్య దక్షిణ భారత యాత్ర.",
  "16 days covering Holy Amarnath Cave, Katra Vaishno Devi, Golden Temple Amritsar, Dal Lake Shikara, and 5 Sacred Shakti Peethams with Satvik food.": "పవిత్ర అమర్‌నాథ్ గుహాలయం, కాట్రా వైష్ణోదేవి, అమృత్‌సర్ స్వర్ణ దేవాలయం, దాల్ సరస్సు షికారా, మరియు 5 పవిత్ర శక్తిపీఠాల దర్శనాలతో కూడిన 16 రోజుల దివ్య యాత్ర.",
  "A divine 14-day pilgrimage to Yamunotri, Gangotri, Kedarnath Jyotirlinga, and Badrinath Dham with 100% Satvik South Indian meals and senior citizen care.": "యమునోత్రి, గంగోత్రి, కేదార్‌నాథ్ జ్యోతిర్లింగం, మరియు బద్రీనాథ్ ధామ్ దర్శనాలతో 100% సాత్విక దక్షిణ భారత భోజనం మరియు సీనియర్ సిటిజన్ సంరక్షణతో కూడిన 14 రోజుల చార్‌ధామ్ యాత్ర.",
  "A chronicle of over six decades of pioneering travel innovations, sacred pilgrimages, and dedicated service.": "ఆరు దశాబ్దాలకు పైగా నిరంతర ప్రయాణ సేవలు, పవిత్ర తీర్థయాత్రలు మరియు భక్తిపూర్వక సేవలకు సంబంధించిన చారిత్రక ప్రస్థానం.",
  "64 years of specialized expertise in coordinating Himalayan and national teertha yatras. Experienced managers accompany every tour, organizing temple entries, pujas, and sankalpams.": "హిమాలయ మరియు అఖిల భారత తీర్థయాత్రల నిర్వహణలో 64 ఏళ్ల విశిష్ట అనుభవం. ప్రతి యాత్రలో అనుభవజ్ఞులైన టూర్ మేనేజర్లు భక్తులతో ఉంటూ ఆలయ దర్శనాలు, పూజలు మరియు సంకల్పాలను దగ్గరుండి జరిపిస్తారు.",
  "9 days following Lord Rama and Sita Devi through Sri Lanka: Shankari Devi Shakthi Peetham, Ashok Vatika, Ramboda, and Munneswaram.": "శ్రీలంకలో శ్రీరాముడు మరియు సీతాదేవి నడయాడిన పవిత్ర ప్రదేశాలు: శంకరీ దేవి శక్తిపీఠం, అశోక వాటిక, రాంబోడ, మరియు మున్నేశ్వరం ఆలయాల 9 రోజుల దివ్య రామాయణ యాత్ర.",
  "A divine 17-day spiritual odyssey spanning all holy Vaishnava Kshetras across Thondainadu, Cholanadu, Pandyanadu, and Malainadu.": "తొండైనాడు, చోళనాడు, పాండ్యనాడు మరియు మలైలనాడులోని పవిత్ర వైష్ణవ దివ్యదేశాల 17 రోజుల దివ్య ఆధ్యాత్మిక మహా యాత్ర.",
  "Dedicated South Indian traditional cooks prepare fresh, hot vegetarian meals at every stop.": "ప్రతి మజిలీ వద్ద దక్షిణ భారత సాంప్రదాయ వంటగాళ్లచే తయారుచేయబడిన వేడివేడి, పరిశుభ్రమైన సాత్విక శాకాహార భోజనం అందించబడుతుంది.",
  "Comfortable drive back to Vijayawada with cherished spiritual memories and blessings of the Lord.": "భగవంతుని దివ్య ఆశీస్సులు మరియు మధురమైన ఆధ్యాత్మిక జ్ఞాపకాలతో విజయవాడకు సౌకర్యవంతమైన తిరుగు ప్రయాణం.",
  "Morning at leisure for final shopping. Transfer to Dubai International Airport for your flight home.": "ఉదయం షాపింగ్ కోసం విశ్రాంతి సమయం. తిరుగు ప్రయాణం కోసం దుబాయ్ అంతర్జాతీయ విమానాశ్రయానికి తరలింపు.",
  "Visit Mansa Devi and Chandi Devi ropeway temples in Haridwar, shopping in Moti Bazaar, and Ganga Aarti at Har Ki Pauri.": "హరిద్వార్‌లోని మానసా దేవి, చండీ దేవి రోప్‌వే ఆలయాల దర్శనం, మోతీ బజార్‌లో షాపింగ్, మరియు హర్ కీ పౌరీ వద్ద సాయంత్రం దివ్య గంగా హారతి.",
  "Visit Munneswaram Shiva Temple (where Lord Rama prayed after the war) and Manavari Temple (first Lingam installed by Rama).": "యుద్ధానంతరం శ్రీరాముడు ప్రార్థించిన మున్నేశ్వరం శివాలయం మరియు రాముడు ప్రతిష్టించిన తొలి లింగం మానవరి ఆలయాల పవిత్ర దర్శనం.",
  "1. How is food arranged during the sacred yatras?": "1. పవిత్ర తీర్థయాత్రలలో భోజన సదుపాయం ఎలా ఉంటుంది?",
  "2. Can elderly parents travel alone on these yatras?": "2. వృద్ధులైన తల్లిదండ్రులు ఈ యాత్రలలో ఒంటరిగా ప్రయాణించవచ్చా?",
  "3. What type of buses and vehicles are provided?": "3. ఎలాంటి బస్సులు మరియు రవాణా వాహనాలను సమకూరుస్తారు?",
  "4. How do we book a tour and confirm our seats?": "4. యాత్రను ఎలా బుక్ చేసుకోవాలి మరియు సీట్లను ఎలా కన్ఫర్మ్ చేసుకోవాలి?",
  "5. What documents are required for Amarnath and Chardham?": "5. అమర్‌నాథ్ మరియు చార్‌ధామ్ యాత్రలకు ఏయే పత్రాలు అవసరం?",
  "40-Seater & 49-Seater 2x2 AC Pushback Coaches": "40-సీటర్ & 49-సీటర్ 2x2 ఎయిర్ కండీషన్డ్ పుష్‌బ్యాక్ కోచ్‌లు",
  "2x2 AC Pushback Luxury Coach travel throughout": "యాత్ర పొడవునా 2x2 ఎయిర్ కండీషన్డ్ పుష్‌బ్యాక్ లగ్జరీ కోచ్ ప్రయాణం",
  "100% Pure Satvik South Indian (Cook Accompanied)": "100% స్వచ్ఛమైన సాత్విక దక్షిణ భారత భోజనం (ప్రత్యేక వంటగాళ్ల బృందంతో)",
  "3. Absolute Data Protection • Zero Third-Party Selling": "3. సంపూర్ణ డేటా రక్షణ • ఎటువంటి మూడో పక్షానికి విక్రయించబడదు",
  "108 Vaishnava Divya Desala Yatra (17 Days)": "108 వైష్ణవ దివ్యదేశాల యాత్ర (17 రోజులు)",
  "108 Vaishnava Divya Desala Yatra (17 Days) — ₹51,998": "108 వైష్ణవ దివ్యదేశాల యాత్ర (17 రోజులు) — ₹51,998",
  "108 Vaishnava Divya Desala Yatra — Dodla's Tours & Travels": "108 వైష్ణవ దివ్యదేశాల యాత్ర — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Muktinath Flight Package & Nepal Yatra (10 Days)": "ముక్తినాథ్ విమాన ప్యాకేజీ & నేపాల్ యాత్ర (10 రోజులు)",
  "Muktinath Flight Package & Nepal Yatra — Dodla's Tours & Travels": "ముక్తినాథ్ విమాన ప్యాకేజీ & నేపాల్ యాత్ర — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Char Dham Yatra - Uttarakhand (14 Days)": "చార్‌ధామ్ యాత్ర - ఉత్తరాఖండ్ (14 రోజులు)",
  "Char Dham Yatra - Uttarakhand — Dodla's Tours & Travels": "చార్‌ధామ్ యాత్ర - ఉత్తరాఖండ్ — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Amarnath Yatra & Kashmir Paradise (16 Days)": "అమర్‌నాథ్ యాత్ర & కాశ్మీర్ ప్యారడైజ్ (16 రోజులు)",
  "Amarnath Yatra & Kashmir Paradise — Dodla's Tours & Travels": "అమర్‌నాథ్ యాత్ర & కాశ్మీర్ ప్యారడైజ్ — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Kasi Varanasi Rameswaram Special Train Tour (14 Days)": "కాశీ వారణాసి రామేశ్వరం ప్రత్యేక రైలు యాత్ర (14 రోజులు)",
  "Kasi Varanasi Rameswaram Special Train Tour — Dodla's Tours & Travels": "కాశీ వారణాసి రామేశ్వరం ప్రత్యేక రైలు యాత్ర — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "12 Jyotirlinga Darshan All-India Tour (21 Days)": "ద్వాదశ జ్యోతిర్లింగ దర్శనం అఖిల భారత యాత్ర (21 రోజులు)",
  "12 Jyotirlinga Darshan All-India Tour — Dodla's Tours & Travels": "ద్వాదశ జ్యోతిర్లింగ దర్శనం అఖిల భారత యాత్ర — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Sri Lanka Ramayana Trail & Shankari Devi (9 Days)": "శ్రీలంక రామాయణ యాత్ర & శంకరీ దేవి (9 రోజులు)",
  "Sri Lanka Ramayana Trail & Shankari Devi — Dodla's Tours & Travels": "శ్రీలంక రామాయణ యాత్ర & శంకరీ దేవి — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Shirdi Pandharpur Mahabaleshwar Yatra (6 Days)": "షిర్డీ పండరీపురం మహాబలేశ్వర్ యాత్ర (6 రోజులు)",
  "Shirdi Pandharpur Mahabaleshwar Yatra — Dodla's Tours & Travels": "షిర్డీ పండరీపురం మహాబలేశ్వర్ యాత్ర — దొడ్ల టూర్స్ & ట్రావెల్స్",
  "Ooty & Kodaikanal Hill Retreat": "ఊటీ & కొడైకెనాల్ హిల్ స్టేషన్ యాత్ర",
  "Coorg & Wayanad Nature Tour": "కూర్గ్ & వాయనాడ్ ప్రకృతి యాత్ర",
  "Goa Beaches & Heritage Tour": "గోవా బీచ్‌లు & హెరిటేజ్ టూర్",
  "Kerala Backwaters & Munnar": "కేరళ బ్యాక్‌వాటర్స్ & మూన్నార్ టూర్",
  "Shimla & Manali Snow Valley Tour": "సిమ్లా & మనాలి స్నో వ్యాలీ టూర్",
  "Golden Triangle: Delhi Agra Jaipur": "గోల్డెన్ ట్రయాంగిల్: ఢిల్లీ ఆగ్రా జైపూర్",
  "Dubai & Abu Dhabi Discovery": "దుబాయ్ & అబుదాబి డిస్కవరీ టూర్",
  "Address:": "చిరునామా:",
  "Airlines Ticketing (PSA)": "ఎయిర్‌లైన్స్ టికెటింగ్ (అధికారిక PSA)",
  "All Packages (21)": "అన్నీ ప్యాకేజీలు (21)",
  "All Photos (72)": "అన్నీ ఛాయాచిత్రాలు (72)",
  "All-Inclusive Tour": "అన్నీ కలిపిన ప్యాకేజీ టూర్",
  "Badrinath Temple Special Puja": "బద్రీనాథ్ ఆలయం ప్రత్యేక పూజ",
  "Day 1": "రోజు 1",
  "Day 10": "రోజు 10",
  "Day 11": "రోజు 11",
  "Day 12": "రోజు 12",
  "Day 13": "రోజు 13",
  "Day 14": "రోజు 14",
  "Day 15": "రోజు 15",
  "Day 16": "రోజు 16",
  "Day 2": "రోజు 2",
  "Day 3": "రోజు 3",
  "Day 4": "రోజు 4",
  "Day 5": "రోజు 5",
  "Day 6": "రోజు 6",
  "Day 7": "రోజు 7",
  "Day 8": "రోజు 8",
  "Day 9": "రోజు 9",
  "Destinations Guide": "గమ్యస్థానాలు గైడ్",
  "Dodla's Sacred Journeys": "దొడ్ల టూర్స్ పవిత్ర యాత్రలు",
  "Journey Home": "ప్రయాణం హోమ్",
  "Kedarnath Jyotirlinga Darshan": "కేదార్‌నాథ్ జ్యోతిర్లింగం దర్శనం",
  "Packages": "ప్యాకేజీలు",
  "Phone:": "ఫోన్:",
  "Pilgrimage": "తీర్థయాత్ర",
  "Return Journey": "తిరుగు ప్రయాణం ప్రయాణం",
  "Senior Pilgrim Priority:": "సీనియర్ యాత్రికుడు ప్రాధాన్యత:",
  "Tour Enquiry": "టూర్ విచారణ",
  "Tour Name": "టూర్ పేరు",
  "Tour Packages": "టూర్ ప్యాకేజీలు",
  "Train Journey": "రైలు ప్రయాణం",
  "Sacred Temple Gopuram Architecture": "పవిత్ర దేవాలయ గోపుర దర్శనం",
  "Peaceful Heritage & Resort Retreats": "ప్రశాంతమైన హెరిటేజ్ రిట్రీట్స్",
  "Watch Our Story • <small style=\"opacity:0.85;\">A Legacy of Faith & Service</small>": "మా చరిత్రను వీక్షించండి • విశ్వాసం & సేవా వారసత్వం",
  "Watch Our Story &bull; <small style=\"opacity:0.85;\">A Legacy of Faith & Service</small>": "మా చరిత్రను వీక్షించండి • విశ్వాసం & సేవా వారసత్వం"
};

  var PLACEHOLDERS_TE = {
    "Enter Your Name": "మీ పూర్తి పేరును నమోదు చేయండి",
    "Enter Your Phone Number": "మీ మొబైల్ నంబర్ నమోదు చేయండి",
    "Enter Your Mobile Number": "మీ మొబైల్ నంబర్ నమోదు చేయండి",
    "Enter Your Email-id": "మీ ఈమెయిల్ చిరునామా నమోదు చేయండి",
    "Enter Your Email Address": "మీ ఈమెయిల్ చిరునామా నమోదు చేయండి",
    "Enter Message Here": "మీ సందేశం లేదా సందేహాలను ఇక్కడ రాయండి",
    "Arrival Date": "చేరుకునే తేదీ",
    "Departure Date": "బయలుదేరే తేదీ",
    "Planning Date": "ప్రయాణ తేదీ",
    "Select Departure Month": "ప్రయాణ నెలను ఎంచుకోండి",
    "Select Month": "నెలను ఎంచుకోండి",
    "Search pilgrimages, places, temples...": "తీర్థయాత్రలు, ఆలయాలు, ప్రదేశాలను వెతకండి...",
    "e.g. 2 Adults, 1 Senior Citizen": "ఉదా. 2 పెద్దలు, 1 సీనియర్ సిటిజన్"
  };

  var origBlockHtml = new WeakMap();
  var origTextNodes = new WeakMap();
  var origPlaceholders = new WeakMap();
  var origInputValues = new WeakMap();

  function getCurrentLang() {
    return localStorage.getItem('dodla_lang') || 'en';
  }

  function normalizeText(str) {
    if (!str) return '';
    return str
      .replace(/&amp;/g, '&')
      .replace(/&bull;/g, '•')
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      .replace(/&ldquo;/g, '“')
      .replace(/&rdquo;/g, '”')
      .replace(/&lsquo;/g, '‘')
      .replace(/&rsquo;/g, '’')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function applyLanguage(lang) {
    if (lang === 'te') {
      document.documentElement.classList.add('dodla-lang-te');
      document.body.classList.add('dodla-lang-te');
      document.documentElement.setAttribute('lang', 'te');
    } else {
      document.documentElement.classList.remove('dodla-lang-te');
      document.body.classList.remove('dodla-lang-te');
      document.documentElement.setAttribute('lang', 'en');
    }

    // Update active state on all toggle buttons
    var allLangBtns = document.querySelectorAll('.lang-btn');
    allLangBtns.forEach(function(btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    translateTree(document.body, lang);
    translateInputs(document.body, lang);
  }

  // 1. Translate block containers (paragraphs, headings, list items, badges)
  function translateBlocks(rootNode, lang) {
    var blockSelector = 'h1, h2, h3, h4, h5, h6, p, li, blockquote, .section-badge, .trust-pillar-title, .trust-pillar-desc, .hero-cinematic-lead, .journey-banner-sub, .journey-banner-heading, .about-trust-lbl, .about-trust-val, .founder-quote, .founder-name, .timeline-day-badge, .timeline-dest-title, .timeline-desc, .guideline-card p, .pricing-table td, .pricing-table th, .detail-sidebar-card, .footer-col p, .font-script-accent';
    
    var blocks = rootNode.querySelectorAll(blockSelector);
    blocks.forEach(function(el) {
      // Ignore if inside another translated container or inside a script/style/switcher
      if (el.closest('.luxury-lang-switch') || el.closest('script') || el.closest('style')) return;

      var norm = normalizeText(el.textContent);
      if (!norm) return;

      if (!origBlockHtml.has(el)) {
        origBlockHtml.set(el, el.innerHTML);
      }

      if (lang === 'te') {
        var te = TRANSLATIONS_TE[norm];
        if (te) {
          el.innerHTML = te;
          el.setAttribute('data-i18n-translated', 'true');
        } else {
          // Check prefix rules
          if (norm.indexOf('Enquire for ') === 0) {
            var tourEn = norm.replace('Enquire for ', '');
            var tourTe = TRANSLATIONS_TE[tourEn] || tourEn;
            el.innerHTML = tourTe + ' విచారణ';
            el.setAttribute('data-i18n-translated', 'true');
          } else if (norm.indexOf('Day ') === 0 && norm.indexOf(':') > -1) {
            var parts = norm.split(':');
            var dayNum = parts[0].replace('Day', '').trim();
            var dayDesc = parts.slice(1).join(':').trim();
            var descTe = TRANSLATIONS_TE[dayDesc] || dayDesc;
            el.innerHTML = 'రోజు ' + dayNum + ': ' + descTe;
            el.setAttribute('data-i18n-translated', 'true');
          } else if (norm.indexOf('Duration:') === 0) {
            var durEn = norm.replace('Duration:', '').trim();
            var durTe = TRANSLATIONS_TE[durEn] || durEn;
            el.innerHTML = 'వ్యవధి: ' + durTe;
            el.setAttribute('data-i18n-translated', 'true');
          }
        }
      } else {
        if (origBlockHtml.has(el)) {
          el.innerHTML = origBlockHtml.get(el);
          el.removeAttribute('data-i18n-translated');
        }
      }
    });
  }

  // 2. Translate inline & leaf text nodes
  function translateTextNodes(rootNode, lang) {
    var walker = document.createTreeWalker(
      rootNode,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          if (!node.parentElement) return NodeFilter.FILTER_REJECT;
          var tag = node.parentElement.tagName.toLowerCase();
          if (tag === 'script' || tag === 'style' || tag === 'noscript') {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.parentElement.closest('.luxury-lang-switch') || 
              node.parentElement.closest('[data-i18n-translated="true"]')) {
            return NodeFilter.FILTER_REJECT;
          }
          var val = node.nodeValue.trim();
          if (val.length > 0) return NodeFilter.FILTER_ACCEPT;
          return NodeFilter.FILTER_REJECT;
        }
      },
      false
    );

    var currentNode;
    while ((currentNode = walker.nextNode())) {
      var raw = currentNode.nodeValue;
      var trimmed = raw.trim();
      var norm = normalizeText(trimmed);

      if (!origTextNodes.has(currentNode)) {
        origTextNodes.set(currentNode, raw);
      }

      if (lang === 'te') {
        var te = TRANSLATIONS_TE[norm] || TRANSLATIONS_TE[trimmed];
        if (te) {
          currentNode.nodeValue = raw.replace(trimmed, te);
        } else {
          if (trimmed.indexOf('Enquire for ') === 0) {
            var tourEn = trimmed.replace('Enquire for ', '');
            var tourTe = TRANSLATIONS_TE[tourEn] || tourEn;
            currentNode.nodeValue = raw.replace(trimmed, tourTe + ' విచారణ');
          }
        }
      } else {
        if (origTextNodes.has(currentNode)) {
          currentNode.nodeValue = origTextNodes.get(currentNode);
        }
      }
    }
  }

  function translateInputs(rootNode, lang) {
    var inputs = rootNode.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputs.forEach(function(el) {
      var ph = el.getAttribute('placeholder');
      if (!ph) return;

      if (!origPlaceholders.has(el)) {
        origPlaceholders.set(el, ph);
      }

      if (lang === 'te') {
        var te = PLACEHOLDERS_TE[ph] || TRANSLATIONS_TE[ph] || PLACEHOLDERS_TE[normalizeText(ph)];
        if (te) {
          el.setAttribute('placeholder', te);
        }
      } else {
        if (origPlaceholders.has(el)) {
          el.setAttribute('placeholder', origPlaceholders.get(el));
        }
      }
    });

    // Translate submit buttons
    var subBtns = rootNode.querySelectorAll('input[type="submit"], input[type="button"]');
    subBtns.forEach(function(btn) {
      var val = btn.getAttribute('value');
      if (!val) return;
      if (!origInputValues.has(btn)) {
        origInputValues.set(btn, val);
      }
      if (lang === 'te') {
        var te = TRANSLATIONS_TE[val] || TRANSLATIONS_TE[normalizeText(val)];
        if (te) btn.setAttribute('value', te);
      } else {
        if (origInputValues.has(btn)) {
          btn.setAttribute('value', origInputValues.get(btn));
        }
      }
    });
  }

  function translateTree(rootNode, lang) {
    translateBlocks(rootNode, lang);
    translateTextNodes(rootNode, lang);
  }

  // Public API
  window.dodlaLang = {
    current: getCurrentLang,
    setLang: function(lang) {
      if (lang !== 'en' && lang !== 'te') lang = 'en';
      localStorage.setItem('dodla_lang', lang);
      applyLanguage(lang);
    },
    toggle: function() {
      var next = (getCurrentLang() === 'en') ? 'te' : 'en';
      this.setLang(next);
    },
    t: function(key) {
      if (getCurrentLang() === 'te') {
        var norm = normalizeText(key);
        if (TRANSLATIONS_TE[norm]) return TRANSLATIONS_TE[norm];
        if (TRANSLATIONS_TE[key]) return TRANSLATIONS_TE[key];
      }
      return key;
    }
  };

  // Auto initialize on DOM ready
  function init() {
    var current = getCurrentLang();
    applyLanguage(current);

    // Watch for dynamically opened modals or DOM insertions
    var observer = new MutationObserver(function(mutations) {
      var lang = getCurrentLang();
      if (lang === 'te') {
        mutations.forEach(function(m) {
          if (m.addedNodes && m.addedNodes.length) {
            m.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) {
                translateTree(node, 'te');
                translateInputs(node, 'te');
              }
            });
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
