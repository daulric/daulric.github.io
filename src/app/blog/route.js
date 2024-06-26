import { db } from "@/components/firebaseapp";
import { get, ref} from "firebase/database"
import { NextResponse } from "next/server";

export async function GET() {
    let blog_ref = ref(db, `/blogs/data`)
    let data = await get(blog_ref).then(response => response.val())
    console.log(data)
    return NextResponse.json(data)
}