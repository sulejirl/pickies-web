import React from 'react'
import Image from 'next/image'
import styles from './NinthRow.module.css'
import { useRouter } from "next/router";

export const NinthRow = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            {/* <div className={styles.main}>
                <div className={styles.imageContainer}>
                    <Image
                        src={"/images/Logo.png"}
                        alt="Line1"
                        fill
                        className={styles.image}
                    />
                </div>
                <div className={styles.menu}>
                    <div className={`${styles.buttonContainer} ${styles.aboutus}`}>
                        <div className={styles.title}>
                            HAKKIMIZDA
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonItem}>
                                Biz Kimiz
                            </div>
                            <div className={styles.buttonItem}>
                                Kariyer
                            </div>
                            <div className={styles.buttonItem}>
                                Ortaklıklar
                            </div>
                            <div className={styles.buttonItem}>
                                Değerlerimiz
                            </div>
                        </div>

                    </div>
                    <div className={`${styles.buttonContainer} ${styles.partnership}`}>
                        <div className={styles.title}>
                            ORTAKLIK
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonItem}>
                                Ortaklık Şartları
                            </div>
                            <div className={styles.buttonItem}>
                                Gizlilik Kuralları
                            </div>
                            <div className={styles.buttonItem}>
                                İletişim
                            </div>
                            <div className={styles.buttonItem}>
                                Yardım
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.buttonContainer} ${styles.more}`}>
                        <div className={styles.title}>
                            DAHA FAZLASI
                        </div>
                        <div className={styles.button}>
                            <div className={styles.buttonItem}>
                                Hediye Sistemi
                            </div>
                            <div className={styles.buttonItem}>
                                Sipariş Kuralları
                            </div>
                            <div className={styles.buttonItem}>
                                Bilgi Toplum Hizmeti
                            </div>
                            <div className={styles.buttonItem}>
                                S.S.S
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={styles.secondary}>
                <div className={styles.secondaryButton}>GİZLİLİK POLİTİKASI</div>
                <div className={styles.secondaryButton}>İÇERİK POLİTİKASI</div>
                <div className={styles.secondaryButton} onClick={()=>{router.push('/cerez-politikasi')}}>ÇEREZ TERCİHLERİ</div>
                <div className={styles.secondaryButton} onClick={()=>{router.push('/kullanim-kosullari')}}>KULLANIM KOŞULLARI</div>
            </div>
        </div>
    )
}
