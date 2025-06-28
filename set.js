// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.sessionServer = "https://creds.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";


 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~H4sIAAAAAAAAA5VVXZOiOBT9L3nVGj7FxqquWqBBEBTwW7f2IUJAFAgmQcUp//sW2j09VbM728sDFS7JPeeenJt8ByXOKHJRAwbfQUWyM2SoHbKmQmAA9DpJEAFdEEMGwQBAG570RlnpbCNdmltjrZZ4EV8Zk2UOs7MdR+L8wivUsTev4N4FVb3Ls+g3CfHJDlzGxsK62jmdcLoPefPqz9f2GZcnf7s8GpgLhgvX56NXcG8zwoxkZWpWe1QgAnMXNQHMyNfoz956vc01HNHlvMhCGuCwvgaJd5JHt9FQfzs0R2RE1aWaS9rX6FP34NuVOXHrl+i620U3UdpWm5idWF8i22Rl85VtptzULTdP+jRLSxQ7MSpZxpov677ROWfoLTKc+OKCbgTfqhQSyoKxMtJZuAxP8Qgfcn5ZF1/Ufaz1gqVm2otImHgUoXK6UFy8s2zP525n14PnyJtHYTmbyT8TD8iHV47/R3fNx4qXdspkSL2hx1vXW9kQs9+sQzIPBU4UI8qWo3FuD/HX6PcWRF1VHn/uXQ77rTlcI3s457KtEfCyW3rJ9TaerDrh5EXQPulDVpPfseyLjobjBXT2PQ/OValUNGvONlPleD5o5xM6TNbSJlyvr4Jx7CtV0pFMnyN5OZvN6Rqf6XTixN5owRcsL95elDrig94hfX1UdESNE4OBcO8CgtKMMgJZhstHTJK7AMbnGYoIYg95gd33NCuOK6QuJoG/k6Sjzs1vZYPl6eGaFlNjm4+31xN23PAVdEFFcIQoRbGdUYZJM0aUwhRRMPjzsVNt0QQVmKFRFoMBUAVVEWRZlGRR+IN+u+who7CqvpWIgS5ICC7GCAwYqVEXPBYIlthTeN4UeUvXxb7c6/eNF91q35aqG3pbYvEEnWcFogwWFRgI/Z7Aqy+i9HL/qwtKdGVP/7RVS0IXJBmhbFHWVY5h/GGuj58winBdsllTRkY7QAQM+M8wYiwrU9pWVpeQRPvsjIy2DjBIYE7RD6ERQfF77MfqdlWMGMxyCgbAcLyARWPb9G9DjjrDoWammpFq4BPtwz3P3dHfFnUdUmKtimuYdKDvmB2hMzrCyLD6uOR7pX4Wk9NaFNLXf0gCBuDYOdcjPzCuMzvjUpU/ivltNexMrXk0hJPFUXzxpSOuRjuXUxq0l4KVMRs1q7qzd7hmx1MPqp1jyq/U064YwUOHyn78Fr62aDE6ZxH6GYzz1rO30ZC7yVykbf2JqCZ8OnHN2NhQevO44GDWF5xdxKRpRGMzo5P4UHXWN8tfzdj4kO+j9Sk57VWdoInbmGurWvtp+PR18WioX0w1EHu/+ip/TJPVvihJktrvCT1BaSe28Y8Wzd+PxuzdvNnjM8nQ46QpYYv330hPDVon8ffuTznez65/6X89DAWPHD33uqzowuaKQ6YHLMm2w1LbI2Wk+tvLTi2VXGUbcG8tXeWQJZgU7c1YxgRnMegCguvWmk6Z4N+AGZrjGNpTxBxSpn3a/Z86SHzOCgiubEj3YACkZHMxXNAFRaNV1YxB9tE9QGsf19DA/W9I7OWB4AcAAA==", // Add sess Id here especially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || false, // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "919614423421", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
