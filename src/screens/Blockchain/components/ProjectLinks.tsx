import { map } from "lodash"
import { useNavigate } from "react-router-dom";
import { web3 } from "../../../components/projectData";

const BlockchainProjectsLinks = () => {
    const navigate = useNavigate();

    const render_grid_box = (s: any, i: any, is_npm: boolean) => (
        <div
            onClick={() => {
                is_npm
                    ? navigate(`/components/${s.label}`)
                    : window.open(s.link, '_blank');
            }}
            style={{
                ...(i % 2 !== 0) ? { borderRight: '0px' } : { borderLeft: '0px' },
                ...(i <= 1 && { borderTop: '0px' }),
                ...(i > 3 && { borderBottom: '0px' }),
            }}
            key={i}
            className="flex items-center relative border-1 border-neutral-200 justify-between px-3 py-4 hover:bg-neutral-50 transition-colors"
        >
            <div className="flex items-center gap-[12px]">
                {is_npm
                    ? <div className="w-12 h-12 flex items-center justify-center bg-zinc-950 rounded-[12px] overflow-hidden ">
                        {s.icon}
                    </div>
                    : <img src={`/componentImages/${s.img}`} className="w-12 h-12 rounded-[12px] object-cover" />
                }
                <div className="font-medium text-[16px]">{s.title}</div>
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
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] overflow-hidden bg-white">
            {map(web3, (s, i) => (
                render_grid_box(s, i, false)
            ))}
        </div>
    )
}

export default BlockchainProjectsLinks