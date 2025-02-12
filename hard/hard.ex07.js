const { sort } = require("../utils/array.utils");

/** 
 * Viết hàm đổi từ số tiền bằng số sang số tiền bằng chữ
 */

function doiTienThanhChu (money) {
    let moneyTypes = [500000, 200000, 100000, 50000, 10000, 5000, 2000, 1000];
    let moneyTypesText = ['năm trăm nghìn', 'hai trăm nghìn', 'một trăm nghìn', 'năm mươi nghìn', 'mười nghìn', 'năm nghìn', 'hai nghìn', 'một nghìn'];
    let moneyText = '';
    let moneyStatistic = {};
    moneyTypes = sort(moneyTypes, 'down');
    moneyTypes.forEach((moneyType, index) => {
        let moneyTypeCount = Math.floor(money / moneyType);
        if (moneyTypeCount > 0) {
            moneyStatistic[moneyType] = moneyTypeCount;
            moneyText += ` ${moneyTypesText[index]}, `;
        }
        money -= moneyTypeCount * moneyType;
    });
    return moneyText;
}
console.log(doiTienThanhChu(250000));

