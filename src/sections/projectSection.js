import React, { useState, useEffect } from 'react'
import Project from '../components/Project';
import { projectData } from '../Data/projectData';
function MyProjects() {
    const [menu, setMenu] = useState('all');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        handleMenu('all')
    }, [])
    const handleMenu = (type) => {
        setMenu(type);
        if (type === 'all') {
            setProjects(projectData);
        } else {
            const data = projectData.filter(project => project.lang === type);
            setProjects(data)
        }
    }
    return (
        <>
            <div className="project__container">
                {/* <h1 className="project__headline">
                    Projects
                </h1> */}
                <div className="project__box">
                    {/* <div className="project__menu">
                        <ul className="menu__list">
                            <li className="menu__item" onClick={() => handleMenu('all')}> <button className={menu === 'all' ? 'pro__btn active' : "pro__btn"}>All</button> </li>
                            <li className="menu__item" onClick={() => handleMenu('php')}> <button className={menu === 'php' ? 'pro__btn active' : "pro__btn"}>PHP</button> </li>
                            <li className="menu__item" onClick={() => handleMenu('laravel')}> <button className={menu === 'laravel' ? 'pro__btn active' : "pro__btn"}>Laravel</button> </li>
                            <li className="menu__item" onClick={() => handleMenu('react')}><button className={menu === 'react' ? 'pro__btn active' : "pro__btn"}>React.js </button> </li>
                            <li className='menu__item' onClick={() => handleMenu('next')}> <button className={menu === 'next' ? 'pro__btn active' : "pro__btn"}>Next.js</button> </li>
                            <li className="menu__item" onClick={() => handleMenu('htmlCss')}> <button className={menu === 'htmlCss' ? 'pro__btn active' : "pro__btn"}>HTML CSS</button> </li>
                        </ul>
                    </div> */}
                    <div className="projects">
                        {projects.map(project => <Project key={project.id} data={project} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProjects
