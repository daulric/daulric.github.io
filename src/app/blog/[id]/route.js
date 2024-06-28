import { db } from "@/components/firebaseapp"

import { get, ref, set } from "firebase/database"
import { NextResponse } from "next/server"

export const dynamic = "fore-dynamic"

export async function GET(req, { params }) {
    let id = Number(params.id)
    let blog_id_ref = ref(db, `/blogs/data`)

    let data = await get(blog_id_ref).then((response) => {
        return response.val()
    })

    let blog_data = Object.entries(data).filter(([_, value]) => {
        return value.blog_id === id;
    })

    if (blog_data === null || blog_data.length === 0) {
        return new NextResponse("Couldn't find Blog")
    }

    let blog_data_new = blog_data[0][1]
    return NextResponse.json(blog_data_new)
}