import React from "react"

import SuccessPage from "@/components/SuccessPage"

import "./success.css"

import { createTransport } from "nodemailer"

export const metadata = {
    title: "Message",
    description: "Message",
    icons: {
        icon: "/avatar3.png"
    }
}

export default async function MsgSuccess(props){

    const params = props.searchParams

    let name = params.name
    let message = params.message

    let typeCheck = (
        typeof(name) !== "undefined" && 
        typeof(message) !== "undefined" &&
        name !== "" &&
        message !== ""
    )

    if (typeCheck) {
        
        let transporter = await createTransport({
            service: "gmail",
            auth: {
                user: process.env.STMP_MAIL,
                pass: process.env.STMP_PASS
            }
        })

        try {
            transporter.verify()
        } catch(e) {
            console.log(e)
        }

        try {
            let request = await transporter.sendMail({
                to: process.env.STMP_MAIL,
                subject: `Message Sent From ${name}`,
                text: message,
            })

            console.log(request.response)
        } catch(e) {
            console.log(e)
        }

        return <SuccessPage text="Message Sent!"/>

    } else {
        return <SuccessPage text="No Message Sent!"/>
    } 

}