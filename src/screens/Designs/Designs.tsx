import BorderWrapper from "../../components/BorderWrapper";
import LineGap from "../../components/LineGap";
import DesignContext from "../Portfolio/context";
import DesignGrids from "./components/DesignsGrids";
import useDesigns from "./useDesigns";

const DesignContent = () => {

    return (
        <div className="relative  min-h-[100vh] z-[1]">
            <LineGap />
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Landing page designs
            </BorderWrapper>
            <BorderWrapper boxClass="px-[12px] py-[3%] ">
                <div className="text-zinc-400 text-[18px] leading-5">
                    A collection of modern landing page designs.
                </div>
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
            <BorderWrapper boxClass="">
                <DesignGrids />
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
        </div>
    )
};

const Designs = () => {
    const value = useDesigns();

    return (
        <DesignContext.Provider value={value}>
            <DesignContent />
        </DesignContext.Provider >
    )
};

export default Designs;