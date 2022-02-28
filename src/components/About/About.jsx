import img1 from "../../assets/Images/img1.jpeg";
import img2 from "../../assets/Images/img2.jpeg";
import img3 from "../../assets/Images/img3.jpeg";
import img4 from "../../assets/Images/img4.jpeg";
import './about.css'

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

const carrouselScript = ()=>{
const carrousel_images = document.querySelectorAll(".carrousel-image");
const carrousel_left = document.querySelector("#carrousel-left");
const carrousel_right = document.querySelector("#carrousel-right");
var images_array = Array.from(carrousel_images);

var visible_img_index = 0;
var total_images_index = images_array.length - 1;
images_array[0].style.display = "block";
const slideRight = ()=>{
	if(visible_img_index < total_images_index){
		images_array[visible_img_index].style.display = "none";
		++visible_img_index;
		images_array[visible_img_index].style.display = "block";
	}
	else{
		images_array[visible_img_index].style.display = "none";
		visible_img_index = 0;
		images_array[visible_img_index].style.display = "block";
	}
}
const slideLeft = ()=>{
	if(visible_img_index === 0){
		images_array[visible_img_index].style.display = "none";
		visible_img_index = total_images_index;
		images_array[visible_img_index].style.display = "block";
	}
	else{
		images_array[visible_img_index].style.display = "none";
		--visible_img_index;
		images_array[visible_img_index].style.display = "block";
	}
}
carrousel_right.addEventListener('click',slideRight);
carrousel_left.addEventListener('click', slideLeft);
setInterval(slideRight,2000);
}

const About = () => {
    return (
        <div className="app__about">
            <section onLoad={() => {carrouselScript()}}>
                <div className="carrousel">
                    <div className="carrousel-images">
                        <img src={img1} alt="golf club" className="carrousel-image"></img>
                        <img src={img2} alt="golf club" className="carrousel-image"></img>
                        <img src={img3} alt="golf club" className="carrousel-image"></img>
                    </div>
                    <span  id = "carrousel-left"><MdOutlineArrowBackIos /></span>
                    <span id="carrousel-right"><MdOutlineArrowForwardIos /></span>
                    {/* <h3 id="carrousel-left"> left </h3>
			        <h3 id="carrousel-right"> right </h3> */}
                </div>
            </section>

            <section>
                <div className="about-us-section">
                    <p>The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.
                        <br></br>
                        The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.
                    </p>
                    <img src={img4} alt="golf club"></img>
                </div>
            </section>

            <section>
                <div className="our-history">
                    <h2>Our history</h2>
                    <p>The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.
                        <br></br>
                        The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.</p>
                </div>
            </section>

            <section>
                <div class="strategic-plan">
                    <h2>5 year strategic plan</h2>
                    <p>The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.
                        <br></br>
                        The Nyeri Club has the second oldest golf course in Kenya. The Club was started by Reggie McClure and G.
                        Sandbach Baker in 1910. The first nine-holes were laid out in the same year. The difficult mountainous
                        course offers exquisite scenery
                        (Mt. Kenya can be seen from the 6th tee, which is also known as the Kerio Valley of Nyeri Golf Club).
                        Well protected greens, deep roughs and very tall evergreens
                        plus a stream and a valley all contribute in making it a tough course.</p>
                    <a href="#">Document link here</a>
                </div>
            </section>
        </div>
    );
}
export default About;