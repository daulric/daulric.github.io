import React from "react";

import Image from "next/image";
import { initializeApp } from "firebase/app";
import { ref, get, getDatabase } from "firebase/database"

export default async function BlogIndividual( props ) {
    let { params } = props;
    let blog_id = params.id

    const app = initializeApp({
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId,
    })

    let db = getDatabase(app)
    let blog_ref = ref(db, `/blogs/${blog_id}`)

    let response = await get(blog_ref)
    let data = response.val()
    console.log(response.val())
    
    let compare_id = Number(data.blog_id);
    let compare_id2 = Number(blog_id)

    console.log(compare_id, compare_id2)

    if (compare_id !== compare_id2 ) {
        throw new Error("Invalid Blog ID!")
    }

    console.log("Final Values", data)
    
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

            <br/><br/>

            <div id="email-b" className="flex min-h-screen flex-col items-center justify-between p-1">
                <p className={`mb-3 text-2xl font-semibold`} >
                    <center>{data.title}</center>

                    <br/><br/>
                    <p id="content-msg">{data.content} </p>
                </p>
            </div>
            
        </main>

    )
}