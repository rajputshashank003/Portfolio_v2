import BorderWrapper from "../../../components/BorderWrapper";
// import RedCarModel from "./RedCarModel";

const Profile = () => {

    return (
        <BorderWrapper>
            <div className="w-full flex row ">
                <div className="h-[160px] relative min-w-[160px] border-1 bg-gradient-to-t from-zinc-300 to-zinc-100 border-neutral-200 rounded-full overflow-hidden">
                    <img 
                        className="h-[80%] w-[80%] absolute left-1/2 -translate-x-1/2 bottom-0 object-cover"
                        src="/logo.webp"  
                        alt="" 
                    />
                </div>
                <div className="border-l-1 border-neutral-200 min-h-full w-full flex flex-col justify-end">
                    <div className=" px-[12px] relative text-[12px] text-zinc-300">
                        <span>
                            text-3xl &nbsp; text-zinc-950 &nbsp; font-f2
                        </span>
                        <div className="absolute -bottom-[26px] right-[12px] h-[80px] w-[250px] ">
                            {/* <RedCarModel /> */}
                        </div>
                    </div>
                    <div className="border-t-1 text-zinc-950 font-f2 font-[600] px-[12px] text-[32px] border-neutral-200 min-w-full">
                        Shashank Rajput
                    </div>
                    <div className="border-t-1 border-neutral-200 w-full px-[12px] text-[18px] py-[4px] text-zinc-500">
                        Software Engineer
                    </div>
                </div>
            </div>
        </BorderWrapper>
    )
}

export default Profile;