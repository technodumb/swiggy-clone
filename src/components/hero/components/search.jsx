import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className="heroSearch">
        <div className="heroSearchInputDiv">
            <input className='heroSearchInput' type="text" placeholder='Enter your delivery location'/>
            <button className='locateMeButton'>
            {/* <FontAwesomeIcon icon={thin("location-crosshairs")} /> */}
            {/* <FontAwesomeIcon icon="fa-thin fa-location-crosshairs" /> */}
                <FontAwesomeIcon className='locationIcon' icon={faLocationCrosshairs} />
                <p>Locate Me</p>
            </button>
        </div>
        <button className='btn findFoodButton'>FIND FOOD</button>
    </div>
  )
}

export default Search