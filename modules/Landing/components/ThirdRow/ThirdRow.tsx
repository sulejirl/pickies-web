import React from 'react'
import Image from 'next/image'
import styles from './ThirdRow.module.css'

export const ThirdRow = () => {
    return (
        <div className={styles.container} >
            <div className={styles.imageContainer}>
                <Image
                    src={"/images/ThirdRowImage.svg"}
                    alt="Line1"
                    fill
                    className={styles.image}
                />
                <div className={styles.title}>
                    Pickies Mobil Uygulama Nedir?
                </div>
            </div>
            <div className={styles.content}>
                Pickies, Gel-Al siparişlere odaklanan, yiyecek ve içeceklerinizi önden sipariş etmenin yeni ve keyifli bir yoludur. Çevrenizdeki üye kahve dükkanlarını, yemek yerlerini keşfedin, sipariş oluşturup Gel-Al siparişlerde yeni dönemin parçası olun.

            </div>
        </div>
    )
}
