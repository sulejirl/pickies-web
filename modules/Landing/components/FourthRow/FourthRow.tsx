import React from 'react'
import Image from 'next/image'
import styles from './FourthRow.module.css';

export const FourthRow = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.gridContainer} ${styles.partner}`}>
                <div className={styles.icon}>
                    <Image
                        src={"/images/partnerIcon.png"}
                        alt="partner"
                        width={50}
                        height={40}
                        style={{
                        }}
                    />
                </div>
                <div className={styles.title}>
                    PARTNERLERİMİZ İÇİN
                </div>
                <div className={styles.content}>
                    Sıra beklememek için sizi es geçen müşterilerinizi kaybetmeyin. Bizimle ortaklık kurarak işinizi büyütün ve yeni müşterilere ulaşın.
                </div>
                <div className={styles.button}>
                    FORMU DOLDUR
                </div>
            </div>
            <div  className={`${styles.gridContainer} ${styles.user}`}>
                <div className={styles.icon}>
                    <Image
                        src={"/images/userIcon.png"}
                        alt="partner"
                        width={40}
                        height={50}
                        style={{
                        }}
                    />
                </div>
                <div className={styles.title}>
                    KULLANICILARIMIZ İÇİN
                </div>
                <div className={styles.content}>
                    Bulunduğunuz
                    bölgedeki cafe ve
                    restoranlardan anında
                    sipariş oluşturun,
                    siparişinizi sıra
                    beklemeden
                    teslim alın.
                </div>
                <div className={styles.button}>
                    UYGULAMAYI İNDİR
                </div>
            </div>
            <div  className={`${styles.gridContainer} ${styles.contactus}`}>
                <div className={styles.icon}>
                    <Image
                        src={"/images/contactUsIcon.png"}
                        alt="partner"
                        width={40}
                        height={40}
                        style={{
                        }}
                    />
                </div>
                <div className={styles.title}>
                    BİZE ULAŞIN
                </div>
                <div className={styles.content}>
                    Her türlü soru,
                    destek ve
                    görüşleriniz için
                    bizimle iletişime
                    geçin.
                </div>
                <div className={styles.button}>
                    İLETİŞİME GEÇ
                </div>
            </div>
        </div>
    )
}
