import React from 'react'

const PopularCities = () => {
    const cities = ['Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune', ' & more.'];
    const popularCities = (
        <ul className='cityLinkList'>
        {
            cities.map((city, index) => {
                return (
                    <button href="#" key={index} className={(index%2?'light':'dark') + ' cityLink'}>{city}</button>
                );
            })
        }
        </ul>
    );
    return (
        <div className="popularCities">
            <h4>POPULAR CITIES IN INDIA</h4>
            <div className="cities">
                {popularCities}
            </div>
        </div>
    );
}

export default PopularCities