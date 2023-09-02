import React from 'react';
import './Features.scss';
// import images
import featuresImage1 from './images/4x_-_No_min_order_x0bxuf.webp';
import featuresImage2 from './images/4x_Live_order_zzotwy.webp';
import featuresImage3 from './images/4x_-_Super_fast_delivery_awv7sn.webp';

// import the above images in a single line


const Features = () => {
    const features = [
        {
            image: featuresImage1,
            title: 'No Minimum Order',
            description: 'Order in for yourself or for the group, with no restrictions on order value',
        },
        {
            image: featuresImage2,
            title: 'Live Order Tracking',
            description: "Know where your order is at all times, from the restaurant to your doorstep",
        },
        {
            image: featuresImage3,
            title: 'Lightning-Fast Delivery',
            description: 'Experience Swiggy\'s superfast delivery for food delivered fresh & on time',
        },
    ];
    const featuresList = features.map((feature) => {
        return (
            <div className="feature">
                <div className="featureImgDiv">
                    <img className="featureImg" src={feature.image} alt={feature.title}/>
                </div>
                <div className="featureText">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            </div>
        );
    });
        
  return (
    <div className="featuresbg">
        {/* <div className="leftpad"/> */}
        <div className="features">
            {featuresList}
        </div>
        {/* <div className="rightpad"/> */}
    </div>
  )
}

export default Features