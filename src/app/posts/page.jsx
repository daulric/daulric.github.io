import React from "react";
import Image from "next/image";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database"

import LinkCard from "@/components/LinkCard";
import BlogCard from "@/components/BlogCard";

import "./style.css";

export const metadata = {
    title: "Anonymous Blogs"
}

function handleBlogs(blogs_data) {

    return (

        <React.Fragment>
            {
            Object.entries(blogs_data).map( ([key, value]) => {
                            
                    if (typeof(value) !== "number") {

                        if (typeof(value.timeCreated) === "undefined") {
                            return (
                                <BlogCard
                                    key={key}
                                    title={value.title}
                                    info={value.content}
                                    link={`/blog/${value.blog_id}`}
                                />
                            )
                        }

                        return (
                            <BlogCard
                                key={key}
                                title={value.title}
                                info={value.content}
                                link={`/blog/${value.blog_id}`}
                                date={`${value.timeCreated.yr}/${value.timeCreated.month}/${value.timeCreated.date}`}
                            />
                        )
                    }

                })

            }


        </React.Fragment>

    )
}

export default async function BlogLandingPage() {

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
    let blogs_ref = ref(db, "/blogs")
    let blog_retrieval = get(blogs_ref)
    let blogs_data = blog_retrieval.val()

    return (
        <React.Fragment>
            <section id="blog">

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

                <div className="blog-heading">
                    <h3>Anonymous Blogs</h3>
                    <br/><br/>
                    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                        <LinkCard text="Create Blog" info="Create an Anonymous Blog" link="/blog/create" />
                        <LinkCard text="Home" info="Return to the Home Page" link="/" />
                    </div>
                    
                </div>

                <div className="blog-container">
                    { /* handleBlogs(blogs_data) */ }
                </div>
            </section>
        </React.Fragment>
    )
}