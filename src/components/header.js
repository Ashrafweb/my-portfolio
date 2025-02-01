import Link from 'next/link'
import Navbar from './Navbar'
function Header() {
    return (
        <>
            <div className="header__container">
                <Link href='/' passHref={true} >
                    <div className="header__left">
                        <h3>Ashraf Uddin</h3>
                        <h4>Full Stack Developer</h4>
                    </div>
                </Link>

                <Navbar />
                <div className="header__right">
                    <Link href="/contact" passHref={true}>
                        <button className="header__contact__btn">Contact Me</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
