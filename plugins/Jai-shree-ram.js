let handler = async (m) => {
let shizo = { contextInfo: { externalAdReply: { mediaUrl: 'https://youtube.com/@samcreation8299', mediaType: 'VIDEO', description: 'jai shree ram', title: 'jai shree ram ', body: `${botname}`, thumbnailUrl: 'https://imgur.io/a/eVzyind.jpg', sourceUrl: 'https://youtube.com/@samcreation8299', }}}

let errorteam = `https://syntax-6f2391c39498.herokuapp.com/apikey=${shizokeys}`
conn.sendFile(m.chat, errorteam, botname, m, true, shizo)
}
handler.help = ['jai-shree-ram']
handler.tags = ['pies']
handler.command = /^(ram)$/

export default handler
