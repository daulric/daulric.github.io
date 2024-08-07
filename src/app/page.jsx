import React from "react"
import Image from "next/image"
import LinkCard from "@/components/LinkCard"
import AuthText from "@/components/Auth/AuthText"

import "./style.css"

const nav_list = [
    {
        text: "Message",
        link: "/message",
        info: "Send a Personal Message"
    },

    {
        link: "/blog",
        text: "Blogs",
        info:"Get all Anonymous Blogs created by random users!"
    },

    {
        text:"Pictures",
        link:"/pictures",
        info:"View Anonymous Pictures Posted!"
    },

    {
        text: "Policy",
        link: "/policy",
        info: "View Website Policy"
    },

]

export default function AboutMe(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <AuthText />

            <div id="nav"/><br/>
            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                {
                    nav_list.map((props) => {
                        return <LinkCard
                            key={props.text} 
                            {...props}
                        />
                    })

                }

            </div>

            <br/>
            
            <div id="socials"/><br/>
            <p id="social" className={`mb-3 text-2xl font-semibold`} >
                Socials<br/>
            </p>

            <br />

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                <LinkCard
                    link="https://github.com/daulric"
                    text="Github"
                    info="Get More info on projects i have worked on!"
                    newTab={true}
                />

                <LinkCard
                    link="https://instagram.com/ulricaird"
                    text="Instagram"
                    info="Get up to date with posts!"
                    newTab={true}
                />

            </div>

            <br/><br/>

            <div id="projects" className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <p id="project" className={`mb-3 text-2xl font-semibold`} >
                    <center> Projects</center><br/>
                </p>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                <LinkCard
                    link="https://github.com/daulric/exon"
                    text="Exon"
                    info="Framework for Game Development and more..."
                    newTab={true}
                />

                <LinkCard
                    link="https://www.roblox.com/groups/12852480"
                    text="Games"
                    info="This is a group with the list of game I made..."
                    newTab={true}
                />

                <LinkCard 
                    link="https://github.com/daulric/DatabaseServiceApi"
                    text="Database API"
                    info="Created to connect and handle Firebase Realtime Database"
                    newTab={true}
                />

            </div>

        </main>
    )
}