
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pick(["alive"])}.mp3`
      let av = `./src/mp3/${pick(["Da"])}.mp3`
      let av = `./src/mp3/${pick(["Aa"])}.mp3`
conn.sendButton(m.chat, `Hola *${name}* \n \nNecesitas ayuda? \n`, fgig, null, [
      ['⦙☰ Menu', '/help'],
      ['⦙☰ Menu 2', '/menu2'],
      ['⌬ Grupos', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(alive)$/i
handler.command = new RegExp
handler.customPrefix = /^(Da)$/i
handler.command = new RegExp
handler.customPrefix = /^(Aa)$/i
handler.command = new RegExp

export default handler

function pick(list) {
  return list[Math.floor(list.length * Math.random())]
}
