import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Project = (props) => {
    const { imgUrl, title, alt, description, githubUrl, url } = props.data
    return (
        <>
            <div className="project">
                <Image className='projectImg' src={imgUrl} alt={alt} />

                <Link passHref={true} href={url}>
                    <h6 className="project__title">{title}</h6>
                </Link>
                <div className="image__overlay">
                    <Link passHref={true} href={url}>
                        <button className="project__url__btn">Demo</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Project
