import { Route, Routes } from 'react-router-dom'
import Portfolio from '../screens/Portfolio/Portfolio'
import Components from '../screens/UiComponents/Components'
import ComponentDetails from '../screens/ComponentDetails/ComponentDetails'
import BlockchainProjects from '../screens/Blockchain/BlockchainProjects'
import Designs from '../screens/Designs/Designs'

const ScreenRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:counter" element={<ComponentDetails />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/blockchain" element={<BlockchainProjects />} />
        </Routes>
    )
}

export default ScreenRoutes