var fs = require('fs');

function rus_eng_geo(langInfo) {
    if (langInfo == null || langInfo == undefined || langInfo == "" || !langInfo || typeof langInfo == "number") {
        return "eng";
    } else {
        langInfo = langInfo.toLowerCase();
        if (langInfo == "rus" || langInfo == "russian" || langInfo == "boring ass language" || langInfo == "ruso" ||
            langInfo == "putin" || langInfo == "putino" || langInfo == "rusia" || langInfo == "ruski" ||
            langInfo == "rusian" || langInfo == "ru" || langInfo == "rusuli" || langInfo == "russ" || langInfo == "russian language") {
            return "rus";
        } else if (langInfo == "geo" || langInfo == "qartuli nana" || langInfo == "cartuli nana" || langInfo == "kartuli nana" ||
            langInfo == "kartluli" || langInfo == "kartvelian language" || langInfo == "kartuli ena" || langInfo == "deda ena" ||
            langInfo == "qartuli ena" || langInfo == "cartuli ena" || langInfo == "geouri" || langInfo == "gurjistani" || langInfo == "georgiani" ||
            langInfo == "qartveli" || langInfo == "georgianuri" || langInfo == "gurjistan" || langInfo == "georgian" || langInfo == "kartveli" ||
            langInfo == "kutaisuri" || langInfo == "kartuli" || langInfo == "ქართული" || langInfo == "ka" || langInfo == "kar" ||
            langInfo == "cartuli" || langInfo == "cartveluri" || langInfo == "cartvelian" || langInfo == "qartveluri" || langInfo == "qartvelian" ||
            langInfo == "kartvellian" || langInfo == "kartvelian" || langInfo == "qartuli" || langInfo == "gorgian" || langInfo == "ge") {
            return "geo";
        } else {
            return "eng";
        }
    }
}

function isString(a) {
    if (typeof a === 'string') {
        return true;
    } else {
        return false;
    }
}

function isJSON(stringArray) {
    currentFunc = "ifJSON";
    try {
        JSON.parse(stringArray);
        return true;
    } catch (e) {
        return false;
    }
}

function fetchJSONArrayAt(requestedLocation) {
    currentFunc = "fetchArrayAt";
    try {
        const fetchedStringArray = fs.readFileSync(requestedLocation, 'utf-8');
        if (isJSON(fetchedStringArray)) {
            return JSON.parse(fetchedStringArray);
        } else {
            return [];
        }
    } catch (e) {
        return [];
    }
}

function isArray(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
}

function sortArrayDescending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortArrayAscending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function generateRandomUppercaseLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function generateRandomLowercaseLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function findDerivedWordsFromAWordList(wordList, baseWord) {
    baseWord = baseWord.toLowerCase(); // just in case
    if (baseWord.charAt(baseWord.length - 1) == "e") {
        baseWord = baseWord.slice(0, -1);
    }
    var regex = new RegExp("^" + baseWord + "(\\w+)$");
    return wordList.filter(function (word) { // assuming wordList is a const with the list of those words
        return regex.test(word);
    });
}

function getUNCountries() {
    const unCountries = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bhutan",
        "Bolivia",
        "Bosnia and Herzegovina",
        "Botswana",
        "Brazil",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Central African Republic",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Comoros",
        "Congo",
        "Costa Rica",
        "Côte d'Ivoire",
        "Croatia",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Democratic People's Republic of Korea",
        "Democratic Republic of the Congo",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Fiji",
        "Finland",
        "France",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Greece",
        "Grenada",
        "Guatemala",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Micronesia (Federated States of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "North Macedonia",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Qatar",
        "Republic of Korea",
        "Republic of Moldova",
        "Romania",
        "Russian Federation",
        "Rwanda",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Tajikistan",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom of Great Britain and Northern Ireland",
        "United Republic of Tanzania",
        "United States of America",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Yemen",
        "Zambia",
        "Zimbabwe"
    ];
    return unCountries;
}

