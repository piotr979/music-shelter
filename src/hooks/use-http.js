import { useState, useCallback } from 'react';

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {

        setIsLoading(true);
        let response;
        let urls = [];
        try {
            // MULTIPLE REQUEST? PROCESS HERE
            if (requestConfig.values) {
                let responses;
                for (const value of requestConfig.values) {
                    urls.push(requestConfig.url + value);
                }
                 responses = await Promise.all( urls.map( url =>  fetch(url)));
                 const jsons = await Promise.all( responses.map ( (response) => response.json()));
                 
                 applyData(jsons);
                
                // SINGLE REQUEST
            } else {

                response = await fetch(
                    requestConfig.url,
                    {
                        method: 'GET'
                    }
                );
                if (!response.ok) {
                    throw new Error("Data not fetched");
                }
                const fetchedData = await response.json();
                applyData(fetchedData);
                setIsLoading(false);

            } // ELSE

        } catch (error) {
            setError(error.message || "Something wrong!")
        }
    }
    return {
        isLoading,
        error,
        sendRequest
    }
}


export default useHttp;