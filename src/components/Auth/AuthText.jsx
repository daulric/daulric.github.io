"use client"
import { useSession, signOut, signIn } from "next-auth/react"

import LinkCard from "../LinkCard"

export default function ProfileSession() {
    const { data }  = useSession()

    if (data) {
        return (
            <>
                <p id="user profile" className={`mb-3 text-2xl font-semibold`} >
                    Hello {data.user.name}<br/>
                </p>

                <LinkCard 
                    text="Sign Out"
                    info="Sign out of the Site!"
                    clicked={ () => signOut()}
                    link="/"
                />
            </>
        )
    } else {
        return ( 
            <LinkCard 
                text="Sign In"
                info="Sign in of the Site!"
                clicked={ () => signIn()}
                link="/"
            />
        )
    }

} 