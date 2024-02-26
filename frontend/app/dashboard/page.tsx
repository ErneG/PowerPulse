'use client';

import LineChart from './_components/LineChart';
import HeadingText from '@/components/heading-text';
import StatusCard from './_components/StatusCard';
import useFetchData from '@/services/fetchData';

const Dashboard = () => {
  const { data: chartData, error, loading } = useFetchData();

  if (loading) return <div>Loading...</div>;
  if (error || !chartData) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center">
      <HeadingText subtext="">Dashboard</HeadingText>
      <div className="w-full lg:w-1/2">
        <LineChart data={chartData} />
      </div>
      <StatusCard data={chartData} />
    </div>
  );
};

export default Dashboard;
