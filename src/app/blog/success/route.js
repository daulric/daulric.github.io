//import { redirect } from "next/navigation"
import { NextResponse } from "next/server"

import {app} from "@/components/apps/firebaseapp"
import { ref, get, set, getDatabase } from "firebase/database"
import { redirect } from "next/navigation"

export async function GET(req) {
    let { searchParams } = new URL(req.url)
    let title = searchParams.get('title')
    let content = searchParams.get('content')

    let db = getDatabase(app)

    try {
        if (title === null || content === null || title === "" || content === "") {
            throw new Error("There is no title or content!")
        }

        let currentId = 0;

        let currentIdRef = ref(db, "/blogs/currentId")

        await get(currentIdRef).then((snapshot) => {
            let tempId = snapshot.val();
            if (typeof(tempId) === "number") {
                currentId = tempId;
            }
        })

        currentId += 1;
        let currentDate = new Date()

        let dateFormat =  {
            date: currentDate.getDate(),
            month: currentDate.getMonth() + 1,
            yr: currentDate.getFullYear()
        }

        await set(ref(db, `/blogs/${currentId}`), {
            blog_id: currentId,
            title: title,
            content: content,
            timeCreated: dateFormat
        }).then(() => {
            set(currentIdRef, currentId)
        })

        return await NextResponse.redirect(new URL(`/blog/${currentId}`, req.url))
    } catch(err) {
        return NextResponse.json({err}, {status: 500})
    }

}