import React from 'react';
import img from "../../images/Web-Technology.png"
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='header-banner'>
                <img className="img-fluid" src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;