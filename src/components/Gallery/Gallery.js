import React from 'react'
import './Gallery.css'
import golf1 from '../../assets/golf/golf-one.jpg'
import golf2 from '../../assets/golf/golf-two.jpg'
import golf3 from '../../assets/golf/golf-three.jpg'
import golf4 from '../../assets/golf/golf-four.jpg'
import golf5 from '../../assets/golf/golf-five.jpg'
import golf6 from '../../assets/golf/golf-six.jpg'
import golf7 from '../../assets/golf/golf-seven.jpg'
import golf8 from '../../assets/golf/golf-eight.jpg'
import golf9 from '../../assets/golf/golf-nine.jpg'
import golf10 from '../../assets/golf/golf-ten.jpg'
import gym1 from '../../assets/gym/gym-one.png'
import gym2 from '../../assets/gym/gym-two.jpg'
import gym3 from '../../assets/gym/gym-three.jpg'
import gym4 from '../../assets/gym/gym-four.jpg'
import gym6 from '../../assets/gym/gym-six.jpg'
import rest1 from '../../assets/restaurant/food-one.jpg'
import rest2 from '../../assets/restaurant/food-two.jpg'
import rest3 from '../../assets/restaurant/food-three.jpg'
import rest4 from '../../assets/restaurant/food-four.jpg'
import rest5 from '../../assets/restaurant/food-five.jpg'

function Gallery() {
  return (
    <div>
         <div className="gallery">
        <div className="image-gallery">
            <div className="image-title">
                <h1>Gallery</h1>
            </div>
            <div className="image-subtitle">
                <h3>Golf Course Images</h3>
            </div>
            <div className="golf-course"> 
                <div className="image"><span><img src={golf1} alt=""/></span></div>
                <div className="image"><span><img src={golf2} alt=""/></span></div>
                <div className="image"><span><img src={golf3} alt=""/></span></div>
                <div className="image"><span><img src={golf4} alt=""/></span></div>
                <div className="image"><span><img src={golf5} alt=""/></span></div>
                <div className="image"><span><img src={golf6} alt=""/></span></div>
                <div className="image"><span><img src={golf7} alt=""/></span></div>
                <div className="image"><span><img src={golf8} alt=""/></span></div>
                <div className="image"><span><img src={golf9} alt=""/></span></div>
                <div className="image"><span><img src={golf10} alt=""/></span></div>
            </div>
            <div className="gym-title">
                <h2>Gym gallery</h2>
            </div>
            <div className="gym">               
            
            <div className="image"><span><img src={gym2} alt=""/></span></div>
            <div className="image"><span><img src={gym1} alt=""/></span></div>
            <div className="image"><span><img src={gym3} alt=""/></span></div>
            <div className="image"><span><img src={gym4} alt=""/></span></div>
            <div className="image"><span><img src={gym6} alt=""/></span></div>
            </div>
            <div className="restaurant-title">
                <h2>Bar and restaurant gallery</h2>
            </div>
            <div className="restaurant">
                <div className="image"><span><img src={rest1} alt=""/></span></div>                
                <div className="image"><span><img src={rest2} alt=""/></span></div>
                <div className="image"><span><img src={rest3} alt=""/></span></div>
                <div className="image"><span><img src={rest4} alt=""/></span></div>   
                <div className="image"><span><img src={rest5} alt=""/></span></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Gallery