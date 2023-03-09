var _Math = rewire('Math/math.js');
var Especial = rewire('Givi-special/especial.js');
var Safety = rewire('Safety/safety.js')

function add(a, b) {
    return _Math.add(a, b);
}

function subtract(a, b) {
    return _Math.subtract(a, b);
}

function multiply(a, b) {
    return _Math.multiply(a, b);
}

function divide(a, b) {
    return _Math.divide(a, b);
}

function isInteger(a) {
    return _Math.isInteger(a);
}

function pow(a, b) {
    return _Math.pow(a, b);
}

function sqrt(a) {
    return _Math.sqrt(a);
}

function abs(a) {
    return _Math.abs(a);
}

function quadraticFormula(a, b, c) {
    return _Math.quadraticFormula(a, b, c);
}

function rus_eng_geo(a) {
    return Especial.rus_eng_geo(a);
}

function isString(a) {
    return Especial.isString(a);
}

function isJSON(a) {
    return Especial.isJSON(a);
}

function isArray(a) {
    return Especial.isArray(a);
}

function fetchJSONArrayAt(a) {
    return Especial.fetchJSONArrayAt(a);
}

function sortArrayDescending(a) {
    return Especial.sortArrayDescending(a);
}

function sortArrayAscending(a) {
    return Especial.sortArrayAscending(a);
}

function generateRandomUppercaseLetter() {
    return Especial.generateRandomUppercaseLetter();
}

function generateRandomLowercaseLetter() {
    return Especial.generateRandomLowercaseLetter();
}

function findDerivedWordsFromAWordList(a, b) {
    return Especial.findDerivedWordsFromAWordList(a, b);
}

function getUNCountries() {
    return Especial.getUNCountries();
}

function getSocialMediaPlatformList() {
    return Especial.getSocialMediaPlatformList();
}

function randomSocialMediaPlatform() {
    return Especial.randomSocialMediaPlatform();
}

function getHarryPotterBooks() {
    return Especial.getHarryPotterBooks();
}

function getUSStates() {
    return Especial.getUSStates();
}

function getUSStatesAndTerritories() {
    return Especial.getUSStatesAndTerritories();
}

function getInternetSlangDefinition() {
    return Especial.getInternetSlangDefinition();
}

exports.add = add;isJSON
exports.pow = pow;
exports.sqrt = sqrt;
exports.abs = abs;
exports.quadraticFormula = quadraticFormula;
exports.rus_eng_geo = rus_eng_geo;
exports.isString = isString;
exports.isJSON = isJSON;
exports.isArray = isArray;
exports.fetchJSONArrayAt = fetchJSONArrayAt;
exports.sortArrayDescending = sortArrayDescending;
exports.sortArrayAscending = sortArrayAscending;
exports.generateRandomUppercaseLetter = generateRandomUppercaseLetter;
exports.generateRandomLowercaseLetter = generateRandomLowercaseLetter;
exports.findDerivedWordsFromAWordList = findDerivedWordsFromAWordList;
exports.getUNCountries = getUNCountries;
exports.getSocialMediaPlatformList = getSocialMediaPlatformList;
exports.randomSocialMediaPlatform = randomSocialMediaPlatform;
exports.getHarryPotterBooks = getHarryPotterBooks;
exports.getUSStates = getUSStates;
exports.getUSStatesAndTerritories = getUSStatesAndTerritories;
exports.getInternetSlangDefinition = getInternetSlangDefinition;