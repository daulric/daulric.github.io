import React from "react";

import LinkCard from "@/components/LinkCard";

export const metadata = {
    title: "Policy"
}

function CreatePolicy({ increment, ...props}) {
    return (
        <React.Fragment>
            {`${props.helperText}`}
            <br/><br/>
        </React.Fragment>
    )
}

export default function Policy() {
  
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" >
                <p className={`mb-3 text-2xl font-semibold`} >
                    <center>Policy<br/>idk how to write a policy for this site, but i hope you agree to it! 😊</center><br/><br/>

                        <CreatePolicy helperText="1. Do what you want here. idc what happens here."  />
                        <CreatePolicy helperText="2. Owner of this website is not responsible for any materials uploaded to this site."/>
                        <CreatePolicy helperText="3. To request a takedown of any material, please send a message at '/message'. If its not taken down, its probaly because im busy." />
                        <CreatePolicy helperText="4. Persons will be liable if any threats are sent to the owner. So watch what your doing!"/>
                        <CreatePolicy helperText="5. Data are not stored in any cookies. However data, suchs as dates from blogs and images uploaded are stored to Firebase."/>
                        <CreatePolicy helperText="6. I know you are not going to read this, but if you wanna take any actions on me, then thats a loss for you."/>
                        <CreatePolicy helperText="7. Freedom of speech is important and it is nessessary that we respect one another opinions, even if its stupid or offensive. Everyone has the rights to a platform."/>
                        
                        <CreatePolicy helperText="NB. Freedom of Speech is a very controversial topic and one thing that needs to be taken into consideration. IDC what is being said on this site. I just want to create a space for people to share their information, whether it be true, or just a made up lie. "/>
                        
                        <CreatePolicy helperText="8. If you know the person/s that uploaded certain pictures or blogs to this site that may be deem offensive or can cause destruction of character, they are not liable for any damage cause to you or any persons to whom it affects." />
                        <CreatePolicy helperText="9. The owner of this website will not take this website down unless a warrent, signed by a judge, is shown and delivered by the Inspector of Police or any ranks/orgainsation higher that what is mentioned. If this happens, all data from the Firebase database, will be destroyed infront of the person who distributed the warrent and 2 or 3 witnesses, therefore clearing the entire data from this site. The inspector of Police or any rank higher will drop all charges against the owner of this site, once data removal is completed. I aint joking around 😊"/>
                        <CreatePolicy helperText="10. Enjoy your time here."/>
                    <br/>
                </p>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                <LinkCard
                    link="/"
                    text="Home"
                    info="Returns to the Home Page!"
                />
                </div>
        </main>
    )
}