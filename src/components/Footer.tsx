import { useNavigate } from "react-router-dom"
import BorderWrapper from "./BorderWrapper"

const Footer = () => {
    const navigate = useNavigate();

    return (
        <BorderWrapper boxClass='flex flex-col justify-center items-center text-center py-[12px] text-zinc-500'>
            <span className="text-zinc-400">Inspired by ncdai</span>
            <span onClick={() => navigate('https://x.com/_rajputshashank')} className="cursor-pointer hover:underline text-zinc-500">Built by rajputshashank</span>
        </BorderWrapper>
    )
}

export default Footer