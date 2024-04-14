'use client';

import { ChartDataProps } from '@/types';

const StatusCard = ({ data }: { data: ChartDataProps[] }) => {
    const findCurrentAction = (data: ChartDataProps[]) => {
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-CA');
        const currentHour = now.getHours();

        const currentEntry = data.find((entry) => {
            const entryDay = entry.day
                .split('-')
                .reverse()
                .join('-');
            const entryHour = parseInt(
                entry.hour.split(':')[0],
                10,
            );
            return (
                entryDay === currentDay &&
                entryHour === currentHour
            );
        });

        return currentEntry || { action: 'Unknown' };
    };

    const currentStatus = findCurrentAction(data);
    const colorClass =
        currentStatus.action === 'BUY' ||
        currentStatus.action === 'SELL'
            ? 'bg-green-600'
            : currentStatus.action === 'HOLD'
              ? 'bg-orange-600'
              : 'bg-gray-600';

    return (
        <div>
            <div className="flex flex-row  mt-10  px-4 py-3 gap-x-3  items-center hober">
                <h3>What am I doing now</h3>
                <div className={`${colorClass} p-6`}>
                    {currentStatus.action}
                </div>
            </div>
        </div>
    );
};

export default StatusCard;
