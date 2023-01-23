import { useState, useCallback } from 'react';

const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        console.log(isLoading);
        try {
            console.log('try');
            const response = await fetch(
                'https://theaudiodb.com/api/v1/json/2/artist.php?i=112024',
                {
                    method: 'GET'
                }
            )
            if (!response.ok) {
                throw new Error("Data not fetched");
            }
            const fetchedData = await response.json();
            applyData(fetchedData);
            setIsLoading(false);
          
        } catch (error) {
            setError( error.message || "Something wrong!")
        }
    }
        return {
            isLoading,
            error,
            sendRequest
        }
   
}

//     const fetchData = useCallback( async (recordData) => {
//         setIsLoading(true);
//         setError(null);

//         try {
//         const response = await fetch(
//                     requestConfig.url, {
//                         method: requestConfig.method ? requestConfig.method : "GET",
//                         body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
//             });

//         if (!response.ok) {
//             throw new Error('Request failed!');
//         }

//         const data = await response.json();
//         console.log(data);


//         } catch (error) {
//             setError( error.message || 'Something went wrong!');

//         }
//         setIsLoading(false);

//         return {
//             isLoading,
//             error,
//             sendRequest
//         }

//     }, []);
// }

export default useHttp;