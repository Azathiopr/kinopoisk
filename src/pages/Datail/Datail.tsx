import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchByDatail } from '../../store/slice/datailSlice';
import Spiner from '../Spiner/Spiner';

const Datail: FC = () => {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) {
            dispatch(fetchByDatail(id))
        }
    }, [id, dispatch])
    const { detail, error, loading } = useAppSelector(state => state.Datail)
    // console.log(detail);
    if (loading) {
        return <Spiner />
    }

    return (
        <div className='cover_name'>
            <div className="cover">
                {
                    error ?
                        <span> {error} </span> :
                        <>
                            <img className='photo' src={detail?.posterUrl} alt={detail?.nameOriginal} />
                            <h2 className='films_name'>Названике: {detail?.nameRu ? detail.nameRu : detail?.nameOriginal}</h2>
                            <p className='films_name'>Рейтинг: {detail?.ratingKinopoisk}</p>
                            <p className='films_name'>Год выпуска: {detail?.year}</p>
                            <ul>
                                {
                                    detail?.countries?.map((el, i) => (
                                        <li key={i}>{el.country}</li>
                                    ))
                                }
                            </ul>
                            <ol className='ol'>
                                {
                                    detail?.genres?.map((el, i) => (
                                        <li key={i} >{el?.genre}</li>
                                    ))
                                }
                            </ol>
                            <p className='description'>Описание:{detail?.description ? detail?.description : 'Описании нет'} </p>
                        </>
                }
            </div>
        </div>
    );
};

export default Datail;