'use client';

import { ChartDataProps } from '@/types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    BarController,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
);

const LineChart = ({ data }: { data: ChartDataProps[] }) => {
    // Take the last 24 data points
    const latestDataPoints = data.slice(-24).map((item) => ({
        x: item.hour,
        y: item.electricity_price,
        action: item.action,
    }));

    const barData = {
        labels: latestDataPoints.map((point) => point.x),
        datasets: [
            {
                label: 'Electricity Price',
                data: latestDataPoints.map((point) => point.y),
                backgroundColor: latestDataPoints.map(
                    (point) => {
                        switch (point.action) {
                            case 'BUY':
                                return 'green';
                            case 'SELL':
                                return 'red';
                            case 'HOLD':
                                return 'blue';
                            default:
                                return 'black';
                        }
                    },
                ),
            },
        ],
    };
    return (
        <div>
            <Bar data={barData} />;
        </div>
    );
};
export default LineChart;
