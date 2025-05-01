import { useEffect, useState } from 'react';
import axios from 'axios';

function useWineSelector() {
    const [wines, setWines] = useState([]);
    const [selectedWineIds, setSelectedWineIds] = useState([]);

    useEffect(() => {
        axios.get('/wines')
            .then(response => setWines(response.data))
            .catch(error => console.error('Error fetching wines:', error));
    }, []);

    const toggleWineSelection = (id) => {
        setSelectedWineIds(prev =>
            prev.includes(id)
                ? prev.filter(wineId => wineId !== id)
                : [...prev, id]
        );
    };

    return { wines, selectedWineIds, toggleWineSelection };
}

export default useWineSelector;