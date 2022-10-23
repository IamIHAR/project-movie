import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Favourite() {
    const dispatch = useDispatch()
    const  { favourite } = useSelector(state => state.movies)
  return (
    <div>{favourite.map((i) => {
        return <div key={i.id}>{i.original_title}</div>;
    })}</div>
  )
}

export default Favourite