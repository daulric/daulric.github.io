"use client"

import React, { useState, useEffect } from "react";
import "./style.css";

export default function Pictures() {

    const [fullImgSrc, setFullImgSrc] = useState(null);

    useEffect(() => {
        const fullImgBox = document.getElementById("fullImgBox");
        const fullImg = document.getElementById("fullImg");

        if (fullImgBox && fullImg) {
            if (fullImgSrc) {
                fullImgBox.style.display = "flex";
                fullImg.src = fullImgSrc;
            } else {
                fullImgBox.style.display = "none";
            }
        }
    }, [fullImgSrc]);

    function openFullImg(pic) {
        setFullImgSrc(pic);
    }

    function closeFullImg() {
        setFullImgSrc(null);
    }

    function ImageAdd(props) {
        return <img src={props.src} onClick={() => openFullImg(props.src)} alt="Thumbnail" />;
    }

    return (
        <React.Fragment>
            <div className="full-img" id="fullImgBox" style={{ display: 'none' }}>
                <img id="fullImg" alt="Full size" />
                <span onClick={closeFullImg}>X</span>
            </div>

            <div className="img-gallery">
                { /* Pictures Coming Here!  */ }
            </div>
        </React.Fragment>
    );
}
