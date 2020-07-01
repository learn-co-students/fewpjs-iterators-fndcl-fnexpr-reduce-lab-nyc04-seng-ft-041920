const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = batteryBatches.reduce((sum, battery) =>  sum + battery, 0)

let totalBatteries = batteryBatches.reduce((sum, battery) =>  { return sum + battery}, 0)