function getSocialMediaPlatformList() {
    const socialMediaPlatforms = [
        "Facebook",
        "Twitter",
        "Instagram",
        "LinkedIn",
        "Snapchat",
        "Pinterest",
        "TikTok",
        "Reddit",
        "YouTube",
        "WhatsApp",
        "WeChat",
        "Telegram",
        "Discord",
        "Clubhouse",
        "Twitch",
        "Medium",
        "Quora",
        "Tumblr",
        "Flickr",
        "Vimeo",
        "SoundCloud",
        "Bandcamp",
        "MySpace",
        "Periscope",
        "Foursquare",
        "Blogger",
        "WordPress",
        "LiveJournal",
        "VK",
        "Weibo",
        "Renren",
        "Orkut",
        "Hi5",
        "Xanga",
        "Bebo",
        "Friendster"
    ];
    return socialMediaPlatforms;
}

function randomSocialMediaPlatform() {
    const socialMediaPlatforms = getSocialMediaPlatformList();

    const randomIndex = Math.floor(Math.random() * socialMediaPlatforms.length);
    return socialMediaPlatforms[randomIndex];
}

function getHarryPotterBooks() {
    const harryPotterBooks = [
        "Harry Potter and the Philosopher's Stone",
        "Harry Potter and the Chamber of Secrets",
        "Harry Potter and the Prisoner of Azkaban",
        "Harry Potter and the Goblet of Fire",
        "Harry Potter and the Order of Phoenix",
        "Harry Potter and the Half-Blood Prince",
        "Harry Potter and the Deathly Hallows"
    ];
    return harryPotterBooks;
}

function getUSStates() {
    const usStates = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
    return usStates;
}

function getUSStatesAndTerritories() {
    const usStatesAndTerritories = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "U.S. Virgin Islands",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ];
    return usStatesAndTerritories
}

function getInternetSlangDefinition(input) {
    const definitions = {
        "AFK": "Away from keyboard",
        "ASAP": "As soon as possible",
        "BFF": "Best friends forever",
        "BRB": "Be right back",
        "BTW": "By the way",
        "DM": "Direct message",
        "FFS": "For f***'s sake",
        "FTW": "For the win",
        "FYI": "For your information",
        "GG": "Good game",
        "G2G": "Got to go",
        "GTG": "Got to go",
        "IDK": "I don't know",
        "IMO": "In my opinion",
        "IRL": "In real life",
        "JK": "Just kidding",
        "LMAO": "Laughing my ass off",
        "LOL": "Laugh out loud",
        "MFW": "My face when",
        "NBD": "No big deal",
        "NSFW": "Not safe for work",
        "OMG": "Oh my god",
        "OP": "Original poster",
        "POGCHAMP": "Excitement or hype",
        "ROFL": "Rolling on the floor laughing",
        "SMH": "Shaking my head",
        "SFW": "Safe for work",
        "STFU": "Shut the f*** up",
        "TBH": "To be honest",
        "TFW": "That feeling when",
        "TIL": "Today I learned",
        "TL;DR": "Too long; didn't read",
        "TMI": "Too much information",
        "TY": "Thank you",
        "WTF": "What the f***",
        "YOLO": "You only live once",
        "YW": "You're welcome",
        "ZOMG": "Oh my god (sarcastic)"
    };

    return definitions[input.toUpperCase()] || "Sorry, that slang word is not in our dictionary.";
}


exports.rus_eng_geo = rus_eng_geo;
exports.isString = isString;
exports.isJSON = isJSON;
exports.fetchJSONArrayAt = fetchJSONArrayAt;
exports.findDerivedWordsFromAWordList = findDerivedWordsFromAWordList;
exports.isArray = isArray;
exports.sortArrayDescending = sortArrayDescending;
exports.sortArrayAscending = sortArrayAscending;
exports.generateRandomUppercaseLetter = generateRandomUppercaseLetter;
exports.generateRandomLowercaseLetter = generateRandomLowercaseLetter;
exports.getUNCountries = getUNCountries;
exports.getSocialMediaPlatformList = getSocialMediaPlatformList;
exports.randomSocialMediaPlatform = randomSocialMediaPlatform;
exports.getHarryPotterBooks = getHarryPotterBooks;
exports.getUSStates = getUSStates;
exports.getUSStatesAndTerritories = getUSStatesAndTerritories;
exports.getInternetSlangDefinition = getInternetSlangDefinition;
