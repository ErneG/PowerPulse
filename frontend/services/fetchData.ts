import { useState, useEffect } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const useFetchData = () => {
    const [data, setData] = useState();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${API_URL}/fetch-prices`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                );
                if (!response.ok)
                    throw new Error('Failed to fetch data');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(
                    err instanceof Error
                        ? err.message
                        : 'An unknown error occurred',
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, error, loading };
};

export default useFetchData;
