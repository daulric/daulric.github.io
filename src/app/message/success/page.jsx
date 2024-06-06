import React from "react"
import Image from "next/image"

import LinkCard from "@/components/LinkCard"
import Webhook from "@/components/Webhook"

import "./success.css"

export const metadata = {
    title: "Message Sent!",
    description: "Message Sent Successfully"
}

export default async function EmailSuccess(props){

    const params = props.searchParams

    let name = params.name
    let message = params.message

    let typeCheck = (
        typeof(name) !== "undefined" && 
        typeof(message) !== "undefined" &&
        name !== "" &&
        message !== ""
    )

    if (typeCheck) {
        Webhook(name, message).then(() => {
            console.log("Message Sent to Guilded!")
        })
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
                    Message Sent!
                </h2>

                <LinkCard
                    text="Return Home"
                    link="/"
                    info="Go Back to the Home Page"
                />

            </div>
            
        </main>
    )
}