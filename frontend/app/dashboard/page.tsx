'use client';

import LineChart from './_components/LineChart';
import HeadingText from '@/components/heading-text';
import { useFetchData } from '@/services';
import { ImSpinner2 } from 'react-icons/im';
import Legend from './_components/Legend';
import SettingsForm from '@/components/pages/settings-form';

const Dashboard = () => {
    const { data, error, loading } = useFetchData();

    if (loading)
        return (
            <div className="flex items-center justify-center w-full h-screen">
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
                    <div className="w-screen lg:w-3/4 ">
                        <LineChart data={data} />
                        <div className="px-10">
                            <Legend />
                            <SettingsForm />
                        </div>
                    </div>
                </div>
            );
        }
    }
};

export default Dashboard;
