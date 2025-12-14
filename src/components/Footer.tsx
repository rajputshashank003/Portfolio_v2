import BorderWrapper from "./BorderWrapper"

const Footer = () => {
    return (
        <BorderWrapper boxClass='flex flex-col justify-center items-center text-center py-[12px] text-zinc-500'>
            <span className="text-zinc-400">Inspired by ncdai</span>
            <span className="text-zinc-500">Built by rajputshashank</span>
        </BorderWrapper>
    )
}

export default Footer