
let handler = m => m
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      this.sendFile(m.chat, audioMsg[message], 'audio.mp3', null, m, true)
      break
    }
  }
  return !0
 }

export default handler


let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  'alive': 'https://s33.aconvert.com/convert/p3r68-cdx67/cmvrs-f8k1d.mp3',
  'Alfa': 'https://s19.aconvert.com/convert/p3r68-cdx67/l7plh-dip7n.mp3',
  'Amma': 'https://s31.aconvert.com/convert/p3r68-cdx67/7vx3b-s3t95.mp3',
  'Nanban': 'https://s27.aconvert.com/convert/p3r68-cdx67/ux6u5-id19z.mp3',
  'Bgm': 'https://s19.aconvert.com/convert/p3r68-cdx67/pltnp-d829w.mp3',
  'Love': 'https://s17.aconvert.com/convert/p3r68-cdx67/5wrpd-lgwhh.mp3',
  '❤️': 'https://s27.aconvert.com/convert/p3r68-cdx67/drc17-u9rn7.mp3',
  'bot': 'https://s21.aconvert.com/convert/p3r68-cdx67/xp5st-gxmq3.mp3',
}
