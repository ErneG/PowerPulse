import 'chartjs-plugin-annotation';
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
    BarElement,
    BarController,
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

    // Get the current hour
    const currentHour = new Date().getHours();

    // Highlight the current hour in the graph
    const datasets = latestDataPoints
        .slice(0, -1)
        .map((point, index) => {
            let color;
            switch (point.action) {
                case 'BUY':
                    color = '#39ff14'; // Neon Green
                    break;
                case 'SELL':
                    color = '#ff31b4'; // Neon Pink
                    break;
                case 'HOLD':
                default:
                    color = '#4d4dff'; // Neon Blue
                    break;
            }

            // If the current hour matches the hour of the data point, increase the point radius
            let pointRadius = 2;
            if (
                parseInt(point.x.split(':')[0]) === currentHour
            ) {
                pointRadius = 6;
            }
            return {
                label: point.x,
                data: [point, latestDataPoints[index + 1]],
                borderColor: color,
                pointBackgroundColor: color,
                fill: false,
                showLine: true,
                pointRadius: pointRadius,
            };
        });

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
                display: false,
                labels: {
                    boxWidth: 0,
                },
            },
            title: {
                display: true,
            },
        },
    };

    return (
        <div>
            <Line
                options={options}
                data={{
                    labels: latestDataPoints.map(
                        (point) => point.x,
                    ),
                    datasets: datasets,
                }}
            />
        </div>
    );
};
export default LineChart;
