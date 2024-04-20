import { makeRequest } from '../makerequest.js';

const usePostFetch = async (url, bodyData) => {
    try {
        const data = await makeRequest.post(url, { ...bodyData }, {
            withCredentials: true
        });
        if (data.data) {
            return { data: data.data };
        }
        else {
            return { error: data.error };
        }
    }
    catch (err) {
        console.log(err);
        return {
            success: false,
            error: `${err}`
        }
    }
}

export default usePostFetch;
