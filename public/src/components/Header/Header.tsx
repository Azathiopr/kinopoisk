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
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='Название фильма' />
                <button>Поиск</button>
            </form>
            <form onSubmit={hendleFilter}>
                <input value={year} onChange={e => setYear(e.target.value)} type="number" placeholder='year' />
                <select onChange={e => setMonth(e.target.value)}>
                    <option value=" ">Month </option>
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
                <button>Поиск</button>
            </form>
        </header>
    );
};

export default Header;