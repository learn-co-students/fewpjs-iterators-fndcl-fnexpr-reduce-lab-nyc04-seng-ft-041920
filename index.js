const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Why the 50min read on Reduce???
let totalBatteries = batteryBatches.reduce((accum, val) => accum + val)