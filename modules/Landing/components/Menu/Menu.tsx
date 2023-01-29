import React from 'react'
import Image from 'next/image'
import styles from './Menu.module.css'

export const Menu = () => {
    return (
        <div
            className={styles.container}
        >
            <div className={styles.menuButton}>
                MENÜ
            </div>
            <div className={styles.logo}>
                <Image
                    src={"/images/logoMain.png"}
                    alt="Line1"
                    fill
                />
            </div>
            <div
                className={styles.customerRedirectButton}>
                FİRMA GİRİŞİ
            </div>
        </div>
    )
}
