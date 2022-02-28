import React from 'react'
import styles from '../Home/Homepage.module.css'
import image1 from '../../assets/golfclubb.jpg'
import image2 from '../../assets/steven-shircliff-N21z4eG8aKg-unsplash.jpg'
import image3 from '../../assets/morningolfing.jpg'
import image5 from '../../assets/WhatsApp Image 2022-02-22 at 2.07.43 PM.jpeg'
import image6  from '../../assets/WhatsApp Image 2022-02-22 at 2.07.45 PM.jpeg'
import image9  from '../../assets/WhatsApp Image 2022-02-22 at 2.07.48 PM.jpeg'
import image10 from '../../assets/golfonly.jpg'
import image11 from '../../assets/Screenshot 2022-02-25 124948.png'

function Homepage() {
    
  return <div>
      <div className={styles.main}>
        <div className={styles.carousel}>
            <div className={styles.slidescont}>
                <div  className={styles.slideimg}>
                    <img src={image1} alt=''></img>
                    <a href="/" className={styles.linkleft}>Visitors</a>
                    <a href="/" className={styles.linkright}>Members</a>
                    <h3>Welcome to <br></br> Nyeri Golf Club</h3>
                </div>
                <div className={styles.slideimg}>
                    <img src={image2} alt=''></img>
                    <h3>Welcome to <br></br> Nyeri Golf Club</h3>
                </div>
                <div className={styles.slideimg}>
                    <img src={image3} alt=''></img>
                    <h3>Welcome to <br></br> Nyeri Golf Club</h3>
                </div>
                <a className={styles.prev} href='/' onClick="plusSlides(-1)">{"<"}</a>
                <a className={styles.next} href='/' onClick="plusSlides(1)">{">"}</a>
            </div>
            
        </div>
        <div className={styles.description}>
            <section className={styles.descrip}>
                <p>Enjoy a round of golf on this<br></br>difficult mountainous course</p>
                <a href="/" className={styles.linkd}>Learn more</a>
            </section>
        </div>
        <div className={styles.text1}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique sed lacus ac egestas.
                 Nulla ullamcorper commodo lectus, eu tincidunt neque feugiat sit amet. 
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                 Cras et egestas elit. Nam luctus purus in orci consequat, ut interdum augue scelerisque.</p>
        </div>
        <div className={styles.carousel2}>

                <div className={styles.medslidercont}>
                    <div className={styles.slideimg2}>
                        <img src={image1} alt=''></img>
                        <h3 className={styles.hh3}>Wednesday casinos <br></br> Club night Friday's</h3>
                        <a className={styles.link3} href="/">Read more</a>
                    </div>
                    <div className={styles.slideimg2}>
                        <img src={image10} alt=''></img>
                    </div>
                    <div className={styles.slideimg2}>
                        
                        <img src={image3} alt=''></img>
                    </div>
                    <a className={styles.medprev} href='/' onClick="plusSlides(-1)">{"<"}</a>
                    <a className={styles.mednext} href='/' onClick="plusSlides(1)">{">"}</a>
                </div>
                <div className={styles.medthumbnail}>
                    <img src={image3} alt=''></img>
                    <h3 className={styles.hh3}>Notices/Latest news</h3>
                    <a className={styles.link3} href="/">Read more</a>
                </div>
        </div>
        <div className={styles.activities}>
            <div className={styles.smallthumbnail}>
                <img src={image5} alt=''></img>
                <p className={styles.category}>Golfing</p>
                <p className={styles.ps}>Exploring our golfing experience</p>
            </div>
            <div className={styles.smallthumbnail}>
                <img src={image9} alt=''></img>
                <p className={styles.category}>Amenities</p>
                <p className={styles.ps}>Check out our activities and excursions</p>
            </div>
            <div className={styles.smallthumbnail}>
                <img src={image6} alt=''></img>
                <p className={styles.category}>Events</p>
                <p className={styles.ps}>Book our grounds for events/weddings</p>
            </div>
        </div>
        <div className={styles.googlemap}>
            <img src={image11} alt=''></img>
        </div>
    </div>
  </div>
    
}

export default Homepage