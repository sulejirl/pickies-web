import React from 'react'
import Image from 'next/image'
import styles from './SixthRow.module.css'

export const SixthRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/images/sixthRowImage.png"}
          alt="Line1"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>
          Topluluk sayfası
          üzerinden
          arkadaşlarınla
          etkileşimde kal!
        </div>
        <div className={styles.content}>
          ARKADAŞLARINIZ BİR SİPARİŞ VERDİĞİNDE ONLARIN
          NEREDE OLDUĞUNU GÖREBİLİR VE ETKİLEŞİME
          GEÇEBİLİRSİNİZ. BELKİ DE ONLARA İÇTİKLERİ KAHVENİN
          YANINDA SÜRPRİZ BİR TATLI YOLLAMAK İSTERSİNİZ.
          PICKIES İLE İSTER SIRA BEKLEMEDEN KAHVENİZİ ALIN,
          İSTER BİR ARKADAŞINIZIN YANINA UĞRAYIP SELAM VERİN.
          SEÇİMİ SİZE BIRAKIYORUZ!
        </div>
      </div>
    </div>
  )
}
