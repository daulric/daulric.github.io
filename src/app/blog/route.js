import { db } from "@/components/firebaseapp";
import { get, ref} from "firebase/database"
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET() {
    let blog_ref = ref(db, `/blogs/data`)
    let data = await get(blog_ref).then(response => response.val())
    return NextResponse.json(data)
}