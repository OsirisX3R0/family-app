import { useState } from "react"

const useLocalStorage = (storageKey, initialValue) => {
    const [key, setKey] = useState(storageKey);

    let value = localStorage.getItem(key);

    return [
        value,
        newValue => localStorage.setItem(key, newValue)
    ]
}

export default useLocalStorage;