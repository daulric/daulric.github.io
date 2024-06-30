import { getStorage, ref, uploadBytesResumable } from "firebase/storage"

async function handlePictueUpload(formData) {
    'use server'
    console.log("uploaded")
}

import UploadButton from "./UploadButton"
import React from "react"

export default function UploadPicture() {
    return (
        <React.Fragment >
            <UploadButton />
        </React.Fragment>
        
    )
}