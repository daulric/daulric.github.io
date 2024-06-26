import { db } from "@/components/firebaseapp"

import { get, push, ref, set } from "firebase/database"
import { NextResponse } from "next/server"

export async function POST(req) {
    let current_id_ref = ref(db, `/blogs/currentId`)

    let current_id = await get(current_id_ref).then((response) => {
        return response.val();
    })

    let body_data = await req.json();

    if (body_data.title === null || body_data.content === null) {
        return new NextResponse("No Valid Data to Send")
    }

    let new_Id = current_id + 1;
    let blogs_ref = ref(db, `/blogs/data`)

    let currentDate = new Date()

    let dateFormat =  {
        date: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        yr: currentDate.getFullYear()
    }

    const data = {
        blog_id: current_id,
        title: body_data.title,
        content: body_data.content,
        timeCreated: dateFormat
    }

    await push(blogs_ref, data) .then(() => {
        set(current_id_ref, new_Id)
    })

    return NextResponse.json({
        data: data,
        redirect_id: current_id,
    })
}