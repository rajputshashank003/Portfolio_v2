import { BrowserRouter } from "react-router-dom"
import ScreenRoutes from "./components/ScreenRoutes"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
    return (
        <BrowserRouter>
            <div className="fixed z-[2] bg-white">
                <div className="h-[14px] bg-white w-full" />
                <Header />
            </div>
            <div className="top-[58px] relative z-[1] ">
                <ScreenRoutes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App