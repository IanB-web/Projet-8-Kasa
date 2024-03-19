import React from 'react';
import "./banner.scss";

const Banner = ({src="", title=""}) => {
    return (
        <div className='banner'>
            <img src={src} alt="Bannière Kasa" />
            <h1>{title}</h1>
        </div>
    );
};

export default Banner;