import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { SiFacebook, SiGithub, SiDribbble, SiLinkedin, SiFiverr } from 'react-icons/si'
import { data } from '../Data/aboutData';
function HeroSection() {
    const { email, bio, img } = data
    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__left">
                        <div className="text__wrapper">
                            <h2 className="big__text">Hi there, <br />I&apos;m Ashraf</h2>
                            <p className="small__text">
                                {bio}
                            </p>
                        </div>
                        <div className="btn__wrapper">
                            <Link href={"mailto:" + email} passHref={true}>
                                <button className="header__contact__btn email_btn">Email me</button>
                            </Link>
                            <Link href='/about' passHref={true}>
                                <button className="header__contact__btn about_btn">About</button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero__right">
                        <div className="image__container">
                            <Image src={img} width="200" height="200" className="profile__image" alt="profile-picture" />
                        </div>
                    </div>
                </div>
                <div className="social__container">
                    <Link passHref={true} href='https://www.facebook.com/ashraf.uddin.75839'>
                        <SiFacebook className="fblogo" />
                    </Link>
                    <Link passHref={true} href='https://github.com/Ashrafweb'>
                        <SiGithub className="githublogo" />
                    </Link>
                    <Link passHref={true} href='https://www.linkedin.com/in/mdashraf-uddin'>
                        <SiLinkedin className="linkedinlogo" /></Link>
                    <Link passHref={true} href='https://www.fiverr.com/s/R7x80BV'>
                        <SiFiverr className="fiverrlogo" />
                    </Link>
                </div>

            </div>

        </>
    )
}

export default HeroSection
