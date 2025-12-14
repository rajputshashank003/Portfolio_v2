import { useState } from 'react'

const useComponents = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return {
        theme,
        setTheme,
    }
}

export default useComponents