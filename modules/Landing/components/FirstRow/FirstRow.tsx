import React from 'react'
import Image from 'next/image'
import styles from './FirstRow.module.css'

export const FirstRow = () => {
    return (
        <div className={styles.container}>
            <Image
                src={"/images/FirstRowImage.svg"}
                alt="Line1"
                fill
                className={styles.image}
            />
            <div className={styles.text}>
                Pickies ile siparişini ver,{" "}
                <i>sıra beklemeden teslim al!</i>
            </div>
        </div>
    )
}
