import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './header'
function Layout({ children }) {
    return (
        <>

            <Head>
                <title>Ashraf Uddin</title>
                <meta name="description" content="Ashraf" />
                <link rel="icon" href="/pro_img.jpg" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

        </>
    )
}

export default Layout
