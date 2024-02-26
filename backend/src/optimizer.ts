interface DataObject {
  hour: string;
  price: number;
  day: string;
}

export type ActionEntry = {
  hour: string;
  day: string;
  electricity_price: number;
  action: string;
};

const batteryCapacity = 200;
const chargingSpeed = 0.2;
const startingBattery = 0.2;
const chargingSpeedKwh = batteryCapacity * chargingSpeed;
const startingBatteryKwh = batteryCapacity * startingBattery;
const minProfitThreshold = 0.02;
const minBattery = 0.15;
const maxBattery = 0.95;

export function optimizeActionPlan(data: DataObject[]): ActionEntry[] {
  const sortedData = [...data].sort((a, b) => a.price - b.price);

  const potentialBuyHours = new Set<string>();
  const potentialSellHours = new Set<string>();

  for (const entry of sortedData) {
    const hour = entry.hour;
    const day = entry.day;
    const price = entry.price;

    if (price <= sortedData[Math.floor(sortedData.length / 4)].price) {
      potentialBuyHours.add(`${hour}-${day}`);
    }

    if (price >= sortedData[Math.floor((3 * sortedData.length) / 4)].price) {
      potentialSellHours.add(`${hour}-${day}`);
    }
  }

  let batteryKwh = startingBatteryKwh;
  const actionPlan: ActionEntry[] = [];
  let totalProfit = 0.0;
  let highestBuyPrice = 0.0;
  let lastBuyHour: string | null = null;

  for (const entry of data) {
    const hour = entry.hour;
    const day = entry.day;
    const price = entry.price;
    let action = 'HOLD';
    let sellingPrice: number | null = null;
    const batteryPercentage = (batteryKwh / batteryCapacity) * 100;

    if (potentialBuyHours.has(`${hour}-${day}`) && (lastBuyHour === null || hour !== lastBuyHour)) {
      const potentialSellHoursOfDay = Array.from(potentialSellHours).filter(
        (h) => h.endsWith(day) && h.split('-')[0] > hour,
      );
      if (potentialSellHoursOfDay.length > 0) {
        const chargeAmountKwh = Math.min(
          chargingSpeedKwh,
          batteryCapacity * maxBattery - batteryKwh,
        );
        batteryKwh += chargeAmountKwh;
        action = 'BUY';
        highestBuyPrice = Math.max(highestBuyPrice, price);
        lastBuyHour = hour;
      }
    } else if (
      potentialSellHours.has(`${hour}-${day}`) ||
      (highestBuyPrice && price > highestBuyPrice + minProfitThreshold)
    ) {
      sellingPrice = price;
      const profitThreshold = highestBuyPrice + minProfitThreshold;
      if (sellingPrice > profitThreshold && lastBuyHour !== hour) {
        const dischargeAmountKwh = Math.min(
          chargingSpeedKwh,
          batteryKwh - batteryCapacity * minBattery,
        );
        batteryKwh -= dischargeAmountKwh;
        action = 'SELL';
        const profit = (sellingPrice - highestBuyPrice) * dischargeAmountKwh;
        totalProfit += profit;
      }
    }

    actionPlan.push({
      hour,
      day,
      electricity_price: price,
      action,
    });
  }
  return actionPlan;
}
