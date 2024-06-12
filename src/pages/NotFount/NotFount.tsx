import React, { FC, useEffect } from 'react';
import './NotFount.css'
import { useNavigate } from 'react-router-dom';
const NotFount: FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 4000)
  }, [navigate])
  return (
    <div className='not_found'>
      <div className='box'>
        <h2 className='not_found_in'>404</h2>
        <p>К сожалению, запрашиваемая страница не найдена.
          Возможно, она была перемещена, удалена или временно недоступна.
        </p>
      </div>
    </div>
  );
};

export default NotFount;