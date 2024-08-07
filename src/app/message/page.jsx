import React from "react"
import Image from "next/image"

import LinkCard from "@/components/LinkCard"

import "./email.css"

export const metadata = {
    title: "daulric - Message"
}

function Email() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            
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

            <br/>
            <p className={`mb-3 text-2xl font-semibold`} >
                <center>Send Message</center>
            </p>
            
            <div >
            
                <form action="/message/success">

                    <label htmlFor="name" className="name-label">Name</label> <br/>
                    <input className={`mb-3 text-2xl font-semibold`} id="name-label" type="text" name="name" required/> <br/>

                    <label htmlFor="message">Message</label><br/>
                    <textarea className={`mb-3 text-2xl font-semibold`} id="message-label" name="message" type="text" required />

                    <br/> <br/>
                    <center>
                        <button type="submit" id="submit-btn">Send</button>
                    </center>
                </form>

            </div>

            <br/><br/>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <LinkCard
                    text="Return Home"
                    link="/"
                    info="Go Back to the Home Page"
                />
            </div>
            
        </main>
    )
}

export default Email;