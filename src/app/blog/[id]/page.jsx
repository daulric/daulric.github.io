import React from "react";

import Image from "next/image";
import { db } from "@/components/items/firebaseapp";
import { ref, get, getDatabase } from "firebase/database"

import LinkCard from "@/components/LinkCard";

import "./style.css"

export default async function BlogIndividual( props ) {
    let { params } = props;
    let blog_id = params.id

    let blog_ref = ref(db, `/blogs/data`)

    let response = await get(blog_ref)

    //console.log(response.val())
    let itemFound = response.val().filter((item) => item.blog_id === Number(blog_id))
    let data = itemFound[0];

    if ( itemFound.length === 0 ) {
        data = {
            title: "Error with Blog",
            content: "Blog not found!"
        }
    }

    console.log(data)
    
    return (
        <React.Fragment>

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

                <br/><br/>

                <div id="email-b" className="flex min-h-screen flex-col items-center justify-between p-1">
                    <p className={`mb-3 text-2xl font-semibold`} >
                        <center id="title-msg" >{data.title}</center>

                        <br/><br/>
                        <p id="content-msg" style={{whiteSpace: "pre-line"}}>{data.content} </p>
                    </p>

                </div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                    <LinkCard
                        link="/posts"
                        text="Return to Blogs"
                        info="Returns to the blog page to view more blogs!"
                    />

                    <LinkCard
                        link="/home"
                        text="Return Home"
                        info="Returns to the home page"
                    />

                </div>
                
            </main>

        </React.Fragment>

    )
}