import React from 'react'
import {HeroHeader, RotatingText, Search, PopularCities} from './components/components.jsx';

const Hero = ({toggleSidebar}) => {
    return (
            <div className='hero'>
                <div className="heroLeft"/>
                <div className="hero-content">
                <HeroHeader toggleSidebar={toggleSidebar}/>
                <RotatingText/>
                <Search/>
                <PopularCities/>
            </div>

            <div className="heroImageDiv"/>
            </div>
    )
}

export default Hero