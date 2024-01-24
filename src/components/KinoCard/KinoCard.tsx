import React, { FC } from 'react';
import { IKino } from '../../store/modules';
import { Link } from 'react-router-dom';

const KinoCard: FC<IKino> = ({ kinopoiskId, nameOriginal, nameRu, posterUrl, filmId }) => {
    return (
        <Link to={`/datail/${kinopoiskId || filmId}`} className='card'>
            <img className='image' src={posterUrl} alt={nameRu ? nameRu : nameOriginal} />
            <h2>{nameRu ? nameRu : nameOriginal}</h2>
        </Link>
    );
};

export default KinoCard;