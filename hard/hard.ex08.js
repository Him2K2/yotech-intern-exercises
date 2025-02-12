/**
 * Ngân hàng nhà nước việt nam có các loại tiền 1 nghìn, 2 nghìn, 5 nghìn, 10 nghìn, 50 nghìn và 100 nghìn 500 nghìn
   Viết hàm tính số đồng tiền ít nhất khi quy đổi một số tiền nhất định

 */

const { sort } = require("../utils/array.utils");
const { run } = require("../utils/runtest.utils");

function findTheMinMoneyCount(money, moneyTypes) {
    if (money <= 0) return -1;
    if (money % 1000 !== 0) return -1;

    moneyTypes = sort(moneyTypes, 'down');

    let moneyCount = 0;
    let moneyStatistic = {};
    moneyTypes.forEach(moneyType => {
        let moneyTypeCount = Math.floor(money / moneyType);
        if (moneyTypeCount >0 ) moneyStatistic[moneyType] = moneyTypeCount;
        moneyCount += moneyTypeCount;
        money -= moneyTypeCount * moneyType;
    });
    console.log(moneyStatistic);
    return moneyCount;
}

//unit test

let moneyCount = findTheMinMoneyCount(1300000, [1000, 2000, 5000, 10000, 50000, 100000, 200000, 500000]);
console.log(moneyCount);

