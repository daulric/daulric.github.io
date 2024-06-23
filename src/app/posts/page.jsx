import React from "react";
import Image from "next/image";

import { unstable_noStore as noStore } from "next/cache"
import { db } from "@/components/items/firebaseapp"

import { ref, get } from "firebase/database"

import LinkCard from "@/components/LinkCard";
import BlogCard from "@/components/BlogCard";

import "./style.css";

export const metadata = {
    title: "Anonymous Blogs"
}

async function getData () {
    const blogs_ref = ref(db, "/blogs/data")
    const data = await get(blogs_ref).then((data) => {
        return data.val()
    })

    return data
}

async function handleBlogs() {
    noStore()

    const data = await getData()

    return (

        <React.Fragment>
            {
                data.map((item) => {
                    if (typeof item === "number") return null;
                    if (typeof item.timeCreated === "undefined") return null;

                    return (
                        <BlogCard
                            key={item.blog_id}
                            title={item.title}
                            info={item.content}
                            link={`/blog/${item.blog_id}`}
                            date={`${item.timeCreated.yr}/${item.timeCreated.month}/${item.timeCreated.date}`}
                        />
                    )
                })
            }

        </React.Fragment>

    )
}

export default async function BlogLandingPage() {
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
                    
                        { handleBlogs() }
                </div>
            </section>
        </React.Fragment>
    )
}