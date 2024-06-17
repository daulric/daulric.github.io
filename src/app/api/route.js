import { NextResponse } from "next/server"

export async function GET(req) {
    return NextResponse.json({
        helo: "idk"
    })
}

export async function POST(req) {
    return NextResponse.json({
        hello: "posted"
    })
}