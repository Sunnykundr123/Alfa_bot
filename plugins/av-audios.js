Module({
    pattern: 'mp3 ?(.*)',
    fromMe: w,
    use: 'edit',
    desc: Lang.MP3_DESC
}, (async (message, match) => {
    if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) return await message.sendReply(Lang.MP3_NEED_REPLY)
    var {seconds} = message.quoted.message[Object.keys(message.quoted.message)[0]];
    if (seconds>120) await message.sendReply(`_Alert: Duration more than 2 mins. This process may fail or take much more time!_`)
    var savedFile = await message.reply_message.download();
    ffmpeg(savedFile)
        .save('./temp/tomp3.mp3')
        .on('end', async () => {
            await message.client.sendMessage(message.jid, {
                audio: fs.readFileSync('./temp/tomp3.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message.quoted
            })
        });
}));
