import React from 'react'
import Card from './Card/Card'
import data from '../../data/data'
import './Main.scss';

const Main = () => {
  return (
    <div className='cards-container'>
      <Card card={data}/>
    </div>
  )
}

export default Main