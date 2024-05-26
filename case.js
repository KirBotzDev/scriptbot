module.exports = async(x, nx, store) => {
try {
  const type = Object.keys(nx.message)[0]
  const body = (nx.mtype === 'conversation') ? nx.message.conversation : (nx.mtype == 'imageMessage') ? nx.message.imageMessage.caption : (nx.mtype == 'videoMessage') ? nx.message.videoMessage.caption : (nx.mtype == 'extendedTextMessage') ? nx.message.extendedTextMessage.text : (nx.mtype == 'buttonsResponseMessage') ? nx.message.buttonsResponseMessage.selectedButtonId : (nx.mtype == 'listResponseMessage') ? nx.message.listResponseMessage.singleSelectReply.selectedRowId : (nx.mtype == 'templateButtonReplyMessage') ? nx.message.templateButtonReplyMessage.selectedId : (nx.mtype == 'interactiveResponseMessage') ? JSON.parse(nx.msg.nativeFlowResponseMessage.paramsJson).id : (nx.mtype == 'templateButtonReplyMessage') ? nx.msg.selectedId : (nx.mtype === 'messageContextInfo') ? (nx.message.buttonsResponseMessage?.selectedButtonId || nx.message.listResponseMessage?.singleSelectReply.selectedRowId || nx.text) : ''
  const prefix = /^[.#!/^]/.test(body) ? body.match(/^[.#!/^]/gi) : '#'
  const isCmd = body.startsWith(prefix)
  const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
  const from = nx.key.remoteJid
  const isGroup = from.endsWith('@g.us')
  const sender = isGroup ? (nx.key.participant ? nx.key.participant : nx.participant) : nx.key.remoteJid
  const isOwner = x.owner.number.includes(nx.sender)
  const args = body.trim().split(/ +/).slice(1)
  const text = q = args.join(" ")
  const groupMetadata = isGroup? await x.groupMetadata(nx.chat).catch(e => {}) : ""
  const pwkdnwn = isGroup? await groupMetadata.participants : ""
  const groupAdmins = isGroup? await pwkdnwn.filter(v => v.admin !== null).map(v => v.id) : ""
  const isBotAdmins = isGroup ? groupAdmins.includes(x.number) : false
  const isAdmins = isGroup ? groupAdmins.includes(sender) : false
  const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss")
  const quoted = nx.quoted ? nx.quoted : nx
  const mime = (quoted.msg || quoted).mimetype || ''
  const isImage = (type == 'imageMessage')
  const isAntilink = nx.isGroup ? antilink.includes(from) : false
  const isWelcome = nx.isGroup ? welcome.includes(from) : false
  const isPremium = prem.includes(nx.sender)
  const { jadibot, stopjadibot, listjadibot } = require("./jadibot")

if (isCmd) {
  x.readMessages([nx.key])
  console.log(require("chalk").black(require("chalk").bgGreen(`Command ${prefix+command} `)), require("chalk").black(require("chalk").bgWhite(`Dari ${nx.pushName}`)))
}

const reply = (teks) => {
  x.sendMessage(from, { text: teks }, { quoted: nx })
}

let list = []
for (let i of [`${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`, `${global.nomorOwner}`]) {
list.push({
displayName: `Creator ${global.namaBot}`,
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:Creator ${global.namaBot}\n
FN:Creator ${global.namaBot}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
END:VCARD`
})
}

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
}

if (isAlreadyResponList(nx.chat, body.toLowerCase(), listdb)) {
  var get_data_respon = getDataResponList(nx.chat, body.toLowerCase(), listdb)
  if (get_data_respon.isImage === false) {
    x.sendMessage(nx.chat, { text: sendResponList(nx.chat, body.toLowerCase(), listdb) }, { quoted: nx })
  } else {
    x.sendMessage(from, { image: { url: get_data_respon.image_url }, caption: get_data_respon.response }, { quoted: nx })
  }
}

if (nx.isGroup && isBotAdmins && !nx.key.fromMe && isAntilink) {
  if (body.match(`chat.whatsapp.com`)) {
    setTimeout(() => {
      x.sendMessage(from, { text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${sender.split("@")[0]} Maaf Link Yang Kamu Kirim Di Dalam Group Ini Akan Di Hapus Oleh Bot`, mentions: [sender]}, { quoted: nx })
    }, 1000)
    setTimeout(() => {
      x.sendMessage(from, { delete: nx.key })
    }, 2000)
  }
}

