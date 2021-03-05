module.exports = function toReadable(number) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let tensNum = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let teens = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let numArr = number.toString().split("");

    // number from 0 to 19 and tens
    if (number === 0) {
        return "zero";
    } else if (number > 0 && number < 10) {
        return ones[number];
    } else if (number > 10 && number < 20) {
        return teens[numArr[1]];
    } else if (tensNum.includes(number)) {
        return tens[number / 10];
    } else if (numArr.length == 2) {
        return `${tens[numArr[0]]} ${ones[numArr[1]]}`.trim();
    } else if (numArr.length == 3) {
        if (numArr[2] === "0") {
            return `${ones[numArr[0]]} hundred ${tens[numArr[1]]}`.trim();
        } else if (numArr[1] === "1") {
            return `${ones[numArr[0]]} hundred ${teens[numArr[2]]}`.trim();
        } else {
            return `${ones[numArr[0]]} hundred ${tens[numArr[1]]} ${
                ones[numArr[2]]
            }`
                .replace(/\s+/g, " ")
                .trim();
        }
    } else return "";
};
