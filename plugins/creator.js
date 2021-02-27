let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
 this.sendContact(m.chat, '6289670394574', 'Aditya jatayu', m),
 this.sendContact(m.chat, '6285747874973', 'Kemal Ibnu', m),
 this.sendContact(m.chat, '6285823554146', '》Wilka_Kenap《', m),
 this.sendContact(m.chat, '6285762005157', 'No Name', m)
 this.sendContact(m.chat, '6281319352377', 'lord', m)
 this.sendContact(m.chat, '6282273025238', 'Hiro', m)
 this.sendContact(m.chat, '6285240424044', 'Zen', m)
 this.sendContact(m.chat, '6289505289896', 'Calvin', m)
 this.sendContact(m.chat, '62895433996700', 'Nothing', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
