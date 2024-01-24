import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { fetchByAllFilm } from '../../store/slice/kinoSlice';
import Header from '../../components/Header/Header';
import Output from '../../components/Output/Output';

const Home: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchByAllFilm())
    }, [dispatch])
    return (
        <>
            <Header />
            <section>
                <Output />
            </section>
        </>
    );
};

export default Home;