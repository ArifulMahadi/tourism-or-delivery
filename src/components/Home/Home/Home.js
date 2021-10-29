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
            <Header></Header>
            <Banner></Banner>
            <Spots></Spots>
            <ExtraSpots></ExtraSpots>
            <SubFooter></SubFooter>
            <Footer></Footer>
        </div>
    );
};

export default Home;