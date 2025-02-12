/** 
 * Viết hàm đổi từ số tiền bắng số sang số tiền bằng chữ
 */

function doiTienThanhChu (money) {
    let moneyTypes = [500000, 200000, 100000, 50000, 10000, 5000, 2000, 1000];
    let moneyText = '';
    moneyTypes.forEach(moneyType => {
        let moneyTypeCount = Math.floor(money / moneyType);
        if (moneyTypeCount > 0) {
            moneyText += `${moneyTypeCount} tờ ${moneyType} đồng `;
            money -= moneyTypeCount * moneyType;
        }
    });
    return moneyText;
}
