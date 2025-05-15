import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCard = ({ title, category }) => {

    const [apiiData, setApiData] = useState([])
    const cardsRef = useRef()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
        }
    };

    //handle scroll on mouse wheel
    const handleWheel = (event) => {
        event.preventDefault()
        cardsRef.current.scrollLeft += event.deltaY
    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1}`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));

        //  scroll movie card   
        cardsRef.current.addEventListener('wheel', handleWheel)

    }, [])


    return (
        <div className='title-cards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiiData.map((data, index) => {
                    return <div className='card' key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path} alt="" />
                        <p>{data.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCard 