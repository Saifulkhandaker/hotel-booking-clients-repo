import React from 'react';
import Banner from '../../Components/Banner';
import Featured from '../../Components/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 mx-auto'>
                <Featured></Featured>
            </div>
        </div>
    );
};

export default Home;