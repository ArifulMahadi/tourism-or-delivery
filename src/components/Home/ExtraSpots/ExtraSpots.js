import React from 'react';
import image from '../../images/bangladesh-places-12-1024x683.jpg'
import image1 from '../../images/photo-1556776265-7a5c1e1a6b66.jfif'
import image2 from '../../images/national-memorial-jatio-sriti-soudho.jpg'
import image3 from '../../images/Mahasthangarh.png'
import image4 from '../../images/image007.jpg'
import image5 from '../../images/image003.jpg'
import image6 from '../../images/DSC1190.jpg'
import image7 from '../../images/dsc qwe.jpg'

const ExtraSpots = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img className="img-fluid mb-3" src={image} />
                    <img className="img-fluid" src={image2} />
                </div>
                <div className="col-4">
                    <img className="img-fluid mb-3" src={image1} />
                    <img className="img-fluid mb-3" src={image3} />
                    <img className="img-fluid" src={image4} />
                </div>
                    
                <div className="col-4">
                    <img className="img-fluid mb-3" src={image5} />
                    <img className="img-fluid mb-3" src={image6} />
                    <img className="img-fluid" src={image7} />
                    </div>
                
            </div>
        </div>
    );
};

export default ExtraSpots;