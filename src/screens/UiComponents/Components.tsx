import BorderWrapper from "../../components/BorderWrapper";
import LineGap from "../../components/LineGap";
import PortfolioContext from "../Portfolio/context";
import ComponentsLinks from "./Components/ComponentsLinks";
import useComponents from "./useComponents";

const ComponentsContent = () => {

    return (
        <div className="relative  min-h-[100vh] z-[1]">
            <LineGap />
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Components
            </BorderWrapper>
            <BorderWrapper boxClass="px-[12px] py-[3%] ">
                <div className="text-zinc-400 text-[18px] leading-5">
                    A collection of reusable components. <br />
                    Trusted registry for shadcn/ui.
                </div>
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
            <BorderWrapper boxClass="">
                <ComponentsLinks />
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
        </div>
    )
};

const Components = () => {
    const value = useComponents();

    return (
        <PortfolioContext.Provider value={value}>
            <ComponentsContent />
        </PortfolioContext.Provider >
    )
};

export default Components;