import React from "react"

import { createTransport } from "nodemailer"

import SuccessPage from "@/components/SuccessPage"

import "./success.css"

export const metadata = {
    title: "Message",
    description: "Message",
    icons: {
        icon: "/avatar3.png"
    }
}

export default async function MsgSuccess(props){

    const params = props.searchParams
    
    const {name, message} = params

    let typeCheck = (
        typeof(name) !== "undefined" && 
        typeof(message) !== "undefined" &&
        name !== "" &&
        message !== ""
    )

    if (typeCheck) {
        let transporter = createTransport({
            service: "gmail",
            auth: {
                user: process.env.STMP_MAIL,
                pass: process.env.STMP_PASS
            }
        })

        try {
            let response = await transporter.verify().then(() => {
                return transporter.sendMail({
                    to: process.env.STMP_MAIL,
                    subject: `Message Sent From ${name}`,
                    text: message,
                }).then((response) => {
                    return response.messageId
                })
            })

            if (response) {
                return <SuccessPage text="Message Sent!"/>
            }
        } catch(e) {
            console.log(e)
            return <SuccessPage text={`Error Sending Message // ${e.syscall} ${e.code} ${e.port} `} />
        }

    } else {
        return <SuccessPage text="No Message Sent!"/>
    }

}