switch (command) {

case "menu": {
let wek = "List Menu Di Bawah Kak Silahkan Di Click"
let sections = [
{
title: 'List Menu 1',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU PUSHKONTAK', id: '.pushkonmenu' }]
},
{
title: 'List Menu 2',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU ADDLIST', id: '.addlistmenu' }]
},
{
title: 'List Menu 3',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU OTHER', id: '.othermenu' }]
},
{
title: 'List Menu 4',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU OWNER', id: '.ownermenu' }]
},
{
title: 'List Menu 5',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU GROUP', id: '.groupmenu' }]
},
{
title: 'List Menu 6',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU DOWNLOAD', id: '.downloadmenu' }]
},
{
title: 'List Menu 7',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU JADIBOT', id: '.jadibotmenu' }]
},
{
title: 'List Menu 8',
highlight_label: 'Copyright By KirBotz',
rows: [{ title: 'MENU PHOTOOXY', id: '.photooxymenu' }]
}
]
let listMessage = { title: 'LIST MENU', sections }
let msg = generateWAMessageFromContent(nx.chat, {
viewOnceMessage: { message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [nx.sender],
forwardingScore: 9999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: '120363196790225702@newsletter',
newsletterName: 'Saluran WhatsApp KirBotz', 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: x.decodeJid(x.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
text: wek
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: Styles('bot whatsapp by kirbotz')
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `Hallo Kak @${nx.sender.split('@')[0]}\n`,
subtitle: "",
hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: thumb }, { upload: x.waUploadToServer }))
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
{
"name": "cta_url",
"buttonParamsJson": "{\"display_text\":\"CREATOR\",\"url\":\"https://wa.me/6287705048235\",\"merchant_url\":\"https://wa.me/6289512422017\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"BELI PREMIUM\",\"id\":\".owner\"}"
},
],
})
})
}
}
}, {})
await x.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
break
case "jadibotmenu": {
  const jadi = "╭──❒ `JADIBOT`\n" + `│⭔${prefix}jadibot
│⭔${prefix}stopjadibot
│⭔${prefix}listjadibot
╰────────────❒`
  x.sendMessage(from, { text: jadi, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "downloadmenu": {
  const down = "╭──❒ `DOWNLOAD`\n" + `│⭔${prefix}tiktok *link*
│⭔${prefix}ytmp3 *link*
│⭔${prefix}ytmp4 *link*
│⭔${prefix}playmp3 *query*
│⭔${prefix}playmp4 *query*
╰────────────❒`
  x.sendMessage(from, { text: down, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "groupmenu": {
  const grou = "╭──❒ `GROUP`\n" + `│⭔${prefix}antilink
│⭔${prefix}welcome
│⭔${prefix}hidetag
│⭔${prefix}add
│⭔${prefix}kick
│⭔${prefix}close
│⭔${prefix}open
│⭔${prefix}opentime
│⭔${prefix}closetime
│⭔${prefix}setnamagc
│⭔${prefix}setdeskgc
│⭔${prefix}linkgc
│⭔${prefix}resetlinkgc
╰────────────❒`
  x.sendMessage(from, { text: grou, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "ownermenu": {
  const owne = "╭──❒ `OWNER`\n" + `│⭔${prefix}eval *code*
│⭔${prefix}exec *code*
│⭔${prefix}join *linkgc*
│⭔${prefix}listpremium
│⭔${prefix}addprem *62×××××*
│⭔${prefix}delprem *62×××××*
│⭔${prefix}getcase *owner*
│⭔${prefix}creategc *nama*
│⭔${prefix}broadcast *teks|5*
╰────────────❒`
  x.sendMessage(from, { text: owne, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "othermenu": {
  const othe = "╭──❒ `OTHER`\n" + `│⭔${prefix}owner
│⭔${prefix}sticker
│⭔${prefix}toimg
│⭔${prefix}tourl
│⭔${prefix}hd
│⭔${prefix}qc
│⭔${prefix}speedtest
│⭔${prefix}ping
╰────────────❒`
  x.sendMessage(from, { text: othe, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "addlistmenu": {
  const addl = "╭──❒ `ADD LIST`\n" + `│⭔${prefix}list
│⭔${prefix}addlist *key,teks*
│⭔${prefix}updatelist *key,teks*
│⭔${prefix}dellist *key*
╰────────────❒`
  x.sendMessage(from, { text: addl, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "pushkonmenu": {
  const push = "╭──❒ `PUSHKONTAK`\n" + `│⭔${prefix}idgroup
│⭔${prefix}pushcontacts
│⭔${prefix}pushcontactsid
│⭔${prefix}savecontacts
│⭔${prefix}savecontactsid
╰────────────❒`
  x.sendMessage(from, { text: push, contextInfo: { forwardingScore: 9999999,  isForwarded: true }}, { quoted: nx })
}
break
case "photooxymenu": {
  const pho = "╭──❒ `PHOTOOXY`\n" + `│⭔${prefix}qc *teks*
│⭔${prefix}createqr *teks*
│⭔${prefix}detectqr *reply image*
│⭔${prefix}sticker *reply image*
│⭔${prefix}shadow *teks*
│⭔${prefix}write *teks*
│⭔${prefix}romantic *teks*
│⭔${prefix}burnpaper *teks*
│⭔${prefix}smoke *teks*
│⭔${prefix}narutobanner *teks*
│⭔${prefix}love *teks*
│⭔${prefix}undergrass *teks*
│⭔${prefix}doublelove *teks*
│⭔${prefix}coffecup *teks*
│⭔${prefix}underwaterocean *teks*
│⭔${prefix}smokyneon *teks*
│⭔${prefix}starstext *teks*
│⭔${prefix}rainboweffect *teks*
│⭔${prefix}balloontext *teks*
│⭔${prefix}metalliceffect *teks*
│⭔${prefix}embroiderytext *teks*
│⭔${prefix}flamingtext *teks*
│⭔${prefix}stonetext *teks*
│⭔${prefix}writeart *teks*
│⭔${prefix}summertext *teks*
│⭔${prefix}wolfmetaltext *teks*
│⭔${prefix}nature3dtext *teks*
│⭔${prefix}rosestext *teks*
│⭔${prefix}naturetypography *teks*
│⭔${prefix}quotesunder *teks*
│⭔${prefix}shinetext *teks*
╰────────────❒`
  x.sendMessage(from, { text: pho, contextInfo: { forwardingScore: 9999999, isForwarded: true }}, { quoted: nx })
}
break
case "shadow": case "write": case "romantic": case "burnpaper": case "smoke": case "narutobanner": case "love": case "undergrass": case "doublelove": case "coffecup": case "underwaterocean": case "smokyneon": case "starstext": case "rainboweffect": case "balloontext": case "metalliceffect": case "embroiderytext": case "flamingtext": case "stonetext": case "writeart": case "summertext": case "wolfmetaltext": case "nature3dtext": case "rosestext": case "naturetypography": case "quotesunder": case "shinetext": {
if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
if (!q) return reply(`Example : ${prefix+command} KirBotz`)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photoOxy(link, q)
x.sendMessage(from, { image: { url: dehe }, caption: `Sukses Kak` }, { quoted: nx })
}
break
case "jadibot": {
  if (isGroup) return reply("Features Used Only For Private Chat!")
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  jadibot(x, nx, from)
}
break
case "stopjadibot": {
  if (isGroup) return reply("Features Used Only For Private Chat!")
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  stopjadibot(x, from)
}
break
case "listjadibot": {
  if (isGroup) return reply("Features Used Only For Private Chat!")
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  listjadibot(x, nx)
}
break
case "listpremium": {
  teks = "*List Premium*\n\n"
  for (let kayla of prem) {
    teks += `- ${kayla}\n`
  }
  teks += `\n*Total : ${prem.length}*`
  x.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: nx, contextInfo: { "mentionedJid": prem } })
}
break
case "addprem": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!q) return reply("Masukkan Nomor Yang Mau Di Jadikan User Premium")
  let prrkek = q.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
  let ceknya = await x.onWhatsApp(prrkek)
  if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
  prem.push(prrkek)
  fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
  reply(`Nomor ${prrkek} Telah Menjadi User Premium!`)
}
break
case "delprem": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!q) return reply("Masukkan Nomor Yang Mau Di Hapus User Premium")
  let ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
  let unp = prem.indexOf(ya)
  prem.splice(unp, 1)
  fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
  reply(`Nomor ${ya} Telah Di Hapus Dari User Premium!`)
}
break
case "setppbot": {
if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await x.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await x.query({
tag: 'iq',
attrs: {
to: x.user.jid,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Sukses`)
} else {
var memeg = await x.updateProfilePicture(x.user.jid, { url: medis })
fs.unlinkSync(medis)
reply(`Sukses`)
}
}
break
case "playmp4": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!q) return reply("Enter the Song Title!")
  let ytplay4 = await ytPlayMp4(q)
  x.sendMessage(from, { video: { url: ytplay4.url[0] }, caption: `Youtube Play Video\n\nTitle: ${ytplay4.title}\nChannel: ${ytplay4.channel}\nViews: ${ytplay4.views}` }, { quoted: nx })
}
break
case "playmp3": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!q) return reply("Enter the Song Title!")
  let ytplay3 = await ytPlayMp3(q)
  x.sendMessage(from, { audio: { url: ytplay3.url[0] }, mimetype: "audio/mp4", ptt: false }, { quoted: nx })
}
break
case "ytmp4": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!q) return reply("Link Not Found !")
  let ytdownload4 = await ytDonlodMp4(q)
  x.sendMessage(from, { video: { url: ytdownload4.url[0] }, caption: `Youtube Download Video\n\nJudul: ${ytdownload4.title}\nChannel: ${ytdownload4.channel}\nUpload: ${ytdownload4.published}\nViews: ${ytdownload4.views}` }, { quoted: nx })
}
break
case "ytmp3": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!q) return reply("Link Not Found !")
  let ytdownload3 = await ytDonlodMp3(q)
  x.sendMessage(from, { audio: { url: ytdownload3.url[0] }, mimetype: "audio/mp4", ptt: false }, { quoted: nx })
}
break
case "tiktok": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!q) return reply(`Penggunaan Salah Contoh .${command} https://vm.tiktok.com/ZSLdF9NYN`)
  let res = await tikVideo(q)
  let ghd = await x.sendMessage(from, {video:{url: res.hdplay},caption: `*Sukses Kak Tunggu Aja Audio Nya Di Bawah Yaa*\n> Jika Tidak Bisa Di Putar Download Video Di Sini ${res.play}`},{quoted:nx})
  x.sendMessage(from, {audio:{url: res.music}, mimetype: "audio/mp4", ptt:false},{quoted:ghd})
}
break
case "hd": {
  if (!isPremium) return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  if (!/image/.test(mime)) return reply("Reply Foto Nya Dengan Teks " + prefix + command)
  const media = await quoted.download()
  const proses = await remini(media, "enhance")
  x.sendMessage(from, { image: proses, caption: "Sukses Kak" }, { quoted: nx })
}
break
case "setnamagc": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (!q) return reply("Nama Subject Nya Apa?")
  x.groupUpdateSubject(nx.chat, q)
  reply(`Sukses Mengganti Subject Group Menjadi ${q}`)
}
break
case "setdeskgc": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (!q) return reply("Teks Yang Mau Di Jadikan Teks Nya Mana?")
  x.groupUpdateDescription(nx.chat, q)
  reply(`Sukses Mengganti Deskripsi Group Menjadi ${q}`)
}
break
case "linkgc": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  const url = await x.groupInviteCode(nx.chat)
  const asu = "https://chat.whatsapp.com/" + url
  reply(asu)
}
break
case "resetlinkgc": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  x.groupRevokeInvite(nx.chat)
  reply(`Sukses Reset Link Group`)
}
break
case "closetime": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (args[1] == 'detik') {
    var timer = args[0] * `1000`
  } else if (args[1] == 'menit') {
    var timer = args[0] * `60000`
  } else if (args[1] == 'jam') {
    var timer = args[0] * `3600000`
  } else if (args[1] == 'hari') {
    var timer = args[0] * `86400000`
  } else {
    return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
  }
  reply(`Close Time ${q} Dimulai Dari Sekarang`)
  setTimeout(() => {
    const nomor = nx.participant
    const close = `*Tepat Waktu* Grup Ditutup Oleh Admin\nSekarang Hanya Admin Yang Dapat Mengirim Pesan`
    x.groupSettingUpdate(nx.chat, 'announcement')
    reply(close)
  }, timer)
}
break
case "opentime": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (args[1] == 'detik') {
    var timer = args[0] * `1000`
  } else if (args[1] == 'menit') {
    var timer = args[0] * `60000`
  } else if (args[1] == 'jam') {
    var timer = args[0] * `3600000`
  } else if (args[1] == 'hari') {
    var timer = args[0] * `86400000`
  } else {
    return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
  }
  reply(`Open Time ${q} Dimulai Dari Sekarang`)
  setTimeout(() => {
    const nomor = nx.participant
    const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
    x.groupSettingUpdate(nx.chat, 'not_announcement')
    reply(open)
  }, timer)
}
break
case "close": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  x.groupSettingUpdate(from, 'announcement')
  reply(`Sukses Mengizinkan Hanya Admin Yang Dapat Mengirim Pesan Ke Grup Ini`)
}
break
case "open": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  x.groupSettingUpdate(from, 'not_announcement')
  reply("Sukses Mengizinkan Semua Peserta Dapat Mengirim Pesan Ke Grup Ini")
}
break
case "kick": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  const users = nx.quoted ? nx.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  x.groupParticipantsUpdate(from, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "add": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  const users = nx.quoted ? nx.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  x.groupParticipantsUpdate(from, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break
case "hidetag": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (!text) return reply("Teks Nya Mana Kak?")
  global.texthidetag = text
  x.sendMessage(from, { text : global.texthidetag , mentions: pwkdnwn.map(a => a.id)}, { quoted: nx })
}
break
case "welcome": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (args[0] == 'on') {
    if (isWelcome) return reply(`*[ WELCOME ]* Sudah Aktif Sebelumnya !`)
    welcome.push(from)
    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
    reply("*Berhasil Mengaktifkan Welcome*")
  } else if (args[0] == 'off') {
    if (!isWelcome) return reply(`*[ WELCOME ] Sudah Tidak Aktif Sebelumnya !*`)
    anu = welcome.indexOf(from)
    welcome.splice(anu, 1)
    fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
    reply("*Berhasil Mematikan Welcome*")
  } else {
    reply(`Command ${prefix+command} on = Untuk Menyalakan Welcome\nCommand ${prefix+command} off = Untuk Mematikan`)
  }
}
break
case "antilink": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
  if (args[0] == 'on') {
    if (isAntilink) return reply(`*[ ANTILINK ]* Sudah Aktif Sebelumnya !`)
    antilink.push(from)
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
    reply("*Berhasil Mengaktifkan Antilink*")
  } else if (args[0] == 'off') {
    if (!isAntilink) return reply(`*[ ANTILINK ] Sudah Tidak Aktif Sebelumnya !*`)
    anu = antilink.indexOf(from)
    antilink.splice(anu, 1)
    fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
    reply("*Berhasil Mematikan Antilink*")
  } else {
    reply(`Command ${prefix+command} on = Untuk Menyalakan Antilink\nCommand ${prefix+command} off = Untuk Mematikan`)
  }
}
break
case "creategc": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!text) return reply("What's the name of the group bro?")
  let cret = await x.groupCreate(text, [])
  let response = await x.groupInviteCode(cret.id)
  let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}`
  setTimeout(() => {
    x.sendMessage(from, { text: teks, mentions: [cret.owner] }, { quoted: nx })
  }, 7000)
  setTimeout(() => {
    x.groupParticipantsUpdate(cret.id, [nx.sender], "promote")
  }, 5000)
  setTimeout(() => {
    x.groupParticipantsUpdate(cret.id, [nx.sender], "add")
  }, 1000)
}
break
case "join": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!text) return reply("where's the link bro?")
  if (!text.includes("chat.whatsapp.com")) return reply("link not listed !")
  let ano = text.split("https://chat.whatsapp.com/")[1]
  x.groupAcceptInvite(ano)
  reply(`Success bro`)
}
break
case "getcase": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!q) return reply("Mau ngambil case apa?")
  try {
    const data = await fs.readFileSync('./case.js')
    const hes = "case " + `"${q}"` + data.toString().split("case \""+q+"\"")[1].split("break")[0]+"break"
    reply(hes)
  } catch {
    reply("Case Tidak Ditemukan")
  }
}
break
case "idgroup": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  x.showGroups(nx)
}
break
case "savecontacts": {
  if (!isPremium) {
    return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group")
    } else {
      const { participants } = await x.groupMetadata(from)
      x.saveContacts(nx, participants)
    }
  }
}
break
case "savecontactsid": {
  if (!isPremium) {
    return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  } else {
    if (!q) {
      return x.reply(nx, "SAVE CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .savecontactsid 286472837748382882@g.us")
    } else {
      const prtpnt = await x.groupMetadata(q)
      x.saveContacts(nx, prtpnt.participants)
    }
  }
}
break
case "pushcontacts": {
  if (!isPremium) {
    return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  } else {
    if (!isGroup) {
      return reply("Khusus Dalam Group")
    } else {
      if (!q) {
        await x.reply(nx, "PUSH CONTACTS\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: .${command} Hallo Kak|5`)
      } else {
        x.pushContacts(nx, nx.chat, q)
      }
    }
  }
}
break
case "pushcontactsid": {
  if (!isPremium) {
    return reply("Kamu Belum Menjadi User Premium Silahkan Beli Premium Ke Owner Dengan Ketik .owner")
  } else {
    if (!q) {
      return x.reply(nx, "PUSH CONTACTS ID\n\n" + "*Pastikan Format Yang Anda Berikan Valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
    } else {
      const isMeki = q.split("|")[2]
      if (!isMeki) {
        return x.reply(nx, "PUSH CONTACTS ID\n\n" + "*Pastikan format yang anda berikan valid*\n*Contoh*: .pushcontactsid Hallo Kak|5|82738282837389173@g.us")
      } else {
        x.pushContacts(nx, isMeki, q)
      }
    }
  }
}
break
case "broadcast": {
  if (!isOwner) {
    return reply("Can Only Be Used by Bot Owners !")
  } else {
    if (isGroup) {
      return reply("Khusus Private Chat")
    } else {
      if (!q) {
        await x.reply(nx, "CHAT ALL GROUP\n\n" + `*Format Yang Anda Berikan Tidak Valid*\n*Contoh*: ${prefix+command} Hallo Kak|5`)
      } else {
        x.sendChatAllGroup(nx, q)
      }
    }
  }
}
break
case "tourl": {
  try {
    let mee = await x.downloadAndSaveMediaMessage(quoted)
    let mem = await uptotelegra(mee)
    reply(util.format(mem))
  } catch (err) {
    reply(`Reply Image Nya Bang`)
  }
}
break
case "toimg": {
  if (!quoted) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  if (!/webp/.test(mime)) return reply(`Balas sticker dengan caption *${prefix+command}*`)
  let media = await x.downloadAndSaveMediaMessage(quoted)
  let ran = `${Math.floor(Math.random() * 100000)}.png`
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
    fs.unlinkSync(media)
    if (err) return x.sendMessage(from, { text: util.format(err) }, { quoted: nx })
    let buffer = fs.readFileSync(ran)
    x.sendMessage(from, { image: buffer }, { quoted: nx })
    fs.unlinkSync(ran)
  })
}
break
case "sticker": {
  if (/image/.test(mime)) {
    let media = await quoted.download()
    let encmedia = await x.sendStimg(from, media, nx, { packname: "", author: "> by kirbotz\n087705048235" })
    await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
    if ((quoted.msg || quoted).seconds > 11) return reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
    let media = await quoted.download()
    let encmedia = await x.sendStvid(from, media, nx, { packname: "", author: "> by kirbotz\n087705048235" })
    await fs.unlinkSync(encmedia)
  } else {
    reply(`Reply Gambar/Video Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
  }
}
break
case "qc": {
  if (!q) return reply(`Command ${prefix+command} text`)
  try {
    var linkppuserp = await x.profilePictureUrl(nx.sender, 'image')
  } catch {
    var linkppuserp = 'https://telegra.ph/file/e323980848471ce8e2150.png'
  }
  const json = { 
    "type": "quote", 
    "format": "png", 
    "backgroundColor": 
    "#C0C0C0", 
    "width": 512, 
    "height": 768, 
    "scale": 2, 
    "messages": [{ 
      "entities": [], 
      "avatar": true, 
      "from": { 
        "id": 1, 
        "name": nx.pushName, 
        "photo": { 
          "url": linkppuserp 
        }
      }, 
      "text": q, 
      "replyMessage": {}
    }]
  }
  const response = axios.post('https://bot.lyo.su/quote/generate', json, {
    headers: {'Content-Type': 'application/json'}
  }).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    var opt = { packname: "", author: "> by kirbotz\n087705048235" }
    x.sendStimg(from, buffer, nx, opt)
  })
}
break
case "owner": {
  x.sendMessage(from, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, contextInfo: { forwardingScore: 9999999,  isForwarded: true, mentionedJid: [sender] }}, { quoted: nx })
}
break
case "addlist": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  const args1 = text.split(",")[0]
  const args2 = text.split(",")[1]    
  if (!q.includes(",")) return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item,Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist,List`)
  if (isAlreadyResponList(from, args1, listdb)) return reply(`List Respon Dengan Key : *${args1}* Sudah Ada Di Group Ini.`)
  if (/image/.test(mime)) {
    const media = await x.downloadAndSaveMediaMessage(quoted)
    const mem = await uptotelegra(media)
    addResponList(from, args1, args2, true, `${mem}`, listdb)
    reply(`Sukses set list message dengan key : *${args1}*`)
    if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
    addResponList(from, args1, args2, false, '-', listdb)
    reply(`Sukses Add List Dengan Kunci : *${args1}*`)
  }
}
break
case "dellist": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  if (listdb.length === 0) return reply(`Belum Ada List Message Di Database`)
  if (!q) return reply(`Gunakan Dengan Cara ${prefix+command} *Nama Item*\n\n_Contoh_\n\n${prefix+command} namalist`)
  if (!isAlreadyResponList(from, q, listdb)) return reply(`List Item Dengan Nama *${q}* Tidak Ada Di Database!`)
  delResponList(from, q, listdb)
  reply(`Sukses Delete List Message Dengan Key *${q}*`)
}
break
case "updatelist": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (!isAdmins && !isOwner) return reply("Khusus Admin Group")
  const args1 = q.split(",")[0]
  const args2 = q.split(",")[1]
  if (!q.includes(",")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item,Item*\n\n_Contoh_\n\n${command.slice(1)} namalist,List`)
  if (!isAlreadyResponList(from, q.split(",")[0], listdb)) return reply(`Maaf, Untuk Key *${args1}* Belum Terdaftar Di Group Ini`)
  if (/image/.test(mime)) {
    const media = await x.downloadAndSaveMediaMessage(quoted)
    const mem = await uptotelegra(media)
    updateResponList(from, args1, args2, true, `${mem}`, listdb)
    reply(`Sukses Update List Message Dengan Key : *${args1}*`)
    if (fs.existsSync(media)) fs.unlinkSync(media)
  } else {
    updateResponList(from, args1, args2, false, '-', listdb)
    reply(`Sukses Update Respon List Dengan Key *${args1}*`)
  }
}
break
case "list": {
  if (!isGroup) return reply("Khusus Dalam Group")
  if (listdb.length === 0) return reply(`Belum Ada List Message Di Database`)
  if (!isAlreadyResponListGroup(from, listdb)) return reply(`Belum Ada List Message Yang Terdaftar Di Group Ini`)
  ttx = `Hallo Kak @${sender.split("@")[0]}, Berikut Beberapa List Yang Tersedia Di *${namaBot}* Saat Ini\n\n╭──────☰⃟⃟\n`
  for (let x of listdb) {
    if (x.id === from) {
      ttx += "│❚ " + "*" + x.key + "*\n"
    }
  }
  xxt = `╰──────☰⃟⃟\n✧──···[ *${namaBot.toUpperCase()}* ]···──✧`
  const txthasil = ttx + xxt
  x.sendMessage(from, { text: txthasil, mentions: [sender] }, { quoted: nx })
}
break
case "eval": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!q) return reply("Code Not Found (404)")
  var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
  try {
    var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
    reply(txtes)
  } catch(e) {
    let _syntax = ""
    let _err = util.format(e)
    let err = syntaxerror(arg, "EvalError", {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
      sourceType: "commonjs"
    })
  if (err) _syntax = err + "\n\n"
    reply(util.format(_syntax + _err))
  }
}
break
case "exec": {
  if (!isOwner) return reply("Can Only Be Used by Bot Owners !")
  if (!q) return reply("Code Not Found (404)")
  exec(text, (err, stdout) => {
    if (err) return reply(`${err}`)
    if (stdout) {
      reply(stdout)
    }
  })
}
break
case "speedtest": {
  exec("python3 speed.py", (err, stdout) => {
    if (err) return reply(`${err}`)
    if (stdout) {
      reply(stdout)
    }
  })
}
break
case "ping": {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let timestamp = require('performance-now')()
  let latensi = require('performance-now')() - timestamp
  neww = require("perf_hooks").performance.now()
  oldd = require("perf_hooks").performance.now()
  respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _Miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
  reply(respon)
}
break
default:
}
} catch (e) {
console.log(util.format(e))
}
}

const file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update File ${__filename}`))
  delete require.cache[file]
  require(file)
})