import React from "react";
import Image from "next/image";
import { getDatabase, ref, get } from "firebase/database"

import firebaseapp from "@/components/apps/firebaseapp"

import "./style.css";

async function CreateBlogLandingPage(props) {
    return ( 
        <div class="blog-box" key={props.key} >
            <div class="blog-text">
                <span>{props.date}</span>
                <a href={props.link} class="blog-title">{props.title}</a>
                    <p>{props.info}</p>
                <a href={props.link}>Read More</a>
            </div>
        </div>
    )
}

async function loopPages(props) {
    data = props.data
    return (
        <>
            
        </>
    )
}

export default async function BlogLandingPage() {

    let db = getDatabase(firebaseapp)
    let blogs_ref = ref(db, "/blogs")
    let blog_retrieval = await get(blogs_ref)
    let blogs_data = blog_retrieval.val()

    // Replace to timeCreated index from the database!
    let currentDate = new Date()

    //console.log(blogs_data)

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

                <div class="blog-heading">
                    <h3>Recent Blogs</h3>
                </div>

                <div class="blog-container">
                {
                    Object.entries(blogs_data).map( ([key, value]) => {
                        <CreateBlogLandingPage 
                            key={key}
                            title={value.title}
                            info={value.info}
                            link={`/blog/${value.blog_id}`}
                        />
                    })
                }
                </div>
        
            </section>
        </React.Fragment>
    )
}