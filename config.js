const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Tamale,Ghana."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "14124991400";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_38_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDM2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkzLFxuICAgICAgICAyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNyxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTksXG4gICAgICAgIDMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmtSeGd4TldKakwyN2FQclE1VEtEdXZDeWxmZDV0NWJocmZBVUszYktpST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTWwzbWlaNmpRbC1aWFFRUUJGLTJkQVwiLFxuICBcInBob25lSWRcIjogXCIwZjZjY2ZmYS1mY2VmLTRlN2EtOThkMS1mNjY0NDBhMzA2ODhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMsXG4gICAgICAxNDgsXG4gICAgICAxMjksXG4gICAgICAxMzUsXG4gICAgICAyMjEsXG4gICAgICA0LFxuICAgICAgMTM1LFxuICAgICAgMTMzLFxuICAgICAgMTg3LFxuICAgICAgMjI0LFxuICAgICAgMjUxLFxuICAgICAgMTE2LFxuICAgICAgMTMwLFxuICAgICAgMjUwLFxuICAgICAgMTMxLFxuICAgICAgMjMxLFxuICAgICAgMTgzLFxuICAgICAgMTc1LFxuICAgICAgMjA3LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTc3LFxuICAgICAgMjA2LFxuICAgICAgMTIzLFxuICAgICAgMjQxLFxuICAgICAgMzAsXG4gICAgICA1MyxcbiAgICAgIDc0LFxuICAgICAgMTkyLFxuICAgICAgNDksXG4gICAgICAxNzYsXG4gICAgICAxNjksXG4gICAgICAyMTYsXG4gICAgICA5MyxcbiAgICAgIDE4LFxuICAgICAgMTUwLFxuICAgICAgMjM4LFxuICAgICAgMjEwLFxuICAgICAgMyxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBHRkw2RzZYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNDEyNDk5MTQwMDoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA4NzgyNzIyNzQ1MzM6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQHNfYWZmdWzwn5KvXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmo0NnE0Q0VKZTMyYlFHR0JBZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYWUJqaG54Tk83aUZIMmM3WWplL1NxSC9hRGVBWHRpaWw2dkFXMGJOOXhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpKRFFrTmg5Q3VzdVFVZldSWW51ZCthTWo5a29CSUZ1TVBMck9BWlprSEZORDNQeWYxRjJJZE02d0Q3SUx1MjR6bFZWMWU4VWFtN0pVL1FJZnM5YWpnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpOTk5nbDQ1Vnh0Yit2T243aUFMUTJPcDlJVThLR3R5UnpuOWMxSFk4YkFibk82QlNRbVBwcTJlUGRrbE9YM3IwNzREM1JlNnBMbVJOUWhLMERmT2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE0MTI0OTkxNDAwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTI5ODgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBZ0FBS3QrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFLdCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1eGl3U2JkL28vTjBPN3ArdmRvN2trdDQramNVc2FLQnZCRVVXdlNYcUZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNTA5MTk5MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzgsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc3MTA2MDgwNzhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "saffultech",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "345f70f1c3f2ecef4d718d33c14026f9";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
