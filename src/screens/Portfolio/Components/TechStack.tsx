import { map } from "lodash";
import BorderWrapper from "../../../components/BorderWrapper"
import { techStack } from "./utils";

const TechBox = ({tech} : { tech: any} ) => {
    return (
        <div
            className="px-[8px] flex py-[2px] border border-zinc-300 justify-center items-center bg-zinc-50 rounded-[12px] text-zinc-800 text-[16px] font-[500] h-fit w-fit"
        >
            <div>
                <svg viewBox="0 0 128 128">
                    <circle cx="64" cy="64" r="64"></circle>
                    <path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
                </svg>
            </div>
            <div>
                {tech}
            </div>
        </div>
    )
}

const TechStack = () => {
    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500]">
                Tech Stack
            </BorderWrapper>
            <BorderWrapper boxClass='flex flex-wrap gap-[12px] px-[12px] py-[12px] '>
                {
                    map(techStack, (opt: any, ind: number) => (
                        <TechBox tech={opt} key={ind} />
                    ) )
                }
            </BorderWrapper>
        </>
    );
}

export default TechStack