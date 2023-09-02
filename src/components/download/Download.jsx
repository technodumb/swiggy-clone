import React from 'react'
import './Download.scss';
import downloadImage1 from './images/play_ip0jfp.webp';
import downloadImage2 from './images/iOS_ajgrty.webp';
import appImage1 from './images/pixel_wbdy4n.webp';
import appImage2 from './images/iPhone_wgconp_j0d1fn.webp';

const Download = () => {
    const downloadImages = [downloadImage1, downloadImage2];
    const downloadButtons = downloadImages.map((image, index) => {
        return (
            <div className="downloadButtonDiv">
                <a href="#" className="downloadButton">
                    <img className='downloadButtonImg' src={image} alt="download"/>
                </a>
            </div>
        );
    });
    return (
    // <div>Download</div>
        <div className="download">
            <div className="leftpad"/>
            <div className="downloadContent">
                <div className="downloadLeft">
                    <div className="downloadText">
                        <h1>Restaurants in your pocket</h1>
                        <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                    </div>
                    <div className="downloadButtons">
                        {downloadButtons}
                    </div>

                </div>
                <div className="downloadRight">
                    <div className="androidApp">
                        <img className='androidAppImg appImg' src={appImage1} alt="android app"/>
                    </div>
                    <div className="iosApp">
                        <img className='iosAppImg appImg' src={appImage2} alt="ios app"/>
                    </div>
                </div>
            </div>
            <div className="rightpad"/>
        </div>
    )
}

export default Download