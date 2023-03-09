function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function isInteger(a) {
    return typeof a === 'number' && num % 1 === 0;
}

function pow(a, b) {
    if (b === 0) return 1;
    if (b === 1) return a;
    if (b < 0) return 1 / toPower(a, -b);

    let result = 1;
    while (b > 1) {
        if (b % 2 === 0) {
            a *= a;
            b /= 2;
        } else {
            result *= a;
            a *= a;
            b = (b - 1) / 2;
        }
    }

    return base * result;
}

function sqrt(a) {
    if (a < 0) return NaN;
    if (a === 0) return 0; // Square root of 0 is 0

    let x = a / 2;
    let tolerance = 0.00001;

    while (abs(a - x * x) > tolerance) {
        x = (x + a / x) / 2;
    }

    return x;
}

function abs(a) {
    if (a == 0) {
        return a;
    } else if (a > 0) {
        return a;
    } else {
        return -1 * a;
    }
}

function quadraticFormula(a, b, c) {
    var x1 = 0;
    var x2 = 0;
    if (a == 0) {
        if (b == 0) {
            return undefined;
        } else {
            return -c / b;
        }
    } else if (pow(b, 2) - (4 * a * c) < 0) {
        return null;
    } else {
        x1 = (-b + sqrt(pow(b, 2) - (4 * a * c))) / (2 * a);
        x2 = (-b - sqrt(pow(b, 2) - (4 * a * c))) / (2 * a);
    }
    return [x1, x2];
}

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.isInteger = isInteger;
exports.pow = pow;
exports.sqrt = sqrt;
exports.quadraticFormula = quadraticFormula;
