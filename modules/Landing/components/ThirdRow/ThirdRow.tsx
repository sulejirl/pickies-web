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
                Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo
                consequat.
            </div>
        </div>
    )
}
