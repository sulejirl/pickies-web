import React from 'react'
import Image from 'next/image'
import styles from './SeventhRow.module.css'

export const SeventhRow = () => {
    return (

        <div
            className={styles.container}>
            <div className={styles.text}>

                <div className={styles.title}>
                    “Hediye Gönder”
                    özelliği ile
                    arkadaşlarına
                    dilediğini ısmarla!
                </div>
                <div className={styles.content}>
                    PICKIES SADECE KULLANICISINI DEĞİL,
                    ONUN ARKADAŞLARINI DA DÜŞÜNÜR.
                    ARKADAŞLARINIZA BİR JEST YAPIP ONLARA BİR KAHVE YA
                    DA YEMEK ISMARLAMAK HOŞ OLMAZ MIYDI? PICKIES
                    UYGULAMASININ “HEDİYE GÖNDER” ÖZELLİĞİ İLE
                    ARKADAŞLARINIZA SÜRPRİZ YAPABİLİRSİNİZ.
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={"/images/seventhRowImage.png"}
                    alt="Line1"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>

        </div>
    )
}
