import React from 'react'
import styles from './SecondRow.module.css'
export const SecondRow = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                SADECE TEK BİR TIKLA BULUNDUĞUN BÖLGEDEKİ CAFE VE
                RESTORANLARIN MENÜLERİNE ULAŞ, SİPARİŞİNİ VER VE
                <b>
                    {" "}
                    PICIKIES TESLİM NOKTASINDAN SANİYELER İÇİNDE
                    SİPARİŞİNİ AL
                </b>
            </div>
        </div>
    )
}
