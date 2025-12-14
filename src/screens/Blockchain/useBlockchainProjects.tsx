import { useState } from 'react'

const useBlockchainProjects = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    return {
        theme,
        setTheme,
    }
}

export default useBlockchainProjects;