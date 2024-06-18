import React from "react";

import "./style.css"

export const metadata = {
    title: "Blog - Create"
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
            
                    <form action="/blog/success">

                        <label htmlFor="name" className="name-label">Title</label> <br/>
                        <input className={`mb-3 text-2xl font-semibold`} id="name-label" type="text" name="title" required/> <br/>

                        <label htmlFor="message">Content</label><br/>
                        <textarea className={`mb-3 text-2xl font-semibold`} id="message-label" name="content" type="text" rows={5} cols={40} required />

                        <br/> <br/>
                        <center>
                            <button type="submit" id="submit-btn">Send</button>
                        </center>
                        
                    </form>

                </div>
                
            </main>

            
            
        </React.Fragment>

    )

}