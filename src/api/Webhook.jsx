function DiscordWebhook(name, message) {
    let params = {
        username: name,
        content: message,
    }

    fetch(process.env.WEBHOOK_ID, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(params)
    }).then(response => {
        console.log("Success Status", response.status)
    }).catch(err => {
        console.log("Error Sending Message", err)
    })
}

export default DiscordWebhook