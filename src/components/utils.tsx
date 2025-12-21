import Counter from "animated-motion-counter";
import FeedbackForm from "feedback-animated-box";
import { useState } from "react";

export const ScreensOptions: string[] = ['portfolio', 'components', 'designs', 'blockchain'];

const FeedbackFormBox = () => {
    const [renderFeedbackForm, setRenderFeedbackForm] = useState(false);

    return (
        <div className="relative bg-zinc-100 h-[500px] w-full flex justify-center items-center">
            {!renderFeedbackForm
                && <div className=" pointer-events-none p-[8px] px-[18px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-zinc-400 rounded-[12px] cursor-pointer">
                    Render Component
                </div>
            }
            <div style={{ opacity: renderFeedbackForm ? 1 : 0}} onClick={() => {
                setRenderFeedbackForm(true);
            }}>
                <FeedbackForm onSubmit={() => { }} />
            </div>
        </div>
    )
}
export const components = [
    {
        title: 'Animated Motion Counter',
        label: "animated-motion-counter",
        about: 'Created a animated counter button.',
        installation: 'npm install animated-motion-counter',
        component: (
            <Counter
                min={18}
                max={22}
                buttonColor="black"
                iconColor="white"
                textColor="black"
            />
        ),
        code: ((s) => { const t = s.replace(/^\n+|\n+$/g, ""); const i = Math.min(...t.split("\n").filter(l => l.trim()).map(l => l.match(/^(\s*)/)![1].length)); return t.split("\n").map(l => l.slice(i)).join("\n"); })(`
            <Counter
                min={18}
                max={22}
                buttonColor="black"
                iconColor="white"
                textColor="black"
            />
        `),
    },
    {
        title: 'Feedback Animated Box',
        label: "feedback-animated-box",
        about: 'This project is an animated feedback form.',
        installation: 'npm install feedback-animated-box',
        component: (
            <FeedbackFormBox />
        ),
        code: ((s) => { const t = s.replace(/^\n+|\n+$/g, ""); const i = Math.min(...t.split("\n").filter(l => l.trim()).map(l => l.match(/^(\s*)/)![1].length)); return t.split("\n").map(l => l.slice(i)).join("\n"); })(`
            import FeedbackForm from "animated-feedback-box";

const App = () => {
    const handleSubmit = (feedback: string) => { 
        console.log("Feedback submitted:", feedback)
    }
    
    return (
        <div className="bg-zinc-800 h-screen w-screen relative">
            <div className="absolute bottom-[50%] left-[50%] -translate-x-[50%] ">
                <FeedbackForm onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default App;
        `),

    },
];