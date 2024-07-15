"use server"

export const sendDiscordMessage = async (name, message) => {
  try {
    
    await fetch(process.env.discord_webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        content: message,
      }),
    })
  } catch (err) {
    // Just in case :)
    console.log(err.message)
  }
}