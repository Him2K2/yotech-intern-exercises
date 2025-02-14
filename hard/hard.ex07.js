const { run } = require("../utils/runtest.utils");

/**
 * 
 * @param {*} number 
 * @returns //
 */
function readNumber(number) {
  const units = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  const tens = [
    "",
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
  ];
  const hundreds = [
    "",
    "một trăm",
    "hai trăm",
    "ba trăm",
    "bốn trăm",
    "năm trăm",
    "sáu trăm",
    "bảy trăm",
    "tám trăm",
    "chín trăm",
  ];

  function readThreeDigits(number) {
    let result ="";
    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number % 100) / 10);
    let unit = number % 10;

    if (hundred > 0) {
      result += hundreds[hundred] + " ";
    }

    if (ten > 0) {
      result += tens[ten] + " ";
    }

    if (unit > 0) {
      result += units[unit];
    }

    return result;
  }

  function readGroup(number) {
    let result = "";
    let billion = Math.floor(number / 1000000000);
    let million = Math.floor((number % 1000000000) / 1000000);
    let thousand = Math.floor((number % 1000000) / 1000);
    let rest = number % 1000;

    if (billion > 0) {
      result += readThreeDigits(billion) + " tỷ ";
    }

    if (million > 0) {
      result += readThreeDigits(million) + " triệu ";
    }

    if (thousand > 0) {
      result += readThreeDigits(thousand) + " nghìn ";
    }

    if (rest > 0) {
      result += readThreeDigits(rest);
    }

    return result;
  }

  if (number === 0) {
    return "không";
  }

  return readGroup(number);
}
console.log(readNumber(250000));


//unit Test
const TestCase = [
    {input :[250000], expect : "hai trăm năm mươi  nghìn"}
]
run(TestCase,readNumber,7)