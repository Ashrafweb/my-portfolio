/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/Layout'
import Image from 'next/image';
import { data } from '../Data/aboutData';

export default function About() {
    const { bio, name, img, email, country, age } = data
    return (
        <Layout>
            <div className="about__container">
                <h1 className="title__text">About me</h1>
                <div className="about__box">
                    <div className="image__container">
                        <Image src={img} width="90" height="90" className="profile__image" alt="profile-picture" />
                        <div className='personal__info'>
                            <h4>Age : {age} </h4>
                            <h4 style={{ padding: '10px' }}>From {country}</h4>
                        </div>
                    </div>
                    <div className="about__text__wrapper">
                        {bio}   </div>
                </div>
            </div>
        </Layout>
    )
}
