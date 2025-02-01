import React from 'react'
import Service from '../components/Service';
import { Data } from '../Data/serviceData';
function services() {
    return (
        <div className="services">
            <div className='service__header'>
                <h1>Services</h1>
            </div>
            <div className="service__wrapper">
                {Data.map((data, i) => {
                    return <Service key={i} title={data.title} type={data.type} />

                })}
            </div>
        </div>
    )
}

export default services
