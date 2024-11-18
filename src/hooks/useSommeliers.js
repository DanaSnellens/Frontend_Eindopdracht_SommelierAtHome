import {useEffect, useState} from "react";
import axios from "axios";

const UseSommeliers = (url, trigger) => {

    const [sommeliers, setSommeliers] = useState([]);

    useEffect(() => {
        async function fetchSommeliers() {
            try {
                const response = await axios.get(url);
                setSommeliers(response.data);
                console.log(response.data);
            } catch(e) {
                console.error(e);
            }
        }
        void fetchSommeliers()
    }, [url, trigger]);
    return { sommeliers }
};
export default UseSommeliers;