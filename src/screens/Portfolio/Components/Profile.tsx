import BorderWrapper from "../../../components/BorderWrapper";

const Profile = () => {

    return (
        <BorderWrapper>
            <div className="w-full flex row ">
                <div className="h-[160px] min-w-[160px] border-1 border-neutral-200 rounded-full"></div>
                <div className="border-l-1 border-neutral-200 min-h-full w-full flex flex-col justify-end">
                    <div className=" px-[12px] text-[12px] text-zinc-300">
                        text-3xl &nbsp; text-zinc-950 &nbsp; font-bearhunter
                    </div>
                    <div className="border-t-1 text-zinc-950 font-bearhunter font-[600] px-[12px] text-[32px] border-neutral-200 min-w-full">
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