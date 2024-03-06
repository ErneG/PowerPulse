'use client';

import { ChartDataProps } from '@/types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const LineChart = ({ data }: { data: ChartDataProps[] }) => {
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time',
                    font: {
                        size: 20,
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Euro',
                    font: {
                        size: 20,
                    },
                },
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: {
                    boxWidth: 0,
                },
            },
            title: {
                display: true,
            },
        },
    };

    const labels = data.map((d) => d.hour);
    const prices = data.map((d) => d.electricity_price);
    const chartdata = {
        labels,
        datasets: [
            {
                label: ' ',
                data: prices,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return <Line options={options} data={chartdata} />;
};
export default LineChart;
