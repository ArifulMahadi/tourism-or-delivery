import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../images/photo-1556776265-7a5c1e1a6b66.jfif';
import img1 from '../../images/sajek-valley-1-1.jpg';
import img2 from '../../images/kaptai-lake-1533379215802.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
 <Carousel style={{width:"100%",height:"60%"}}>
   <Carousel.Item>
       <img style={{width:"100%"}}
          className="d-block "
          src={img}
           alt="First slide"
       />
    <Carousel.Caption>
        <h3>cox's bazar</h3>
        <p>International picnic spot in bangladesh.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Shajek valley</h3>
      <p>one of the most popular place in bangladesh </p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Kaptai river</h3>
      <p>this is the kaptai river in bangladesh.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
};
export default Banner;