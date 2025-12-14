import BorderWrapper from '../../../components/BorderWrapper'

const About = () => {
    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-10 font-[500]">
                About
            </BorderWrapper>
            <BorderWrapper boxClass="px-[12px] py-[3%] ">
                <div className="text-gray-800 text-[16px] leading-relaxed tracking-wide">
                    <ul className="list-disc ml-6 space-y-2 marker:text-zinc-300">
                        <li>
                            <span className="font-[600]">Software Engineer</span> with{" "}
                            <span className="font-semibold">1+ year of experience</span>, proficient in{" "}
                            <span className="font-semibold">full-stack development</span>, combining
                            pixel-perfect frontend design with reliable and efficient backend logic.
                        </li>

                        <li>
                            Experienced in crafting complex motion-based UI interactions using{" "}
                            <span className="font-semibold">Framer Motion</span> and{" "}
                            <span className="font-semibold">GSAP</span>, optimizing performance and
                            creating immersive animations across React applications.
                        </li>

                        <li>
                            Implemented{" "}
                            <span className="font-semibold">webhooks</span> and{" "}
                            <span className="font-semibold">payment gateways</span> for
                            real-time order tracking in Golang, secure transactions, and automated updates
                            across distributed microservices.
                        </li>

                        <li>
                            Solved over{" "}
                            <span className="font-semibold">600+ Data Structures & Algorithms problems</span>{" "}
                            on platform {" "}
                            <span className="font-semibold">LeetCode</span>, achieving a{" "}
                            <span className="font-semibold">1550+ contest rating</span> and
                            continuously improving problem-solving and algorithmic thinking.
                        </li>
                    </ul>

                </div>
            </BorderWrapper>
        </>
    )
}

export default About