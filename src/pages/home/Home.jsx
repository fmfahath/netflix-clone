import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'


const Home = () => {
    return (
        <div className='home'>
            {/* navbr--------------- */}
            <Navbar />

            {/* hero section-------- */}
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>
                        In a land lost to time, where gods once walked and kings ruled with iron and fire, a hero rises from the shadows of myth. As ancient powers awaken and destiny calls, the fate of an empire hangs by a thread. Witness the dawn of legends and the fall of forgotten glory.
                    </p>
                    <div className="hero-btns">
                        <button className="btn"><img src={play_icon} alt="" />Play</button>
                        <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <div className="hero-title-card">
                        <TitleCard />
                    </div>
                </div>
            </div>

            {/* more cards--------- */}
            <div className="more-cards">
                <TitleCard category={"top_rated"} title={"Blockbuster Movies"} />
                <TitleCard category={"popular"} title={"Only on Netflix"} />
                <TitleCard category={"upcoming"} title={"Upcoming"} />
                <TitleCard category={"now_playing"} title={"Top Picks for You"} />
            </div>

            {/* footer------------ */}
            <Footer />

        </div>
    )
}

export default Home 