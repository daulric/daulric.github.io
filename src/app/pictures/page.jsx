import React from "react";
import Image from "next/image";

import LinkCard from "@/components/LinkCard";

import { unstable_noStore as noStore } from "next/cache";

import { getDownloadURL, getMetadata, listAll, ref as storeRef } from "firebase/storage"
import { storage } from "@/components/items/firebaseapp";

import ImageViewer from "./ImageViewer";

import "./style.css"

export const metadata = {
  title: "Pictures"
}

async function GetImagesStraight() {
  noStore()
  let db_ref = storeRef(storage, "/pictures");

  try {
    let result = await listAll(db_ref);
    
    const data = [];

    // Use Promise.all to wait for all getDownloadURL promises to resolve
    await Promise.all(result.items.map(async (item) => {
      try {
        const downloadURL = await getDownloadURL(item);
        const metaData = await getMetadata(item);
        data.push({
          url: downloadURL,
          data: metaData,
        });

      } catch (error) {
        console.error(`Error getting URL for item: ${item.name}`, error);
      }
    }));

    data.sort((a, b) => {
      return b.data.generation - a.data.generation
    })

    return data;
  } catch(err) {
    console.log("Error in GetImagesStraight:", err);
    return [];
  }
}

async function handlePics() {
  noStore()
  let imageData = await GetImagesStraight()

  if (imageData === null || typeof imageData === "undefined") {
    return <React.Fragment />
  }

  if (imageData.length === 0) {
    return <React.Fragment />
  }

  return (
    <React.Fragment >
      {imageData.map((image) => {

        return (
          <ImageViewer 
            key={`Img_ID: ${image.url}`}
            src={image.url}
            alt={image.data.name || "Uploaded Image"}
          />
        )
      })}
    </React.Fragment>
  )


}

export default async function Pictures() {
  noStore()

  return (
      <section id="pitcures-heading">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo.png"
          alt="Logo"
          width={180}
          height={37}
          priority
          />
        </div>

      <div className="heading">
          <h3>Recent Uploaded Pictures!</h3>
          <br/><br/>
          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <LinkCard text="Upload Picture" info="Upload Anonymous Pictues" link="/pictures/upload" />
              <LinkCard text="Home" info="Return to the Home Page" link="/" />
          </div>
          <br/>
          <br/>
          <div className="img-gallery">
            {handlePics()}
          </div>
          
      </div>
      </section>
  );
}