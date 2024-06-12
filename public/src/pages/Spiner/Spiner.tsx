import React, { FC } from 'react';
import './Spiner.scss'

const Spiner: FC = () => {
    return (
        <div className='spiner'>
            <div className="page">
                <div className="container">
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="ring"></div>
                    <div className="h3">loading</div>
                </div>
            </div>
        </div>
    );
};

export default Spiner;