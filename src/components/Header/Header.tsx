import React, { FC, FormEventHandler, useState } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { fetchByFilter, fetchBySearch } from '../../store/slice/kinoSlice';

const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const hendleSearch: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value.trim().length) {
            dispatch(fetchBySearch(value))
        }
        setValue('')
    }

    const hendleFilter: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(fetchByFilter({ year, month }))
        setValue('')
    }


    return (
        <header>
            <form onSubmit={hendleSearch}>
                <input className='inp' value={value} onChange={(e) => setValue(e.target.value)} type="search" placeholder='Название фильма' />
                <button className='ui-btn'><span>Поиск фильмов</span></button>
            </form>
            <form className='form' onSubmit={hendleFilter}>
                <input className='year' value={year} onChange={e => setYear(e.target.value)} type="number" placeholder='year' />
                <select className='count' onChange={e => setMonth(e.target.value)}>
                    <option value="January ">January </option>
                    <option value="February ">February </option>
                    <option value="March ">March </option>
                    <option value="April ">April </option>
                    <option value="May ">May </option>
                    <option value="June ">June </option>
                    <option value="July ">July </option>
                    <option value="August ">August </option>
                    <option value="September ">September </option>
                    <option value="October ">October </option>
                    <option value="November ">November </option>
                    <option value="December ">December </option>
                </select>
                <button className='ui-btn'><span>Поиск</span></button>
            </form>
        </header>
    );
};

export default Header;