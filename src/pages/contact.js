import Layout from '../components/Layout'
import styles from '../styles/contact.module.css'
import { SiGmail, SiFiverr, SiWhatsapp } from 'react-icons/si'

export default function Contact() {
    return (
        <Layout>
            <h1 className={styles.big__text}>Contact me</h1>
            <div className={styles.contact__wrapper}>
                <div className={styles.links}>
                    <a href="mailto:mashup3223@gmail.com">
                        <SiGmail className={styles.gmailLogo} />
                    </a>
                    <a href="https://www.fiverr.com/s/R7x80BV"><SiFiverr className={styles.fiverrLogo} /></a>
                    <a href="https://wa.me/+8801998865037"><SiWhatsapp className={styles.waLogo} /></a>
                </div>
                <div className={styles.form__container}>

                </div>
            </div>
        </Layout>
    )
}
