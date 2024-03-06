export type ChartDataProps = {
    hour: string;
    day: string;
    electricity_price: number;
    action: actions;
};

const actions = {
    BUY: 'BUY',
    SELL: 'SELL',
    HOLD: 'HOLD',
} as const;

type actions = keyof typeof actions;
