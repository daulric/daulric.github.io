import React from "react";

import "./style.css"
import { redirect } from "next/navigation";

import { db } from "@/components/items/firebaseapp";
import { get, ref, push, set } from "firebase/database";

export const metadata = {
    title: "Blog - Create"
}

async function setData(formData) {
    console.log(formData)
    const {title, content} = Object.fromEntries(formData)

    let currentId_ref = ref(db, "/blogs/currentId")
    let blogs_ref = ref(db, "/blogs/data")

    const currentId = await get(currentId_ref).then(response => response.val())

    const newId = currentId + 1;

    let currentDate = new Date()

    let dateFormat =  {
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        yr: currentDate.getFullYear()
    }

    const data = {
        blog_id: currentId,
        title: title,
        content: content,
        timeCreated: dateFormat
    }

    await push(blogs_ref, data).then(() => {
        set(currentId_ref, newId)
    })

    return {
        redirect_id: currentId,
    }

}

async function redirectToBlog(formData){
    'use server'
    const {title, content} = Object.fromEntries(formData)
    console.log(title, content)
    
    let data = await setData(formData)

    console.log(data)

    console.log("redirecting!")
    return redirect(`/blog/${data.redirect_id}`)
}

export default function CreateBlog() {

    return (

        <React.Fragment>

            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <p className={`mb-3 text-2xl font-semibold`} >
                    <center>Write Public Anonymous Blog Post</center>
                </p>

                <br/>
                <p id="warning-label" >
                    <center>
                        <big id="warning" >WARNING!!!</big>
                    </center>
                    <br/><br/>
                    <center>
                        daulric is not responsible for any post anoymous posts made here!
                        <br/> i dont care if this site belongs to me!
                        <br/> This is an anonymous free speech blog
                        <br/> Dont come after me!
                        <br/> You want me take a blog post down!
                        <br/> Send a private message <a id="bp-link" href="/message">here</a> with the link to the blog post
                        <br/> and state your reasons
                    </center>
                </p>

                <br/>

                <div >
            
                    <form action={redirectToBlog}>

                        <label htmlFor="name" className="name-label">Title</label> <br/>
                        <input className={`mb-3 text-2xl font-semibold`} id="name-label" type="text" name="title" required/> <br/>

                        <label htmlFor="message">Content</label><br/>
                        <textarea className={`mb-3 text-2xl font-semibold`} id="message-label" name="content" type="text" rows={5} cols={40} required />

                        <br/> <br/>
                        <center>
                            <button type="submit" id="submit-btn">Create Blog</button>
                        </center>
                        
                    </form>

                </div>
                
            </main>

            
            
        </React.Fragment>

    )

}