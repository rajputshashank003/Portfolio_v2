import { useState } from 'react'

const useDesigns = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return {
        theme,
        setTheme,
    }
}

export default useDesigns