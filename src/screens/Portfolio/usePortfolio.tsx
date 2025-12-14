import { useState } from 'react'

const usePortfolio = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return {
        theme,
        setTheme,
    }
}

export default usePortfolio