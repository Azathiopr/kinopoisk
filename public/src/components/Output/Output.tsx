import React, { FC } from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import KinoCard from '../KinoCard/KinoCard';
import Spiner from '../../pages/Spiner/Spiner';

const Output: FC = () => {
    const { error, kino, loading } = useAppSelector(state => state.kino)
    if (loading) {
        return <Spiner />
    }

    return (
        <div className='output'>
            {
                error ?
                    <span> {error} </span> :
                    kino.length > 0 &&
                    kino.map(el => <KinoCard key={el.kinopoiskId || el.filmId} {...el} />)
            }
        </div>
    );
};

export default Output;