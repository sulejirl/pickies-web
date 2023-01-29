import React from 'react'
import Image from 'next/image'
import styles from './FifthRow.module.css';

export const FifthRow = () => {
    return (

        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>
                    Evden çıkarken,
                    yolda yürürken,
                    hatta mekanın
                    kapısındayken tek
                    tuşla siparişini ver!
                </div>
                <div className={styles.content}>
                    KAFELERDE SIRA BEKLEMENİN NE KADAR CAN
                    SIKICI OLDUĞUNU BİLİYORUZ. BU SEBEPLE ARTIK
                    “PICKIES” DİYORUZ. PICKIES İLE SADECE 2 ADIMDA
                    SİPARİŞİNİZİ VEREBİLİR VE BİZE AYRILMIŞ TESLİM
                    NOKTALARINDAN SANİYELER İÇERİSİNDE TESLİM
                    ALABİLİRSİNİZ. SIRA BEKLEMEDEN ALINAN
                    KAHVENİN TADI DA DAHA LEZZETLİ GELMİYOR MU?
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={"/images/fifthRowImage.png"}
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
