'use client';

import LineChart from './_components/LineChart';
import HeadingText from '@/components/heading-text';
import { useFetchData } from '@/services';
import { ImSpinner2 } from 'react-icons/im';

const Dashboard = () => {
    const { data, error, loading } = useFetchData();

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <ImSpinner2 className="animate-spin h-12 w-12" />
            </div>
        );
    else {
        if (error || (!data && !loading))
            return <div>Error: {error}</div>;
        else {
            return (
                <div className="flex flex-col items-center">
                    <HeadingText subtext="">
                        Dashboard
                    </HeadingText>
                    <div className="w-full lg:w-1/2">
                        <LineChart data={data} />
                    </div>
                </div>
            );
        }
    }
};

export default Dashboard;
