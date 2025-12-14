import { head, map, size } from "lodash"
import BorderWrapper from "../../../components/BorderWrapper"
import { XLogo } from "../../../components/Svgs";
import { web_components } from "../../../components/projectData";

const ProfileLinks = () => {
    console.log(head(web_components));

    const socials = [
        { link: 'x.com/_rajputshashank' , name: "X (formerly Twitter)", handle: "@_rajputshashank", icon: <XLogo /> },
        { link: 'github.com/rajputshashank003' , name: "GitHub", handle: "@rajputshashank003", icon: <img src='/Logo/Github_logo.webp' className="h-[48px] w-[48px] bg-white" /> },
        { link: 'linkedin.com/in/rajputshashank/' , name: "LinkedIn", handle: "@rajputshashank", icon: <img src='/Logo/Linkedin_logo.webp' className="h-[48px] w-[48px] bg-white" /> },
        { link: 'leetcode.com/rajputshashank' , name: "LeetCode", handle: "@rajputshashank", icon: <img src='/Logo/LeetCode_Logo.png' className="h-[48px] w-[48px] bg-zinc-950" /> },
        { link: 'npmjs.com/~rajputshashank' , name: "NPM", handle: "@rajputshashank", icon: <img src='/Logo/npm_logo.png' className="h-[48px] w-[48px] bg-zinc-950" /> },
        { link: (head(web_components) as any)?.link , name: (head(web_components) as any)?.title, handle: "Discovery Bar", icon: <img src={`/componentImages/${(head(web_components) as any)?.img}`} className="h-[48px] w-[48px] bg-zinc-950" /> },
    ];

    return (
        <BorderWrapper>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] overflow-hidden bg-white">
                {map(socials, (s, i) => (
                    <div
                        onClick={() => window.open(`${ size(socials) === i + 1 ? '' : 'https://'}${s.link}`, '_blank')}
                        style={{
                            ...(i % 2 !== 0) ? { borderRight: '0px' } : { borderLeft: '0px' },
                            ...(i <= 1 && { borderTop: '0px' }),
                            ...(i > 3 && { borderBottom: '0px' }),
                        }}
                        key={i}
                        className="flex items-center relative border-1 border-neutral-200 justify-between px-3 py-4 hover:bg-neutral-50 transition-colors"
                    >
                        <div className="flex items-center gap-[12px]">
                            <div className="w-12 h-12 flex items-center justify-center bg-zinc-950 rounded-[12px] overflow-hidden ">
                                {s.icon}
                            </div>
                            <div>
                                <div className="font-medium text-[16px]">{s.name}</div>
                                <div className="text-[14px] text-neutral-500">{s.handle}</div>
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-[18px] h-[18px] text-neutral-400 -rotate-[45deg]"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H8" />
                        </svg>
                        <div className="border-1 border-neutral-200 h-[13.5px] w-[13.5px] absolute -bottom-[13.5px] -left-[13.5px] "></div>
                    </div>
                ))}
            </div>
        </BorderWrapper>
    )
}

export default ProfileLinks