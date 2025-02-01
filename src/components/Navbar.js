import React, { useState } from 'react';
import Link from 'next/link'
import { CgMenuGridO, CgClose } from 'react-icons/cg'
function Navbar() {
    const container = 'mobile__nav';
    const [open, setOpen] = useState(false);
    const [navClass, setnavClass] = useState('navbar__closed');

    const handlenav = () => {
        if (open) {
            setOpen(false);
            setnavClass('navbar__closed')
        } else {
            setOpen(true);
            setnavClass('navbar')
        }
    }
    return (
        <>

            <button className="nav__control" onClick={handlenav}>
                {open ? <CgClose /> : <CgMenuGridO />}
            </button>
            <div className={navClass}>
                <nav>
                    <ul className="nav__list">
                        <li className="nav__item" onClick={handlenav}>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li className="nav__item" onClick={handlenav}>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li className="nav__item" onClick={handlenav}>
                            <Link href='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li className="nav__item" onClick={handlenav}>
                            <Link href='/services'>
                                Services
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
