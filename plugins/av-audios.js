import fs from 'fs';

let handler = async (m) => m;
handler.all = async function (m) {
  for (const message in audioMsg) {
    if (new RegExp(`^${message}$`, 'i').test(m.text)) {
      const audioFilePath = audioMsg[message];
      const audioBuffer = fs.readFileSync(audioFilePath);
      this.sendAudio(m.chat, audioBuffer, 'audio.mp3', null, m, true);
      break;
    }
  }
  return true;
};

export default handler;

let audioMsg = {
  'fino señores': './src/mp3/fino.mp3',
  // Add more entries here as needed
};
