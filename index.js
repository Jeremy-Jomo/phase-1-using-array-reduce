const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Code your solution here
let totalBatteries = batteryBatches.reduce(function(adddNum,element){
    return element + adddNum;

}, 0);
