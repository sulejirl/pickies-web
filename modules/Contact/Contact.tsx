import React from 'react'
import style from "./contact.module.css"


export const Contact = () => {
  return (
    <div className={style.container}>
      <h1>İletişim</h1> 
      <div>Bize email ve whatsapp hattımızdan ulaşabilirsiniz</div>
      <h4>Telefon</h4>
      <div>+905424862454</div>
      <h4>Email</h4>
      <a href="mailto:info@pickiesapp.com">info@pickiesapp.com</a>
      <h4>Adres</h4>
      <div>SEYRANTEPE MAH. GÖKHAN SK. SERİNGÜL SİTESİ K2 BLOK NO: 18 İÇ KAPI NO: 2 KAĞITHANE İstanbul Turkey</div>
    </div>
  )
}
