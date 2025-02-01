import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { FaPaintBrush } from 'react-icons/fa'
import { SiGoogletagmanager } from 'react-icons/si'
import { ImFire } from 'react-icons/im'
import styles from '../styles/service.module.css'
function Service({ title, type }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content__wrapper}>
                    <div className="icon__container">
                        {type === "backend" && <AiOutlineSetting className={styles.service__icon} style={{ color: '#CBD5DB' }} />}
                        {type === 'crm' && <SiGoogletagmanager className={styles.service__icon} style={{ color: 'blue' }} />}
                        {type === 'frontend' && <FaPaintBrush className={styles.service__icon} style={{ color: '#fc1484' }} />}
                        {type === 'firebase' && <ImFire className={styles.service__icon} style={{ color: 'red' }} />}
                    </div>
                    <div className={styles.text__container}>
                        <h5>{type}</h5>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service