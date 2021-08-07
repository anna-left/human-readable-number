module.exports = function toReadable(number) {

    //function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    let res = '';
    let strNumber = String(number);
    const bitness = String(number).length;
    if (bitness > 3) {
        return undefined;
    }

    let units = strNumber[bitness - 1];
    let dozens = strNumber[bitness - 2];
    let hundreds = strNumber[bitness - 3];

    switch (dozens) {
        case undefined:
            res = convertNumber(Number(units));
            break;
        case '0':
            res = convertNumber(Number(units));
            break;
        case '1':
            res = convertNumber(Number(dozens) * 10 + Number(units));
            break;
        default:
            res = convertNumber(Number(dozens) * 10);
            if (units !== '0') {
                res = res + ' ' + convertNumber(Number(units));
            }
            break;
    }

    if (hundreds !== undefined) {
        res = convertNumber(Number(hundreds)) + ' hundred ' + res;
    }

    return res.trim();
}

function convertNumber(number) {

    switch (number) {
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
        default:
            return '';
    }
}
//console.log(toReadable(700));
