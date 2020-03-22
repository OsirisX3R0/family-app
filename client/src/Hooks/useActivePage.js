import { useContext, useEffect } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
const useActivePage = page => {    
    const { setActivePage } = useContext(GlobalContext);

    useEffect(() => {
        setActivePage(page)
        //return () => setActivePage(null)
    }, [])
}

export default useActivePage;