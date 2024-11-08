import {useState, useEffect} from 'react';
import axios from 'axios';
const UseWines = (url, trigger) => {

    const [wines, setWines] = useState([]);

    useEffect(() => {
        async function fetchWines() {
            try {
                const response = await axios.get(url);
                setWines(response.data);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        void fetchWines()
    }, [url, trigger]);
    return { wines }
};
export default UseWines;