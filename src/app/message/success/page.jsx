import React from "react"

import { sendDiscordMessage } from "@/components/items/discordhook"

import SuccessPage from "./SuccessPage"

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
        await sendDiscordMessage(name, message).then(() => {
            return <SuccessPage text="Message Sent!"/>
        }).catch((e) => {
            return <SuccessPage text="Error Sending Message!"/>
        })

    } else {
        return <SuccessPage text="No Message Sent!"/>
    }

}