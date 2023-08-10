import fs from 'fs';

let handler = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      const audioPath = audioMsg[message];
      if (fs.existsSync(audioPath)) {
        const audioBuffer = fs.readFileSync(audioPath);
        this.sendAudio(m.chat, audioBuffer, null, m, true);
      } else {
        this.reply(m.chat, 'Audio not found', m);
      }
      break;
    }
  }
  return true;
}

export default handler;

let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  // Add more audio mappings here
};
