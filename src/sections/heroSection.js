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
                                <button className="header__contact__btn">Email me</button>
                            </Link>
                            <Link href='/about' passHref={true}>
                                <button className="header__contact__btn">About</button>
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
                    <SiFacebook className="fblogo" />
                    <SiGithub className="githublogo" />
                    <SiDribbble className="dribblelogo" />
                    <SiLinkedin className="linkedinlogo" />
                    <SiFiverr className="fiverrlogo" />
                </div>

            </div>

        </>
    )
}

export default HeroSection
