import { useEffect, useState } from 'react';
import { makeRequest } from '../makerequest';

const useGetFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const resp = await makeRequest.get(url);
                console.log(resp.data);
                setData(resp.data || resp.data);
            }
            catch (e) {
                setError(true);
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])
    return { data, loading, error };
}

export default useGetFetch;