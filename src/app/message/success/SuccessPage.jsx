import LinkCard from "@/components/LinkCard"
import Image from "next/image"

export default async function SuccessPage(props) {
    if (props.text === "") {
        props.text = "Message Sent!"
    }
    return (
        <main id="mainclass" className="flex min-h-screen flex-col items-center justify-between p-20">

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src="/logo.png"
                    alt="Logo"
                    width={180}
                    height={37}
                    priority
                />

            </div>

            <div id="email-b" className="flex min-h-screen flex-col items-center justify-between p-1">
                <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/3" > 
                    {props.text}
                </h2>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <LinkCard
                        text="Return Home"
                        link="/"
                        info="Go Back to the Home Page"
                    />

                    <LinkCard 
                        text="Send More"
                        link="/message"
                        info="Send another message"
                    />
                </div>
            </div>
            
        </main>
    )
}