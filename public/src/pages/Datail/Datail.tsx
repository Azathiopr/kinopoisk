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
    console.log(detail);
    if (loading) {
        return <Spiner />
    }

    return (
        <div>
            {
                error ?
                    <span> {error} </span> :
                    <>
                        <img src={detail?.posterUrl} alt={detail?.nameOriginal} />
                        <h2>Названике: {detail?.nameRu ? detail.nameRu : detail?.nameOriginal}</h2>
                        <p>Рейтинг: {detail?.ratingKinopoisk}</p>
                        <p>Год выпуска: {detail?.year}</p>
                        <ul>
                            {
                                detail?.countries?.map((el, i) => (
                                    <li key={i}>{el.country}</li>
                                ))
                            }
                        </ul>
                        <ol>
                            {
                                detail?.genres?.map((el, i) => (
                                    <li key={i} >{el?.genre}</li>
                                ))
                            }
                        </ol>
                        <p>{detail?.description} </p>
                    </>
            }
        </div>
    );
};

export default Datail;