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
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
};
export default Banner;