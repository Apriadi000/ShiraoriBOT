let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ Dana: 085954944195
├ XL:085954944195
└────
`.trim(), '© ＼⋆⃟K⋆⃟A𓆩ᵇᵒᵗ𓆪⋆⃟T ⋆⃟E／', 'Pemilik Bot', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
