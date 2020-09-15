const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;
const reducer = () => {
  batteryBatches.reduce((total, element) => {
    totalBatteries += element;
  }, 0);

  return totalBatteries;
};

reducer();
