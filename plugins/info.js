let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick


Script: @Nurotomo
Github: 
https://github.com/lastsymphony/testv2

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @aditya jatayu
➥ YouTube:
aditya jatayu
╠
╠
╠═══════════════
╠
╠═last
╠
╠═══════════════
╠
╠═〘 DONASI 〙 ═
╠➥ 6289670394574
╠➥ 6289670394574
╠➥ 6289670394574
║>Request? Wa.me/6289670394574
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

