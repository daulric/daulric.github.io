import React from "react";
import './test.css'

let lastCount = 0

function MyComponent() {

    const [num, update] = React.useState(0)

    function onClick () {
        lastCount = lastCount + 1
        update(lastCount)
    }

    return (
        <button
            className="button-update"
            onClickCapture={onClick}
            href="/#"
        >
        Clicks: {num}
        </button>
    )
}


export default MyComponent;