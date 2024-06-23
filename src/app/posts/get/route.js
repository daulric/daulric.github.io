import { db } from "@/components/items/firebaseapp"

import { ref, get } from "firebase/database"
import { NextResponse } from "next/server"

export async function GET() {
    const blogs_ref = ref(db, "/blogs/data")
    const blog_retrieval = await get(blogs_ref)
    const data = blog_retrieval.val()

    return NextResponse.json(data)
}