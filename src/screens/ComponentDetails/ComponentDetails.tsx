import { useParams } from "react-router-dom";
import BorderWrapper from "../../components/BorderWrapper";
import LineGap from "../../components/LineGap";
import { find } from "lodash";
import { components } from "../../components/utils.tsx";
import CodeBlock from "./components/CodeBlock.tsx";

const ComponentDetails = () => {
    const params = useParams();
    const component = find(components, c => c.label === params.counter);

    return (
        <div className="relative  min-h-[100vh] z-[1]">
            <LineGap />
            <BorderWrapper boxClass="text-[14px] text-zinc-500 items-center px-[12px] h-fit leading-11 font-[500] flex gap-[12px] " >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                </div>
                <div>
                    Components
                </div>
            </BorderWrapper>
            <LineGap />
            <BorderWrapper boxClass="px-[12px] text-[30px] leading-8">
                {component?.title}
            </BorderWrapper>
            <BorderWrapper boxClass="py-[24px] px-[12px] w-full flex flex-col gap-[16px] ">
                <div className="text-zinc-400 text-[16px] ">
                    {component?.about}
                </div>
                <div className="border-1 overflow-hidden rounded-[12px] border-neutral-200">
                    <div className=" flex justify-center items-center min-h-[200px]">
                        {component?.component}
                    </div>
                    {component?.code && <CodeBlock code={component?.code} />}
                </div>
                {
                    component?.installation
                    && <>
                        <div className="text-[24px] text-zinc-950 pt-[24px] pb-[8px]  ">
                            Installation
                        </div>
                        <div className="bg-neutral-50 py-[12px] w-full rounded-[12px]">
                            <div className="flex gap-[12px] px-[12px] pb-[12px] w-full items-center border-b-1 border-neutral-200">
                                <div className="h-[16px] w-[16px] text-neutral-500 ">
                                    <svg viewBox="0 0 24 24"><path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" fill="currentColor"></path></svg>
                                </div>
                                <div className="text-[18px] w-full">
                                    npm
                                </div>
                            </div>
                            <code className="text-[16px] block min-w-full px-[12px] pt-[12px] ">
                                {component?.installation}
                            </code>
                        </div>
                    </>}
            </BorderWrapper>
            <LineGap />
        </div>
    )
};

export default ComponentDetails;