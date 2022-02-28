import Pic1 from '../../assets/8c294933-5a58-4f47-970d-e913e0b4c7b2.jpg'
import Pic2 from '../../assets/35afb0dc-0a6e-477a-b21c-f92fdc5da7ac.jpg'
import Pic3 from '../../assets/96c3b046-38b4-4577-9452-94de94a04b9f.jpg'
import Pic4 from '../../assets/1911a9d4-d800-43b1-af4e-d39b0f6e3a1e.jpg'
import Pic5 from '../../assets/d5fb0e55-dd96-4fd6-8c41-1b9019e9d31a.jpg'
import './experience.css'

function Experience() {
  return (
    <div className="experience">
      
    <section name="experience" id="experience">
        
        <div class="slide">
            <h1>Corousel</h1>

        </div>
        
        <div class="description">
            <div class="brief-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolorum molestiae ex cum, illum error impedit qui magnam officia exercitationem! Corrupti quaerat eum, inventore illum provident voluptatibus voluptate beatae aspernatur.</p>
            </div>
            

            <div class="amenities-heading">
                <h1>Amenities and Facilities</h1>
            </div>
           
            <div class="flex-container">
               
                <div class="amenities-facilities">
                    <div class="left img">
                        <img alt="pic" src={Pic1}></img>
                    </div>
                    <div class="right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint explicabo dicta non molestiae perspiciatis praesentium id ad ducimus eveniet distinctio laudantium perferendis, harum dolores maxime aliquid dolor fugiat est!</p>
                        <center><button>Learn more</button></center>
                    </div>
                </div>
                
                <div class="amenities-facilities">
                    <div class="left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur voluptates ipsum! Recusandae omnis eos vel ipsam, itaque, architecto consequuntur error autem, quas quisquam iusto quam in dignissimos atque officia.</p>
                        <center><button>Learn more</button></center>
                    </div>
                    <div class="right img">
                    <img alt="pic" src={Pic2}></img>
                    </div>
                </div>
                
                <div class="amenities-facilities">
                    <div class="left img">
                    <img alt="pic" src={Pic3}></img>
                    </div>
                    <div class="right">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste eius, esse iure cupiditate accusamus in? Necessitatibus quaerat expedita delectus tempore exercitationem, pariatur est obcaecati quam porro. Id vel nemo voluptatem!</p>
                        <center><button>Learn more</button></center>
                    </div>
                </div>
                
                <div class="amenities-facilities">
                    <div class="left">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ratione. Sunt, pariatur tenetur iste sint quae unde corporis, totam beatae, sit id repellendus est consequatur ea enim eum ex nemo?</p>
                        <center><button>Learn more</button></center>
                    </div>
                    <div class="right img">
                    <img alt="pic" src={Pic4}></img>
                    </div>
                </div>
                
                <div class="amenities-facilities">
                    <div class="left img">
                    <img alt="pic" src={Pic5}></img>
                    </div>
                    <div class="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sed nemo ipsam facilis veniam a blanditiis illum quod praesentium error similique neque distinctio culpa sint aperiam sequi, mollitia minima cum!</p>
                        <center><button>Learn more</button></center>
                    </div>
                </div>

            </div>

        </div>

        
        <div class="kids-activities">
            <div class="kids-heading">
                <h1>Kids Activities</h1>
            </div>
        </div>
        <div class="image-with-description">
            <p>(images with description)</p>
        </div>

    </section>

    </div>
  );
}

export default Experience;
