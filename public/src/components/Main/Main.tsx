import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Datail from '../../pages/Datail/Datail';

const Main: FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/datail/:id' element={<Datail />} />
            </Routes>
        </div>
    );
};

export default Main;