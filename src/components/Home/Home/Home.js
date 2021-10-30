import React from 'react';
import Banner from '../Banner/Banner';
import ExtraSpots from '../ExtraSpots/ExtraSpots';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Spots from '../Spots/Spots';
import SubFooter from '../SubFooter/SubFooter';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Spots></Spots>
            <SubFooter></SubFooter>
            <ExtraSpots></ExtraSpots>
            <Footer></Footer>
        </div>
    );
};

export default Home;