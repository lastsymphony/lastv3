let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.anime)}”`, m)
}
handler.help = ['randomanime']
handler.tags = ['anime']
handler.command = /^(randomanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.anime = [
 "https://1.bp.blogspot.com/-0afOPrVTvgY/YDMr6evYU7I/AAAAAAAAANk/sU2NsmfAjBg-Tz0Slols8eUfOoxzxhO_QCLcBGAsYHQ/s1828/05.jpg",
 "https://1.bp.blogspot.com/--nc5O_SUwJ8/YDMr6aDo69I/AAAAAAAAANo/soYjsgddFiQqD_qGorqy4lgaR5F3Yv0qACLcBGAsYHQ/s1811/07.jpg",
 "https://1.bp.blogspot.com/-BSlYWOA4Rq0/YDMr7A2Tx-I/AAAAAAAAANw/UQ6VR705YgwrwC2njRZ0dVQM5cCj_19NgCLcBGAsYHQ/s1809/08.jpg",
 "https://1.bp.blogspot.com/-IU7Ksk93j4Y/YDMr7WSlUkI/AAAAAAAAAN0/ftcY-YVxPBssTqSymOE7vwqyWXR3TVjOQCLcBGAsYHQ/s1820/09.jpg",
 "https://1.bp.blogspot.com/-EnJDdkqAAuU/YDMr8MXNjLI/AAAAAAAAAN8/MK5c6vxIMe4_RyUoHU44CrscsctbdbsDACLcBGAsYHQ/s1823/10.jpg",
   "https://1.bp.blogspot.com/-kIFBWXKcHdU/YDMr-oTJu7I/AAAAAAAAAOU/X1jbHiLm8Nw5HqiYfNbsCHgqsfXHWxF5ACLcBGAsYHQ/s1809/11.jpg",
   "https://1.bp.blogspot.com/-5VHJmd8QQ4I/YDMr_q9ovzI/AAAAAAAAAOg/9jkbChyr3jU_vGSdSlezd_GzTGB7XpOFQCLcBGAsYHQ/s1812/15.jpg",
"https://1.bp.blogspot.com/-HsXbjxISD3o/YDMsAaZT7ZI/AAAAAAAAAOo/a7DDoQOH-qQF_z_1OHo49RUPgFzarsGDQCLcBGAsYHQ/s1811/16.jpg",
"https://1.bp.blogspot.com/-urI_ar-9Kx4/YDMsAXpsVXI/AAAAAAAAAOs/pylNYo4HHK0dEVciwW_TNG7Qu7jxiDOpgCLcBGAsYHQ/s1812/17.jpg",
"https://1.bp.blogspot.com/-WzDKYZF3azo/YDMsBAuWRXI/AAAAAAAAAOw/RwclgnNHxnwmEyC1b6hcUu_p_hUTY-FTwCLcBGAsYHQ/s1822/18.jpg",
"https://1.bp.blogspot.com/-nFkl4M13p_M/YDMsBlSFLiI/AAAAAAAAAO0/VhGmoBv5BOQQUNxpfehQUOrLaLOxePcSQCLcBGAsYHQ/s1280/19_20.jpg",
"https://1.bp.blogspot.com/-VC7UX7E61U8/YDMsBjBtgNI/AAAAAAAAAO4/Nw3VmJjeaywwdKjX-RWvyf3P-Scc2mJbQCLcBGAsYHQ/s1824/21.jpg",
"https://1.bp.blogspot.com/-InAKBt_AwP8/YDMsCFVp-oI/AAAAAAAAAO8/-YGtrVjO9a4lg9OgIvazPRVvJ0rw3F6uwCLcBGAsYHQ/s1810/23.jpg",
  "https://1.bp.blogspot.com/-RJt6eGJ3fz4/YDMr9Q4x8kI/AAAAAAAAAOI/eiF6bMcZydcPr0zgkGWXKl2yiu8nb039QCLcBGAsYHQ/s1814/104.jpg",
"https://1.bp.blogspot.com/-xUnDV701ibE/YDMr-SpI82I/AAAAAAAAAOM/oUlhisZrF3oWRrdSYiasCxCkEqmdEQT_ACLcBGAsYHQ/s1815/106.jpg",
"https://1.bp.blogspot.com/-JfmpCT5_JBM/YDMr-pOQp_I/AAAAAAAAAOQ/fPM0AMczxX4qQZodoGdz0vFamksyS6D_wCLcBGAsYHQ/s1819/108.jpg",
"https://1.bp.blogspot.com/-PjBsW3dsHmo/YDMsC2vGLQI/AAAAAAAAAPE/yd77QOVioEwRjQ47yIkPVI9eEtjVvQsugCLcBGAsYHQ/s1200/68904576_p0_master1200.jpg",
  "https://1.bp.blogspot.com/-ORUrYMvMdyM/YDMsC5DhnGI/AAAAAAAAAPI/hQS0EUxZusg4enP6ra2oaxpJVtlOVj3RACLcBGAsYHQ/s1200/68981948_p0_master1200.jpg",
"https://1.bp.blogspot.com/-N1ANmzluP0E/YDMsD0MZg2I/AAAAAAAAAPQ/Efqtjs9ddr8hmdLnUbRbzCE2zMHgAsLVgCLcBGAsYHQ/s1200/73297246_p0_master1200.jpg",
"https://1.bp.blogspot.com/-L7u6QkiUkJA/YDMsJKHYsmI/AAAAAAAAAP4/roXwOShvb7AbMXRjNvQuXDtK7Ih-qpLugCLcBGAsYHQ/s1828/morian_d_11.jpg",
"https://1.bp.blogspot.com/-YfDs0dmVSpA/YDMsI2Yv6-I/AAAAAAAAAP0/StQ1PGv3AqYyJB3QjOLKtX_KZ_3aLmu5QCLcBGAsYHQ/s1834/morian_d_10.jpg",
"https://1.bp.blogspot.com/-75DYfoEYbpo/YDMsE0DrNEI/AAAAAAAAAPc/lsnMtQUUqkEJityoBaFC2rTnqw9mWIxFQCLcBGAsYHQ/s1200/84476694_p0_master1200.jpg",
"https://1.bp.blogspot.com/-BK8W4wSNFsU/YDMsEDbxznI/AAAAAAAAAPU/1cL86i7SoBIutyeEWl_a-QN8mPttouofACLcBGAsYHQ/s1200/74584359_p0_master1200.jpg",
]