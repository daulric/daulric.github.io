import { NextResponse } from "next/server"
import { createTransport } from "nodemailer"

export async function POST(req) {

    const { name, message } = await req.json()

    let typeCheck = (
        typeof(name) !== "undefined" && 
        typeof(message) !== "undefined" &&
        name !== "" &&
        message !== ""
    )

    // Check the type or it will trhrow an error
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

            return NextResponse.json(request.response)
        } catch(e) {
            console.log(e)
        }
    } else {
        return new NextResponse(`There is no Name or Message!`)
    }
}