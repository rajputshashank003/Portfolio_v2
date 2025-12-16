import About from "./Components/About";
import Experience from "./Components/Experience";
import LineGap from "../../components/LineGap";
import Profile from "./Components/Profile";
import ProfileLinks from "./Components/ProfileLinks";
import Projects from "./Components/Projects";
import PortfolioContext from "./context"
import usePortfolio from "./usePortfolio"
import TechStack from "./Components/TechStack";
// import RedCarModel from "./Components/RedCarModel";

const PortfolioContent = () => {

    return (
        <>
            <LineGap />
            <Profile />
            <LineGap />
            <ProfileLinks />
            <LineGap />
            <About />
            <LineGap />
            <TechStack />
            <LineGap />
            <Experience />
            <LineGap />
            <Projects />
            <LineGap />
            {/* <div className="relative h-[20rem] w-screen sm:w-[80rem] m-4">
                <RedCarModel />
            </div>
            <LineGap /> */}
        </>
    )
};

const Portfolio = () => {
    const value = usePortfolio();

    return (
        <PortfolioContext.Provider value={value}>
            <PortfolioContent />
        </PortfolioContext.Provider >
    )
};

export default Portfolio;