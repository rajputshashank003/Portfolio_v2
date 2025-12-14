import BorderWrapper from "../../components/BorderWrapper";
import LineGap from "../../components/LineGap";
import BlockchainProjectsLinks from "./components/ProjectLinks";
import BlockchainProjectsContext from "./context";
import useBlockchainProjects from "./useBlockchainProjects";

const BlockchainProjectsContent = () => {

    return (
        <div className="relative  min-h-[100vh] z-[1]">
            <LineGap />
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Blockchain Projects
            </BorderWrapper>
            <BorderWrapper boxClass="px-[12px] py-[3%] ">
                <div className="text-zinc-400 text-[18px] leading-5">
                    A collection of reusable components. <br />
                    Trusted registry for shadcn/ui.
                </div>
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
            <BorderWrapper boxClass="">
                <BlockchainProjectsLinks />
            </BorderWrapper>
            <BorderWrapper boxClass="h-[14px]"></BorderWrapper>
        </div>
    )
};

const BlockchainProjects = () => {
    const value = useBlockchainProjects();

    return (
        <BlockchainProjectsContext.Provider value={value}>
            <BlockchainProjectsContent />
        </BlockchainProjectsContext.Provider >
    )
};

export default BlockchainProjects;