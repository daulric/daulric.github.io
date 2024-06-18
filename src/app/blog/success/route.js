import {sql} from "@vercel/postgres"
//import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

export async function GET(req) {
    let { searchParams } = new URL(req.url)
    let title = searchParams.get('title')
    let content = searchParams.get('content')

    try {
        if (title === null || content === null || title === "" || content === "") {
            throw new Error("There is no title or content!")
        }

        await sql`INSERT INTO blogs (title, content) VALUES(${title}, ${content})`

    } catch(err) {
        return NextResponse.json({err}, {status: 500})
    }

    let blog_id = await sql`SELECT * FROM blogs`
    return NextResponse.json({blog_id}, {status: 200})
}