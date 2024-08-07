import {ref , uploadBytesResumable } from "firebase/storage"
import React from "react"

import { redirect } from "next/navigation"

export const metadata = {
    title: "Pictures - Upload"
}

import { storage as storeMap, app, db as firebaseDB } from "@/components/items/firebaseapp"

import Image from "next/image"

import "./page.css"

async function handlePictueUpload(formData) {
    let data = {}

    for (const [name, value] of formData.entries()) {
        data[name] = value
    }

    let storage_ref = ref(storeMap, `/pictures/${data.imgid.name}`)
    let uploadTask = uploadBytesResumable(storage_ref, data.imgid)

    return new Promise((resolve) => {
        uploadTask.on("state_changed", (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            console.log("Uploading", data.imgid.name, percent, "%")
        }, (e) => console.log(e), async () => {
            resolve()
        })
    }).then(() => redirect("/pictures"))

}

async function RedirectToPictures(formData) {
    "use server"
    return await handlePictueUpload(formData)
}

export default function UploadPicture() {
    return (
        < React.Fragment >

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
                    <center>Upload Image</center>
                </p>
                
                <div >
                
                    <form action={RedirectToPictures} >

                        <center> <label htmlFor="name" className="name-label">Select Image</label> </center>
                        <input className="btn-warning" type="file" accept="image/*" id="img" name="imgid" required/>
                        <br/>

                        <br/> <br/>
                        <center>
                            <button type="submit" id="submit-btn">Upload</button>
                        </center>
                        
                    </form>

                </div>
                
            </main>

        </React.Fragment>
        
    )
}